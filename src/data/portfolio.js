// src/data/portfolio.js
// Single source of truth for portfolio content — mirrors Salman Sadiq's CV.

export const profile = {
  name: "Salman Sadiq",
  title: "Unity Developer",
  subtitle: "VR, AR & Multiplayer Systems",
  location: "Lahore, Punjab, Pakistan",
  email: "sadqq.salman@gmail.com",
  phone: "+92 303 4736071",
  cv: "/Files/Salman_Sadiq_CV.pdf",
  roles: [
    "Unity Developer",
    "VR / XR Engineer",
    "Multiplayer Systems Dev",
    "AI Avatar & Lip-Sync Dev",
    "C# Developer",
  ],
  summary:
    "Unity Developer and Associate Software Engineer with 2 years building VR, AR, multiplayer, and AI-driven applications. Core stack: Unity/C#, Meta Quest 2/3, XR Toolkit, Unity Gaming Services, WebRTC, and Azure TTS.",
  summaryLong:
    "Recently shipped AI teachers with real-time lip-sync and conversational chat, plus a multiplayer VR meeting room for up to 10 concurrent Quest users with live browser screen sharing - all holding the 72/90 FPS target on standalone hardware.",
  socials: {
    github: "https://github.com/Salman17-cmd",
    linkedin: "https://linkedin.com/in/salman-sadiq-ab58a4248",
    youtube: "https://www.youtube.com/@ss.entertainment1717",
    instagram: "https://www.instagram.com/salmansadiq12/?hl=en",
    facebook: "https://www.facebook.com/salman.sadiq.7923",
    whatsapp: "https://wa.me/923034736071",
  },
};

export const stats = [
  { value: "2+", label: "Years building XR", icon: "bx bx-briefcase-alt-2" },
  { value: "10", label: "Concurrent Quest users", icon: "bx bx-group" },
  { value: "72/90", label: "FPS held on Quest 3", icon: "bx bx-tachometer" },
  { value: "15+", label: "Shipped projects", icon: "bx bx-rocket" },
];

export const experience = [
  {
    role: "Associate Software Engineer",
    company: "Ilmversity",
    location: "Lahore, Pakistan",
    period: "Oct 2025 — Present",
    current: true,
    summary:
      "Building the Da1Ilmverse enterprise VR campus for Meta Quest 3 — AI teachers, multiplayer meeting rooms, and live screen streaming into VR.",
    points: [
      "Built conversational AI avatars with real-time lip-sync — three subject teachers for physics, chemistry and programming, plus a guide robot on each of six expo stalls — mapping Azure TTS visemes to facial blendshapes through a JSON-driven framework so each one answers free-form questions with spoken replies.",
      "Implemented in-world scene transitions that carry a visitor from a stall's miniature model into that model's full-scale environment to explore it.",
      "Sustained the target 72/90 FPS across every Meta Quest 3 scene using LODs, static/dynamic batching, occlusion culling, baked lightmaps, and shader-driven effects.",
      "Engineered a multiplayer VR meeting room for up to 10 concurrent Quest users on Unity Gaming Services (Lobby and Relay) and Netcode for GameObjects.",
      "Integrated Unity Render Streaming with WebRTC to stream a presenter's browser screen into VR, building the Node signaling server and STUN/TURN configuration for cross-network connections.",
      "Integrated Model Context Protocol (MCP) tooling into the Unity Editor for automated scene inspection and asset edits, and implemented Data Version Control (DVC) to version AI datasets and model artifacts.",
      "Worked with rrweb on the web side, capturing browser sessions as DOM mutation and input event streams through a Node.js service so a session can be replayed step by step for debugging and review.",
      "Delivered across two-week Jira sprints, reviewing every merge and tracking cross-team dependencies in Asana.",
    ],
    stack: ["Unity", "C#", "Meta Quest 3", "Azure TTS", "UGS Lobby & Relay", "Netcode", "WebRTC", "Node.js"],
  },
  {
    role: "Games & VR Developer",
    company: "UET Game Studio",
    location: "Lahore, Pakistan",
    period: "Apr 2024 — Sept 2025",
    current: false,
    summary:
      "Shipped Unity titles across VR, mobile, PC and WebGL — from vehicle physics to networked shooters — and set up the studio's branching workflow.",
    points: [
      "Built controller interactions and realistic steering wheel physics using Realistic Car Controller (RCC) and XR Toolkit.",
      "Developed wave spawning, state machines, and ragdoll systems for a multiplayer FPS on Opsive Character Controller, networked over Photon PUN.",
      "Shipped Unity titles across VR, mobile, PC, and WebGL, deploying browser builds to Vercel for instant cross-platform access.",
      "Streamlined team collaboration by rolling out Unity Version Control / Plastic SCM branching, cutting merge conflicts on shared scenes.",
    ],
    stack: ["Unity", "XR Toolkit", "MRTK", "Photon PUN", "Opsive CC", "RCC", "WebGL", "Vercel"],
  },
];

