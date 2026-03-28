export interface ProjectSection {
  title: string;
  items: string[];
  images?: string[];
}

export interface ProjectDetail {
  overview: string;
  sections: ProjectSection[];
}

export const projectDetails: Record<string, ProjectDetail> = {
  "crude-flow": {
    overview:
      "Crude Flow is a real-time global oil shipping intelligence dashboard that visualises live AIS vessel data on an interactive world map. It provides a unified operational view of global oil logistics by combining maritime tracking, geopolitical risk, and market data into a single platform. The goal was to transform fragmented data sources into a structured, real-time system that enables intuitive monitoring of global energy flows.",
    sections: [
      {
        title: "System Design",
        items: [
          "Live AIS tanker tracking at global scale",
          "Conflict zone overlays with dynamic threat levels",
          "Maritime chokepoint monitoring",
          "Commodity price tracking",
          "News aggregation with severity tagging",
        ],
      },
      {
        title: "Technical Implementation",
        items: [
          "Next.js 14 (App Router) with TypeScript",
          "Mapbox GL JS with GeoJSON + GPU-accelerated symbol layers",
          "WebSocket integration for AIS data streaming",
          "Server-side API proxying for secure key management",
          "Deployed on Vercel",
        ],
      },
      {
        title: "Key Engineering Features",
        items: [
          "Single WebSocket connection shared across all users",
          "Custom vessel classification engine (VLCC, LNG, etc.)",
          "High-performance rendering of thousands of simultaneous vessels",
          "API caching to operate entirely on free-tier infrastructure",
        ],
      },
      {
        title: "Challenges & Learning",
        items: [
          "Handling real-time data streams efficiently at scale",
          "Designing scalable frontend architecture for live updates",
          "Balancing performance with rich, layered visualisation",
        ],
      },
      {
        title: "Future Improvements",
        items: [
          "Historical playback of vessel routes",
          "Predictive analytics for congestion and delays",
          "Machine learning for anomaly detection",
        ],
      },
    ],
  },

  "friendly": {
    overview:
      "Friendly is a real-time, mobile-first web application designed to eliminate the friction of organising meetups. It replaces unstructured group chats with an intelligent system that automates scheduling, discovery, and coordination. The platform focuses on turning intent — \u2018we should meet\u2019 — into action.",
    sections: [
      {
        title: "Core Concept",
        items: [
          "Instead of asking \u2018Who\u2019s free?\u2019, Friendly calculates the answer",
          "Aggregates availability across users and detects overlaps automatically",
          "Suggests optimal meeting times without manual back-and-forth",
        ],
      },
      {
        title: "Key Features",
        items: [
          "Instant group creation with invite codes",
          "Real-time group chat",
          "Smart availability engine — core feature",
          "Live location sharing via Leaflet maps",
          "Friend discovery based on shared interests",
          "Session planning and RSVP system",
        ],
      },
      {
        title: "Technical Architecture",
        items: [
          "Next.js (App Router) with TypeScript and Tailwind CSS",
          "Framer Motion for smooth UI transitions",
          "Firebase Authentication with anonymous onboarding",
          "Firestore real-time database for live sync",
          "Fully serverless — no backend to manage",
        ],
      },
      {
        title: "Engineering Highlights",
        items: [
          "Real-time state synchronisation across all connected users",
          "Client-side availability algorithm for fast, local computation",
          "Seamless zero-friction authentication flow",
          "Scalable architecture with no infrastructure overhead",
        ],
      },
      {
        title: "Future Improvements",
        items: [
          "Advanced recommendation algorithms for meeting suggestions",
          "Calendar integrations (Google, Apple)",
          "Smarter social graph modelling",
        ],
      },
    ],
  },

  "storm-formation-analysis": {
    overview:
      "A data-driven system designed to analyse satellite imagery and weather data to detect early signs of storm formation. The project focuses on combining visual and environmental data to identify patterns associated with severe weather development.",
    sections: [
      {
        title: "Approach",
        items: [
          "Satellite imagery analysis of cloud formations",
          "Weather API integration for temperature, pressure, and humidity",
          "Visual analysis pipeline for detecting atmospheric patterns",
          "Targeting early identification of cumulonimbus development",
        ],
      },
      {
        title: "Technical Implementation",
        items: [
          "Python-based analysis system",
          "OpenWeatherMap API integration",
          "Satellite data ingestion and processing pipeline",
          "Image-based feature extraction and pattern analysis",
        ],
      },
      {
        title: "Engineering Focus",
        items: [
          "Combining visual and numerical environmental data",
          "Real-time data ingestion from live weather APIs",
          "Designing a modular pipeline ready for ML integration",
        ],
      },
      {
        title: "Challenges & Learning",
        items: [
          "Working with heterogeneous external APIs and data formats",
          "Handling and processing large satellite image datasets",
          "Designing a scalable and extensible analysis pipeline",
        ],
      },
      {
        title: "Future Improvements",
        items: [
          "Machine learning-based storm prediction model",
          "Real-time alert and notification system",
          "Integration of higher-resolution satellite data sources",
        ],
      },
    ],
  },

  "beam-deflection-rig": {
    overview:
      "An experimental system built to measure beam deflection under load and empirically determine the Young's modulus of a brass beam. The project combines physical experimentation with embedded data acquisition and analytical validation against theoretical models.",
    sections: [
      {
        title: "System Design",
        items: [
          "Brass beam mounted under controlled, incrementally applied loading",
          "Arduino-based sensor system for real-time deflection measurement",
          "Mechanical rig designed for repeatable and controlled experiments",
        ],
      },
      {
        title: "Technical Implementation",
        items: [
          "Arduino microcontroller with displacement sensing",
          "Custom data acquisition and serial logging pipeline",
          "Structured data export for comparison with Euler-Bernoulli theory",
        ],
      },
      {
        title: "Engineering Concepts",
        items: [
          "Mechanics of materials — elastic bending and beam theory",
          "Experimental determination of material properties",
          "Validation of theoretical models against physical measurements",
        ],
      },
      {
        title: "Challenges & Learning",
        items: [
          "Achieving measurement accuracy with low-cost sensors",
          "Minimising systematic and random experimental error",
          "Translating raw sensor data into meaningful engineering parameters",
        ],
      },
      {
        title: "Future Improvements",
        items: [
          "Higher-precision displacement sensors for improved accuracy",
          "Automated data logging and real-time graph plotting",
          "Expanded material testing across different beam types",
        ],
      },
    ],
  },

  "missile-trajectory-tracker": {
    overview:
      "A physics-based simulation tool for modelling guided missile trajectories and projectile motion. Implements full kinematic equations with real-time visualisation, allowing adjustable parameters to analyse trajectory behaviour, predict flight paths, and validate against ballistic models.",
    sections: [
      {
        title: "Core Features",
        items: [
          "Physics engine modelling thrust, drag, gravity, and guidance",
          "Adjustable launch parameters — angle, velocity, mass, drag coefficient",
          "Real-time 2D trajectory visualisation",
          "Ballistic prediction and accuracy analysis",
        ],
      },
      {
        title: "Technical Implementation",
        items: [
          "Python with NumPy for numerical simulation",
          "Matplotlib for real-time trajectory plotting",
          "Kinematic ODE integration using SciPy",
          "Parametric input system for scenario testing",
        ],
      },
      {
        title: "Engineering Concepts",
        items: [
          "Newtonian mechanics and equations of motion",
          "Aerodynamic drag modelling",
          "Numerical integration of differential equations",
          "Ballistic trajectory analysis",
        ],
      },
      {
        title: "Challenges & Learning",
        items: [
          "Accurately modelling drag at varying velocities",
          "Implementing stable numerical ODE solvers",
          "Validating simulation output against known ballistic data",
        ],
      },
      {
        title: "Future Improvements",
        items: [
          "3D trajectory simulation with wind and atmospheric effects",
          "Guided missile terminal phase modelling",
          "Interactive web-based frontend",
        ],
      },
    ],
  },

  "3d-printing-prototyping": {
    overview:
      "This project documents the modification and optimisation of my Ender 3 V2 3D printer, which I began working on at age 15. What started as a standard consumer printer evolved into a highly customised system through hardware upgrades, firmware modifications, and remote control integration. Each upgrade was approached as a subsystem improvement — identifying limitations, researching solutions, implementing independently, and iterating until the system performed reliably.",
    sections: [
      {
        title: "Raspberry Pi Integration — OctoPrint & Remote Monitoring",
        items: [
          "Installed and configured OctoPrint on a Raspberry Pi 3B+",
          "Connected the Pi to the printer via USB for real-time control",
          "Set up network access to control and monitor the printer remotely from any device",
          "Integrated a Raspberry Pi camera module for live video streaming of prints",
          "Outcome: printer fully controllable and monitorable from anywhere",
        ],
        images: ["/projects/3dprinter/pi-1.jpg", "/projects/3dprinter/pi-2.jpg"],
      },
      {
        title: "Custom 3D Printed Extruder Assembly",
        items: [
          "Designed and printed a custom extruder housing",
          "Installed upgraded cooling fans for both hotend and part cooling",
          "Replaced stock nozzle with a higher-quality alternative",
          "Ensured proper alignment and consistent filament flow",
          "Outcome: improved print quality, better layer consistency, more reliable extrusion",
        ],
        images: ["/projects/3dprinter/extruder-1.jpg"],
      },
      {
        title: "BLTouch Auto Bed Levelling",
        items: [
          "Mounted and wired BLTouch sensor into the control board",
          "Configured firmware to support automatic bed levelling",
          "Calibrated probe offsets and generated a bed mesh",
          "Outcome: significantly improved first-layer accuracy and reduced manual setup time",
        ],
        images: ["/projects/3dprinter/bltouch-1.jpg"],
      },
      {
        title: "Custom Firmware Compilation",
        items: [
          "Modified firmware configuration files to match upgraded hardware",
          "Enabled BLTouch support and advanced motion control settings",
          "Compiled and flashed custom firmware to the printer control board",
          "Validated system stability across multiple print sessions",
          "Outcome: fully tailored firmware improving both performance and flexibility",
        ],
        images: ["/projects/3dprinter/firmware-1.jpg"],
      },
      {
        title: "Extruder Upgrade",
        items: [
          "Removed stock extruder assembly and installed upgraded components",
          "Adjusted tension and alignment for optimal filament feeding",
          "Tested extrusion consistency across multiple material types and print lengths",
          "Outcome: more consistent extrusion and reduced risk of mechanical failure on long prints",
        ],
        images: ["/projects/3dprinter/extruder-upgrade-1.jpg", "/projects/3dprinter/extruder-upgrade-2.jpg"],
      },
      {
        title: "Technical Skills Developed",
        items: [
          "Embedded systems integration — Raspberry Pi and OctoPrint",
          "Firmware configuration and compilation",
          "Mechanical system modification and calibration",
          "Thermal and cooling optimisation",
          "Sensor integration and precision calibration",
          "System-level debugging and iterative improvement",
        ],
      },
    ],
  },

  "honda-civic-projects": {
    overview:
      "A collection of hands-on mechanical and electrical work carried out on a 2006 Honda Civic, approached as an integrated engineering system. Rather than following guides blindly, each task involved breaking down problems, testing assumptions, and applying structured reasoning to arrive at a working solution. This project highlights an ability to apply engineering thinking in real-world, imperfect conditions — diagnosing faults, understanding subsystem interactions, and implementing practical fixes.",
    sections: [
      {
        title: "Custom Head Unit Installation",
        items: [
          "Safely removed dashboard trim and factory head unit without damaging clips",
          "Identified and mapped wiring connections between factory harness and new unit",
          "Connected power, ground, and audio signal wiring correctly",
          "Mounted and secured the new unit with proper alignment and fitment",
          "Outcome: fully functional upgraded head unit installed independently",
        ],
        images: ["/projects/honda/head-unit-1.jpg", "/projects/honda/head-unit-2.jpg"],
      },
      {
        title: "Amplifier & Subwoofer System",
        items: [
          "Routed dedicated power cable from battery with inline fuse protection",
          "Selected and prepared a solid ground point to minimise electrical noise",
          "Connected RCA signal cables from head unit to amplifier",
          "Configured amplifier gain to balance performance and avoid distortion",
          "Outcome: clean, stable audio system with no interference or power issues",
        ],
        images: ["/projects/honda/subwoofer-1.jpg"],
      },
      {
        title: "Fuel Pump Diagnosis & Replacement",
        items: [
          "Observed symptoms — unreliable starting and inconsistent engine behaviour",
          "Eliminated battery, ignition, and relay causes through logical testing",
          "Narrowed fault to fuel delivery system via process of elimination",
          "Accessed, removed, and replaced faulty fuel pump assembly",
          "Outcome: engine reliability fully restored through structured fault diagnosis",
        ],
        images: ["/projects/honda/fuel-pump-1.jpg", "/projects/honda/fuel-pump-2.jpg"],
      },
      {
        title: "Throttle Body Cleaning & Maintenance",
        items: [
          "Removed intake components to access the throttle body",
          "Identified carbon deposits affecting airflow through the bore",
          "Cleaned the throttle body and reassembled the intake system",
          "Outcome: improved throttle response and smoother engine behaviour",
        ],
        images: ["/projects/honda/throttle-body-1.jpg"],
      },
    ],
  },

  "portfolio-website": {
    overview:
      "A custom-built engineering portfolio website designed to present technical projects in a clean, structured, and visually engaging format. Built with a strong focus on performance, design quality, and developer experience — the site itself is a demonstration of the technical skills it documents.",
    sections: [
      {
        title: "Design Goals",
        items: [
          "Aerospace and electronics-inspired visual theme",
          "Strong typographic hierarchy for technical readability",
          "Smooth, purposeful animations — not decorative",
          "Fully responsive across all device sizes",
        ],
      },
      {
        title: "Technical Stack",
        items: [
          "Next.js 16 with App Router and TypeScript",
          "Tailwind CSS v4 for utility-first styling",
          "Framer Motion for scroll-driven and entrance animations",
          "SVG-based airfoil streamline visualisation (pure JS, no canvas)",
          "Vercel deployment with Analytics and Speed Insights",
        ],
      },
      {
        title: "Key Features",
        items: [
          "Solari flip-board hero animation",
          "Göttingen 386 airfoil with animated skill streamlines",
          "Drifting SVG aircraft in hero parallax layer",
          "Hover-reveal project cards with image previews",
          "Functional contact form via Resend API",
        ],
      },
      {
        title: "Future Improvements",
        items: [
          "Case study write-ups for each major project",
          "Blog section for engineering notes and writeups",
          "Performance audit and Core Web Vitals optimisation",
        ],
      },
    ],
  },
};
