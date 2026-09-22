/**
 * ECOAST - Engineering Computing Academy of Science and Technology
 * Main JavaScript Controller
 */

// Language Translations Dictionary
const i18n = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_programs: "Programs",
    nav_labs: "Innovation Labs",
    nav_calculator: "Calculator",
    nav_admissions: "Admissions",
    nav_terminal: "CLI Terminal",
    nav_apply: "Apply Now",
    hero_badge: "AY 2026-2027 Admissions Open",
    hero_title: "Empowering the Next Generation of Engineers & Computing Pioneers",
    hero_desc: "ECOAST is a premier technological academy bridging cutting-edge engineering, cloud architecture, and artificial intelligence with real-world global industry impact.",
    hero_cta_explore: "Explore Programs",
    hero_cta_apply: "Start Application",
    hero_highlight_1: "ABET-Aligned Curriculum",
    hero_highlight_2: "Industry Co-op Program",
    hero_highlight_3: "100% Scholarship Grants",
    stat_employment: "Graduate Employment Rate",
    stat_partners: "Industry Tech Partners",
    stat_labs: "State-of-the-Art Labs",
    stat_scholarship: "Scholarships Awarded",
    why_title: "Why Study at ECOAST?",
    why_desc: "A futuristic ecosystem engineered to prepare students for top-tier careers in computing, robotics, and advanced engineering.",
    programs_title: "Specialized Degree Programs",
    programs_desc: "Industry-aligned computing and engineering pathways curated by world-class tech leaders.",
    labs_title: "Innovation Centers & Tech Labs",
    labs_desc: "Immerse yourself in research facilities equipped with supercomputing nodes, autonomous robotics, and cyber defense war-rooms.",
    calc_title: "Tuition & Scholarship Calculator",
    calc_desc: "Estimate your tuition, financial assistance grants, and flexible installment plans in real-time.",
    admissions_title: "Your 4-Step Journey to ECOAST",
    admissions_desc: "Simple, transparent, and digital-first admission pipeline for aspiring engineers.",
    faq_title: "Frequently Asked Questions",
    faq_desc: "Got questions? We're here to help you kickstart your engineering future."
  },
  fil: {
    nav_home: "Tahanan",
    nav_about: "Tungkol sa Amin",
    nav_programs: "Mga Programa",
    nav_labs: "Mga Pasilidad",
    nav_calculator: "Kalkulador",
    nav_admissions: "Pagpasok (Admissions)",
    nav_terminal: "CLI Terminal",
    nav_apply: "Mag-apply Ngayon",
    hero_badge: "Bukas na ang AY 2026-2027 Admissions",
    hero_title: "Hubugin ang Kinabukasan sa Agham, Teknolohiya, at Inhinyeriya",
    hero_desc: "Ang ECOAST ay nangungunang akademya na nagtutulay sa advanced computing, robotics, cloud infrastructure, at AI para sa global na oportunidad.",
    hero_cta_explore: "Tingnan ang Kurso",
    hero_cta_apply: "Magsimulang Mag-apply",
    hero_highlight_1: "ABET-Aligned Kurikulum",
    hero_highlight_2: "Siguradong Industry Internship",
    hero_highlight_3: "Buong Iskolarship Grants",
    stat_employment: "Rate ng May Trabahong Gradweyt",
    stat_partners: "Mga Global Tech Partners",
    stat_labs: "Makabagong Research Labs",
    stat_scholarship: "Ipinagkaloob na Iskolarship",
    why_title: "Bakit Piliin ang ECOAST?",
    why_desc: "Mundong pang-inhinyeriya at computing na maghahanda sa iyo para sa pinakamataas na tech careers sa buong mundo.",
    programs_title: "Mga Espesyalistang Programa",
    programs_desc: "Mga kurikulum na binuo kasama ang AWS, Google Cloud, NVIDIA, at DOST para sa kinabukasan.",
    labs_title: "Mga Sentro ng Inobasyon at Pasilidad",
    labs_desc: "Maranasan ang aktwal na supercomputing, mechatronics, at cyber defense operations center.",
    calc_title: "Kalkulador ng Matrikula at Iskolarship",
    calc_desc: "Alamin ang iyong tinatayang matrikula, scholarship discounts, at buwanang hulog.",
    admissions_title: "4 na Hakbang Patungo sa ECOAST",
    admissions_desc: "Mabilis, moderno, at digital na proseso ng admission para sa susunod na tech pioneers.",
    faq_title: "Mga Madalas Itanong (FAQ)",
    faq_desc: "May mga katanungan ka ba? Narito ang mga sagot para sa iyong edukasyon sa ECOAST."
  }
};

