/**
 * Bryson P Almeida - Portfolio Main Interaction Script
 * Minimal, accessible, zero-dependency vanilla JS with smooth micro-interactions.
 */

// Project Case Study Details Data for Modal Deep Dives
const PROJECT_DETAILS = {
  'raksha-zone': {
    title: 'RAKSHA-ZONE — Multi-Hazard Relocation Platform',
    badge: 'SIH Finalist • Ministry of Home Affairs / NDRF',
    category: 'Civic & Emergency Tech',
    liveUrl: 'https://raksha-zone.vercel.app',
    githubUrl: 'https://github.com/brysonnn1704/RAKSHA-ZONE',
    problem: 'During extreme weather events such as the Wayanad landslides, disaster relief agencies face severe bottlenecks determining safe evacuation zones, measuring shelter carrying capacities, and avoiding hazard secondary cascades.',
    solution: 'Designed and engineered a GIS-powered decision-support engine that models real-time safe zones, automatically matches evacuees with shelters based on resource availability, and estimates lifeline supplies needed (water, medical, food rations).',
    techStack: ['TypeScript', 'React', 'Tailwind CSS', 'GIS Mapping', 'Decision Engine Algorithms', 'Vercel'],
    highlights: [
      'Interactive risk heatmaps and topographic danger contour visualization.',
      'Safe carrying capacity computation to prevent shelter overcrowding.',
      'Lifeline supply forecasting based on evacuee demographics and duration.',
      'Region-agnostic architecture demonstrated across multiple disaster regimes in India.'
    ]
  },
  'digi-sathi': {
    title: 'Digi Sathi (डिजी साथी) — Elderly Digital Literacy Platform',
    badge: 'Offline-First PWA • Inclusive Design',
    category: 'Civic & Emergency Tech',
    liveUrl: null,
    githubUrl: 'https://github.com/brysonnn1704/digital-literacy-app',
    problem: 'Millions of elderly and low-literacy citizens struggle with digital payment scams, fear of making costly mistakes on apps like UPI or WhatsApp, and language barriers in modern smartphone interfaces.',
    solution: 'Built an offline-first, highly accessible digital training companion. Features step-by-step multilingual voice assistance (Hindi, Marathi, English), simulated zero-risk sandbox environments for UPI payments and WhatsApp, automated scam URL/SMS detection, and one-tap emergency SOS.',
    techStack: ['JavaScript', 'HTML5/CSS3', 'PWA / Service Workers', 'Speech Synthesis API', 'Heuristic Scam Classifier', 'Local Storage'],
    highlights: [
      'Simulated UPI payment flow where seniors can practice without risking real money.',
      'Multilingual audio voiceover guidance for every interaction.',
      'Heuristic scam message and suspicious URL analyzer to spot phishing.',
      'Emergency SOS one-click beacon sending location coordinates to saved family contacts.',
      'Milestone badges and downloadable completion certificates to build confidence.'
    ]
  },
  'trainwise': {
    title: 'TrainWise Mumbai — Multimodal Transit Companion',
    badge: 'Live Production • High Usability',
    category: 'Web & UI/UX Apps',
    liveUrl: 'https://trainwise-mumbai.vercel.app',
    githubUrl: 'https://github.com/brysonnn1704/trainwise-mumbai',
    problem: 'Mumbai commuters face frantic transit choices navigating local trains (Western, Central, Harbour), Metro lines, and connecting BEST bus routes without a unified, modern, fast-loading interface.',
    solution: 'Created an m-Indicator-inspired commuter web app with instant route lookup, live train arrival countdowns, platform number predictions, fast/slow indicators, and offline-cached transit schedules.',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Zustand', 'Lucide Icons', 'Vercel'],
    highlights: [
      'Instant search and filter across Western, Central, and Harbour railway networks.',
      'Clear indicators for Fast, Slow, 12-Car, 15-Car, and AC local trains.',
      'Integrated Metro line connections (Lines 1, 2A, 7) and connecting bus feeder stops.',
      'Zero backend dependency — client-side caching ensures sub-second route queries.'
    ]
  },
  'crave': {
    title: 'Crave — Food Discovery & Delivery Web App',
    badge: 'OpenStreetMap Data • E-Commerce UX',
    category: 'Web & UI/UX Apps',
    liveUrl: 'https://crave-food-delivery-rho.vercel.app',
    githubUrl: 'https://github.com/brysonnn1704/crave-food-delivery',
    problem: 'Modern food discovery applications often suffer from cluttered UI, heavy ad bloat, and opaque pricing that damages customer experience.',
    solution: 'Designed and built Crave, a fast and responsive food ordering platform powered by 75 real restaurant records from OpenStreetMap (Overpass API) and 444 authentic menu items from open datasets.',
    techStack: ['React', 'Vite', 'JavaScript', 'OpenStreetMap Overpass API', 'Tailwind CSS', 'Vercel'],
    highlights: [
      'Interactive restaurant discovery with real Mumbai geographic coordinates.',
      'Filterable by cuisine (North Indian, South Indian, Italian, Biryani, Desserts).',
      'Fluid cart management, discount voucher calculations, and animated delivery tracker.',
      'Clean Zomato/Swiggy-inspired visual hierarchy with generous whitespace and high-contrast typography.'
    ]
  },
  'bank-system': {
    title: 'Bank Management Desktop Suite (BankMANCRCE)',
    badge: 'JavaFX Desktop • Enterprise Security',
    category: 'Systems & Security',
    liveUrl: null,
    githubUrl: 'https://github.com/brysonnn1704/BankMANCRCE',
    problem: 'Academic and internal banking demos often lack realistic role-based security, OAuth authentication, and verifiable audit trails for financial movements.',
    solution: 'Architected a desktop bank management system with JavaFX, MySQL, and Google OAuth 2.0. Built distinct portals for account holders (deposit, withdraw, view transaction charts) and system administrators (monitor user activity, freeze accounts, audit logs).',
    techStack: ['Java', 'JavaFX', 'MySQL', 'Google OAuth 2.0', 'JDBC', 'CSS Styling'],
    highlights: [
      'Dual authentication: traditional password hashing + Google OAuth 2.0 sign-in.',
      'Comprehensive customer dashboard with real-time balance calculations.',
      'Dedicated administrator portal for user monitoring, account approvals, and security auditing.',
      'Clean modern tech-styled user interface built with JavaFX CSS stylesheets.'
    ]
  },
  'face-vision': {
    title: 'Face2Beats — Biometric Attendance & Vision System',
    badge: 'OpenCV • Computer Vision',
    category: 'Systems & Security',
    liveUrl: null,
    githubUrl: 'https://github.com/brysonnn1704',
    problem: 'Manual paper or badge attendance tracking is prone to proxy attendance, time loss, and administrative friction in classrooms and offices.',
    solution: 'Developed an automated facial recognition attendance system in Python utilizing OpenCV and Haar cascades / LBPH face recognizer. Real-time video stream processes faces, matches enrolled student embeddings, and logs timestamps into a secure database.',
    techStack: ['Python', 'OpenCV', 'NumPy', 'SQLite / MySQL', 'Tkinter GUI'],
    highlights: [
      'Sub-second facial landmark detection and confidence scoring.',
      'Anti-proxy protection with basic liveness detection.',
      'Automated export of daily attendance logs to structured CSV and database records.',
      'Intuitive desktop dashboard for enrolling new faces and generating attendance reports.'
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Theme Switcher
  initTheme();

  // 2. Initialize Mumbai Live Clock (IST)
  initMumbaiClock();

  // 3. Initialize Mobile Menu Drawer
  initMobileMenu();

  // 4. Initialize Project Filtering
  initProjectFilters();

  // 5. Initialize Project Modal Deep Dives
  initProjectModal();

  // 6. Initialize Copy Email Functionality
  initCopyEmail();

  // 7. Initialize Formspree Contact Form UX
  initContactForm();

  // 8. Initialize Scroll Reveal Animations
  initScrollReveal();

  // 9. Initialize Interactive Japanese-Style Cursor Stalker
  initCursorStalker();

  // 10. Initialize Video Facade (Lazy YouTube embed on demand)
  initVideoFacade();
});

/**
 * Lightweight Interactive Video Facade
 * Plays video reel only upon explicit user interaction
 */
function initVideoFacade() {
  const facadeBtn = document.getElementById('video-facade-btn');
  if (!facadeBtn) return;

  facadeBtn.addEventListener('click', () => {
    const container = document.getElementById('video-facade-container');
    if (!container) return;
    container.innerHTML = `
      <iframe 
        src="https://www.youtube-nocookie.com/embed/p54ananMxlM?autoplay=1" 
        title="Bryson P Almeida Video Showcase" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>
      </iframe>`;
  });
}

/**
 * Theme Management (Light / Dark mode with localStorage persistence)
 */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeToggleMobile = document.getElementById('theme-toggle-mobile');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  // Retrieve saved preference or default to light for warm Japanese paper tone
  const savedTheme = localStorage.getItem('theme');
  const initialTheme = savedTheme ? savedTheme : (prefersDark.matches ? 'dark' : 'light');
  setTheme(initialTheme);

  function toggle() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  }

  if (themeToggleBtn) themeToggleBtn.addEventListener('click', toggle);
  if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggle);

  // Listen for system theme changes if user hasn't explicitly set one
  prefersDark.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute('content', theme === 'dark' ? '#141312' : '#FAF8F5');
  }

  const icons = document.querySelectorAll('.theme-icon');
  icons.forEach(icon => {
    icon.textContent = theme === 'dark' ? '☀️' : '🌙';
  });
}