export const education = [
  {
    degree: "Master of Computer Science",
    school: "University of Okara",
    period: "2021 — 2023",
    note: "Advanced computing and software engineering, with a graduation project in vehicle physics simulation.",
  },
  {
    degree: "BSc in Computer Science and Double Math",
    school: "University of the Punjab",
    period: "2018 — 2020",
    note: "Foundations in programming, mathematics, and algorithms.",
  },
];

export const skillGroups = [
  {
    title: "Programming",
    icon: "bx bx-code-alt",
    skills: ["C#", "OOP", "C++", "DSA", "SQL"],
  },
  {
    title: "Game Development",
    icon: "bx bx-joystick",
    skills: ["Unity", "Gameplay Programming", "AI Systems", "UI Systems", "Animation", "Timeline", "Cinematics", "Particle Effects", "URP", "Addressables", "DOTween"],
  },
  {
    title: "Graphics & Optimization",
    icon: "bx bx-tachometer",
    skills: ["LODs", "Batching", "Occlusion Culling", "Baked Lighting & Lightmaps", "Mobile Shaders", "Profiling"],
  },
  {
    title: "AR / VR",
    icon: "bx bx-vr",
    skills: ["XR Toolkit", "MRTK", "Meta Quest 2/3", "Vuforia", "AR Foundation", "VR Interaction Systems"],
  },
  {
    title: "Multiplayer & Web",
    icon: "bx bx-network-chart",
    skills: ["Unity Gaming Services (Lobby, Relay)", "Netcode for GameObjects", "Photon PUN", "Server-Authoritative Netcode", "Deterministic Simulation", "WebSockets", "Unity Render Streaming", "WebRTC", "WebGL", "Vercel"],
  },
  {
    title: "AI & Speech",
    icon: "bx bx-microphone",
    skills: ["Azure TTS", "Conversational AI Chat", "Viseme & Blendshape Pipelines"],
  },
  {
    title: "Backend & Web",
    icon: "bx bx-server",
    skills: ["Node.js", "Express", "REST APIs", ".NET / ASP.NET", "React", "Vite", "MySQL", "rrweb (session replay)"],
  },
  {
    title: "Tools",
    icon: "bx bx-wrench",
    skills: ["Visual Studio", "GitHub", "Jira", "Asana", "Model Context Protocol (MCP)", "Data Version Control (DVC)", "NUnit / Unity Test Framework", "Plastic SCM", "Unity Version Control"],
  },
  {
    title: "Assets & Plugins",
    icon: "bx bx-package",
    skills: ["RCC", "UFPS", "Opsive Character Controller", "EasyRoads3D"],
  },
  {
    title: "Ways of Working",
    icon: "bx bx-conversation",
    skills: ["Agile / Scrum", "Sprint Planning", "Code Reviews", "Cross-Functional Collaboration"],
  },
];

// Ring percentages for the proficiency section.
export const proficiencies = [
  { name: "Unity", percent: 95, note: "2D/3D, XR & cross-platform builds" },
  { name: "C#", percent: 92, note: "Gameplay systems, tools & backend" },
  { name: "VR / XR Toolkit", percent: 90, note: "Meta Quest 2/3, MRTK, interaction rigs" },
  { name: "Optimization", percent: 88, note: "LODs, batching, occlusion, lightmaps" },
  { name: "Multiplayer (UGS / Photon)", percent: 85, note: "Lobby, Relay, Netcode, PUN" },
  { name: "AI Speech & Lip-Sync", percent: 85, note: "Azure TTS visemes to blendshapes" },
  { name: "WebRTC & Render Streaming", percent: 82, note: "Signaling servers, STUN/TURN" },
  { name: "Node.js & APIs", percent: 75, note: "Express services for VR portals" },
  { name: "C++ & DSA", percent: 75, note: "Systems programming & algorithms" },
];

