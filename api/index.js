import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import mysql from "mysql2/promise";
import { GoogleGenerativeAI } from "@google/generative-ai";

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
    await connection.query(`
      CREATE TABLE IF NOT EXISTS chat_logs (
        id INT AUTO_INCREMENT PRIMARY KEY,
        userMessage TEXT NOT NULL,
        botResponse TEXT NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    connection.release();
    console.log("MySQL Table 'messages' and 'chat_logs' are ready.");
  } catch (err) {
    console.warn("Database connection failed (MySQL). Continuing without database logging.", err.message);
    // Do not re-throw, let the server continue
  }
};

// Routes
app.post("/api/contact", async (req, res) => {
  const { fullName, emailAddress, contactNumber, emailSubject, message } = req.body;

  if (!fullName || !emailAddress || !emailSubject || !message) {
    return res.status(400).json({ error: "Please fill in all required fields." });
  }

  try {
    // Ensure DB is initialized
    await initDB();

    // 1. Save to MySQL
    console.log("Attempting to save to MySQL...");
    const [result] = await pool.execute(
      "INSERT INTO messages (fullName, emailAddress, contactNumber, emailSubject, message) VALUES (?, ?, ?, ?, ?)",
      [fullName, emailAddress, contactNumber, emailSubject, message]
    );
    console.log("Message successfully saved to MySQL, ID:", result.insertId);

    // 2. Send Email
    console.log("Attempting to send email via Nodemailer...");
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: emailAddress,
      to: process.env.RECEIVER_EMAIL || "sadqq.salman@gmail.com",
      subject: `New Portfolio Contact: ${emailSubject}`,
      text: `Name: ${fullName}\nEmail: ${emailAddress}\nPhone: ${contactNumber || "N/A"}\n\nMessage:\n${message}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);

    res.status(200).json({ success: "Message sent and stored successfully!" });
  } catch (error) {
    console.error("CRITICAL ERROR during contact POST:", error.message);
    console.error(error.stack);
    res.status(500).json({ error: `Internal Server Error: ${error.message}` });
  }
});

// Admin Route to view messages
app.get("/api/messages", async (req, res) => {
  try {
    const [rows] = await pool.execute("SELECT * FROM messages ORDER BY createdAt DESC");
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

// AI Chat Route
app.post("/api/chat", async (req, res) => {
  const { message, history } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey || apiKey === "YOUR_GEMINI_API_KEY_HERE") {
    return res.status(500).json({ error: "Gemini API key is not configured. Please set it in your backend .env file." });
  }

  if (!message) {
    return res.status(400).json({ error: "Message is required." });
  }

  try {
    // 0. Ensure Database is initialized (Production fix)
    await initDB();

    const genAI = new GoogleGenerativeAI(apiKey, { apiVersion: "v1" });
    
    const safetySettings = [
      { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
      { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
      { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
      { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" },
    ];

    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      systemInstruction: `You are the personal AI assistant for Salman Sadiq's portfolio. 
      Your personality is professional, friendly, and enthusiastic about game development and XR technology.
      
      About Salman Sadiq:
      - Name: Salman Sadiq.
      - Current Role: Associate Software Engineer at Ilmversity by Da1Ilmverse (Oct 2025 - Present).
      - Past Experience: Games & VR Developer at UET Game Studio (Apr 2024 - Sept 2025).
      - Expertise: Unity (2D/3D), C#, AR/VR (Quest 2/3), XR Toolkit, MRTK, Vuforia, Photon (Multiplayer), Optimization.
      - Contact: sadqq.salman@gmail.com
      - Location: Pakistan.

      Key Projects to highlight:
      * Letter Cascade: A word puzzle game with real-time word validation and physics-based letter collisions.
      * Quiz The Global: An educational game for identifying country flags with Time Trial and Survival modes.
      * Horror Survival (VR): An immersive VR zombie shooter featuring cinematic sequences and particle effects.
      * ARPlace: An AR Simulation app to place and interact with furniture using AR Foundation.
      * Police Cop Simulator: An Android simulation with cinematic scenes and custom UI systems.
      * Waste Land Of Living Dead: A 3D multiplayer zombie survival shooter using Photon.
      * Yanch e Shilock: A PC action game with dynamic encounters and melee/magic combat.
      * Realtime ExpoHall VR: An Oculus Quest 3 project with real-time character lip-syncing.
      
      Guidelines:
      - Be concise but helpful.
      - If asked about contact info, provide his email or point to the contact section.
      - If asked about his resume, mention it's available for download on the home page.
      - If the user asks something completely irrelevant, politely bring them back to discussing Salman's work.
      - Do not mention that you are a language model; you are Salman's Assistant.`,
      safetySettings
    });

    const chat = model.startChat({
      history: history || [],
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    // 2. Log interaction to Database (Async)
    try {
      if (pool) {
        await pool.execute(
          "INSERT INTO chat_logs (userMessage, botResponse) VALUES (?, ?)",
          [message, text]
        );
      }
    } catch (dbErr) {
      console.warn("Failed to log chat to database:", dbErr.message);
    }

    res.status(200).json({ text });
  } catch (error) {
    console.error("AI Chat Error Details:", error);
    res.status(500).json({ error: `Internal AI Error: ${error.message || "Unknown error"}` });
  }
});

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await initDB(); // Initialize DB on start
  });
}

export default app;