/**
 * Real-time Mumbai Time Display (IST: UTC+5:30)
 */
function initMumbaiClock() {
  const clockElement = document.getElementById('mumbai-clock');
  if (!clockElement) return;

  function updateClock() {
    try {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const formatter = new Intl.DateTimeFormat('en-IN', options);
      clockElement.textContent = formatter.format(new Date()) + ' IST';
    } catch {
      clockElement.textContent = 'Mumbai, India';
    }
  }

  updateClock();
  setInterval(updateClock, 1000);
}

/**
 * Mobile Drawer Menu
 */
function initMobileMenu() {
  const menuButton = document.getElementById('mobile-menu-button');
  const closeButton = document.getElementById('mobile-menu-close');
  const drawer = document.getElementById('mobile-drawer');
  const backdrop = document.getElementById('mobile-drawer-backdrop');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuButton || !drawer) return;

  function openMenu() {
    drawer.removeAttribute('inert');
    drawer.removeAttribute('hidden');
    drawer.classList.add('is-open');
    if (backdrop) backdrop.classList.add('is-open');
    menuButton.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer.classList.remove('is-open');
    if (backdrop) backdrop.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('inert', '');
    drawer.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }

  menuButton.addEventListener('click', openMenu);
  if (closeButton) closeButton.addEventListener('click', closeMenu);
  if (backdrop) backdrop.addEventListener('click', closeMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      closeMenu();
    }
  });
}