// Curriculum Database for Modal
const curriculumData = {
  cs: {
    title: "B.S. in Computer Science (Artificial Intelligence & ML Track)",
    duration: "4 Years (8 Semesters + 1 Summer Internship)",
    description: "Deep dive into artificial neural networks, computer vision, natural language processing, algorithmic theory, and scalable cloud ML pipelines.",
    years: {
      1: [
        { code: "CS 101", title: "Introduction to Algorithmic Problem Solving & Python", units: 4 },
        { code: "CS 102", title: "Discrete Structures & Discrete Mathematics", units: 3 },
        { code: "MATH 110", title: "Calculus for Computing & Engineering I", units: 4 },
        { code: "CS 103", title: "Object-Oriented Programming (Java & C++)", units: 4 },
        { code: "ENG 101", title: "Technical Communication & Academic Writing", units: 3 }
      ],
      2: [
        { code: "CS 201", title: "Data Structures & Algorithm Analysis", units: 4 },
        { code: "CS 202", title: "Computer Organization & Assembly Architecture", units: 4 },
        { code: "MATH 220", title: "Linear Algebra & Multivariable Calculus for AI", units: 4 },
        { code: "CS 204", title: "Database Systems & Distributed NoSQL", units: 3 },
        { code: "CS 205", title: "Probability & Applied Statistics for Computing", units: 3 }
      ],
      3: [
        { code: "AI 301", title: "Foundations of Artificial Intelligence & Search", units: 4 },
        { code: "AI 302", title: "Deep Learning & Neural Architectures (PyTorch/TF)", units: 4 },
        { code: "CS 305", title: "Operating Systems & Systems Programming", units: 4 },
        { code: "CS 306", title: "Design and Analysis of Algorithms", units: 3 },
        { code: "AI 308", title: "Computer Vision & Autonomous Perception", units: 3 }
      ],
      4: [
        { code: "AI 401", title: "Natural Language Processing & Large Language Models", units: 4 },
        { code: "CS 491", title: "Capstone Research Project I (Ideation & Prototype)", units: 3 },
        { code: "AI 404", title: "AI Ethics, Governance & Model Safety", units: 3 },
        { code: "CS 492", title: "Industry Co-op / 600-Hour Applied Internship", units: 6 },
        { code: "CS 499", title: "Capstone Research Defense & Startup Demo Day", units: 3 }
      ]
    }
  },
  cloud: {
    title: "B.S. in Cloud Computing & Distributed Systems",
    duration: "4 Years (8 Semesters + 1 Summer Internship)",
    description: "Master modern multi-cloud infrastructure, Kubernetes orchestration, DevOps CI/CD pipelines, site reliability engineering (SRE), and serverless architectures.",
    years: {
      1: [
        { code: "CLD 101", title: "Foundations of Cloud Platforms (AWS/GCP/Azure)", units: 4 },
        { code: "CS 101", title: "Computer Programming Fundamentals (Go & Python)", units: 4 },
        { code: "NET 110", title: "Computer Networking, TCP/IP & OSI Model", units: 4 },
        { code: "MATH 110", title: "Applied Mathematics for Systems Engineers", units: 3 }
      ],
      2: [
        { code: "CLD 201", title: "Linux Systems Administration & Bash Automation", units: 4 },
        { code: "CLD 202", title: "Infrastructure as Code (Terraform & Ansible)", units: 4 },
        { code: "CLD 203", title: "Containerization & Docker Ecosystems", units: 3 },
        { code: "DB 204", title: "High-Availability Relational & Distributed Storage", units: 4 }
      ],
      3: [
        { code: "CLD 301", title: "Kubernetes Cluster Architecture & Orchestration", units: 4 },
        { code: "CLD 302", title: "DevSecOps & Automated CI/CD Pipelines", units: 4 },
        { code: "CLD 303", title: "Microservices & Distributed Systems Design", units: 4 },
        { code: "SEC 304", title: "Cloud Security, IAM & Identity Governance", units: 3 }
      ],
      4: [
        { code: "CLD 401", title: "Site Reliability Engineering (SRE) & Observability", units: 4 },
        { code: "CLD 491", title: "Cloud Systems Capstone I", units: 3 },
        { code: "CLD 402", title: "Serverless & Edge Computing Architectures", units: 3 },
        { code: "CLD 492", title: "Global Cloud Industry Practicum", units: 6 }
      ]
    }
  },
  cpe: {
    title: "B.S. in Computer Engineering (Robotics & Cyber-Physical Systems)",
    duration: "4 Years (8 Semesters)",
    description: "Integration of hardware design, microcontrollers, FPGA synthesis, real-time operating systems (RTOS), and autonomous mechatronics.",
    years: {
      1: [
        { code: "CPE 101", title: "Engineering Drawing & Computer-Aided Design (CAD)", units: 3 },
        { code: "CHEM 101", title: "Chemistry for Engineers", units: 3 },
        { code: "MATH 120", title: "Calculus with Analytic Geometry", units: 4 },
        { code: "CPE 102", title: "Digital Logic Design & Verilog HDL", units: 4 }
      ],
      2: [
        { code: "CPE 201", title: "Circuit Analysis & Electronics I", units: 4 },
        { code: "CPE 202", title: "Microprocessors & Microcontrollers (ARM/RISC-V)", units: 4 },
        { code: "MATH 230", title: "Differential Equations for Engineers", units: 3 },
        { code: "CPE 203", title: "Embedded C/C++ Systems Programming", units: 4 }
      ],
      3: [
        { code: "ROB 301", title: "Robotics Kinematics, Dynamics & Controls", units: 4 },
        { code: "ROB 302", title: "Robot Operating System (ROS2) & Gazebo", units: 4 },
        { code: "CPE 303", title: "FPGA Design & Embedded Machine Learning", units: 4 },
        { code: "CPE 304", title: "Real-Time Embedded Operating Systems (FreeRTOS)", units: 3 }
      ],
      4: [
        { code: "ROB 401", title: "Autonomous Mobile Robots & SLAM Navigation", units: 4 },
        { code: "CPE 491", title: "Computer Engineering Capstone Design I", units: 3 },
        { code: "CPE 492", title: "Industrial Robotics & IoT Practicum", units: 6 },
        { code: "CPE 499", title: "Engineering Capstone Prototype Showcase", units: 3 }
      ]
    }
  },
  cyber: {
    title: "B.S. in Cybersecurity & Digital Forensics",
    duration: "4 Years (8 Semesters)",
    description: "Offensive red-teaming, defensive blue-team operations, cryptography, incident response, reverse engineering, and threat intelligence.",
    years: {
      1: [
        { code: "SEC 101", title: "Cybersecurity Fundamentals & Information Security", units: 3 },
        { code: "CS 101", title: "Programming for Security Analysts (Python/C)", units: 4 },
        { code: "NET 101", title: "Packet Analysis & Enterprise Networking", units: 4 },
        { code: "LAW 101", title: "Cyberlaw, Privacy & Digital Ethics", units: 3 }
      ],
      2: [
        { code: "SEC 201", title: "Applied Cryptography & Public Key Infrastructure", units: 4 },
        { code: "SEC 202", title: "Operating Systems Security (Linux & Windows)", units: 4 },
        { code: "SEC 203", title: "Ethical Hacking & Penetration Testing Methodologies", units: 4 }
      ],
      3: [
        { code: "SEC 301", title: "Security Operations Center (SOC) Analytics & SIEM", units: 4 },
        { code: "SEC 302", title: "Malware Analysis & Reverse Engineering", units: 4 },
        { code: "SEC 303", title: "Cloud Security & Zero-Trust Architecture", units: 3 }
      ],
      4: [
        { code: "SEC 401", title: "Digital Forensics & Incident Response (DFIR)", units: 4 },
        { code: "SEC 491", title: "Cyber Defense Capstone Project", units: 4 },
        { code: "SEC 492", title: "Live Cyber Range & Industry Internship", units: 6 }
      ]
    }
  },
  data: {
    title: "B.S. in Data Science & Big Data Engineering",
    duration: "4 Years (8 Semesters)",
    description: "Statistical modeling, large-scale data pipelines (Spark, Kafka), predictive analytics, and enterprise data visualization.",
    years: {
      1: [
        { code: "DAT 101", title: "Foundations of Data Science & Python", units: 4 },
        { code: "MATH 115", title: "Linear Algebra & Calculus for Data Scientists", units: 4 },
        { code: "DAT 102", title: "Exploratory Data Analysis & Visualization", units: 3 }
      ],
      2: [
        { code: "DAT 201", title: "Data Wrangling & High-Performance SQL", units: 4 },
        { code: "STAT 202", title: "Bayesian Statistics & Predictive Modeling", units: 4 },
        { code: "DAT 203", title: "Big Data Architectures (Hadoop, Spark, Kafka)", units: 4 }
      ],
      3: [
        { code: "DAT 301", title: "Machine Learning for High-Dimensional Data", units: 4 },
        { code: "DAT 302", title: "Data Engineering Pipelines & Cloud Warehousing", units: 4 },
        { code: "DAT 303", title: "Time Series Forecasting & Quantitative Methods", units: 3 }
      ],
      4: [
        { code: "DAT 401", title: "Business Intelligence & Executive Analytics", units: 3 },
        { code: "DAT 491", title: "Data Science Capstone Defense", units: 4 },
        { code: "DAT 492", title: "Enterprise Data Practicum", units: 6 }
      ]
    }
  },
  ece: {
    title: "B.S. in Electronics Engineering (5G/6G & Satellite IoT)",
    duration: "4 Years (8 Semesters)",
    description: "Next-gen telecommunications, RF microwave circuits, digital signal processing, satellite communications, and smart IoT sensors.",
    years: {
      1: [
        { code: "ECE 101", title: "Introduction to Electronics & Circuit Theory", units: 4 },
        { code: "MATH 120", title: "Differential & Integral Calculus", units: 4 },
        { code: "PHYS 101", title: "Physics for Engineering & Electromagnetism", units: 4 }
      ],
      2: [
        { code: "ECE 201", title: "Electronic Circuits & Semiconductor Devices", units: 4 },
        { code: "ECE 202", title: "Signals, Spectra & Signal Processing", units: 4 },
        { code: "ECE 203", title: "Electromagnetic Fields & Wave Propagation", units: 3 }
      ],
      3: [
        { code: "ECE 301", title: "Digital Communications & Modulations", units: 4 },
        { code: "ECE 302", title: "Wireless Cellular Networks & 5G NR Architecture", units: 4 },
        { code: "ECE 303", title: "RF Microwave Circuits & Antennas", units: 4 }
      ],
      4: [
        { code: "ECE 401", title: "Satellite Systems & Space Communication", units: 4 },
        { code: "ECE 491", title: "Electronics Engineering Design Capstone", units: 4 },
        { code: "ECE 492", title: "Telecom Industry Co-op Practicum", units: 6 }
      ]
    }
  }
};

