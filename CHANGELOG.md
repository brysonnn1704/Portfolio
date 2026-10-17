# CHANGELOG

All notable changes and architectural decisions made during the autonomous portfolio redesign.

## [2.0.0] - 2026-10-17

### Phase 1: Inspection & Baseline Setup
- **Branch Management**: Created safety backup branch `backup/pre-redesign` and switched to active working branch `feat/redesign`.
- **Baseline Audit**: Executed automated Lighthouse audit on existing site (`Performance: 91`, `Accessibility: 82`, `Best Practices: 96`, `SEO: 91`).
- **Inspection of Existing Assets & Content**:
  - Preserved existing Formspree endpoint (`https://formspree.io/f/mreazlbk`), contact email (`brysoncollege12345@gmail.com`), and YouTube showcase video (`p54ananMxlM` / `@sauceop8165`).
  - Discovered full catalog of public GitHub repositories for `brysonnn1704`, including live production apps:
    - **RAKSHA-ZONE**: GIS-enabled multi-hazard relocation platform (Live on Vercel: `https://raksha-zone.vercel.app`)
    - **TrainWise Mumbai**: Commuter guide for Mumbai local trains, metro & buses (Live on Vercel: `https://trainwise-mumbai.vercel.app`)
    - **Crave**: Food delivery & discovery app with OpenStreetMap data (Live on Vercel: `https://crave-food-delivery-rho.vercel.app`)
    - **Digi Sathi** (`digital-literacy-app`): Elderly digital literacy offline-first platform
    - **BankMANCRCE**: JavaFX + MySQL banking application
    - **Face2Beats**: Biometric facial recognition attendance system
  - Preserved original photo asset `profile.jpg`.
- **Design Inspiration Analysis**:
  - Analyzed `https://mildsugardesign.jp/`: soft warm pastel tones (`#FAF8F5`, `#FE9A22`), playful Japanese typography, clean Bento grid, subtle cursor follower, friendly conversational tone ("Hey! 🤝"), numbered case studies, and micro-interactions.
- **Documentation**: Generated initial `PLAN.md` documenting inspection findings, audit scores, and redesign roadmap.

### Phase 2: Redesign Customized for Bryson
- **Japanese Design Sensibility**:
  - Designed warm paper background (`#FAF8F5`) and nocturnal dark studio mode (`#141312`) using CSS custom properties.
  - Implemented bilingual Japanese sub-labels (`作品 Work`, `スキル Skills`, `自己紹介 About`, `映像制作 Video`, `連絡 Contact`) and friendly greeting ("Hey! 🤝 こんにちは").
  - Paired geometric display font (`Outfit`) with clean body typography (`Plus Jakarta Sans`).
- **Distinctive Hero Section**:
  - Clear identity articulating Bryson's hybrid strength: Computer Engineering student, UI/UX Designer, and Front-End Developer.
  - Real-time local Mumbai clock (`IST`) updating every second.
  - Responsive avatar featuring Bryson's photograph framed with organic morphing border and interactive floating tech stickers (`✨ Figma & UI/UX`, `⚡ React & Next.js`, `🛡️ Security & Cloud`).
  - Quick action cluster: Explore Work, Get in Touch, 1-Click Copy Email, and Download Resume.
- **Project Showcase (Mild Sugar "Cases" Treatment)**:
  - 6 featured case studies with prominent Japanese numbering (`01`, `02`, `03`...):
    1. RAKSHA-ZONE (NDRF SIH26191 GIS Platform)
    2. Digi Sathi (Inclusive elderly digital literacy PWA)
    3. TrainWise Mumbai (m-Indicator inspired transit companion)
    4. Crave Food Delivery (OpenStreetMap real venue app)
    5. BankMANCRCE (JavaFX + Google OAuth banking dashboard)
    6. Face2Beats (OpenCV real-time face recognition attendance system)
  - Created bespoke vector mockup graphics in `assets/projects/` for all 6 projects.
  - Built interactive category filtering ("All", "Web & UI/UX", "Civic & Emergency Tech", "Systems & Security").
  - Built interactive case study deep-dive modal dialogs with problem statements, engineering solutions, technical highlights, and direct live links.
- **Skills Bento Grid & Experience Timeline**:
  - 4 modular bento cards: UI/UX & Visual Design, Front-End Engineering, Backend & Cloud, Systems & Cybersecurity.
  - Career journey timeline highlighting SIH26191 leadership, Chrisel Technolab video editing internship, and B.Tech engineering studies.
- **Video & Motion Graphics Showcase**:
  - Embedded video showcase connecting Bryson's motion graphics experience from Chrisel Technolab and YouTube channel `@sauceop8165`.
  - Implemented lightweight interactive video facade to defer third-party scripts until playback, preserving Core Web Vitals.
- **Contact & Footer**:
  - Fully accessible Formspree form with live client-side validation and feedback states.
  - 1-Click "Copy Email" button with smooth animated toast feedback.

### Phase 3: Functional & Performance Improvements
- **Image Optimization**:
  - Generated modern WebP formats (`profile-300.webp`, `profile-450.webp`) with multi-resolution `<picture>` tags.
  - Preloaded critical LCP hero image with `fetchpriority="high"`.
- **CSS & JS Minification**:
  - Compiled and minified production bundles `style.min.css` (26.7 KB) and `main.min.js` (14.4 KB) with `esbuild`.
- **Accessibility & Contrast**:
  - Elevated contrast of all buttons and text to exceed WCAG 2.1 AA standards (button text over 10:1 ratio).
  - Fixed heading hierarchy (`h1` -> `h2` -> `h3`).
  - Configured `inert` and `hidden` attributes on modal and mobile drawer when closed to prevent hidden focus traps.
  - Implemented full `prefers-reduced-motion` overrides.
- **SEO & Social Metadata**:
  - Added full Open Graph & Twitter Card tags.
  - Generated 1200x630 `og-image.jpg` and `og-image.png`.
  - Added schema.org JSON-LD structured data (`Person` & `WebSite`).
  - Created `robots.txt` and `sitemap.xml`.
  - Created branded SVG favicon `favicon.svg`.
- **Vercel & Platform Deployment Config**:
  - Created `vercel.json` with security headers (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`) and immutable asset caching.
  - Created `package.json` with build scripts.

### Phase 4: Test & Fix Loop
- Completed 3 full iterative testing passes:
  - **Pass 1 Baseline**: Performance 91, Accessibility 82, Best Practices 96, SEO 91.
  - **Pass 2 Redesign**: Performance 81, Accessibility 92, Best Practices 100, SEO 100 (Identified video iframe payload, heading hierarchy, and contrast warnings).
  - **Pass 3 Final**: Performance **92**, Accessibility **100**, Best Practices **100**, SEO **100** (Resolved all issues with video facade, heading normalization, and minified production assets).

### Autonomous Decisions
1. **Retained & Elevated Existing Content**: Kept Bryson's actual Formspree endpoint, YouTube video, and Chrisel Technolab experience, while enriching his project portfolio with real repos (RAKSHA-ZONE, TrainWise Mumbai, Crave, Digi Sathi).
2. **Video Facade Strategy**: Deferring the YouTube player iframe until user clicks "Play" prevents Google third-party scripts from destroying mobile performance and FCP, yielding an instant initial page paint.
3. **Vanilla Architecture**: Chose zero-framework Vanilla HTML5/CSS/JS compiled with esbuild to guarantee instantaneous loading, maximum resilience, zero hydration overhead, and effortless dual-deployment to both Vercel and GitHub Pages.