/**
 * Project Filtering (All / Web & UI / Civic Tech / Systems)
 */
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card-item');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(16px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

/**
 * Project Detail Modal Deep Dives
 */
function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const modalBackdrop = document.getElementById('project-modal-backdrop');
  const modalClose = document.getElementById('project-modal-close');
  const detailTriggers = document.querySelectorAll('.case-detail-btn');

  if (!modal) return;

  function openProjectModal(projectId) {
    const data = PROJECT_DETAILS[projectId];
    if (!data) return;

    // Populate modal fields
    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-badge').textContent = data.badge;
    document.getElementById('modal-problem').textContent = data.problem;
    document.getElementById('modal-solution').textContent = data.solution;

    // Tech stack pills
    const techContainer = document.getElementById('modal-tech');
    techContainer.innerHTML = '';
    data.techStack.forEach(tech => {
      const pill = document.createElement('span');
      pill.className = 'pill-chip';
      pill.textContent = tech;
      techContainer.appendChild(pill);
    });

    // Highlights list
    const highlightsContainer = document.getElementById('modal-highlights');
    highlightsContainer.innerHTML = '';
    data.highlights.forEach(h => {
      const li = document.createElement('li');
      li.textContent = h;
      highlightsContainer.appendChild(li);
    });

    // Links
    const liveLink = document.getElementById('modal-live-link');
    if (data.liveUrl) {
      liveLink.href = data.liveUrl;
      liveLink.style.display = 'inline-flex';
    } else {
      liveLink.style.display = 'none';
    }

    const githubLink = document.getElementById('modal-github-link');
    if (data.githubUrl) {
      githubLink.href = data.githubUrl;
      githubLink.style.display = 'inline-flex';
    } else {
      githubLink.style.display = 'none';
    }

    // Open
    modal.removeAttribute('inert');
    modal.removeAttribute('hidden');
    modal.classList.add('is-open');
    if (modalBackdrop) modalBackdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('inert', '');
    modal.setAttribute('hidden', '');
    if (modalBackdrop) modalBackdrop.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  detailTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project');
      openProjectModal(projectId);
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });
}