// Innovation Labs Data
const labsData = [
  {
    id: "supercomputing",
    title: "Quantum & High-Performance Computing (HPC) Cluster",
    image: "images/robotics-lab.jpg",
    specs: "32-node GPU cluster powered by NVIDIA H100 Tensor Core GPUs, 1.2 PetaFLOPS FP64 compute, 100Gbps InfiniBand interconnect.",
    focus: "Accelerating quantum algorithm simulation, foundational LLM training, climate modeling, and bioinformatics."
  },
  {
    id: "robotics",
    title: "Autonomous Mechatronics & Robotics Arena",
    image: "images/robotics-lab.jpg",
    specs: "Vicon motion capture tracking space, 6-DoF collaborative robotic arms (Universal Robots), ROS2 mobile rover fleet, 3D laser scanners.",
    focus: "Industrial automation, autonomous drone navigation, computer vision guidance, and human-robot interaction."
  },
  {
    id: "soc",
    title: "Cyber Defense & Threat Intelligence SOC Center",
    image: "images/students-collaboration.jpg",
    specs: "Dedicated isolated fiber network, Splunk Enterprise SIEM, Palo Alto Next-Gen Firewalls, live red/blue team attack-defense simulators.",
    focus: "Defensive malware sandboxing, real-time cyber triage, penetration testing, and digital forensics investigations."
  },
  {
    id: "cloud",
    title: "Cloud & Edge Distributed Infrastructure Testbed",
    image: "images/hero-campus.jpg",
    specs: "Bare-metal Kubernetes cluster, edge IoT gateway nodes, hybrid multi-cloud AWS Outposts & Azure Stack connectivity.",
    focus: "Distributed systems research, microservice resilience, low-latency edge computing, and cloud sustainability."
  }
];

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLanguage();
  initNavbar();
  initProgramFilters();
  initCurriculumModal();
  initLabsTabs();
  initFaqAccordion();
  initChatbot();
  initApplicationForm();
  initStatCounters();
});

