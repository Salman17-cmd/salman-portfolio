# 🌟 Salman Portfolio - Full Stack Project

A modern, professional full-stack portfolio website built to showcase work experience, projects, and enable direct communication through a custom backend integration.

---

## 🏛️ Project Architecture

This project is divided into three main components: a **React Frontend**, a **Node.js Backend**, and a **MySQL Database**.

### 1. 🎨 Frontend (Client Side)
The frontend is the visual interface of the portfolio, designed for high performance and smooth user experience.

*   **Technology Stack**:
    *   **React 19**: The core library for building the UI components.
    *   **Vite**: A lightning-fast build tool and development server.
    *   **React Router 7**: Manages navigation between pages.
    *   **ScrollReveal**: Used for smooth entry animations when scrolling.
    *   **Swiper**: Powers the interactive project carousels and sliders.
    *   **Vanilla CSS**: Custom styling for unique, premium aesthetics.
*   **Purpose**:
    *   Displays professional experience and project gallery.
    *   Provides a responsive mobile-first design.
    *   Handles the **Contact Form** UI and sends data to the Backend API.

---

### 2. ⚙️ Backend (Server Side)
The backend acts as the bridge between the frontend and the database, handling security and communication.

*   **Technology Stack**:
    *   **Node.js**: The JavaScript runtime environment.
    *   **Express 5**: A fast, unopinionated web framework for building APIs.
    *   **Nodemailer**: Handles sending automated emails when a user submits the contact form.
    *   **MySQL2**: The driver used to connect and communicate with the MySQL database.
    *   **CORS & Dotenv**: Manages security permissions and environment variables.
*   **Purpose**:
    *   **API Endpoint (`/api/contact`)**: Receives form data from the frontend.
    *   **Email Notification**: Sends a copy of the message directly to the owner's Gmail.
    *   **Database Management**: Automatically initializes the database tables and stores every message for permanent record keeping.

---

### 3. 🗄️ Database (Persistence Layer)
We use a **Relational Database Management System (RDBMS)** to ensure all user inquiries are stored securely and can be queried easily.

*   **Technology Stack**:
    *   **MySQL 8.0**: A robust, industry-standard SQL database.
    *   **MySQL Workbench**: The graphical tool used for managing and viewing data.
*   **How it Works**:
    *   **Storage**: Messages are stored in a table named `messages`.
    *   **Data Integrity**: Every record includes a unique `id`, `fullName`, `email`, `contactNumber`, `subject`, `message`, and a `timestamp`.
    *   **Local Setup**: To bypass system permissions, the database is initialized in a custom user-writable directory (`D:\mysql_data`).

---

## 🚀 Getting Started

### Prerequisites
-   **Node.js** installed.
-   **MySQL Server 8.0** installed.

### Installation
1.  Navigate to the root directory.
2.  Install all dependencies:
    ```bash
    npm install
    cd server && npm install
    ```

### Running the Project
1.  **Start MySQL Server**:
    ```powershell
    & "C:\Program Files\MySQL\MySQL Server 8.0\bin\mysqld.exe" --datadir="D:\mysql_data" --console
    ```
2.  **Start the Web Project**:
    ```bash
    npm run dev:all
    ```

### Viewing Data
-   **Browser API**: [http://localhost:5000/api/messages](http://localhost:5000/api/messages)
-   **Frontend**: [http://localhost:5173](http://localhost:5173)

---

## 🛠️ Developed By
**Salman**
*Associate Software Engineer at Ilmversity by Da1Ilmverse*
