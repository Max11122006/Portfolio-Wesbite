# Portfolio Project Pages

---

# 🚀 Crude Flow — Real-Time Oil Shipping Intelligence Dashboard

## Overview
Crude Flow is a real-time global oil shipping intelligence dashboard that visualises live AIS vessel data on an interactive world map. It provides a unified operational view of global oil logistics by combining maritime tracking, geopolitical risk, and market data into a single platform.

The goal was to transform fragmented data sources into a structured, real-time system that enables intuitive monitoring of global energy flows.

---

## System Design

The platform is built as a single-page application that streams live vessel data and overlays multiple intelligence layers:

- Live AIS tanker tracking (global scale)
- Conflict zone overlays with dynamic threat levels
- Maritime chokepoint monitoring
- Commodity price tracking
- News aggregation with severity tagging

All components are designed to work together as a real-time “command centre” for oil logistics.

---

## Technical Implementation

- Next.js 14 (App Router) with TypeScript  
- Mapbox GL JS with GeoJSON + GPU-accelerated symbol layers  
- WebSocket integration for AIS data streaming  
- Server-side API proxying for secure key management  
- Deployed on Vercel  

---

## Key Engineering Features

- Single WebSocket connection shared across all users  
- Custom vessel classification engine (VLCC, LNG, etc.)  
- High-performance rendering of thousands of vessels  
- API caching to operate بالكامل on free-tier infrastructure  

---

## Challenges & Learning

- Handling real-time data streams efficiently  
- Designing scalable frontend architecture for live updates  
- Balancing performance with rich visualisation  

---

## Future Improvements

- Historical playback of vessel routes  
- Predictive analytics for congestion and delays  
- Machine learning for anomaly detection  

---

# 📱 Friendly — Smart Social Coordination Platform

## Overview
Friendly is a real-time, mobile-first web application designed to eliminate the friction of organising meetups. It replaces unstructured group chats with an intelligent system that automates scheduling, discovery, and coordination.

The platform focuses on turning intent (“we should meet”) into action.

---

## Core Idea

Instead of asking “Who’s free?”, Friendly calculates the answer.

It aggregates availability across users, detects overlaps, and suggests optimal meeting times automatically.

---

## Key Features

- Instant group creation with invite codes  
- Real-time group chat  
- Smart availability engine (core feature)  
- Live location sharing  
- Friend discovery based on interests  
- Session planning and RSVP system  

---

## Technical Architecture

Frontend:
- Next.js (App Router)  
- TypeScript  
- Tailwind CSS  
- Framer Motion  

Backend:
- Firebase Authentication (anonymous auth)  
- Firestore (real-time database)  

Additional:
- Leaflet for live maps  

---

## Engineering Highlights

- Fully serverless architecture  
- Real-time sync across all users  
- Client-side availability algorithm for fast computation  
- Seamless onboarding with zero-friction authentication  

---

## Challenges & Learning

- Designing intuitive UX for coordination  
- Building real-time systems with consistent state  
- Structuring scalable frontend architecture  

---

## Future Improvements

- Advanced recommendation algorithms  
- Calendar integrations  
- Smarter social graph modelling  

---

# 🌩 Storm Formation Analysis Tool

## Overview
A data-driven system designed to analyse satellite imagery and weather data to detect early signs of storm formation. The project focuses on combining visual and environmental data to identify patterns associated with severe weather.

---

## Approach

The system integrates:
- Satellite imagery (cloud formations)
- Weather APIs (temperature, pressure, humidity)
- Visual analysis of atmospheric patterns

The goal is to move toward automated detection of storm indicators such as cumulonimbus development.

---

## Technical Implementation

- Python-based system  
- Weather API integration (OpenWeatherMap)  
- Satellite data processing  
- Image-based analysis pipeline  

---

## Engineering Focus

- Combining visual and numerical data  
- Real-time data ingestion  
- Preparing system for future ML integration  

---

## Challenges & Learning

- Working with external APIs and data formats  
- Handling large image datasets  
- Designing a scalable analysis pipeline  

---

## Future Improvements

- Machine learning-based storm prediction  
- Real-time alert system  
- Higher-resolution satellite integration  

---

# ⚙️ Beam Deflection Measurement Rig

## Overview
An experimental system built to measure beam deflection under load and determine Young’s modulus of a material. The project combines physical experimentation with data acquisition and analysis.

---

## System Design

- Brass beam under controlled loading  
- Sensor-based measurement of deflection  
- Data collection for comparison with theoretical models  

---

## Technical Implementation

- Arduino-based sensing system  
- Data acquisition and processing  
- Mechanical setup for controlled loading  

---

## Engineering Concepts

- Mechanics of materials  
- Elastic deformation  
- Experimental validation of theory  

---

## Challenges & Learning

- Achieving accurate measurements  
- Minimising experimental error  
- Translating physical results into usable data  

---

## Future Improvements

- Higher precision sensors  
- Automated data logging  
- Expanded material testing  

---

# 🧠 Arduino Motion Tracking System

## Overview
A motion detection and response system built using Arduino, designed to detect movement and trigger real-time actions.

---

## Features

- Sensor-based motion detection  
- Real-time response system  
- Embedded logic for decision-making  

---

## Technical Implementation

- Arduino microcontroller  
- Sensor integration  
- Embedded C/C++ programming  

---

## Learning Outcomes

- Embedded systems development  
- Sensor integration  
- Real-time hardware control  

---

## Future Improvements

- Object tracking instead of detection  
- Computer vision integration  
- More advanced actuation systems  

---

# 🖥 Engineering Portfolio Website

## Overview
A custom-built portfolio website designed to showcase engineering projects in a clean, structured, and visually appealing format.

---

## Features

- Responsive design  
- Project-based layout  
- Optimised UI/UX for readability  

---

## Tech Stack

- HTML, CSS, JavaScript  
- Modern UI design principles  

---

## Focus

- Clear presentation of technical work  
- Strong visual hierarchy  
- Minimalist, professional design  

---

## Future Improvements

- Dynamic content loading  
- Blog / case study expansion  
- Performance optimisation  

---

# 🔧 Arduino Experimental Systems

## Overview
A collection of smaller Arduino-based builds focused on electronics, data acquisition, and control systems.

---

## Scope

- Sensor testing  
- Circuit prototyping  
- Embedded programming experiments  

---

## Skills Developed

- Circuit design  
- Debugging hardware systems  
- Rapid prototyping  

---

## Future Improvements

- Integration into larger systems  
- More complex control logic  
- IoT connectivity  

---