// Theme Management (Dark / Light)
function initTheme() {
  const themeBtn = document.getElementById("themeToggleBtn");
  const savedTheme = localStorage.getItem("ecoast_theme") || "dark";
  
  applyTheme(savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(newTheme);
      localStorage.setItem("ecoast_theme", newTheme);
      showToast(newTheme === "dark" ? "Dark Mode Activated 🌙" : "Light Mode Activated ☀️");
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const themeBtn = document.getElementById("themeToggleBtn");
  if (themeBtn) {
    themeBtn.innerHTML = theme === "dark" ? "☀️" : "🌙";
    themeBtn.setAttribute("title", theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode");
  }
}

// Language Switcher (EN / FIL)
function initLanguage() {
  const langBtn = document.getElementById("langToggleBtn");
  const savedLang = localStorage.getItem("ecoast_lang") || "en";
  
  applyLanguage(savedLang);

  if (langBtn) {
    langBtn.addEventListener("click", () => {
      const currentLang = localStorage.getItem("ecoast_lang") || "en";
      const newLang = currentLang === "en" ? "fil" : "en";
      applyLanguage(newLang);
      localStorage.setItem("ecoast_lang", newLang);
      showToast(newLang === "en" ? "Switched to English 🌐" : "Pinalitan sa Filipino 🇵🇭");
    });
  }
}

function applyLanguage(lang) {
  const langBtn = document.getElementById("langToggleBtn");
  if (langBtn) {
    langBtn.textContent = lang === "en" ? "FIL" : "EN";
    langBtn.setAttribute("title", lang === "en" ? "Palitan sa Filipino" : "Switch to English");
  }

  // Update translatable elements
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (i18n[lang] && i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });
}

// Navbar Scroll Effect & Mobile Hamburger
function initNavbar() {
  const header = document.querySelector(".site-header");
  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      mobileToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    // Close menu when clicking nav links
    navMenu.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        mobileToggle.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }
}

