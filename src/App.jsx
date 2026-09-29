import React, { useEffect } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";

import Home from "./pages/Home";
import WebDevExperience from "./pages/WebDevExperience";
import GameDevExperience from "./pages/GameDevExperience";
import Resume from "./pages/Resume";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function NotFound() {
  return (
    <main id="main" className="page not-found">
      <div className="wrap">
        <p className="mono">Error 404</p>
        <h1 className="page-title">This level doesn&apos;t exist.</h1>
        <p className="page-lede">The page you were looking for has moved or never shipped.</p>
        <div className="page-actions">
          <Link to="/" className="btn btn-primary">Back to home</Link>
        </div>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <div id="top">
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web-dev-experience" element={<WebDevExperience />} />
        <Route path="/game-dev-experience" element={<GameDevExperience />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      <ChatBot />
    </div>
  );
}
