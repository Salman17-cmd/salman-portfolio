// src/data/portfolio.js
// Single source of truth for portfolio content; mirrors Salman Sadiq's CV.

export const profile = {
  name: "Salman Sadiq",
  title: "Unity Developer",
  subtitle: "VR, AR, Android & Multiplayer Systems",
  location: "Lahore, Punjab, Pakistan",
  email: "sadqq.salman@gmail.com",
  phone: "+92 303 4736071",
  cv: "/Files/Salman_Sadiq_CV.pdf",
  roles: [
    "Unity Developer",
    "VR / XR Engineer",
    "Multiplayer Systems Dev",
    "Android Game Developer",
    "AI Avatar & Lip-Sync Dev",
    "C# / .NET Developer",
  ],
  summary:
    "Unity Developer and Associate Software Engineer with 2 years building VR, AR, Android, multiplayer, and AI-driven applications. Core stack: Unity/C#, Meta Quest 2/3, XR Toolkit, Unity Gaming Services, WebRTC, Azure TTS, Firebase, and .NET backends on Google Cloud.",
  summaryLong:
    "Recently shipped AI teachers with real-time lip-sync, a multiplayer VR meeting room for up to 10 Quest users, and Empire Avenue - an online Android board game released on itch.io with AdMob, Google Sign-In, and a self-hosted .NET game server.",
  socials: {
    github: "https://github.com/Salman17-cmd",
    linkedin: "https://linkedin.com/in/salman-sadiq-ab58a4248",
    youtube: "https://www.youtube.com/@ss.entertainment1717",
    instagram: "https://www.instagram.com/salmansadiq12/?hl=en",
    facebook: "https://www.facebook.com/salman.sadiq.7923",
    whatsapp: "https://wa.me/923034736071",
    itch: "https://sadqqsalman.itch.io/empire-avenue",
  },
};

export const stats = [
  { value: "2+", label: "Years building XR", icon: "bx bx-briefcase-alt-2" },
  { value: "10", label: "Concurrent Quest users", icon: "bx bx-group" },
  { value: "450+", label: "Tests on my game server", icon: "bx bx-check-shield" },
  { value: "15+", label: "Shipped projects", icon: "bx bx-rocket" },
];

