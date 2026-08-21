import React, { useEffect } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";

import Background from "./components/Background";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import WebDevExperience from "./pages/WebDevExperience";
import Testimonials from "./pages/Testimonials";
import GameDevExperience from "./pages/GameDevExperience";
import Resume from "./pages/Resume";
import ThemeSettings from "./components/ThemeSettings";
import ChatBot from "./components/ChatBot";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function NotFound() {
  return (
    <main className="page not-found">
      <div className="container text-center">
        <h1 className="heading">
          404 — <span className="gradient-text">Page Not Found</span>
        </h1>
        <p className="section-lede">
          That page does not exist. Let&apos;s get you back to the work.
        </p>
        <Link to="/" className="btn">Back to Home</Link>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Background />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web-dev-experience" element={<WebDevExperience />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/game-dev-experience" element={<GameDevExperience />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      <ThemeSettings />
      <ChatBot />
    </>
  );
}
