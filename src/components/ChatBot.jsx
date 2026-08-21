import React, { useState, useEffect, useRef, useMemo } from "react";
import "../css/chatbot.css";

const GREETING = {
  role: "bot",
  content:
    "Assalam-o-alaikum! 👋 I'm **Sal**, Salman's assistant.\n\nAsk me anything about his VR work at **Ilmversity**, his multiplayer and WebRTC systems, or how to get in touch. English ya Roman Urdu — jo aap ko comfortable lage.",
};

const QUICK_REPLIES = [
  { label: "🕶️ VR Campus", text: "Tell me about the Da1Ilmverse VR campus" },
  { label: "🌐 Multiplayer", text: "How does the multiplayer meeting room and screen streaming work?" },
  { label: "🤖 AI avatars", text: "How do the AI teachers lip-sync to their speech?" },
  { label: "⚡ Optimization", text: "How does Salman keep 72/90 FPS on Quest 3?" },
  { label: "🛠️ Tech stack", text: "What is Salman's core tech stack?" },
  { label: "📄 Hire him", text: "How can I hire or contact Salman?" },
];

/* ── Tiny markdown renderer: **bold**, `code`, links, "-" bullets ── */
function renderInline(text, keyPrefix) {
  const nodes = [];
  const pattern = /(\*\*[^*]+\*\*|`[^`]+`|https?:\/\/[^\s)]+|[\w.+-]+@[\w-]+\.[\w.]+)/g;
  let last = 0;
  let match;
  let i = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    const token = match[0];
    const key = `${keyPrefix}-${i++}`;

    if (token.startsWith("**")) {
      nodes.push(<strong key={key}>{token.slice(2, -2)}</strong>);
    } else if (token.startsWith("`")) {
      nodes.push(<code key={key}>{token.slice(1, -1)}</code>);
    } else if (token.startsWith("http")) {
      nodes.push(
        <a key={key} href={token} target="_blank" rel="noopener noreferrer">
          {token.replace(/^https?:\/\//, "")}
        </a>
      );
    } else {
      nodes.push(
        <a key={key} href={`mailto:${token}`}>
          {token}
        </a>
      );
    }
    last = match.index + token.length;
  }

  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

function MessageBody({ content }) {
  const blocks = [];
  const lines = content.split("\n");
  let bullets = [];

  const flushBullets = (key) => {
    if (!bullets.length) return;
    blocks.push(
      <ul key={`ul-${key}`}>
        {bullets.map((b, i) => (
          <li key={i}>{renderInline(b, `li-${key}-${i}`)}</li>
        ))}
      </ul>
    );
    bullets = [];
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();
    const bullet = trimmed.match(/^[-*•]\s+(.*)$/);

    if (bullet) {
      bullets.push(bullet[1]);
      return;
    }

    flushBullets(index);
    if (trimmed) {
      blocks.push(<p key={`p-${index}`}>{renderInline(trimmed, `p-${index}`)}</p>);
    }
  });

  flushBullets("end");
  return <>{blocks}</>;
}