export const experience = [
  {
    role: "Associate Software Engineer",
    company: "Ilmversity",
    location: "Lahore, Pakistan",
    period: "Oct 2025 - Sept 2026",
    current: false,
    summary:
      "Built the Da1Ilmverse enterprise VR campus for Meta Quest 3 (AI teachers, multiplayer meeting rooms, live screen streaming into VR), plus session recording and replay for the school portal on the web side.",
    points: [
      "Built conversational AI avatars with real-time lip-sync (three subject teachers for physics, chemistry and programming, plus a guide robot on each of six expo stalls), mapping Azure TTS visemes to facial blendshapes through a JSON-driven framework.",
      "Sustained the target 72/90 FPS across every Meta Quest 3 scene using LODs, static/dynamic batching, occlusion culling, baked lightmaps, and shader-driven effects.",
      "Engineered a multiplayer VR meeting room for up to 10 concurrent Quest users on Unity Gaming Services (Lobby and Relay) and Netcode for GameObjects, with Vivox positional voice chat.",
      "Built session recording and replay for the school admin portal: rrweb captures DOM events (not video) in retrying chunks, a Node.js API gzips them into AWS S3 with 30-day retention, and the super-admin panel can list, replay, delete, or download a recording as a self-contained offline HTML player.",
      "Integrated Unity Render Streaming with WebRTC to stream a presenter's browser screen into VR, building the Node signaling server, STUN/TURN configuration, and Firebase-backed client log collection that pinpointed why cross-network viewers failed to connect.",
      "Resolved the AI, TTS and STT provider and its credentials at runtime from Firebase Remote Config rather than baking them into the build, so providers can be switched and keys rotated without shipping a new APK.",
      "Implemented in-world scene transitions that carry a visitor from a stall's miniature model into that model's full-scale environment to explore it.",
      "Built interactive VR learning modules: an in-world transform replay system with cinematic cameras and narration for physics lessons, a drag-and-drop block-coding robot puzzle that exports the program as real source code, and a 118-element periodic table that builds each atom from its own data.",
      "Added Firestore-backed leaderboards across the physics and chemistry level flows, ranking student scores between sessions.",
      "Integrated Model Context Protocol (MCP) tooling into the Unity Editor for automated scene inspection and asset edits, and implemented Data Version Control (DVC) to version AI datasets and model artifacts.",
      "Delivered across two-week Jira sprints, reviewing every merge and tracking cross-team dependencies in Asana.",
    ],
    stack: ["Unity", "C#", "Meta Quest 3", "Azure TTS", "Firebase", "UGS Lobby & Relay", "Netcode", "Vivox", "WebRTC", "Node.js", "AWS S3", "rrweb"],
  },
  {
    role: "Games & VR Developer",
    company: "UET Game Studio",
    location: "Lahore, Pakistan",
    period: "Apr 2024 - Sept 2025",
    current: false,
    summary:
      "Shipped Unity titles across VR, mobile, PC and WebGL, from vehicle physics to networked shooters, and set up the studio's branching workflow.",
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
    period: "2021 - 2023",
    note: "Advanced computing and software engineering, with a graduation project in vehicle physics simulation.",
  },
  {
    degree: "BSc in Computer Science and Double Math",
    school: "University of the Punjab",
    period: "2018 - 2020",
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
    title: "AR / VR",
    icon: "bx bx-vr",
    skills: ["XR Toolkit", "MRTK", "Meta Quest 2/3", "AR Foundation", "Vuforia", "VR Interaction Systems"],
  },
  {
    title: "Multiplayer & Web",
    icon: "bx bx-network-chart",
    skills: ["Unity Gaming Services (Lobby, Relay)", "Netcode for GameObjects", "Photon PUN", "Vivox Voice", "Server-Authoritative Multiplayer", "WebSockets", "Unity Render Streaming", "WebRTC", "WebGL", "Vercel"],
  },
  {
    title: "Backend & Cloud",
    icon: "bx bx-server",
    skills: ["Firebase (Remote Config, Firestore)", ".NET / ASP.NET Core", "Node.js / Express", "REST APIs", "WebSockets", "Google Cloud Compute Engine", "AWS S3", "Linux (systemd)", "Caddy HTTPS", "MySQL"],
  },
  {
    title: "Android & Release",
    icon: "bx bxl-android",
    skills: ["IL2CPP / ARM64 Builds", "APK / AAB Signing", "Addressables", "AdMob Rewarded Ads", "UMP Consent", "Server-Side Verification", "Google Sign-In", "Play Policy Compliance", "itch.io Publishing"],
  },
  {
    title: "AI & Speech",
    icon: "bx bx-microphone",
    skills: ["Azure TTS / STT", "GPT & Gemini APIs", "Conversational AI Chat", "Viseme & Blendshape Pipelines"],
  },
  {
    title: "Optimization & Debugging",
    icon: "bx bx-tachometer",
    skills: ["Unity Profiler", "Frame Debugger", "Build Report", "ADB Logcat", "LODs", "Batching", "Occlusion Culling", "ASTC Compression", "Baked Lighting", "Mobile Shaders"],
  },
  {
    title: "Web & Session Replay",
    icon: "bx bx-window-alt",
    skills: ["rrweb Record & Replay", "rrweb-player", "S3 Presigned URLs", "React", "Vite"],
  },
  {
    title: "Tools & Practices",
    icon: "bx bx-wrench",
    skills: ["Visual Studio", "Git / GitHub", "Plastic SCM", "Jira", "Asana", "NUnit", "Model Context Protocol (MCP)", "Data Version Control (DVC)", "Agile / Scrum", "Code Reviews"],
  },
  {
    title: "Assets & Plugins",
    icon: "bx bx-package",
    skills: ["RCC", "UFPS", "Opsive Character Controller", "EasyRoads3D", "Blockade Labs SDK"],
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
  { name: ".NET & Node.js Backends", percent: 78, note: "Game servers, APIs, S3 & Google Cloud" },
  { name: "Android Release", percent: 80, note: "IL2CPP, AdMob, Sign-In, Play policy" },
  { name: "C++ & DSA", percent: 75, note: "Systems programming & algorithms" },
];

// ── Flagship work (Ilmversity + personal) ──
export const flagships = [
  {
    title: "Empire Avenue",
    platform: "Android · Solo project",
    org: "Personal Project",
    image: "/images/empire-avenue.jpg",
    status: "Released on itch.io · Online multiplayer live",
    statusType: "live",
    tagline:
      "An online 3D property-trading board game for 2-8 players, built solo in Unity 6 and released for Android on itch.io. Players join a room by code, empty seats are filled by server bots, and every move is validated by a self-hosted .NET 9 game server on Google Cloud.",
    highlights: [
      {
        name: "Online multiplayer is live",
        text: "Server-authoritative rooms over WebSockets: 4-character join codes or a public room list, host approval for new arrivals, house rules (seats, starting money, time limit), and player-to-player trading. The server rolls the dice and validates every command; clients replay the same deterministic engine and resync from a snapshot if they drift.",
      },
      {
        name: "Reconnect & bots",
        text: "A dropped player gets the same seat back with a snapshot via a per-seat reconnect token, rooms persist across server restarts, and server bots fill empty seats (or take a disconnected player's turn), so one person is enough for a full table.",
      },
      {
        name: "One rulebook, three homes",
        text: "All game rules live in a Unity-free C# package shared by the Unity client, the ASP.NET Core server and the test runner, covered by 450+ NUnit tests.",
      },
      {
        name: "Self-hosted on Google Cloud",
        text: "A .NET 9 server on a Google Cloud VM (Linux, systemd, Caddy HTTPS/WSS, nightly backups). The server address is fetched at launch, so it can move without rebuilding the game.",
      },
      {
        name: "Accounts & monetization",
        text: "Guest accounts, Google Sign-In through Android Credential Manager, cloud progress sync, in-app account deletion, and AdMob rewarded ads with UMP consent and server-side reward verification.",
      },
      {
        name: "527 MB → ~150 MB",
        text: "Profiled with the Profiler, Frame Debugger, Build Report and logcat: 202 materials moved to Simple Lit, ASTC compression, texture and mesh budgets, baked occlusion and Addressables. Result: 60 FPS on the board with zero janky frames.",
      },
      {
        name: "Three country editions",
        text: "Pakistan, United Kingdom and United States boards defined in JSON, 8 custom 3D pawns, physics dice, a living low-poly menu city, and a Google Play policy audit (target SDK 36, 16 KB page size) with 800 MB of art versioned in DVC.",
      },
    ],
    stack: ["Unity 6", "C#", ".NET 9", "WebSockets", "Google Cloud", "AdMob", "Google Sign-In", "NUnit", "DVC"],
    links: [
      { icon: "bx bx-joystick", url: "https://sadqqsalman.itch.io/empire-avenue", label: "Play on itch.io" },
      { icon: "bi bi-youtube", url: "https://youtu.be/sfnRRqS0i98", label: "Watch Demo" },
    ],
  },
  {
    title: "Da1Ilmverse VR Campus",
    platform: "Meta Quest 3",
    org: "Ilmversity",
    image: "/images/da1ilmverse.png",
    logo: true,
    tagline:
      "An enterprise VR campus delivered as one product across several environments, built for Meta Quest 3.",
    highlights: [
      {
        name: "V Campus",
        text: "An explorable campus tuned for standalone VR, holding 72/90 FPS with LODs, batching, occlusion culling and baked lighting, with a dedicated-server shared world for up to 16 players.",
      },
      {
        name: "AI Classroom",
        text: "Three AI subject teachers lip-sync to their own speech and answer student questions through conversational chat, with the AI and speech providers selected at runtime through Firebase Remote Config.",
      },
      {
        name: "Multiplayer Meeting Room",
        text: "Up to 10 users join by 6-digit code on UGS Lobby & Relay with Vivox positional voice, and a presenter's browser screen is streamed live into VR over WebRTC.",
      },
      {
        name: "Interactive learning modules",
        text: "Physics lessons replayed in-world with cinematic cameras and narration, a drag-and-drop block-coding robot puzzle that exports real source code, and a 118-element periodic table that builds each atom from data, with Firestore leaderboards.",
      },
    ],
    stack: ["Unity / C#", "Meta Quest 3", "Azure TTS", "Firebase", "UGS Lobby & Relay", "Netcode", "Vivox", "WebRTC"],
  },
  {
    title: "Da1Expo Hall",
    platform: "Meta Quest 3",
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
        text: "A stall button carries the visitor into that model's full-scale environment, stepping from a resort miniature into the resort itself.",
      },
      {
        name: "JSON-driven framework",
        text: "One reusable lip-sync and dialogue framework configures every avatar without touching code.",
      },
    ],
    stack: ["Unity / C#", "Meta Quest 3", "Azure TTS", "AI Chat", "Blendshapes"],
  },
  {
    title: "Session Recording & Replay",
    platform: "Web · Node.js",
    org: "Ilmversity",
    image: "/images/session-recording.svg",
    tagline:
      "Screen-activity recording for the school admin portal, so the support team can see exactly what an admin did before reporting an issue. It records DOM events, not video, so a 10-minute session is only a few megabytes.",
    highlights: [
      {
        name: "Capture that survives crashes",
        text: "rrweb starts recording on login and ships events in small chunks every few seconds with automatic retries, so a closed tab or crashed browser loses nothing already sent.",
      },
      {
        name: "Node.js + AWS S3 pipeline",
        text: "The ingest API gzips each chunk (85-93% smaller) into S3, keeps session and chunk metadata in each school's own database, enforces size and rate limits, and deletes everything after 30 days.",
      },
      {
        name: "Replay, delete, download",
        text: "The super-admin panel lists and replays a school's recordings; the download endpoint assembles every chunk plus a vendored rrweb-player into one self-contained HTML file that plays fully offline.",
      },
      {
        name: "Production debugging",
        text: "Traced a prod outage where recordings were saved but never visible to a missing per-school API credential, and shipped an idempotent tenant migration that restored every historical recording. Also moved the oversized-chunk check ahead of body parsing so bad uploads are rejected before a byte is parsed.",
      },
    ],
    stack: ["rrweb", "Node.js", "Express", "AWS S3", "MySQL", "Multi-tenant", "REST APIs"],
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
    tags: ["android"],
    image: "/images/empire-avenue.jpg",
    status: "Released · Online multiplayer",
    statusType: "live",
    description:
      "Online Android board game for 2-8 players, released on itch.io: join rooms by code, server bots fill empty seats, and a self-hosted .NET 9 server on Google Cloud validates every move. Google Sign-In, cloud saves, AdMob rewarded ads, and 450+ NUnit tests on a shared C# rules engine.",
    stack: ["Unity 6", "C#", ".NET 9", "WebSockets", "Google Cloud", "AdMob"],
    links: [
      { icon: "bx bx-joystick", url: "https://sadqqsalman.itch.io/empire-avenue", label: "Play on itch.io" },
      { icon: "bi bi-youtube", url: "https://youtu.be/sfnRRqS0i98", label: "Demo" },
    ],
    featured: true,
  },
  {
    title: "Session Recording & Replay",
    tags: ["web"],
    image: "/images/session-recording.svg",
    description:
      "rrweb recording for a multi-tenant school portal: DOM events stream in chunks to a Node.js API, are gzipped into AWS S3, and can be replayed, deleted, or downloaded as a self-contained offline HTML player from the super-admin panel.",
    stack: ["rrweb", "Node.js", "AWS S3", "MySQL"],
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
      "VR zombie shooter with cinematic sequences, particle effects, and immersive environment design, published on Google Play.",
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
      "AR furniture placement for Android using AR Foundation, using plane detection and touch gestures to move, rotate and scale.",
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
      "Multiplayer zombie shooter on UFPS and Photon PUN with lobbies, wave spawning, ragdolls, and cinematics.",
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
    text: "Standalone Quest 2/3 apps on XR Toolkit and MRTK, AR experiences on AR Foundation and Vuforia, built to hold frame budget on device.",
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
    text: "Express APIs, React front-ends and developer tooling, including rrweb session recording streamed to AWS S3, with replay and offline HTML download for support teams.",
    link: "/resume",
  },
  {
    icon: "bx bxl-android",
    title: "Android Games & Release",
    text: "Online Android games end to end: .NET game servers on Google Cloud, Google Sign-In, AdMob rewarded ads with consent and server-side verification, and Play-policy-ready builds.",
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
  "Vivox", "AR Foundation", "Vuforia", "WebGL", "Android", "AdMob", "Firebase", "Node.js", "Express", ".NET 9",
  "Google Cloud", "AWS S3", "rrweb", "React", "Shader Graph", "Jira", "DVC", "MCP",
];