// ── Flagship work (Ilmversity) ──
export const flagships = [
  {
    title: "Da1Ilmverse — VR Campus Platform",
    org: "Ilmversity",
    image: "/images/da1ilmverse.png",
    logo: true,
    tagline:
      "An enterprise VR campus delivered as one product across several environments, built for Meta Quest 3.",
    highlights: [
      {
        name: "V Campus",
        text: "An explorable campus tuned for standalone VR, holding 72/90 FPS with LODs, batching, occlusion culling and baked lighting.",
      },
      {
        name: "AI Classroom",
        text: "Three AI subject teachers lip-sync to their own speech and answer student questions through conversational chat.",
      },
      {
        name: "Multiplayer Meeting Room",
        text: "Up to 10 users join by 6-digit code, with a presenter's browser screen streamed live into VR over WebRTC.",
      },
    ],
    stack: ["Unity / C#", "Meta Quest 3", "Azure TTS", "UGS Lobby & Relay", "Netcode", "WebRTC"],
  },
  {
    title: "Empire Avenue",
    org: "Personal Project",
    image: "/images/empire-avenue.jpg",
    status: "Online multiplayer — in progress",
    tagline:
      "A 3D property-trading board game for 2-8 players, built in Unity 6 around a pure C# rules engine — with swappable country editions. Local offline play is complete and playable end to end; online multiplayer on a .NET dedicated server is currently in development.",
    highlights: [
      {
        name: "Offline play — shipped",
        text: "A full 2-8 player pass-and-play match runs today: physics dice, property auctions, mortgages, houses and hotels, Chance and Community Chest, and win conditions, all resolved by the rules engine on one device.",
      },
      {
        name: "One rulebook, three homes",
        text: "All game rules live in a Unity-free C# package, so the exact same assembly runs in the client, in the dedicated server, and in a test runner with 117 NUnit tests.",
      },
      {
        name: "Online multiplayer — in progress",
        text: "The engine is already server-authoritative by design: commands are requests, events are facts, and dice and card order come from a seeded xoshiro256** RNG, so every participant derives the same outcome from one seed - no desync, no client-rolled doubles. The .NET dedicated server and its WebSocket transport are being built on top of that foundation now.",
      },
      {
        name: "Swappable country editions",
        text: "Pakistan, United Kingdom and United States boards ship as JSON — each with its own 40 tiles, currency symbol and card names — so a new edition is data, not code, and the server can host any of them.",
      },
      {
        name: "The game around the rules",
        text: "8 custom 3D pawns, physics-based dice, 16 Chance and 16 Community Chest cards, a dynamic camera director, and AI-generated skyboxes via the Blockade Labs SDK.",
      },
      {
        name: "Production pipeline",
        text: "778 MB of art versioned with DVC on cloud storage while Git keeps a 6-line pointer, plus MCP tooling inside the Unity Editor. Readable room codes are wired for the online build.",
      },
    ],
    stack: ["Unity 6", "C#", ".NET Server", "WebSockets", "URP", "DVC", "NUnit"],
  },
  {
    title: "Da1Expo Hall",
    org: "Ilmversity",
    image: "/images/EH.png",
    tagline:
      "A VR expo with six themed stalls, each hosting a robot guide that answers questions about the miniature on display.",
    highlights: [
      {
        name: "Six robot guides",
        text: "Each stall's guide answers free-form questions with spoken replies, driven by Azure TTS visemes mapped to blendshapes.",
      },
      {
        name: "Miniature to full scale",
        text: "A stall button carries the visitor into that model's full-scale environment — stepping from a resort miniature into the resort itself.",
      },
      {
        name: "JSON-driven framework",
        text: "One reusable lip-sync and dialogue framework configures every avatar without touching code.",
      },
    ],
    stack: ["Unity / C#", "Meta Quest 3", "Azure TTS", "AI Chat", "Blendshapes"],
  },
];

// ── Project grid ──
export const filters = [
  { key: "all", label: "All" },
  { key: "vr", label: "VR" },
  { key: "ar", label: "AR" },
  { key: "webgl", label: "WebGL" },
  { key: "android", label: "Android" },
  { key: "pc", label: "PC" },
  { key: "web", label: "Web & AI" },
];

