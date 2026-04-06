import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import WebDevExperience from "./pages/WebDevExperience";
import Testimonials from "./pages/Testimonials";
import GameDevExperience from "./pages/GameDevExperience";
import ThemeSettings from "./components/ThemeSettings";
import ChatBot from "./components/ChatBot";

export default function App() {
  console.log("APP LOADED");
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web-dev-experience" element={<WebDevExperience />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/game-dev-experience" element={<GameDevExperience />} />

        {/* fallback route */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>

      <Footer />
      <ThemeSettings />
      <ChatBot />
    </>
  );
}
