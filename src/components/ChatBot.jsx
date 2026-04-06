import React, { useState, useEffect, useRef, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../css/chatbot.css";

export default function ChatBot() {
  const { theme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("chat-history");
    return saved ? JSON.parse(saved) : [
      {
        role: "bot",
        content: "Welcome! I'm Salman's AI assistant. I'm here to help you explore his work in Game Development and XR. What would you like to know today?",
      },
    ];
  });
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    localStorage.setItem("chat-history", JSON.stringify(messages));
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const clearChat = () => {
    if (window.confirm("Are you sure you want to clear the chat history?")) {
      const initialMessage = [
        {
          role: "bot",
          content: "Fresh start! I've cleared our previous chat. How can I help you explore Salman's portfolio today?",
        },
      ];
      setMessages(initialMessage);
      localStorage.removeItem("chat-history");
    }
  };

  // Handle sending messages
  const handleSend = async (e, directText = null) => {
    if (e) e.preventDefault();
    const finalInput = directText || input;
    if (!finalInput.trim() || isLoading) return;

    const userMessage = { role: "user", content: finalInput };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    if (!directText) setInput("");
    setIsLoading(true);

    try {
      // Gemini history MUST start with a 'user' message. 
      // Our first message is usually a 'bot' greeting, so we filter it out for the API.
      const chatHistory = updatedMessages
        .slice(0, -1) // Exclude the message we're just sending
        .filter((msg, index) => !(index === 0 && msg.role === "bot")) // Skip initial bot greeting
        .map((msg) => ({
          role: msg.role === "bot" ? "model" : "user",
          parts: [{ text: msg.content }],
        }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: finalInput, history: chatHistory }),
      });

      const data = await response.json();

      if (data.text) {
        setMessages((prev) => [...prev, { role: "bot", content: data.text }]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "bot", content: data.error || "Sorry, I can't process that right now." },
        ]);
      }
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages((prev) => [...prev, { role: "bot", content: "Connection error." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestion = (text) => {
    handleSend(null, text);
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <img src="/images/salman.png" alt="Salman AI" />
            <div className="header-info">
              <h3>Salman's Assistant</h3>
              <small>● Online</small>
            </div>
            <button className="clear-btn" onClick={clearChat} title="Clear Chat">
              <i className="bx bx-trash"></i>
            </button>
            <button className="close-btn" onClick={() => setIsOpen(false)} title="Close">
              <i className="bx bx-x"></i>
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.role}`}>
                {msg.content}
              </div>
            ))}
            {isLoading && (
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {messages.length === 1 && !isLoading && (
            <div className="chat-suggestions">
              <button onClick={() => handleSuggestion("🎮 Tell me about your games")}>🎮 Your Games</button>
              <button onClick={() => handleSuggestion("🛠️ What are your core skills?")}>🛠️ Core Skills</button>
              <button onClick={() => handleSuggestion("📄 How can I hire you?")}>📄 Hiring Info</button>
            </div>
          )}

          <form className="chat-input-area" onSubmit={(e) => handleSend(e)}>
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
            />
            <button type="submit" className="send-btn" disabled={isLoading || !input.trim()}>
              <i className="bx bxs-send"></i>
            </button>
          </form>
        </div>
      )}

      <button className="chat-toggle" onClick={() => setIsOpen(!isOpen)} title="Chat with Salman's AI">
        <i className={`bx ${isOpen ? "bx-x" : "bx-message-square-dots"}`}></i>
      </button>
    </div>
  );
}
