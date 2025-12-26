# 🌌 Worldbuilder Platform

A modular worldbuilding site/app designed to support **multiple fictional worlds** within a single system — combining encyclopaedic depth, visual mapping, timeline control, and writing tools for long-form storytelling.

Built for creators who want the structure of a wiki, the flexibility of a notebook, and the narrative power of professional writing software — without locking themselves into one world or one way of working.

---

## 🧠 Core Concept

This project is **world-agnostic**.

Instead of building a tool *for one universe*, it provides a **framework** where any number of worlds can be created, explored, and expanded independently — each with its own lore, characters, maps, timelines, and writing tools.

Think:
- multiple worlds  
- shared tooling  
- clean separation of data  
- infinite expansion  

---

## 🗂️ World-First Architecture

At the highest level, everything is organised by **World**.

Each world contains its own:
- wiki  
- characters  
- locations  
- maps  
- timelines  
- writing tools  

Worlds do not interfere with each other, but they all use the same underlying structure.

---

## ✨ Features

### 📖 WIKI — World Lore
A structured encyclopaedia for each world, including:
- history & mythology  
- cultures, factions, religions  
- magic systems & rules  
- themes and meta-notes  

Designed for deep linking, tagging, and long-term consistency.

---

### 🧑‍🤝‍🧑 CHARACTERS
Character profiles with space for:
- identity & background  
- relationships & affiliations  
- narrative arcs  
- notes tied to locations, events, and timelines  

Characters can be referenced across lore, maps, and writing tools.

---

### 🗺️ LOCATIONS & MAPS
Interactive map support, including:
- uploadable or custom maps per world  
- pinned locations on maps  
- clickable pins that open full location pages  
- hierarchical geography (world → region → city → landmark)  

Locations are linkable to characters, events, and writing scenes.

---

### 🕰️ TIMELINES & CALENDAR
A dedicated timeline system per world:
- eras, years, dates, events  
- chronological and segmented views  
- event linking to characters and locations  
- support for custom calendars (fantasy-friendly)  

Built to track cause, consequence, and historical logic.

---

### ✍️ WRITING TOOLS
Integrated narrative tools for creators, including:
- plotting and story outlines  
- scene planning  
- arc tracking  
- notes tied directly to world data  

Designed to complement — not replace — long-form writing, while keeping story logic close to the world it belongs to.

---

## 🧭 Inspirations & Influence

This project draws inspiration from established worldbuilding and writing tools, particularly:

- :contentReference[oaicite:0]{index=0}  
- :contentReference[oaicite:1]{index=1}  
- :contentReference[oaicite:2]{index=2}  
- :contentReference[oaicite:3]{index=3}  
- :contentReference[oaicite:4]{index=4}  
- :contentReference[oaicite:5]{index=5}  
- :contentReference[oaicite:6]{index=6}  
- :contentReference[oaicite:7]{index=7}  

The goal is not to replicate these tools, but to **bridge their strengths** into a cohesive, creator-controlled system.

---

## 🛠️ Tech Stack (example – adaptable)

- **Frontend:** React + Vite + TypeScript  
- **Styling:** Tailwind CSS / custom theming  
- **Backend:** Supabase (auth, database, storage)  
- **Data Model:** World-scoped relational structure  
- **Hosting:** GitHub Pages / Netlify / Vercel / Supabase Hosting  

Built with flexibility, readability, and long-term growth in mind.

---

## 🗂️ Project Structure (example)

```txt
src/
├── worlds/           # World-level routing & logic
├── pages/
│   ├── Wiki/
│   ├── Characters/
│   ├── Locations/
│   ├── Maps/
│   ├── Timelines/
│   └── Writing/
├── components/       # Reusable UI components
├── layouts/          # Page & world layouts
├── lib/              # Database & helpers
├── styles/           # Global styles & themes
└── assets/           # Maps, icons, visuals