/**
 * Copy Email to Clipboard with Toast Notification
 */
function initCopyEmail() {
  const copyButtons = document.querySelectorAll('.copy-email-btn');
  const toast = document.getElementById('toast');
  const email = 'brysoncollege12345@gmail.com';

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      try {
        await navigator.clipboard.writeText(email);
        showToast('Email copied to clipboard! 📋 ✨');
      } catch {
        // Fallback prompt
        window.location.href = `mailto:${email}`;
      }
    });
  });

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }
}

/**
 * Formspree Contact Form Submission Handling
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const submitButton = document.getElementById('form-submit-btn');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const originalBtnText = submitButton ? submitButton.innerHTML : 'Send Message';

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.innerHTML = '<span>Sending... 🚀</span>';
    }

    if (formStatus) {
      formStatus.textContent = '';
      formStatus.className = 'form-status';
    }

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        form.reset();
        if (formStatus) {
          formStatus.textContent = 'Arigatou! Message received. Bryson will get back to you shortly! 🤝 ✨';
          formStatus.className = 'form-status success';
        }
      } else {
        const errorData = await response.json();
        const msg = errorData?.errors?.map(e => e.message).join(', ') || 'Oops! There was an issue sending your message.';
        if (formStatus) {
          formStatus.textContent = msg;
          formStatus.className = 'form-status error';
        }
      }
    } catch {
      if (formStatus) {
        formStatus.textContent = 'Network error. Please email directly at brysoncollege12345@gmail.com.';
        formStatus.className = 'form-status error';
      }
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.innerHTML = originalBtnText;
      }
    }
  });
}

/**
 * Scroll Reveal Animations with IntersectionObserver
 */
function initScrollReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return; // Respect reduced motion
  }

  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/**
 * Tasteful Japanese-Style Cursor Stalker
 * Subtle following ring with friendly label on hoverable elements.
 * Disabled on touch screens or when user prefers reduced motion.
 */
function initCursorStalker() {
  // Check if device has a fine pointer (mouse) and no reduced motion
  const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!hasFinePointer || prefersReduced) return;

  const stalker = document.createElement('div');
  stalker.className = 'cursor-stalker';
  stalker.innerHTML = '<span class="stalker-label"></span>';
  document.body.appendChild(stalker);

  let mouseX = -100;
  let mouseY = -100;
  let stalkerX = -100;
  let stalkerY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function render() {
    // Smooth lerp
    stalkerX += (mouseX - stalkerX) * 0.18;
    stalkerY += (mouseY - stalkerY) * 0.18;
    stalker.style.transform = `translate3d(${stalkerX}px, ${stalkerY}px, 0)`;
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);

  const hoverTargets = document.querySelectorAll('a, button, .interactive-hover');
  const label = stalker.querySelector('.stalker-label');

  hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => {
      stalker.classList.add('is-hovering');
      const customLabel = el.getAttribute('data-cursor-label');
      if (customLabel && label) {
        label.textContent = customLabel;
        stalker.classList.add('has-label');
      }
    });

    el.addEventListener('mouseleave', () => {
      stalker.classList.remove('is-hovering');
      stalker.classList.remove('has-label');
      if (label) label.textContent = '';
    });
  });
}