export const projects = [
  {
    title: "Empire Avenue",
    tags: ["pc", "android"],
    image: "/images/empire-avenue.jpg",
    status: "Online mode in progress",
    description:
      "3D property-trading board game for 2-8 players in Unity 6: swappable Pakistan, UK and US boards defined in JSON, physics dice, 8 custom pawns, and a Unity-free C# rules engine. Offline pass-and-play is complete; online multiplayer on a .NET WebSocket server is in development.",
    stack: ["Unity 6", "C#", ".NET Server", "WebSockets", "DVC"],
    links: [],
    featured: true,
  },
  {
    title: "Da1Ilmverse VR Campus",
    tags: ["vr"],
    image: "/images/da1ilmverse.png",
    logo: true,
    description:
      "Enterprise VR campus for Quest 3: AI classroom, explorable campus, and a 10-user meeting room with a presenter's screen streamed in over WebRTC.",
    stack: ["Unity", "UGS", "Netcode", "WebRTC"],
    links: [{ icon: "bi bi-linkedin", url: profile.socials.linkedin, label: "LinkedIn" }],
    featured: true,
  },
  {
    title: "Da1Expo Hall VR",
    tags: ["vr"],
    image: "/images/EH.png",
    description:
      "Six-stall VR expo where each robot guide lip-syncs to Azure TTS and answers visitor questions, with miniature-to-full-scale scene transitions.",
    stack: ["Unity", "Azure TTS", "Blendshapes"],
    links: [{ icon: "bi bi-play-circle-fill", url: profile.socials.youtube, label: "Video" }],
    featured: true,
  },
  {
    title: "Car VR Simulation",
    tags: ["vr"],
    image: "/images/DCS4.PNG",
    description:
      "VR racing with hand-tracked steering physics built on RCC and XR Toolkit, AI opponents, and three game modes.",
    stack: ["XR Toolkit", "RCC"],
    links: [
      { icon: "bi bi-play-circle-fill", url: "https://www.linkedin.com/feed/update/urn:li:activity:7358770508215046145/", label: "Demo" },
    ],
  },
  {
    title: "VR Bio Lab",
    tags: ["vr"],
    image: "/images/BioLab4.PNG",
    description:
      "Educational VR simulator built with MRTK for inspecting and manipulating anatomical models hands-on.",
    stack: ["MRTK", "Unity"],
    links: [
      { icon: "bi bi-play-circle-fill", url: "https://www.linkedin.com/feed/update/urn:li:activity:7274653702395699200/", label: "Demo" },
    ],
  },
  {
    title: "Horror Survival",
    tags: ["vr", "android"],
    image: "/images/HS1.PNG",
    description:
      "VR zombie shooter with cinematic sequences, particle effects, and immersive environment design — published on Google Play.",
    stack: ["Unity", "VR", "Timeline"],
    links: [
      { icon: "bi bi-google-play", url: "https://play.google.com/store/apps/details?id=com.uetgs.halloweenSurvival", label: "Play Store" },
    ],
  },
  {
    title: "Christmas VR Simulation",
    tags: ["vr"],
    image: "/images/Christmas4.PNG",
    description:
      "Festive VR hidden-object game with seamless controller navigation and a hand-authored winter environment.",
    stack: ["Unity", "XR Toolkit"],
    links: [
      { icon: "bi bi-play-circle-fill", url: "https://www.linkedin.com/feed/update/urn:li:activity:7300796441571049472/", label: "Demo" },
    ],
  },
  {
    title: "ARPlace",
    tags: ["ar"],
    image: "/images/LROP4.PNG",
    description:
      "AR furniture placement for Android using AR Foundation — plane detection plus touch gestures to move, rotate and scale.",
    stack: ["AR Foundation", "Android"],
    links: [
      { icon: "bi bi-play-circle-fill", url: "https://www.linkedin.com/feed/update/urn:li:activity:7358807205472579585/", label: "Demo" },
    ],
  },
  {
    title: "Quiz the Globe",
    tags: ["webgl"],
    image: "/images/QTG4.PNG",
    description:
      "Flag-identification game across six continents with Time Trial and Survival modes, deployed to the browser.",
    stack: ["WebGL", "Vercel"],
    links: [
      { icon: "bi bi-play-circle-fill", url: "https://portal.uetgamestudio.com/games/quizglobe", label: "Play" },
    ],
  },
  {
    title: "Letter Cascade",
    tags: ["webgl"],
    image: "/images/LC4.PNG",
    description:
      "Word puzzle with physics-based letter collisions and real-time word validation, playable in the browser.",
    stack: ["WebGL", "Unity Physics"],
    links: [
      { icon: "bi bi-github", url: "https://github.com/Salman17-cmd/LetterCasade", label: "Code" },
      { icon: "bi bi-play-circle-fill", url: "https://portal.uetgamestudio.com/games/lettercascade", label: "Play" },
    ],
  },
  {
    title: "Waste Land of Living Dead",
    tags: ["pc", "android"],
    image: "/images/zs2.PNG",
    description:
      "Multiplayer zombie shooter on UFPS and Photon PUN — lobbies, wave spawning, ragdolls, and cinematics.",
    stack: ["Photon PUN", "UFPS"],
    links: [{ icon: "bi bi-play-circle-fill", url: profile.socials.youtube, label: "Video" }],
  },
  {
    title: "Yanch e Shilock",
    tags: ["pc"],
    image: "/images/YS.png",
    description:
      "PC action game with melee and magic combat, boss fights, coordinated enemy AI, and VFX-driven encounters.",
    stack: ["Unity", "AI", "VFX"],
    links: [{ icon: "bi bi-play-circle-fill", url: profile.socials.youtube, label: "Video" }],
  },
  {
    title: "Police Cop Simulator",
    tags: ["android"],
    image: "/images/PCS1.PNG",
    description:
      "Android simulation with cinematic scenes built on Animator and Timeline, plus custom UI systems.",
    stack: ["Unity", "Timeline"],
    links: [
      { icon: "bi bi-google-play", url: "https://play.google.com/store/apps/details?id=com.DefaultCompany.PoliceCOPSimulator", label: "Play Store" },
    ],
  },
  {
    title: "Fly Simulation",
    tags: ["android"],
    image: "/images/FS.png",
    description:
      "Android flight game with selectable planes, physics-based rope drag mechanics, and coin-based upgrades.",
    stack: ["Unity", "Physics"],
    links: [{ icon: "bi bi-play-circle-fill", url: profile.socials.youtube, label: "Video" }],
  },
  {
    title: "Color Hunt",
    tags: ["android"],
    image: "/images/CH3.PNG",
    description:
      "3D open-world survival game with physics-based player control, AI bots, and colour-hierarchy mechanics.",
    stack: ["Unity", "AI"],
    links: [{ icon: "bi bi-play-circle-fill", url: profile.socials.youtube, label: "Video" }],
  },
  {
    title: "AI Portfolio Assistant",
    tags: ["web"],
    image: "/images/salman.png",
    description:
      "This very portfolio: React + Vite, an Express API, and a Gemini-powered assistant that answers questions about my work.",
    stack: ["React", "Vite", "Express", "Gemini"],
    links: [
      { icon: "bi bi-github", url: "https://github.com/Salman17-cmd/salman-portfolio", label: "Code" },
    ],
  },
  {
    title: "Live Weather Forecaster",
    tags: ["web"],
    image: "/images/LWF.png",
    description:
      "Streamlit web app on the OpenWeather API showing live temperature and conditions for any city.",
    stack: ["Python", "Streamlit"],
    links: [
      { icon: "bi bi-github", url: "https://github.com/Salman17-cmd/Live-Weather-Forecaster", label: "Code" },
    ],
  },
  {
    title: "Face Recognition",
    tags: ["web"],
    image: "/images/b3.jpg",
    description:
      "Webcam face detection built on OpenCV, recognising and tracking faces in a live video stream.",
    stack: ["Python", "OpenCV"],
    links: [
      { icon: "bi bi-github", url: "https://github.com/Salman17-cmd/FaceRecogination", label: "Code" },
    ],
  },
];

