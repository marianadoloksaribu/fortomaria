(function () {
  "use strict";

  const $ = (selector, context = document) => context.querySelector(selector);
  const $$ = (selector, context = document) => Array.from(context.querySelectorAll(selector));

  /* =====================================================
     DATA PORTOFOLIO
     Edit bagian ini jika ingin mengganti konten.
     ===================================================== */

  // [judul, kategori, deskripsi, [teknologi], peran, tautan PDF]
  // Semua PDF proyek ada di folder "projects" (sejajar dengan index.html).
  const PROJECT_DIR = "projects/";
  const projects = [
    [
      "Del Story Website",
      "WEB DEVELOPMENT",
      "A WordPress website that shares campus history and community stories from Del Institute of Technology (2025).",
      ["WordPress", "Web Development"],
      "",
      PROJECT_DIR + "del-story-final-project-report.pdf"
    ],
    [
      "Vibration-Based Pest Detection System",
      "EMBEDDED SYSTEMS",
      "A pest detection system built on Arduino, using vibration and ultrasonic sensors with LED and buzzer alerts (2025).",
      ["Arduino", "Vibration Sensor", "Ultrasonic Sensor", "LED", "Buzzer"],
      "",
      PROJECT_DIR + "pest-detection-system.pdf"
    ],
    [
      "Server Services & Ansible Automation",
      "SYSTEM ADMINISTRATION",
      "Configured DNS, Apache web server, HAProxy load balancer, and mail server on Rocky Linux, then automated the setup with Ansible (2026).",
      ["Rocky Linux", "DNS", "Apache", "HAProxy", "Mail Server", "Ansible"],
      "",
      PROJECT_DIR + "server-automation.pdf"
    ],
    [
      "Magic Square 5×5 Multiplayer Game",
      "SYSTEM PROGRAMMING",
      "A multiplayer Magic Square game written in C on Rocky Linux, using shared memory and semaphores for inter-process communication and synchronization (2026).",
      ["C", "Rocky Linux", "PuTTY", "GCC", "Shared Memory", "Semaphore"],
      "",
      PROJECT_DIR + "game-console-project.pdf"
    ],
    [
      "End-to-End Classical Machine Learning Pipeline",
      "MACHINE LEARNING",
      "An image classification pipeline in Python using HOG features with KNN and SVM models (2026).",
      ["Python", "HOG", "KNN", "SVM"],
      "",
      PROJECT_DIR + "classical-ml-pipeline.pdf"
    ],
    [
      "Forest Segmentation Using U-Net",
      "DEEP LEARNING",
      "A model that segments forest areas in images, built with PyTorch and U-Net (2026).",
      ["Python", "PyTorch", "U-Net"],
      "",
      PROJECT_DIR + "forest-segmentation-unet.pdf"
    ],
    [
      "IoT-Based Food Dehydrator Prototype",
      "PRODUCT DEVELOPMENT",
      "A food dehydrator prototype that controls temperature automatically, using ESP32, DHT22, DS18B20, and Blynk (2026).",
      ["Arduino Uno", "ESP32", "DHT22", "DS18B20", "Blynk", "Arduino IDE"],
      "",
      PROJECT_DIR + "iot-smart-dehydrator.pdf"
    ],
    [
      "Car Data Management System",
      "WEB DEVELOPMENT",
      "A web app for managing car data, built with Laravel, PHP, and MySQL, with create, read, update, and delete features.",
      ["Laravel", "PHP", "MySQL", "CRUD"],
      "",
      PROJECT_DIR + "car-data-system.pdf"
    ]
  ];

  // Tools dan teknologi
  const dev = (name) =>
    `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`;

  const tools = [
    ["HTML", dev("html5"), "Web"],
    ["CSS", dev("css3"), "Web"],
    ["JavaScript", dev("javascript"), "Web"],
    ["PHP", dev("php"), "Web"],
    ["Laravel", dev("laravel"), "Web"],
    ["WordPress", dev("wordpress"), "Web"],
    ["MySQL / SQL", dev("mysql"), "Web"],

    ["Python", dev("python"), "Programming & Data"],
    ["C", dev("c"), "Programming & Data"],
    ["PyTorch", dev("pytorch"), "Programming & Data"],
    ["Jupyter Notebook", dev("jupyter"), "Programming & Data"],
    ["Google Colab", "https://cdn.simpleicons.org/googlecolab/F9AB00", "Programming & Data"],

    ["Linux", dev("linux"), "Server & Network"],
    ["Ubuntu Server", "https://cdn.simpleicons.org/ubuntu/E95420", "Server & Network"],
    ["Rocky Linux", "https://cdn.simpleicons.org/rockylinux/10B981", "Server & Network"],
    ["Bash", dev("bash"), "Server & Network"],
    ["Apache", dev("apache"), "Server & Network"],
    ["HAProxy", "https://cdn.simpleicons.org/haproxy/106DA9", "Server & Network"],
    ["VirtualBox", dev("virtualbox"), "Server & Network"],
    ["VMware", "https://cdn.simpleicons.org/vmware/607078", "Server & Network"],
    ["Cisco Packet Tracer", "https://cdn.simpleicons.org/cisco/049FD9", "Server & Network"],

    ["Docker", dev("docker"), "DevOps"],
    ["Kubernetes", "https://cdn.simpleicons.org/kubernetes/326CE5", "DevOps"],
    ["Ansible", dev("ansible"), "DevOps"],

    ["Arduino Uno", dev("arduino"), "Embedded"],
    ["ESP32", "https://cdn.simpleicons.org/espressif/E7352C", "Embedded"],

    ["Git", dev("git"), "Tools"],
    ["GitHub", dev("github"), "Tools"],
    ["Visual Studio Code", dev("vscode"), "Tools"],
    ["Figma", dev("figma"), "Tools"]
  ];

  // Semua file sertifikat ada di folder "certificates" (sejajar dengan index.html).
  // Format: [judul, penerbit, tahun, nama file]. Mendukung .pdf, .png, .jpg, .jpeg, .webp
  const CERT_DIR = "certificates/";
  const certs = [
    ["HCIA-Security V4", "Huawei ICT Academy", "2026", CERT_DIR + "hcia-security-v4.png"],
    ["Operating Systems Support", "Cisco Networking Academy", "2026", CERT_DIR + "operating-systems-support.png"],
    ["Cisco Packet Tracer", "Cisco Networking Academy", "2026", CERT_DIR + "cisco-packet-tracer.png"],
    ["C++ Essentials 1", "Cisco Networking Academy", "2026", CERT_DIR + "c-programming-essentials.png"],
    ["JavaScript Essentials 1", "Cisco Networking Academy", "2026", CERT_DIR + "javascript-essentials.png"],
    ["Python Essentials 1", "Cisco Networking Academy", "2026", CERT_DIR + "python-essentials.png"],
    ["Introduction to Cybersecurity", "Cisco Networking Academy", "2026", CERT_DIR + "introduction-cybersecurity.png"],
    ["AI & Deep Learning Bootcamp (Intermediate)", "Nalara Academy", "2026", CERT_DIR + "kelas-menengah.png"],
    ["Intro to Data Analytics", "RevoU", "2026", CERT_DIR + "data-analytics.png"],
    ["UI/UX Design Introduction", "MySkill", "2026", CERT_DIR + "ui-ux-design.png"],
    ["Kakak Asuh 2026", "Del Institute of Technology", "2026", CERT_DIR + "kakak-asuh-2025.png"],
    ["HCIA-Storage V5", "Huawei ICT Academy", "2025", CERT_DIR + "hcia-storage-v5.png"]
  ];

  // Kemampuan utama
  const strengths = [
    [
      "Analytical Thinking & Problem Solving",
      "I break a problem into small steps, then build and test each one."
    ],
    [
      "Collaboration & Communication",
      "HIMATEK and student mentoring taught me to work with others and communicate clearly."
    ],
    [
      "Adaptability & Time Management",
      "I pick up new tools quickly and manage my time between classes, projects, and organizations."
    ]
  ];

  // Pendidikan
  const education = [
    [
      "D3",
      "Del Institute of Technology",
      "Diploma in Computer Technology",
      "Laguboti, Indonesia. Studying web development, Linux administration, and server infrastructure.",
      "Sep 2024 – Sep 2027 (Expected)"
    ],
    [
      "SMA",
      "Uluan 1 Senior High School",
      "Natural Sciences (MIPA)",
      "Uluan, Toba, North Sumatra.",
      "Jul 2021 – May 2024"
    ]
  ];

  // Pengalaman
  const experience = [
    [
      "SEPTEMBER 2025 – SEPTEMBER 2026",
      "Member, Public Relations Division",
      "HIMATEK · Computer Technology Student Association",
      "Handled the organization's communication and shared information with students and outside parties."
    ],
    [
      "AUGUST 2025 – MAY 2026",
      "Kakak Asuh (Student Mentor)",
      "Student Leadership · Del Institute of Technology",
      "Guided more than 100 new students over two semesters as they adjusted to campus and dormitory life."
    ],
    [
      "1 NOVEMBER 2025",
      "Examination Invigilator",
      "SSC & IT Del Competition 2025 · Institut Teknologi Del",
      "Supervised participants during the academic olympiad exam to keep it orderly and fair."
    ]
  ];

  /* =====================================================
     RENDER STATISTIK DAN KONTEN
     ===================================================== */

  $("#statProjects").textContent = projects.length;
  $("#statCerts").textContent = certs.length;
  $("#statTools").textContent = tools.length;

  // Strengths
  $("#strengths").innerHTML = strengths.map((item) => `
    <article class="strength reveal">
      <h3>${item[0]}</h3>
      <p>${item[1]}</p>
    </article>
  `).join("");

  // Projects
  const track = $("#projectTrack");

  track.innerHTML = projects.map((project) => `
    <article class="project-card">
      <div class="project-cover">
        <span class="project-type">${project[1]}</span>
      </div>

      <div class="project-body">
        <h3>${project[0]}</h3>
        <p>${project[2]}</p>

        ${project[4] ? `
          <div class="project-role">
            <b>My role:</b> ${project[4]}
          </div>
        ` : ""}

        <div class="tags">
          ${project[3].map((tag) => `<span>${tag}</span>`).join("")}
        </div>

        ${project[5] ? `
          <a class="project-link" href="${encodeURI(project[5])}" target="_blank" rel="noopener noreferrer" draggable="false">
            ${/\.pdf$/i.test(project[5]) ? "View PDF" : "View project"} ↗
          </a>
        ` : ""}
      </div>
    </article>
  `).join("");

  /* =====================================================
     TOOLS DAN FILTER KATEGORI
     ===================================================== */

  const grid = $("#toolsGrid");
  const tabs = $("#toolTabs");

  const categories = ["All", ...new Set(tools.map((tool) => tool[2]))];

  tabs.innerHTML = categories.map((category, index) => `
    <button
      type="button"
      class="tab${index === 0 ? " active" : ""}"
      data-c="${category}"
      role="tab"
      aria-selected="${index === 0}"
    >
      ${category}
    </button>
  `).join("");

  function renderTools(category) {
    grid.innerHTML = "";

    const filteredTools = tools.filter(
      (tool) => category === "All" || tool[2] === category
    );

    filteredTools.forEach(([name, source]) => {
      const card = document.createElement("article");
      card.className = "tool-card";

      const img = new Image();
      img.src = source;
      img.alt = "";
      img.loading = "lazy";

      img.onerror = () => {
        const fallback = document.createElement("div");
        fallback.className = "tool-mono";
        fallback.textContent = name.substring(0, 2).toUpperCase();
        img.replaceWith(fallback);
      };

      const label = document.createElement("span");
      label.textContent = name;

      card.append(img, label);
      grid.append(card);
    });
  }

  tabs.addEventListener("click", (event) => {
    const button = event.target.closest(".tab");
    if (!button) return;

    $$(".tab", tabs).forEach((tab) => {
      const active = tab === button;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", String(active));
    });

    renderTools(button.dataset.c);
  });

  renderTools("All");

  /* =====================================================
     CERTIFICATES DAN LIGHTBOX
     ===================================================== */

  const certGrid = $("#certsGrid");
  const isPdf = (file) => /\.pdf$/i.test(file);

  const pdfIcon = `
    <span class="cert-pdf" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="13" y2="17"/></svg>
      <strong>PDF</strong>
    </span>`;

  certGrid.innerHTML = certs.map((certificate, index) => `
    <article class="cert-card reveal">
      <button
        type="button"
        class="cert-thumb"
        data-i="${index}"
        aria-label="View ${certificate[0]}"
      >
        ${isPdf(certificate[3])
          ? pdfIcon
          : `<img src="${certificate[3]}" alt="${certificate[0]}" loading="lazy">`}
      </button>

      <div class="cert-body">
        <h3>${certificate[0]}</h3>
        <p>${certificate[1]}</p>
        <span>${certificate[2]}</span>
      </div>
    </article>
  `).join("");

  const lightbox = $("#lightbox");
  const lightboxImage = $("img", lightbox);
  const lightboxFrame = $("iframe", lightbox);
  const lightboxOpen = $(".lightbox-open", lightbox);
  const lightboxClose = $("button", lightbox);

  certGrid.addEventListener("click", (event) => {
    const button = event.target.closest(".cert-thumb");
    if (!button) return;

    const certificate = certs[Number(button.dataset.i)];
    if (!certificate) return;

    const file = certificate[3];

    if (isPdf(file)) {
      lightboxImage.hidden = true;
      lightboxFrame.hidden = false;
      lightboxFrame.src = file + "#toolbar=0&navpanes=0";
      lightboxFrame.title = certificate[0];
      lightboxOpen.href = file;
      lightboxOpen.hidden = false;
    } else {
      lightboxFrame.hidden = true;
      lightboxOpen.hidden = true;
      lightboxImage.hidden = false;
      lightboxImage.src = file;
      lightboxImage.alt = certificate[0];
    }

    lightbox.hidden = false;
  });

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImage.src = "";
    lightboxFrame.src = "about:blank";
  }

  lightboxClose.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLightbox();
  });

  /* =====================================================
     EDUCATION DAN EXPERIENCE
     ===================================================== */

  $("#eduGrid").innerHTML = education.map((item) => `
    <article class="card reveal">
      <div class="education-icon">${item[0]}</div>
      <h3>${item[1]}</h3>
      <h4>${item[2]}</h4>
      <p>${item[3]}</p>
      <span class="education-period">${item[4]}</span>
    </article>
  `).join("");

  $("#timeline").innerHTML = experience.map((item) => `
    <article class="timeline-item reveal">
      <span class="timeline-dot"></span>
      <div class="card">
        <span class="timeline-date">${item[0]}</span>
        <h3>${item[1]}</h3>
        <h4>${item[2]}</h4>
        <p>${item[3]}</p>
      </div>
    </article>
  `).join("");

  /* =====================================================
     PROJECT CAROUSEL
     ===================================================== */

  const prevButton = $("#prevBtn");
  const nextButton = $("#nextBtn");
  const carouselCount = $("#carouselCount");
  const projectCards = $$(".project-card", track);

  const getStep = () => {
    if (!projectCards.length) return 300;
    return projectCards[0].getBoundingClientRect().width + 22;
  };

  const padNumber = (number) => String(number).padStart(2, "0");

  function updateCarousel() {
    const step = getStep();
    const currentIndex = Math.min(
      projectCards.length,
      Math.round(track.scrollLeft / step) + 1
    );

    carouselCount.textContent =
      `${padNumber(currentIndex)} / ${padNumber(projectCards.length)}`;

    prevButton.disabled = track.scrollLeft <= 4;
    nextButton.disabled =
      track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
  }

  prevButton.addEventListener("click", () => {
    track.scrollBy({
      left: -getStep() * 2,
      behavior: "smooth"
    });
  });

  nextButton.addEventListener("click", () => {
    track.scrollBy({
      left: getStep() * 2,
      behavior: "smooth"
    });
  });

  track.addEventListener("scroll", updateCarousel, { passive: true });
  window.addEventListener("resize", updateCarousel);

  track.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") nextButton.click();
    if (event.key === "ArrowLeft") prevButton.click();
  });

  // Drag carousel dengan mouse
  let isDragging = false;
  let dragMoved = false;
  let startX = 0;
  let startScrollLeft = 0;

  track.addEventListener("pointerdown", (event) => {
    if (event.pointerType !== "mouse") return;

    isDragging = true;
    dragMoved = false;
    startX = event.clientX;
    startScrollLeft = track.scrollLeft;
  });

  window.addEventListener("pointermove", (event) => {
    if (!isDragging) return;

    if (Math.abs(event.clientX - startX) > 5) dragMoved = true;

    track.classList.add("dragging");
    track.scrollLeft = startScrollLeft - (event.clientX - startX);
  });

  window.addEventListener("pointerup", () => {
    isDragging = false;
    track.classList.remove("dragging");
  });

  window.addEventListener("pointercancel", () => {
    isDragging = false;
    track.classList.remove("dragging");
  });

  // Cegah link "View PDF" terbuka kalau yang terjadi adalah geser (drag)
  track.addEventListener("click", (event) => {
    if (dragMoved) {
      event.preventDefault();
      event.stopPropagation();
      dragMoved = false;
    }
  }, true);

  updateCarousel();

  /* =====================================================
     NAVIGATION MOBILE
     ===================================================== */

  const menuToggle = $("#menuToggle");
  const navLinks = $("#navLinks");

  function setMenu(open) {
    navLinks.classList.toggle("open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menuToggle.textContent = open ? "✕" : "☰";
  }

  menuToggle.addEventListener("click", () => {
    setMenu(!navLinks.classList.contains("open"));
  });

  $$("a", navLinks).forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
  });

  /* =====================================================
     ANIMASI SAAT BAGIAN MASUK KE LAYAR
     ===================================================== */

  const revealElements = $$(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealElements.forEach((element, index) => {
      element.style.transitionDelay = `${(index % 4) * 60}ms`;
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach((element) => {
      element.classList.add("visible");
    });
  }

  /* =====================================================
     NAVBAR AKTIF DAN PROGRESS SCROLL
     ===================================================== */

  const navbar = $("#navbar");
  const progress = $("#scrollProgress");
  const sections = $$("main section[id]");
  const navItems = $$("#navLinks a:not(.nav-button)");

  function onScroll() {
    const scrollY = window.scrollY;

    navbar.classList.toggle("scrolled", scrollY > 10);

    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;

    const progressValue =
      maxScroll > 0 ? scrollY / maxScroll : 0;

    progress.style.transform = `scaleX(${progressValue})`;

    let currentSection = sections[0]?.id || "home";

    sections.forEach((section) => {
      if (scrollY + 160 >= section.offsetTop) {
        currentSection = section.id;
      }
    });

    navItems.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${currentSection}`
      );
    });
  }

  let scrollTicking = false;

  window.addEventListener("scroll", () => {
    if (scrollTicking) return;

    window.requestAnimationFrame(() => {
      onScroll();
      scrollTicking = false;
    });

    scrollTicking = true;
  }, { passive: true });

  onScroll();

  /* =====================================================
     FOOTER YEAR
     ===================================================== */

  $("#year").textContent = new Date().getFullYear();

  /* =====================================================
     CONTACT FORM
     Form menyiapkan email menggunakan aplikasi email.
     ===================================================== */

  const form = $("#contactForm");
  const formError = $("#formError");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const subject = form.elements.subject.value.trim();
    const message = form.elements.message.value.trim();

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !email || !subject || !message || !validEmail) {
      formError.textContent =
        email && !validEmail
          ? "Please enter a valid email address."
          : "Please complete all fields.";

      formError.hidden = false;
      return;
    }

    formError.hidden = true;

    const body =
      `Name: ${name}\n` +
      `Email: ${email}\n\n` +
      `Message:\n${message}`;

    const recipient = "marianadoloksaribu13@gmail.com";

    window.location.href =
      `mailto:${recipient}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;
  });
})();