const timeNow = () =>
  new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem("chat-history");
      const parsed = saved ? JSON.parse(saved) : null;
      return parsed && parsed.length ? parsed : [{ ...GREETING, time: timeNow() }];
    } catch {
      return [{ ...GREETING, time: timeNow() }];
    }
  });
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [lastFailed, setLastFailed] = useState(null);
  const [unread, setUnread] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("chat-history", JSON.stringify(messages.slice(-40)));
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isLoading]);

  useEffect(() => {
    if (!isOpen) return;
    setUnread(false);
    const timer = setTimeout(() => inputRef.current?.focus(), 250);

    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  // Suggestions stay useful after the first message, minus what was just asked.
  const suggestions = useMemo(() => {
    const asked = messages
      .filter((m) => m.role === "user")
      .map((m) => m.content.toLowerCase());
    const fresh = QUICK_REPLIES.filter(
      (q) => !asked.includes(q.text.toLowerCase())
    );
    return (fresh.length ? fresh : QUICK_REPLIES).slice(0, 4);
  }, [messages]);

  const sendMessage = async (text) => {
    const finalInput = text.trim();
    if (!finalInput || isLoading) return;

    setLastFailed(null);
    const userMessage = { role: "user", content: finalInput, time: timeNow() };
    const updated = [...messages, userMessage];
    setMessages(updated);
    setInput("");
    setIsLoading(true);

    try {
      // Gemini history must start with a user turn, so drop the opening greeting.
      const chatHistory = updated
        .slice(0, -1)
        .filter((msg, index) => !(index === 0 && msg.role === "bot"))
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
        setMessages((prev) => [
          ...prev,
          { role: "bot", content: data.text, time: timeNow() },
        ]);
        if (!isOpen) setUnread(true);
      } else {
        setLastFailed(finalInput);
        setMessages((prev) => [
          ...prev,
          {
            role: "bot",
            content:
              data.error ||
              "Sorry, I could not reach my brain just now. You can retry, or email Salman at sadqq.salman@gmail.com.",
            time: timeNow(),
            error: true,
          },
        ]);
      }
    } catch {
      setLastFailed(finalInput);
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content:
            "Connection error — the chat service is not responding. Retry in a moment, or email sadqq.salman@gmail.com.",
          time: timeNow(),
          error: true,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const clearChat = () => {
    if (!window.confirm("Clear this conversation?")) return;
    setMessages([{ ...GREETING, time: timeNow() }]);
    setLastFailed(null);
    localStorage.removeItem("chat-history");
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chat-window" role="dialog" aria-label="Chat with Salman's assistant">
          <div className="chat-header">
            <img src="/images/salman.png" alt="" />
            <div className="header-info">
              <h3>Sal · Salman&apos;s Assistant</h3>
              <small>
                <span className="live-dot" />
                {isLoading ? "typing…" : "Online — usually instant"}
              </small>
            </div>
            <button className="clear-btn" onClick={clearChat} title="Clear chat" aria-label="Clear chat">
              <i className="bx bx-trash"></i>
            </button>
            <button className="close-btn" onClick={() => setIsOpen(false)} title="Close" aria-label="Close chat">
              <i className="bx bx-x"></i>
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.role} ${msg.error ? "is-error" : ""}`}
              >
                <MessageBody content={msg.content} />
                {msg.time && <span className="msg-time">{msg.time}</span>}
              </div>
            ))}

            {isLoading && (
              <div className="typing-indicator" aria-label="Assistant is typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}

            {lastFailed && !isLoading && (
              <button className="retry-btn" onClick={() => sendMessage(lastFailed)}>
                <i className="bx bx-refresh"></i> Retry
              </button>
            )}

            <div ref={messagesEndRef} />
          </div>

          {!isLoading && (
            <div className="chat-suggestions">
              {suggestions.map((s) => (
                <button key={s.label} onClick={() => sendMessage(s.text)}>
                  {s.label}
                </button>
              ))}
            </div>
          )}

          <form className="chat-input-area" onSubmit={handleSubmit}>
            <textarea
              ref={inputRef}
              rows={1}
              placeholder="Ask about VR, multiplayer, hiring…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
            />
            <button
              type="submit"
              className="send-btn"
              disabled={isLoading || !input.trim()}
              aria-label="Send message"
            >
              <i className="bx bxs-send"></i>
            </button>
          </form>
        </div>
      )}

      <button
        className={`chat-toggle ${unread ? "has-unread" : ""}`}
        onClick={() => setIsOpen((open) => !open)}
        title="Chat with Salman's assistant"
        aria-label="Chat with Salman's assistant"
      >
        <i className={`bx ${isOpen ? "bx-x" : "bx-message-square-dots"}`}></i>
      </button>
    </div>
  );
}