export const services = [
  {
    icon: "bx bx-vr",
    title: "VR / AR Development",
    text: "Standalone Quest 2/3 apps on XR Toolkit and MRTK, AR experiences on AR Foundation and Vuforia — built to hold frame budget on device.",
    link: "/game-dev-experience",
  },
  {
    icon: "bx bx-network-chart",
    title: "Multiplayer & Streaming",
    text: "Lobby/Relay and Netcode sessions, Photon PUN rooms, and Unity Render Streaming pipelines with Node signaling and STUN/TURN.",
    link: "/resume",
  },
  {
    icon: "bx bx-bot",
    title: "AI Avatars & Lip-Sync",
    text: "Conversational avatars that speak and answer questions, mapping Azure TTS visemes to facial blendshapes through a JSON-driven framework.",
    link: "/resume",
  },
  {
    icon: "bx bx-window-alt",
    title: "Node.js Web & Tooling",
    text: "Express APIs, React front-ends and developer tooling — including rrweb session capture and replay for reproducing exactly what a user did in the browser.",
    link: "/resume",
  },
  {
    icon: "bx bx-tachometer",
    title: "Performance Optimization",
    text: "LODs, static/dynamic batching, occlusion culling, baked lightmaps, mobile shaders and profiling to hit 72/90 FPS on standalone headsets.",
    link: "/game-dev-experience",
  },
];

export const techMarquee = [
  "Unity", "C#", "Meta Quest 3", "XR Toolkit", "MRTK", "Netcode for GameObjects",
  "UGS Lobby & Relay", "Photon PUN", "Unity Render Streaming", "WebRTC", "Azure TTS",
  "AR Foundation", "Vuforia", "WebGL", "Node.js", "Express", ".NET", "rrweb", "React", "Shader Graph", "Jira", "DVC", "MCP",
];
