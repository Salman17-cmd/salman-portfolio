// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    contactNumber: "",
    emailSubject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    info: { error: false, msg: null },
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitting: false,
        info: { error: false, msg: msg },
      });
      setFormData({
        fullName: "",
        emailAddress: "",
        contactNumber: "",
        emailSubject: "",
        message: "",
      });
    } else {
      setStatus({
        submitting: false,
        info: { error: true, msg: msg },
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    try {
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
      const res = await fetch(`${apiBaseUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      handleResponse(res.status, data.success || data.error);
    } catch (error) {
      handleResponse(500, "Something went wrong. Please try again later.");
    }
  };

  // =======================
  // THEME MANAGED BY GLOBAL CONTEXT
  // =======================

  // =======================
  // MOBILE MENU HANDLED IN HEADER.JSX
  // =======================

  // =======================
  // PROJECT FILTER
  // =======================
  useEffect(() => {
    const list = document.querySelectorAll(".project-filter li");
    const boxes = document.querySelectorAll(".project-boxes .box");

    list.forEach((el) => {
      el.addEventListener("click", () => {
        list.forEach((li) => li.classList.remove("project-filter-active"));
        el.classList.add("project-filter-active");

        const filterValue = el.getAttribute("data-filter");

        boxes.forEach((box) => {
          if (filterValue === "all") {
            box.style.display = "block";
          } else {
            if (box.classList.contains(filterValue)) {
              box.style.display = "block";
            } else {
              box.style.display = "none";
            }
          }
        });
      });
    });
  }, []);

  // =======================
  // TESTIMONIAL SWIPER
  // =======================
  useEffect(() => {
    new Swiper("#testimonialSwiper", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 16,
      autoplay: { delay: 3500 },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: { el: ".swiper-pagination", clickable: true },
      breakpoints: {
        860: { slidesPerView: 2 },
        1100: { slidesPerView: 3 },
      },
    });
  }, []);

  // =======================
  // SCROLL REVEAL EFFECTS
  // =======================
  useEffect(() => {
    ScrollReveal().reveal(".hero, .heading", {
      distance: "60px",
      duration: 1000,
      origin: "top",
    });
    ScrollReveal().reveal(".card, .projects .box", {
      distance: "60px",
      duration: 1000,
      origin: "bottom",
    });
  }, []);

  // =======================
  // SCROLL SPY (Active Link)
  // =======================
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("header nav a");

    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        const href = link.getAttribute("href");
        if (href === `#${current}` || href === `/#${current}`) {
          link.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      {/* ==========================================================
          HERO SECTION
      ========================================================== */}
      <section className="hero" id="home">
        <div className="container hero-grid">
          <div>
            <div className="badge-row">
              <span className="tag">PC</span>
              <span className="tag">Android</span>
              <span className="tag">WebGL</span>
              <span className="tag">AR / VRI (Quest 2/3)</span>
            </div>

            <h1 className="title">
              Hello, I am{" "}
              <span className="gradient-text">Salman Sadiq</span>
            </h1>

            <p className="roles">
              Game Developer <span>•</span> AR/VR Developer{" "}
              <span>•</span> Game Designer <span>•</span> C#
              Developer
            </p>

            <p className="subtle">
              Currently an Associate Software Engineer at{" "}
              <strong>Ilmversity by Da1Ilmverse</strong>
              . I build immersive, performant, and polished interactive
              experiences.
            </p>

            <div className="cta">
              <a
                id="downloadLink"
                href="/Files/Salman_Sadiq_Game_Dev.pdf"
                className="btn"
                download
              >
                <i className="bi bi-download"></i> Download CV
              </a>

              <a
                href="mailto:sadqq.salman@gmail.com?subject=Interested%20in%20Hiring%20You&body=Hi,%20I%20came%20across%20your%20portfolio..."
                className="btn ghost"
              >
                <i className="bi bi-envelope"></i> Hire Me
              </a>
            </div>

            <div className="social-media">
              <a href="https://www.facebook.com/salman.sadiq.7923" target="_blank" rel="noopener noreferrer"><i className='bx bxl-facebook'></i></a>
              <a href="https://www.youtube.com/@ss.entertainment1717" target="_blank" rel="noopener noreferrer"><i className='bx bxl-youtube'></i></a>
              <a href="https://www.instagram.com/salmansadiq12/?hl=en" target="_blank" rel="noopener noreferrer"><i className='bx bxl-instagram'></i></a>
              <a href="https://linkedin.com/in/salman-sadiq-ab58a4248" target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin'></i></a>
              <a href="https://wa.me/923034736071" target="_blank" rel="noopener noreferrer"><i className='bx bxl-whatsapp'></i></a>
            </div>
          </div>

          <div className="bento-container">
            <span className="tag">My Profession</span>
            <div className="bento-grid">
              <div className="bento-item large glass">
                <i className="bx bx-game"></i>
                <div className="bento-info">
                  <h3>Game Developer</h3>
                  <p>Building immersive 3D/2D games with Unity & C#.</p>
                </div>
              </div>
              <div className="bento-item glass">
                <i className="bx bx-vr"></i>
                <span>AR/VR Dev</span>
              </div>
              <div className="bento-item glass">
                <i className="bx bx-code-alt"></i>
                <span>Web Dev</span>
              </div>
              <div className="bento-item glass">
                <i className="bx bx-palette"></i>
                <span>UI Designer</span>
              </div>
              <div className="bento-item medium glass">
                <i className="bx bx-unite"></i>
                <div className="bento-info">
                  <h3>XR Specialist</h3>
                  <p>Expertise in XR Toolkit, MRTK & Vuforia.</p>
                </div>
              </div>
              <div className="bento-item glass">
                <i className="bx bx-cloud"></i>
                <span>PUN Admin</span>
              </div>
              <div className="bento-item glass">
                <i className="bx bx-server"></i>
                <span>Backend Dev</span>
              </div>
              <div className="bento-item glass">
                <i className="bx bxl-unity"></i>
                <span>Unity Pro</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          ABOUT SECTION
      ========================================================== */}
      <section id="about">
        <div className="container grid cols-2">
          <div className="card">
            <img
              src="/images/salman.png"
              alt="Salman portrait"
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "20px",
                objectFit: "cover",
              }}
            />
            <h2 className="heading">
              About <span className="gradient-text">Me</span>
            </h2>
            <p>
              Hi! I'm Salman, a passionate Unity game developer who loves
              turning ideas into playable experiences.
            </p>
            <p className="subtle">
              This portfolio highlights work across VR, AR, WebGL, and mobile
              – with a focus on performance, usability, and art direction.
            </p>

            <div className="mt-2">
              <a href="/testimonials" className="btn">
                Read More
              </a>
            </div>
          </div>

          <div className="card">
            <h2 className="heading">
              Resume <span className="gradient-text">Highlights</span>
            </h2>
            <ul>
              <li>
                <strong>Associate Software Engineer</strong> – Ilmversity by Da1Ilmverse (Oct 2025 - Present)
              </li>
              <li>
                <strong>Games & VR Developer</strong> – UET Game Studio (Apr 2024 - Sept 2025)
              </li>
              <li>
                <strong>Started Development Journey</strong> – University of Okara (2023)
              </li>
              <li>
                Expertise: Optimization (LODs/Batching), Multiplayer (Photon), Opsive CC, XR Toolkit, MRTK.
              </li>
            </ul>

            <div className="grid cols-2 mt-2">
              <div>
                <h3>Core Skills</h3>
                <p>
                  Unity, C#, C++, Node.js, Express.js, Databases, Photon, XR 
                  Toolkit, RCC, Git, Vercel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          SERVICES SECTION
      ========================================================== */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="heading">
            My <span className="gradient-text">Services</span>
          </h2>

          <div className="grid cols-1 mt-3">
            <div className="card">
              <i className="bx bx-code-alt"></i>
              <h3>Game Development</h3>
              <p className="subtle">
                High-quality gameplay and systems with Unity & C#.
              </p>
              <a href="/game-dev-experience" className="btn mt-2">
                Experience
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          PROJECTS SECTION
      ========================================================== */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="heading text-center">
            Latest <span className="gradient-text">Projects</span>
          </h2>

          <ul className="project-filter">
            <li className="list project-filter-active" data-filter="all">All</li>
            <li className="list" data-filter="webgl">WebGl Games</li>
            <li className="list" data-filter="android">Android Games</li>
            <li className="list" data-filter="pc">PC games</li>
            <li className="list" data-filter="ar">AR app</li>
            <li className="list" data-filter="vr">VR app</li>
            <li className="list" data-filter="web">Websites</li>
            <li className="list" data-filter="ai">AI/ML</li>
            <li className="list" data-filter="design">Design</li>
          </ul>

          <div className="project-boxes">
            {/* Box 1 - WebGL */}
            <div className="box webgl">
              <div className="project-box">
                <a href="/images/LC4.PNG" data-lightbox="work">
                  <img className="thumb" src="/images/LC4.PNG" alt="Letter Cascade Game" />
                </a>
                <div className="details-container">
                  <div className="detail-head">
                    <h4>Letter Cascade Game</h4>
                  </div>
                  <div className="detail-description">
                    This is a word puzzle game with real-time word validation and physics-based letter collisions.
                  </div>
                  <div className="icon-container">
                    <a href="https://github.com/Salman17-cmd/LetterCasade" target="_blank" rel="noopener noreferrer" className="i"><i className="bi bi-github"></i></a>
                    <a href="https://www.youtube.com/@ss.entertainment1717" target="_blank" rel="noopener noreferrer" className="i"><i className="bi bi-youtube"></i></a>
                    <a href="https://portal.uetgamestudio.com/games/lettercascade" target="_blank" rel="noopener noreferrer" className="i"><i className="bi bi-play-circle-fill"></i></a>
                  </div>
                </div>
              </div>
            </div>
            {/* Box 2 - WebGL */}
            <div className="box webgl">
              <div className="project-box">
                <a href="/images/QTG4.PNG" data-lightbox="work">
                  <img className="thumb" src="/images/QTG4.PNG" alt="Quiz The Global" />
                </a>
                <div className="details-container">
                  <div className="detail-head">
                    <h4>Quiz The Global</h4>
                  </div>
                  <div className="detail-description">
                    This is a educational game focused on identifying country flags across six continents. Features Time Trial and Survival modes.
                  </div>
                  <div className="icon-container">
                    <a href="https://github.com/APRUN/Snake_Game" target="_blank" rel="noopener noreferrer" className="i"><i className="bi bi-github"></i></a>
                    <a href="https://www.youtube.com/@ss.entertainment1717" target="_blank" rel="noopener noreferrer" className="i"><i className="bi bi-youtube"></i></a>
                    <a href="https://portal.uetgamestudio.com/games/quizglobe" className="i"><i className="bi bi-play-circle-fill"></i></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 16 - Android */}
            <div className="box android">
              <div className="project-box">
                <a href="/images/FS.png" data-lightbox="work">
                  <img className="thumb" src="/images/FS.png" alt="Fly Simulation" />
                </a>
                <div className="details-container">
                  <div className="detail-head">
                    <h4>Fly Simulation</h4>
                  </div>
                  <div className="detail-description">
                    Android game with multiple selectable planes, physics-based rope drag mechanics, and coin-based upgrades.
                  </div>
                  <div className="icon-container">
                    <a href="https://www.youtube.com/@ss.entertainment1717" target="_blank" rel="noopener noreferrer" className="i"><i className="bi bi-play-circle-fill"></i></a>
                    <a href="#" className="i"><i className="bi bi-info-circle-fill"></i></a>
                  </div>
                </div>
              </div>
            </div>
            {/* Box 17 - Android */}
            <div className="box android">
              <div className="project-box">
                <a href="/images/CH3.PNG" data-lightbox="work">
                  <img className="thumb" src="/images/CH3.PNG" alt="Color Hunt" />
                </a>
                <div className="details-container">
                  <div className="detail-head">
                    <h4>Color Hunt</h4>
                  </div>
                  <div className="detail-description">
                    3D open-world survival game with physics-based player controls, AI bots, and color hierarchy mechanics.
                  </div>
                  <div className="icon-container">
                    <a href="https://www.youtube.com/@ss.entertainment1717" target="_blank" rel="noopener noreferrer" className="i"><i className="bi bi-play-circle-fill"></i></a>
                    <a href="#" className="i"><i className="bi bi-info-circle-fill"></i></a>
                  </div>
                </div>
              </div>
            </div>
            {/* Box 20 - Android */}
            <div className="box android">
              <div className="project-box">
                <a href="/images/zs2.PNG" data-lightbox="work">
                  <img className="thumb" src="/images/zs2.PNG" alt="Waste Land Of Living Dead" />
                </a>
                <div className="details-container">
                  <div className="detail-head">
                    <h4>Waste Land Of Living Dead</h4>
                  </div>
                  <div className="detail-description">
                    3D zombie survival shooter. Features multiplayer support with Photon including lobby and wave spawning.
                  </div>
                  <div className="icon-container">
                    <a href="https://www.youtube.com/@ss.entertainment1717" target="_blank" rel="noopener noreferrer" className="i"><i className="bi bi-play-circle-fill"></i></a>
                    <a href="#" className="i"><i className="bi bi-info-circle-fill"></i></a>
                  </div>
                </div>
              </div>
            </div>
            {/* Box 22 - Android/VR */}
            <div className="box vr android">
              <div className="project-box">
                <a href="/images/HS1.PNG" data-lightbox="work">
                  <img className="thumb" src="/images/HS1.PNG" alt="Horror Survival" />
                </a>
                <div className="details-container">
                  <div className="detail-head">
                    <h4>Horror Survival</h4>
                  </div>
                  <div className="detail-description">
                    VR zombie shooter featuring cinematic sequences, particle effects, and immersive environment design.
                  </div>
                  <div className="icon-container">
                    <a href="https://www.youtube.com/@ss.entertainment1717" target="_blank" rel="noopener noreferrer" className="i"><i className="bi bi-play-circle-fill"></i></a>
                    <a href="https://play.google.com/store/apps/details?id=com.uetgs.halloweenSurvival" target="_blank" rel="noopener noreferrer" className="i"><i className="bi bi-google-play"></i></a>
                  </div>
                </div>
              </div>
            </div>
            {/* Box 23 - Android */}
            <div className="box android">
              <div className="project-box">
                <a href="/images/PCS1.PNG" data-lightbox="work">
                  <img className="thumb" src="/images/PCS1.PNG" alt="Police Cop Simulator" />
                </a>
                <div className="details-container">
                  <div className="detail-head">
                    <h4>Police Cop Simulator</h4>
                  </div>
                  <div className="detail-description">
                    Simulation experience with cinematic scenes using Animator, Timeline, and custom UI systems.
                  </div>
                  <div className="icon-container">
                    <a href="https://www.youtube.com/@ss.entertainment1717" target="_blank" rel="noopener noreferrer" className="i"><i className="bi bi-play-circle-fill"></i></a>
                    <a href="https://play.google.com/store/apps/details?id=com.DefaultCompany.PoliceCOPSimulator" target="_blank" rel="noopener noreferrer" className="i"><i className="bi bi-google-play"></i></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 14 - PC */}
            <div className="box pc">
              <div className="project-box">
                <a href="/images/YS.png" data-lightbox="work">
                  <img className="thumb" src="/images/YS.png" alt="Yanch e Shilock" />
                </a>
                <div className="details-container">
                  <div className="detail-head">
                    <h4>Yanch e Shilock</h4>
                  </div>
                  <div className="detail-description">
                    Dynamic encounters using melee, magic, and AI coordination. Interactive rooftop combat and emotional storytelling.
                  </div>
                  <div className="icon-container">
                    <a href="https://www.youtube.com/@ss.entertainment1717" target="_blank" rel="noopener noreferrer" className="i"><i className="bi bi-play-circle-fill"></i></a>
                    <a href="#" className="i"><i className="bi bi-info-circle-fill"></i></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 15 - AR */}
            <div className="box ar">
              <div className="project-box">
                <a href="/images/LROP4.PNG" data-lightbox="work">
                  <img className="thumb" src="/images/LROP4.PNG" alt="ARPlace" />
                </a>
                <div className="details-container">
                  <div className="detail-head">
                    <h4>ARPlace</h4>
                  </div>
                  <div className="detail-description">
                    AR Simulation app to place and interact with furniture in real-world environments using AR Foundation.
                  </div>
                  <div className="icon-container">
                    <a href="https://www.linkedin.com/feed/update/urn:li:activity:7358807205472579585/" target="_blank" rel="noopener noreferrer" className="i"><i className="bi bi-play-circle-fill"></i></a>
                    <a href="#" className="i"><i className="bi bi-info-circle-fill"></i></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 18 - VR */}
            <div className="box vr">
              <div className="project-box">
                <a href="/images/DCS4.PNG" data-lightbox="work">
                  <img className="thumb" src="/images/DCS4.PNG" alt="Car VR Simulation" />
                </a>
                <div className="details-container">
                  <div className="detail-head">
                    <h4>Car VR Simulation</h4>
                  </div>
                  <div className="detail-description">
                    Immersive Car VR Simulation. Integrated RCC for realistic car control with VR hand interaction.
                  </div>
                  <div className="icon-container">
                    <a href="https://www.linkedin.com/feed/update/urn:li:activity:7358770508215046145/" target="_blank" rel="noopener noreferrer" className="i"><i className="bi bi-play-circle-fill"></i></a>
                    <a href="#" className="i"><i className="bi bi-info-circle-fill"></i></a>
                  </div>
                </div>
              </div>
            </div>
            {/* Box 19 - VR */}
            <div className="box vr">
              <div className="project-box">
                <a href="/images/Christmas4.PNG" data-lightbox="work">
                  <img className="thumb" src="/images/Christmas4.PNG" alt="Christmas VR Simulation" />
                </a>
                <div className="details-container">
                  <div className="detail-head">
                    <h4>Christmas VR Simulation</h4>
                  </div>
                  <div className="detail-description">
                    Festive VR game where players search for hidden objects. Features seamless controller navigation.
                  </div>
                  <div className="icon-container">
                    <a href="https://www.linkedin.com/feed/update/urn:li:activity:7300796441571049472/" target="_blank" rel="noopener noreferrer" className="i"><i className="bi bi-play-circle-fill"></i></a>
                    <a href="#" className="i"><i className="bi bi-info-circle-fill"></i></a>
                  </div>
                </div>
              </div>
            </div>
            {/* Box 21 - VR */}
            <div className="box vr">
              <div className="project-box">
                <a href="/images/BioLab4.PNG" data-lightbox="work">
                  <img className="thumb" src="/images/BioLab4.PNG" alt="VR Bio Lab" />
                </a>
                <div className="details-container">
                  <div className="detail-head">
                    <h4>VR Bio Lab</h4>
                  </div>
                  <div className="detail-description">
                    Interactive educational VR simulator using MRTK for navigating and interacting with anatomical models.
                  </div>
                  <div className="icon-container">
                    <a href="https://www.linkedin.com/feed/update/urn:li:activity:7274653702395699200/" target="_blank" rel="noopener noreferrer" className="i"><i className="bi bi-play-circle-fill"></i></a>
                    <a href="#" className="i"><i className="bi bi-info-circle-fill"></i></a>
                  </div>
                </div>
              </div>
            </div>
            {/* Box 24 - VR */}
            <div className="box vr">
              <div className="project-box">
                <a href="/images/EH.png" data-lightbox="work">
                  <img className="thumb" src="/images/EH.png" alt="Realtime ExpoHall VR" />
                </a>
                <div className="details-container">
                  <div className="detail-head">
                    <h4>Realtime ExpoHall VR</h4>
                  </div>
                  <div className="detail-description">
                    Oculus Quest 3 VR project featuring real-time character lip-syncing driven by JSON files.
                  </div>
                  <div className="icon-container">
                    <a href="https://www.youtube.com/@ss.entertainment1717" target="_blank" rel="noopener noreferrer" className="i"><i className="bi bi-play-circle-fill"></i></a>
                    <a href="#" className="i"><i className="bi bi-info-circle-fill"></i></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 4 - Website */}
            <div className="box web">
              <div className="project-box">
                <a href="/images/LWF.png" data-lightbox="work">
                  <img className="thumb" src="/images/LWF.png" alt="Live Weather Forecaster" />
                </a>
                <div className="details-container">
                  <div className="detail-head">
                    <h4>Live Weather Forecaster</h4>
                  </div>
                  <div className="detail-description">
                    A web app developed with Streamlit UI and OpenWeather API that tells the live temprature for a city by taking input for the city and state of weather.
                  </div>
                  <div className="icon-container">
                    <a href="https://github.com/Salman17-cmd/Live-Weather-Forecaster" target="_blank" rel="noopener noreferrer" className="i"><i className="bi bi-github"></i></a>
                    <a href="https://www.youtube.com/@ss.entertainment1717" target="_blank" rel="noopener noreferrer" className="i"><i className="bi bi-play-circle-fill"></i></a>
                    <a href="#" className="i"><i className="bi bi-info-circle-fill"></i></a>
                  </div>
                </div>
              </div>
            </div>
            {/* Box 25 - Website */}
            <div className="box web">
              <div className="project-box">
                <a href="/images/salman.png" data-lightbox="work">
                  <img className="thumb" src="/images/salman.png" alt="Personal Portfolio" />
                </a>
                <div className="details-container">
                  <div className="detail-head">
                    <h4>Personal Portfolio</h4>
                  </div>
                  <div className="detail-description">
                    A performant, responsive personal portfolio built with React and Vite. Features dark mode, project filtering, and smooth animations.
                  </div>
                  <div className="icon-container">
                    <a href="https://github.com/Salman17-cmd/salman-portfolio" target="_blank" rel="noopener noreferrer" className="i"><i className="bi bi-github"></i></a>
                    <a href="https://www.youtube.com/@ss.entertainment1717" target="_blank" rel="noopener noreferrer" className="i"><i className="bi bi-play-circle-fill"></i></a>
                    <a href="#" className="i"><i className="bi bi-info-circle-fill"></i></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 3 - AI/ML */}
            <div className="box ai">
              <div className="project-box">
                <a href="/images/b3.jpg" data-lightbox="work">
                  <img className="thumb" src="/images/b3.jpg" alt="Face Recognition" />
                </a>
                <div className="details-container">
                  <div className="detail-head">
                    <h4>Face Recognition</h4>
                  </div>
                  <div className="detail-description">
                    This is a face recognition program that detects the face of a person using your web cam. It uses OpenCV for the detection.
                  </div>
                  <div className="icon-container">
                    <a href="https://github.com/Salman17-cmd/FaceRecogination" target="_blank" rel="noopener noreferrer" className="i"><i className="bi bi-github"></i></a>
                    <a href="https://www.youtube.com/@ss.entertainment1717" target="_blank" rel="noopener noreferrer" className="i"><i className="bi bi-play-circle-fill"></i></a>
                    <a href="#" className="i"><i className="bi bi-info-circle-fill"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          SKILLS SECTION — Circular Progress Rings in Box
      ========================================================== */}
      <section className="proficiencies-section" id="skills">
        <div className="container">
          <h2 className="heading">My <span className="gradient-text">Proficiencies</span></h2>

          <div className="prof-box">
            <div className="prof-grid">

              <div className="prof-card">
                <div className="ring" style={{ "--percent": 95 }}>
                  <svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="52" /><circle cx="60" cy="60" r="52" /></svg>
                  <span className="ring-val">95%</span>
                </div>
                <h4>Unity</h4>
                <p>2D/3D games, AR/VR &amp; cross-platform builds</p>
              </div>

              <div className="prof-card">
                <div className="ring" style={{ "--percent": 90 }}>
                  <svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="52" /><circle cx="60" cy="60" r="52" /></svg>
                  <span className="ring-val">90%</span>
                </div>
                <h4>C#</h4>
                <p>Game logic, .NET apps &amp; backend systems</p>
              </div>



              <div className="prof-card">
                <div className="ring" style={{ "--percent": 90 }}>
                  <svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="52" /><circle cx="60" cy="60" r="52" /></svg>
                  <span className="ring-val">90%</span>
                </div>
                <h4>Project Management</h4>
                <p>Agile, Jira, Trello &amp; team collaboration</p>
              </div>

              <div className="prof-card">
                <div className="ring" style={{ "--percent": 85 }}>
                  <svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="52" /><circle cx="60" cy="60" r="52" /></svg>
                  <span className="ring-val">85%</span>
                </div>
                <h4>Design Tools</h4>
                <p>Photoshop, Illustrator &amp; Canva</p>
              </div>

              <div className="prof-card">
                <div className="ring" style={{ "--percent": 80 }}>
                  <svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="52" /><circle cx="60" cy="60" r="52" /></svg>
                  <span className="ring-val">80%</span>
                </div>
                <h4>Figma</h4>
                <p>UI/UX design &amp; prototyping</p>
              </div>

              <div className="prof-card">
                <div className="ring" style={{ "--percent": 75 }}>
                  <svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="52" /><circle cx="60" cy="60" r="52" /></svg>
                  <span className="ring-val">75%</span>
                </div>
                <h4>C++</h4>
                <p>Systems programming, DSA &amp; optimization</p>
              </div>

              <div className="prof-card">
                <div className="ring" style={{ "--percent": 60 }}>
                  <svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="52" /><circle cx="60" cy="60" r="52" /></svg>
                  <span className="ring-val">60%</span>
                </div>
                <h4>Flask</h4>
                <p>Python web framework for APIs</p>
              </div>



            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          TESTIMONIALS SECTION
      ========================================================== */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div
            className="section-header"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <h2 className="heading">
              Our <span className="gradient-text">Testimonials</span>
            </h2>
            <button className="btn" disabled>
              Add Testimonial (Disabled)
            </button>
          </div>

          <div className="swiper" id="testimonialSwiper">
            <div className="swiper-wrapper">
              {/* THREE TESTIMONIAL SLIDES HERE (same as HTML) */}
              <div className="swiper-slide">
                <div className="t-card">
                  <img src="/images/raven.png" alt="Avatar" />
                  <div>
                    <strong>Salman</strong>
                    <div className="subtle">Web Developer</div>
                    <p className="mt-2">
                      This section is under development.
                    </p>
                    <div className="stars">★★★★★</div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="t-card">
                  <img src="/images/raven.png" alt="Avatar" />
                  <div>
                    <strong>Salman</strong>
                    <div className="subtle">.NET Developer</div>
                    <p className="mt-2">
                      This section is under development.
                    </p>
                    <div className="stars">★★★★★</div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="t-card">
                  <img src="/images/raven.png" alt="Avatar" />
                  <div>
                    <strong>Salman</strong>
                    <div className="subtle">UI/UX Designer</div>
                    <p className="mt-2">
                      This section is under development.
                    </p>
                    <div className="stars">★★★★★</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          CONTACT SECTION
      ========================================================== */}
      <section id="contact">
        <div className="container">
          <h2 className="heading text-center">
            Contact <span className="gradient-text">Me!</span>
          </h2>

          <form className="contact" onSubmit={handleSubmit}>
            <div className="row-2">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="emailAddress"
                placeholder="Email Address"
                value={formData.emailAddress}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="row-2">
              <input
                type="tel"
                name="contactNumber"
                placeholder="Mobile Number"
                value={formData.contactNumber}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="emailSubject"
                placeholder="Email Subject"
                value={formData.emailSubject}
                onChange={handleInputChange}
                required
              />
            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>

            <button
              type="submit"
              className="btn"
              disabled={status.submitting}
            >
              {status.submitting ? "Sending..." : "Send Message"}
            </button>

            {status.info.msg && (
              <div
                className={`form-message ${
                  status.info.error ? "error" : "success"
                }`}
                style={{
                  marginTop: "1rem",
                  color: status.info.error ? "#ff4d4d" : "#00ff88",
                  textAlign: "center",
                }}
              >
                {status.info.msg}
              </div>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
