import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || "*",
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(express.json());

// MySQL Connection Pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "portfolio",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  ssl: process.env.DB_SSL === "true" ? { rejectUnauthorized: false } : null,
});

// Initialize Database Table
const initDB = async () => {
  try {
    const connection = await pool.getConnection();
    await connection.query(`
      CREATE TABLE IF NOT EXISTS messages (
        id INT AUTO_INCREMENT PRIMARY KEY,
        fullName VARCHAR(255) NOT NULL,
        emailAddress VARCHAR(255) NOT NULL,
        contactNumber VARCHAR(50),
        emailSubject VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    connection.release();
    console.log("MySQL Table 'messages' is ready.");
  } catch (err) {
    console.error("MySQL initialization error:", err);
  }
};

initDB();

// Routes
app.post("/contact", async (req, res) => {
  const { fullName, emailAddress, contactNumber, emailSubject, message } = req.body;

  if (!fullName || !emailAddress || !emailSubject || !message) {
    return res.status(400).json({ error: "Please fill in all required fields." });
  }

  try {
    // 1. Save to MySQL
    const [result] = await pool.execute(
      "INSERT INTO messages (fullName, emailAddress, contactNumber, emailSubject, message) VALUES (?, ?, ?, ?, ?)",
      [fullName, emailAddress, contactNumber, contactNumber, emailSubject, message]
    );
    console.log("Message saved to MySQL with ID:", result.insertId);

    // 2. Send Email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Use Google App Password
      },
    });

    const mailOptions = {
      from: emailAddress,
      to: process.env.RECEIVER_EMAIL || "sadqq.salman@gmail.com",
      subject: `New Portfolio Contact: ${emailSubject}`,
      text: `
        Name: ${fullName}
        Email: ${emailAddress}
        Phone: ${contactNumber || "N/A"}
        
        Message:
        ${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: "Message sent and stored successfully!" });
  } catch (error) {
    console.error("Error processing contact form:", error);
    res.status(500).json({ error: "Failed to process message. Please try again later." });
  }
});

// Admin Route to view messages
app.get("/messages", async (req, res) => {
  try {
    const [rows] = await pool.execute("SELECT * FROM messages ORDER BY createdAt DESC");
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app;