// Program Category Filter Tabs
function initProgramFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".program-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      cards.forEach((card) => {
        const category = card.getAttribute("data-category");
        if (filterValue === "all" || category === filterValue) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// Curriculum Modal
function initCurriculumModal() {
  const modalOverlay = document.getElementById("curriculumModal");
  const closeBtn = document.getElementById("modalCloseBtn");
  const modalTitle = document.getElementById("modalDegreeTitle");
  const modalDuration = document.getElementById("modalDuration");
  const modalDesc = document.getElementById("modalDesc");
  const coursesContainer = document.getElementById("modalCoursesList");
  const yearTabs = document.querySelectorAll(".year-tab-btn");

  let activeProgram = "cs";
  let activeYear = "1";

  function renderCourses(progKey, yearNum) {
    const prog = curriculumData[progKey];
    if (!prog || !prog.years[yearNum]) return;

    modalTitle.textContent = prog.title;
    modalDuration.textContent = prog.duration;
    modalDesc.textContent = prog.description;

    coursesContainer.innerHTML = "";
    prog.years[yearNum].forEach((course) => {
      const card = document.createElement("div");
      card.className = "course-item";
      card.innerHTML = `
        <span class="course-code">${course.code}</span>
        <div class="course-title">${course.title}</div>
        <div class="course-units">${course.units} Credit Units • Lab & Lecture</div>
      `;
      coursesContainer.appendChild(card);
    });
  }

  // Trigger buttons
  document.querySelectorAll(".view-syllabus-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const progKey = btn.getAttribute("data-program") || "cs";
      activeProgram = progKey;
      activeYear = "1";

      yearTabs.forEach((tab) => {
        tab.classList.toggle("active", tab.getAttribute("data-year") === "1");
      });

      renderCourses(activeProgram, activeYear);
      modalOverlay?.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  // Year Tab clicks
  yearTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      yearTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      activeYear = tab.getAttribute("data-year") || "1";
      renderCourses(activeProgram, activeYear);
    });
  });

  // Close modal
  function closeModal() {
    modalOverlay?.classList.remove("active");
    document.body.style.overflow = "auto";
  }

  closeBtn?.addEventListener("click", closeModal);
  modalOverlay?.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay?.classList.contains("active")) {
      closeModal();
    }
  });
}

