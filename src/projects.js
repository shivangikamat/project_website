import {
  BrainCircuit,
  Building2,
  ChartCandlestick,
  CircleDollarSign,
  Cpu,
  Gamepad2,
  GraduationCap,
  Scissors,
} from "lucide-react";

export const projects = [
  {
    id: "cs2-pricing",
    title: "CS2 Skin Pricing Algorithm",
    image: "/assets/price-empire.png",
    shortTitle: "CS2 Skins",
    github: "https://github.com/shivangikamat/pricing-algorithm",
    icon: CircleDollarSign,
    buildingClass: "building-bank",
    roomTheme: "theme-mint",
    summary:
      "A machine learning pricing system that predicts safer CS2 skin purchase prices and flags risky skins using historical market behavior.",
    details: [
      "Random Forest regression for safe price prediction with 95.85% R2 accuracy.",
      "SVM-based risk classification with 98.66% accuracy.",
      "Hard 3-day minimum price cap to avoid overpricing during sudden market drops.",
      "Flask query interface over a database of 26,835+ skins.",
    ],
    deepDive: {
      context:
        "Developed specifically for a skin-selling company to automate inventory valuation and reduce exposure to fast-moving market risk.",
      aim:
        "Create a secure financial ecosystem for Counter-Strike 2 skin trading by predicting safe prices that protect the company from volatility.",
      objective:
        "Build a machine learning pipeline that identifies skins at low risk of price crashes and caps their suggested value based on recent historical lows.",
      technicalDepth: [
        "Compares five ML models side-by-side, including Random Forest regression with 95.85% R2 accuracy and SVM classification with 98.66% accuracy.",
        "Implements a strict 3-day price cap so safe prices never exceed the minimum price from the last 3 days.",
        "Processes 26,835+ skins with pandas and scikit-learn to extract features, generate stats, and support pricing decisions.",
      ],
    },
    tech: ["Python", "Flask", "scikit-learn", "pandas", "Random Forest", "SVM"],
  },
  {
    id: "strain",
    title: "STRAIN",
    image: "/assets/STRAIN.png",
    imageFit: "cover",
    imagePosition: "center 62%",
    shortTitle: "STRAIN",
    github: "https://github.com/shivangikamat/strain",
    live: "https://strain-frontend.onrender.com/",
    icon: BrainCircuit,
    buildingClass: "building-lab",
    roomTheme: "theme-teal",
    summary:
      "Stress Tracking and Response Analysis Intelligence Network for EEG-based emotion and screening prototypes.",
    details: [
      "FastAPI and React dashboard for analyzing Kaggle-style EEG features and DREAMER epochs.",
      "DREAMER export pipeline creates 14-channel, 256-sample sliding-window tensors.",
      "Subject-holdout VAD model with explanations and agent/API routing.",
      "Includes MCP tooling, 3D brain activity view, Docker Compose, and dashboard deep links.",
    ],
    deepDive: {
      aim:
        "Develop a non-clinical EEG-based emotion classification and stress-tracking system.",
      objective:
        "Use the DREAMER dataset to extract real multi-channel EEG epoch tensors for valence, arousal, and dominance prediction.",
      technicalDepth: [
        "Uses 2-second sliding windows with 50% overlap and optional 1-45 Hz bandpass filtering through MNE.",
        "Trains a subject-holdout VAD model with Ridge regression over Welch and channel-variance features for subject-safe evaluation.",
        "Combines a FastAPI orchestrator, Vite/React dashboard, 3D brain activity visualization, and Docker Compose services.",
      ],
    },
    tech: ["FastAPI", "React", "PyTorch-ready data", "MNE", "scikit-learn", "MCP"],
  },
  {
    id: "dressing-room",
    title: "Interactive Dressing Room Portfolio",
    image: "/assets/makeover.png",
    shortTitle: "Dressing Room",
    github: "https://github.com/shivangikamat/shivangi-portfolio-website",
    live: "https://www.shivangikamat.com",
    icon: Building2,
    buildingClass: "building-boutique",
    roomTheme: "theme-rose",
    summary:
      "A playful React portfolio where visitors click through a hand-designed dressing room instead of scrolling a static resume.",
    details: [
      "Clickable room objects reveal projects, education, experience, activities, and contact information.",
      "Built with React, TypeScript, Vite, TailwindCSS, React Router, and TanStack Query.",
      "Uses custom SVG assets designed in Figma for a personal storytelling feel.",
      "Includes curtain-style loading animations, tooltips, toasts, Vercel deployment, and analytics.",
    ],
    deepDive: {
      context:
        "Every UI element, decorative asset, and interactive object was crafted by hand in Figma to create a personal aesthetic.",
      aim:
        "Replace a static resume with a playful, immersive storytelling experience where visitors explore a virtual room.",
      objective:
        "Create a clickable environment where physical objects serve as portals to projects, education, experience, activities, and contact.",
      technicalDepth: [
        "Built with React, TypeScript, and Vite using custom UI components and interactive SVG assets.",
        "Uses TanStack React Query for data handling and custom curtain-style loading animations to preserve immersion.",
        "Maps room objects like wardrobe items, desk details, accessories, and decor to portfolio sections.",
      ],
    },
    tech: ["React", "TypeScript", "Vite", "TailwindCSS", "React Router", "Figma"],
  },
  {
    id: "lean-research",
    title: "AI for Theorem Proving",
    image: "/assets/lean.png",
    shortTitle: "Lean Research",
    github: "https://github.com/shivangikamat/ai-for-theorem-proving",
    icon: GraduationCap,
    buildingClass: "building-academy",
    roomTheme: "theme-violet",
    summary:
      "Research utilities for proof-state representations and tactic prediction workflows using Lean and LeanDojo.",
    details: [
      "Explores proof-state extraction, dataset generation, and tactic-action pairing.",
      "Uses LeanDojo to replay proofs and expose structured traces.",
      "Organized around setup, proof-state utilities, dataset generation, and LeanDojo integration modules.",
      "Designed as a bridge between Lean theorem proving and ML experiments.",
    ],
    deepDive: {
      aim:
        "Explore proof-state representations and tactic predictions within the Lean theorem prover.",
      objective:
        "Pair proof contexts with tactic actions to support experiments on automated mathematical reasoning.",
      technicalDepth: [
        "Uses LeanDojo to programmatically extract proof states and replay proofs from Lean source files.",
        "Includes utilities for manipulating proof states and generating structured datasets for machine learning workflows.",
        "Connects theorem-proving traces with ML-ready representations for tactic prediction research.",
      ],
    },
    tech: ["Lean", "Lake", "LeanDojo", "ML Research", "Dataset Generation"],
  },
  {
    id: "marketmind",
    title: "MarketMind",
    image: "/assets/marketmind.png",
    shortTitle: "MarketMind",
    github: "https://github.com/shivangikamat/hackonomics",
    icon: ChartCandlestick,
    buildingClass: "building-market",
    roomTheme: "theme-green",
    summary:
      "A browser-based stock market learning game where macro events reshape sectors and explain portfolio movement.",
    details: [
      "Lets players buy and sell stocks with virtual cash and track net worth over time.",
      "Simulates rate hikes, recession warnings, oil shocks, AI booms, and crash scenarios.",
      "Explains gains and losses in plain language based on sector exposure.",
      "Fully static MVP with trading logic, events, charts, and scenarios in vanilla web files.",
    ],
    deepDive: {
      aim:
        "Build a browser-based stock market learning game that teaches how macro events affect sectors and portfolios.",
      objective:
        "Simulate rate hikes, oil shocks, recessions, AI booms, and crashes to show how market narratives reshape portfolio performance.",
      technicalDepth: [
        "Includes a Trigger Market Event system that reprices stocks according to sector sensitivity.",
        "Explains portfolio gains and losses in plain language based on sector exposure and the latest event.",
        "Tracks net worth over time with a performance chart and includes scenario modes for different market environments.",
      ],
    },
    tech: ["HTML", "CSS", "JavaScript", "Charts", "Game Design", "Finance"],
  },
  {
    id: "ai-salon",
    title: "AI Hairstyle Salon",
    image: "/assets/ai-salon.png",
    imageFit: "cover",
    imagePosition: "center",
    shortTitle: "AI Salon",
    github: "https://github.com/shivangikamat/hairstyle-match",
    icon: Scissors,
    buildingClass: "building-salon",
    roomTheme: "theme-pink",
    summary:
      "A Gemini-powered Next.js app that analyzes a selfie and recommends hairstyles tailored to face shape, texture, and tone.",
    details: [
      "Selfie upload flow for face shape, hair texture, and skin tone analysis.",
      "Generates three personalized hairstyle recommendations with reasoning.",
      "Renders hairstyle previews onto the uploaded selfie while preserving identity and lighting.",
      "Built for the Gemini Hackathon using Gemini API image and text capabilities.",
    ],
    deepDive: {
      aim:
        "Create a beauty-tech application that uses Google's Gemini API for facial profiling and style visualization.",
      objective:
        "Analyze user selfies to detect face shape, hair texture, and skin tone, then provide three tailored recommendations with professional reasoning.",
      technicalDepth: [
        "Uses gemini-1.5-flash to profile face shape, hair texture, and skin tone from an uploaded selfie.",
        "Generates personalized hairstyle recommendations with explanation for why each style fits the user.",
        "Uses AI image editing to render suggested hairstyles onto the original photo while preserving identity and lighting.",
      ],
    },
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Gemini API"],
  },
  {
    id: "monte-carlo",
    title: "Monte Carlo Stock Simulator",
    image: "/assets/montecarlo.png",
    shortTitle: "Monte Carlo",
    github: "https://github.com/shivangikamat/stock-simulator",
    icon: Cpu,
    buildingClass: "building-tower",
    roomTheme: "theme-blue",
    summary:
      "A Python simulation project that models uncertainty through repeated random sampling and convergence analysis.",
    details: [
      "Generates random samples from probability distributions and aggregates repeated experiments.",
      "Visualizes probabilistic outcomes and convergence as simulation counts increase.",
      "Demonstrates stochastic techniques used in finance, physics, ML, and computer science.",
      "Built with NumPy, Matplotlib, and optional Jupyter notebook workflows.",
    ],
    deepDive: {
      aim:
        "Approximate complex numerical results and probabilistic outcomes through repeated random sampling.",
      objective:
        "Demonstrate how stochastic simulation can model uncertainty in finance, machine learning, and other complex systems.",
      technicalDepth: [
        "Uses pseudorandom number generators and large-scale simulation runs to approximate expected outcomes.",
        "Aggregates repeated experiments so estimates converge toward the true expected value.",
        "Visualizes probabilistic outcomes and convergence behavior with NumPy and Matplotlib.",
      ],
    },
    tech: ["Python", "NumPy", "Matplotlib", "Jupyter", "Simulation"],
  },
  {
    id: "jumping-jack",
    title: "Jumping Jack",
    image: "/assets/jumpingjack.png",
    shortTitle: "Jumping Jack",
    github: "https://github.com/shivangikamat/JumpingJack",
    icon: Gamepad2,
    buildingClass: "building-arcade",
    roomTheme: "theme-sunset",
    summary:
      "A Python/Pygame 2D platformer with jumping, coin collection, enemies, hazards, and an exit goal.",
    details: [
      "Tile-based world with platforms, moving enemies, lava hazards, coins, and exit gates.",
      "Player physics include velocity, gravity, collision detection, and smooth movement.",
      "Includes menus, restart flow, sound effects, background music, and sprite groups.",
      "Built to practice complete game loops, OOP structure, real-time input, and asset handling.",
    ],
    deepDive: {
      aim:
        "Build an interactive 2D platformer that explores real-time physics, collisions, and game loop handling.",
      objective:
        "Let players navigate obstacles, enemies, coins, and hazard zones through a tile-based world system.",
      technicalDepth: [
        "Built in Python and Pygame with object-oriented sprite management and collision detection.",
        "Implements gravity, velocity-based movement, jumping, enemy hazards, collectibles, and exit logic.",
        "Handles real-time event loops, menu flow, restart behavior, sound effects, and smooth animation states.",
      ],
    },
    tech: ["Python", "Pygame", "OOP", "Collision Detection", "Game Loops"],
  },
];
