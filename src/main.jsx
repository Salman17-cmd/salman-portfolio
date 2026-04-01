import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

// GLOBAL CSS
import "./css/index.css";
import "./css/App.css";
import "./css/style.css";
import "./css/lightbox.min.css";
import "./css/vertical-timeline.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