// Innovation Labs Tab Switcher
function initLabsTabs() {
  const labTabs = document.querySelectorAll(".lab-tab-item");
  const showcaseImg = document.getElementById("labShowcaseImg");
  const showcaseTitle = document.getElementById("labShowcaseTitle");
  const showcaseSpecs = document.getElementById("labShowcaseSpecs");
  const showcaseFocus = document.getElementById("labShowcaseFocus");

  labTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      labTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const labId = tab.getAttribute("data-lab");
      const found = labsData.find((l) => l.id === labId);

      if (found) {
        if (showcaseImg) showcaseImg.src = found.image;
        if (showcaseTitle) showcaseTitle.textContent = found.title;
        if (showcaseSpecs) showcaseSpecs.textContent = found.specs;
        if (showcaseFocus) showcaseFocus.textContent = found.focus;
      }
    });
  });
}

// FAQ Accordion
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    question?.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      faqItems.forEach((f) => f.classList.remove("active"));
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
}

// Toast Notification
function showToast(message) {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>⚡</span> <div>${message}</div>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// Stat Counters Animation
function initStatCounters() {
  const counters = document.querySelectorAll(".stat-number[data-target]");
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseFloat(counter.getAttribute("data-target"));
          const prefix = counter.getAttribute("data-prefix") || "";
          const suffix = counter.getAttribute("data-suffix") || "";
          let count = 0;
          const duration = 1800;
          const stepTime = 25;
          const steps = duration / stepTime;
          const increment = target / steps;

          const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
              counter.textContent = prefix + (target % 1 === 0 ? target : target.toFixed(1)) + suffix;
              clearInterval(timer);
            } else {
              counter.textContent = prefix + (target % 1 === 0 ? Math.floor(count) : count.toFixed(1)) + suffix;
            }
          }, stepTime);

          obs.unobserve(counter);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((c) => observer.observe(c));
}

// Interactive Application Form
function initApplicationForm() {
  const appForm = document.getElementById("applicationForm");
  if (!appForm) return;

  appForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("appFullName")?.value;
    const email = document.getElementById("appEmail")?.value;
    const program = document.getElementById("appProgram")?.value;

    if (!name || !email) {
      showToast("Please fill in all required fields!");
      return;
    }

    const refNumber = "ECOAST-" + Math.floor(100000 + Math.random() * 900000);

    // Show custom modal or alert confirmation
    showToast(`Application submitted! Reference #${refNumber}`);
    
    // Reset form
    appForm.reset();

    // Spawn reference popup
    const popup = document.createElement("div");
    popup.className = "modal-overlay active";
    popup.innerHTML = `
      <div class="modal-container" style="max-width: 520px; text-align: center; padding: 2.5rem;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">🎉</div>
        <h3 style="font-size: 1.6rem; margin-bottom: 0.5rem;">Application Pre-Registered!</h3>
        <p style="color: var(--text-secondary); margin-bottom: 1.5rem; font-size: 0.95rem;">
          Congratulations, <strong>${name}</strong>! Your application token has been created for <strong>${program}</strong>.
        </p>
        <div style="background: rgba(0,240,255,0.08); border: 1px dashed var(--accent-cyan); padding: 1rem; border-radius: 8px; font-family: var(--font-mono); font-size: 1.2rem; color: var(--accent-cyan); margin-bottom: 1.5rem;">
          ${refNumber}
        </div>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.5rem;">
          We sent the E-CAT Entrance Examination schedule and document submission link to <strong>${email}</strong>.
        </p>
        <button class="btn btn-primary" onclick="this.closest('.modal-overlay').remove()">Got it! / Salamat</button>
      </div>
    `;
    document.body.appendChild(popup);
  });
}

