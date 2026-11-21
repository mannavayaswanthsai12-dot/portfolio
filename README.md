# Modern Developer Portfolio — Mannava Yaswanth Sai

A modern, professional, and fully responsive personal developer portfolio website designed for **Mannava Yaswanth Sai**, built with **React.js 19**, **Vite**, **HTML5**, **CSS3**, and **JavaScript (ES6+)**.

---

## 🌟 Candidate Overview

- **Name:** Mannava Yaswanth Sai
- **Role:** Computer Science Student & Aspiring Developer
- **Degree:** B.Tech in Computer Science and Engineering (CSE - CIC)
- **Institution:** VVITU
- **Current Academic Year:** 3rd Year (Class of 2028)
- **Cumulative GPA:** 7.5 / 10.0
- **Location:** Manipuram Bridge, Guntur, Andhra Pradesh, India
- **Email:** [mannavayaswanthsai12@gmail.com](mailto:mannavayaswanthsai12@gmail.com)
- **Phone:** [+91 9515727611](tel:+919515727611)
- **GitHub:** [https://github.com/mannavayaswanthsai12-dot](https://github.com/mannavayaswanthsai12-dot)
- **LinkedIn:** [https://www.linkedin.com/in/mannava-yaswanth-sai-2b0300349/](https://www.linkedin.com/in/mannava-yaswanth-sai-2b0300349/)
- **Live Website:** [https://mannava-yaswanth-sai-portfolio.vercel.app](https://mannava-yaswanth-sai-portfolio.vercel.app)

---

## ✨ Website Features & Design Highlights

1. **Modern Dark Theme Aesthetic:**
   - Deep navy/black background (`#070913`, `#0c1222`) accented with luminous blue, cyan (`#38bdf8`), indigo (`#6366f1`), and purple (`#a855f7`) gradients.
   - Glassmorphic panels with subtle glowing borders and backdrop blur.

2. **Hero Section with Dynamic Typing Animation:**
   - Live character-by-character typewriter effect cycling through roles: *Computer Science Student*, *Aspiring Software Developer*, *Java & DSA Enthusiast*, *Full Stack Web Explorer*.
   - Quick pills highlighting VVITU, 7.5 CGPA, and Guntur location.
   - Direct interactive social profile pills.

3. **About Me Section:**
   - Concise professional biography.
   - Core value pillars: *Algorithmic Foundations*, *Modern Web Engineering*, and *Disciplined Growth*.
   - Comprehensive bio data card detailing institution, year, branch, location, and contacts.

4. **Interactive Technical Skills Grid:**
   - Category filtering (All, Programming Languages, Frontend Development, Frameworks, Backend).
   - Technology cards for **C**, **Java**, **Python**, **HTML**, **CSS**, **JavaScript**, **React.js**, and **Express.js**.
   - Custom SVG brand icons, proficiency indicators, and hover glow effects.

5. **Academic Standing & Education:**
   - Detailed VVITU B.Tech CSE (CIC) card with high-visibility 7.5 CGPA achievement badge.
   - Core curriculum milestones and course highlights.

6. **Structured Learning & Courses:**
   - Dedicated modules for **Data Structures and Algorithms with Java** and **Programming Fundamentals with C**.
   - Detailed breakdown of topics covered (memory allocation, pointers, Big-O, linked lists, trees, graphs).

7. **Modular Projects Showcase & Roadmap:**
   - Clean, modular project cards ready to be updated with new projects.
   - Active development roadmap tags and direct links to GitHub repositories.

8. **Contact & Social Profiles:**
   - Clickable direct email (`mailto:`) and phone (`tel:`) buttons.
   - Interactive inquiry form that automatically generates a formatted mail draft.
   - Direct links to GitHub and LinkedIn.

9. **Interactive Resume Modal:**
   - Quick-access modal triggered by "Resume" buttons across the navbar and hero section.
   - Printable CV preview with option to print/save as PDF or request an updated copy via email.

10. **100% Responsive Design:**
    - Seamlessly adapts across desktops, laptops, tablets, and mobile smartphones.
    - Mobile slide-out drawer menu with smooth backdrop blur.

---

## 📁 Project Folder Structure

```text
portfolio/
├── index.html                   # HTML entry point with fonts & meta tags
├── package.json                 # Dependencies and scripts (React 19, Vite)
├── vite.config.js               # Vite build configuration
├── README.md                    # Setup and execution guide
├── public/
│   └── favicon.svg              # Custom modern monogram neon favicon
└── src/
    ├── main.jsx                 # React root renderer
    ├── App.jsx                  # Main application composition
    ├── index.css                # Global design system & animations
    ├── components/
    │   ├── Navbar.jsx           # Glassmorphic header & mobile navigation
    │   ├── Hero.jsx             # Hero section with typing effect & terminal
    │   ├── About.jsx            # About me & profile facts
    │   ├── Skills.jsx           # Filterable technical skill cards
    │   ├── Education.jsx        # VVITU B.Tech & 7.5 CGPA badge
    │   ├── Learning.jsx         # DSA with Java & C programming courses
    │   ├── Projects.jsx         # Modular project roadmap showcase
    │   ├── Contact.jsx          # Contact channels & mail form
    │   ├── Footer.jsx           # Footer links & copyright
    │   └── ResumeModal.jsx      # Resume modal with print/PDF support
    ├── data/
    │   └── portfolioData.js     # Single source of truth for all portfolio data
    └── utils/
        └── icons.jsx            # High-performance inline SVG icons
```

---

## 🚀 How to Run the Project in Visual Studio Code

### Step 1: Open the Project in VS Code
1. Open **Visual Studio Code**.
2. Go to **File** → **Open Folder...**
3. Select the `portfolio` folder (e.g. `d:\4765\portfolio`).

### Step 2: Open the Integrated Terminal
- Press ``Ctrl + ` `` (Backtick) or click **Terminal** → **New Terminal** in the top menu bar.

### Step 3: Install Dependencies
In the terminal, run:
```bash
npm install
```
*(This will install React, React-DOM, and Vite development tooling)*.

### Step 4: Start the Development Server
Run:
```bash
npm run dev
```

### Step 5: View the Website
- The terminal will display a local URL:
  ```text
  ➜  Local:   http://localhost:3000/
  ```
- Hold `Ctrl` and click the link, or open your web browser and navigate to `http://localhost:3000`.

---

## 🛠️ Production Build & Deployment

To create an optimized production build:
```bash
npm run build
```
The production bundle will be generated in the `dist/` directory, ready to deploy to any hosting provider (Vercel, Netlify, GitHub Pages, or Render).

To preview the production build locally:
```bash
npm run preview
```

---

## 📝 How to Update Information

All data is cleanly separated from UI logic in **`src/data/portfolioData.js`**:
- **Personal Details:** Edit `portfolioData.personal` (email, phone, location, bio).
- **Projects:** Add or edit entries in the `portfolioData.projects` array as you build new projects.
- **Skills:** Add new technical tools or languages to the `portfolioData.skills` array.
- **Courses:** Add new certifications or courses to the `portfolioData.courses` array.

Changes take effect instantly via Vite's Hot Module Replacement (HMR).

---

© 2025 Mannava Yaswanth Sai. All rights reserved.