// Interactive Virtual Assistant Bot ("Echo")
function initChatbot() {
  const chatBtn = document.getElementById("chatWidgetBtn");
  const chatPopup = document.getElementById("chatWidgetPopup");
  const closeChatBtn = document.getElementById("closeChatBtn");
  const chatBody = document.getElementById("chatBody");
  const chatInput = document.getElementById("chatInput");
  const sendChatBtn = document.getElementById("sendChatBtn");
  const chipBtns = document.querySelectorAll(".chat-chip");

  if (!chatBtn || !chatPopup) return;

  chatBtn.addEventListener("click", () => {
    chatPopup.classList.toggle("active");
    if (chatPopup.classList.contains("active") && chatInput) {
      chatInput.focus();
    }
  });

  closeChatBtn?.addEventListener("click", () => {
    chatPopup.classList.remove("active");
  });

  function appendMessage(text, sender = "bot") {
    const msg = document.createElement("div");
    msg.className = `chat-message ${sender}`;
    msg.innerHTML = text;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function handleBotResponse(query) {
    const lower = query.toLowerCase();
    let reply = "Hello! I am Echo, ECOAST's Virtual Tech Assistant. You can ask me about academic programs, admissions requirements, tuition fees, scholarships, or campus facilities!";

    if (lower.includes("apply") || lower.includes("mag-apply") || lower.includes("admission") || lower.includes("ecat") || lower.includes("exam")) {
      reply = "To apply for AY 2026-2027: (1) Fill out our online pre-registration form; (2) Take the free ECOAST College Aptitude Test (E-CAT); (3) Submit your Form 137 / 138; (4) Claim your scholarship qualification! Would you like me to take you to the Admissions page?";
    } else if (lower.includes("tuition") || lower.includes("magkano") || lower.includes("fee") || lower.includes("cost") || lower.includes("bayad")) {
      reply = "Undergraduate tuition at ECOAST averages ₱45,000 to ₱52,000 per semester. However, over 75% of our students receive 25% to 100% scholarship grants via our Presidential Excellence and DOST Partner Grant! Try our Tuition & Scholarship Calculator on this site.";
    } else if (lower.includes("scholarship") || lower.includes("iskolar") || lower.includes("dost") || lower.includes("discount")) {
      reply = "We offer 4 major scholarship tiers: (1) Presidential 100% Free Tuition for With Highest Honors; (2) Dean's 50% Grant for STEM achievers; (3) DOST-SEI Accredited Co-Grants; (4) Women in Computing Grant! All grants cover laboratory fees.";
    } else if (lower.includes("program") || lower.includes("kurso") || lower.includes("course") || lower.includes("degree") || lower.includes("cs") || lower.includes("cloud")) {
      reply = "ECOAST offers: BS Computer Science (AI/ML Track), BS Cloud Computing & Distributed Systems, BS Computer Engineering (Robotics), BS Cybersecurity & Forensics, BS Data Science, and BS Electronics Engineering (5G/IoT). All tracks are 4 years and include paid industry internships.";
    } else if (lower.includes("location") || lower.includes("saan") || lower.includes("address") || lower.includes("campus")) {
      reply = "ECOAST Main Tech Campus is located at ECOAST Innovation Hub, University Parkway, High-Tech Corridor, BGC / Laguna Silicon Hub, Philippines. We offer both on-campus high-tech dorms and hybrid learning!";
    } else if (lower.includes("hello") || lower.includes("hi") || lower.includes("kumusta") || lower.includes("kamusta")) {
      reply = "Kamusta! Welcome to ECOAST (Engineering Computing Academy of Science and Technology)! How can I help power your tech journey today?";
    }

    setTimeout(() => {
      appendMessage(reply, "bot");
    }, 450);
  }

  function submitChat() {
    const text = chatInput?.value.trim();
    if (!text) return;

    appendMessage(text, "user");
    chatInput.value = "";
    handleBotResponse(text);
  }

  sendChatBtn?.addEventListener("click", submitChat);
  chatInput?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") submitChat();
  });

  chipBtns.forEach((chip) => {
    chip.addEventListener("click", () => {
      const text = chip.getAttribute("data-query") || chip.textContent;
      appendMessage(text, "user");
      handleBotResponse(text);
    });
  });
}
