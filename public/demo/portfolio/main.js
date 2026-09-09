/**
 * JULIAN CROSS — Portfolio Website Interactive Engine
 * Handles tilt physics, dynamic counter animations, project filtering,
 * modal dialogs, FAQ accordions, live clocks, forms, and toast notices.
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Sticky Header & Active Page / Nav Highlighting ---
  const header = document.getElementById('siteHeader');
  const navLinks = document.querySelectorAll('.nav-link');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  // Highlight active link based on current page
  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  // --- 2. Mobile Navigation Toggle ---
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });

    drawerLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });

    document.addEventListener('click', (e) => {
      if (!mobileDrawer.contains(e.target) && !mobileToggle.contains(e.target) && mobileDrawer.classList.contains('open')) {
        mobileDrawer.classList.remove('open');
      }
    });
  }

  // --- 3. Hero Portrait Card 3D Tilt Effect ---
  const portraitCard = document.getElementById('heroPortraitCard');
  const portraitStage = document.getElementById('heroPortraitStage');

  if (portraitCard && portraitStage && window.matchMedia('(pointer: fine)').matches) {
    portraitStage.addEventListener('mousemove', (e) => {
      const rect = portraitCard.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;
      const mouseX = e.clientX - cardCenterX;
      const mouseY = e.clientY - cardCenterY;

      const rotateX = -(mouseY / (rect.height / 2)) * 12;
      const rotateY = (mouseX / (rect.width / 2)) * 12;

      portraitCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04) translateY(-6px)`;
    });

    portraitStage.addEventListener('mouseleave', () => {
      portraitCard.style.transform = `rotate(4deg) scale(1) translateY(0)`;
    });
  }

  // --- 4. Animated Number Counters on Scroll ---
  const counterElements = document.querySelectorAll('.stat-counter-number');
  const statCards = document.querySelectorAll('.stat-card');
  let countersAnimated = false;

  function animateCounters() {
    if (countersAnimated) return;
    countersAnimated = true;

    statCards.forEach((card) => {
      card.classList.add('animated');
    });

    counterElements.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-target'), 10);
      if (isNaN(target)) return;

      const duration = 1800; // ms
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease-out cubic formula
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(easeOut * target);

        counter.textContent = currentCount;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      }

      requestAnimationFrame(updateCounter);
    });
  }

  // Observe About section or stat cards to trigger counting
  const statsSection = document.querySelector('.stats-cards-grid') || document.getElementById('about');
  if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });

    observer.observe(statsSection);
  }

  // --- 5. Portfolio Filter System ---
  const filterTabs = document.querySelectorAll('.filter-tab');
  const bentoCards = document.querySelectorAll('.bento-card');

  filterTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      filterTabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      const filterVal = tab.getAttribute('data-filter');

      bentoCards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');
        if (filterVal === 'all' || cardCategory === filterVal) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  // Project search input on work.html if present
  const projectSearchInput = document.getElementById('projectSearchInput');
  if (projectSearchInput) {
    projectSearchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      bentoCards.forEach((card) => {
        const title = card.querySelector('.bento-title')?.textContent.toLowerCase() || '';
        const category = card.querySelector('.bento-category')?.textContent.toLowerCase() || '';
        if (title.includes(query) || category.includes(query)) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  // --- 6. Project Case Study Data & Modal ---
  const projectModal = document.getElementById('projectModal');
  const projectModalClose = document.getElementById('projectModalClose');
  const projectModalContent = document.getElementById('projectModalContent');

  const projectData = {
    'kinetix': {
      title: 'KINETIX HYDRO — CIRCULAR HARDWARE & VISUAL SYSTEM',
      category: 'Brand Identity & Industrial Packaging',
      client: 'Kinetix Technologies Inc.',
      year: '2025 - 2026',
      role: 'Lead Art Director & Design System Architect',
      deliverables: 'Identity System, Hardware Mockups, Physical Packaging, E-Commerce Site',
      img: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1200&q=80',
      description: `
        <h4>Executive Summary</h4>
        <p>Kinetix Hydro is a pioneering smart closed-loop hydration ecosystem that combines aerospace-grade recycled aluminum with real-time biometric consumption tracking. We created an uncompromising visual identity that honors both industrial precision and ecological integrity.</p>
        
        <h4>Design Philosophy & Execution</h4>
        <p>We avoided greenwashing cliches pervasive in the sustainability sector by leaning into tactile brutalism and utilitarian typographic hierarchy. The color palette features high-visibility cyber yellow, deep spruce green, and polished raw aluminum finishes.</p>
        
        <h4>Business Outcomes</h4>
        <p>The pre-order launch generated over $2.4M in consumer reservations within 72 hours, received a Red Dot Best of the Best nomination, and established Kinetix as a category-defining wellness lifestyle brand.</p>
      `
    },
    'lumio': {
      title: 'LUMIO STUDIO — SPATIAL 3D CANVAS & INTERFACE',
      category: 'UI/UX & WebGL Experience',
      client: 'Lumio Labs Inc.',
      year: '2025',
      role: 'Principal Spatial Product Designer',
      deliverables: 'Design System, WebGL Interaction Model, Responsive Canvas, Spatial Guidelines',
      img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
      description: `
        <h4>Executive Summary</h4>
        <p>Lumio Studio reimagines 3D creative workflows in the web browser. Leveraging Three.js and WebGL, we architected an intuitive spatial canvas where digital artists can effortlessly manipulate lighting, volumetric materials, and interactive characters in real-time.</p>
        
        <h4>Interaction Design & Usability</h4>
        <p>We engineered frictionless drag-and-snap gestural nodes, contextual radial menus, and hardware-accelerated viewport manipulation that feels as responsive as native desktop software. The interface gracefully adapts across 4K ultrawide monitors and Apple Vision Pro spatial environments.</p>
        
        <h4>Business Outcomes</h4>
        <p>Daily active creator retention grew by 68% in private beta, leading to a successful $14M Series A funding round backed by tier-one venture funds.</p>
      `
    },
    'apex': {
      title: 'APEX SOUND FESTIVAL — GENERATIVE POSTER ARCHITECTURE',
      category: 'Generative Typography & Print',
      client: 'Apex Cultural Foundation, Berlin',
      year: '2024',
      role: 'Creative Director',
      deliverables: 'Audio-Reactive Poster Generator, Dynamic Billboard Campaign, Merch System',
      img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
      description: `
        <h4>Executive Summary</h4>
        <p>Apex is an experimental electronic sound festival in Berlin. For their tenth anniversary, we built a custom web tool that ingested real-time audio frequencies from headline artists to distort and generate thousands of unique, vector-perfect promotional posters and stage visuals.</p>
        
        <h4>Creative Strategy</h4>
        <p>Combining heavy constructivist typography with fluid generative wave algorithms produced an aggressive, high-energy aesthetic that dominated European underground culture feeds and urban physical plasterings.</p>
        
        <h4>Business Outcomes</h4>
        <p>All 45,000 festival tickets sold out in 11 minutes. The poster series won a Tokyo Type Directors Club Annual Award.</p>
      `
    },
    'aura': {
      title: 'AURA BOTANICALS — LUXURY SUSTAINABLE PACKAGING',
      category: 'Packaging & Art Direction',
      client: 'Aura Labs Paris',
      year: '2024',
      role: 'Brand & Packaging Director',
      deliverables: 'Bespoke Vessel Mold, Foil Stamping Specs, Sustainable Outer Cartons',
      img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
      description: `
        <h4>Executive Summary</h4>
        <p>Aura Botanicals represents the apex of modern organic biochemical skincare. We designed an ultra-minimalist tactile packaging system using matte-black compostable mycelium packaging, embossed gold foil certifications, and weighted obsidian glass bottles.</p>
        
        <h4>Sensory Unboxing Experience</h4>
        <p>Every tactile touchpoint was calibrated for maximum weight, texture friction, and acoustic satisfaction when opening. The packaging achieves zero single-use plastics across the entire supply chain.</p>
        
        <h4>Business Outcomes</h4>
        <p>Featured in Vogue, Wallpaper*, and Monocle. Garnered a 4.9/5 consumer satisfaction rating across retail flagships in Paris, London, and Tokyo.</p>
      `
    },
    'sora': {
      title: 'SORA OLFACTORY — SCULPTURAL FRAGRANCE ARCHITECTURE',
      category: 'Art Direction & 3D Form',
      client: 'Sora House of Perfume',
      year: '2025',
      role: 'Lead Visual Designer',
      deliverables: 'Vessel Industrial Design, 3D Renderings, Digital Storefront, Editorial Photography',
      img: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80',
      description: `
        <h4>Executive Summary</h4>
        <p>Sora is an avant-garde Japanese fragrance house exploring the sensory intersection of mist, cedar, and mineral rain. We designed a powder-coated pastel ceramic flacon that serves as a permanent sculptural art piece in the modern interior.</p>
        
        <h4>Monolithic Minimalism</h4>
        <p>Stripping all excess commercial markings from the bottle face and using an engraved bottom serial seal preserves pure geometric simplicity. The online experience incorporates subtle ambient soundscapes and fluid WebGL product rotations.</p>
        
        <h4>Business Outcomes</h4>
        <p>First production run of 10,000 bottles sold out worldwide within 48 hours of initial announcement.</p>
      `
    }
  };

  bentoCards.forEach((card) => {
    card.addEventListener('click', () => {
      const projectId = card.getAttribute('data-project');
      const data = projectData[projectId];
      if (!data || !projectModal || !projectModalContent) return;

      projectModalContent.innerHTML = `
        <span class="modal-meta-label" style="color: var(--accent-orange);">${data.category}</span>
        <h2 style="font-family: var(--font-display); font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 700; line-height: 1.1; margin-top: 0.4rem; text-transform: uppercase;">${data.title}</h2>
        
        <img src="${data.img}" alt="${data.title}" class="modal-hero-img">

        <div class="modal-meta-grid">
          <div class="modal-meta-item">
            <span class="modal-meta-label">Client</span>
            <span class="modal-meta-val">${data.client}</span>
          </div>
          <div class="modal-meta-item">
            <span class="modal-meta-label">Timeline</span>
            <span class="modal-meta-val">${data.year}</span>
          </div>
          <div class="modal-meta-item">
            <span class="modal-meta-label">My Role</span>
            <span class="modal-meta-val">${data.role}</span>
          </div>
          <div class="modal-meta-item">
            <span class="modal-meta-label">Deliverables</span>
            <span class="modal-meta-val">${data.deliverables}</span>
          </div>
        </div>

        <div class="modal-body-text">
          ${data.description}
        </div>

        <div style="margin-top: 2.5rem; display: flex; gap: 1rem; flex-wrap: wrap;">
          <a href="contact.html" class="btn-primary-black modal-inquire-btn" style="padding: 0.75rem 1.6rem; font-size: 0.9rem;">
            Inquire About Similar Project →
          </a>
        </div>
      `;

      projectModal.classList.add('active');
      document.body.style.overflow = 'hidden';

      const inquireBtn = projectModalContent.querySelector('.modal-inquire-btn');
      if (inquireBtn) {
        inquireBtn.addEventListener('click', closeProjectModal);
      }
    });
  });

  function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (projectModalClose) {
    projectModalClose.addEventListener('click', closeProjectModal);
  }

  projectModal?.addEventListener('click', (e) => {
    if (e.target === projectModal) {
      closeProjectModal();
    }
  });

  // --- 7. Story Modal System ---
  const storyModal = document.getElementById('storyModal');
  const storyModalClose = document.getElementById('storyModalClose');
  const storyModalContent = document.getElementById('storyModalContent');
  const storyRows = document.querySelectorAll('.story-row');

  const storyData = {
    'story-1': {
      title: 'Crafting High-Converting Landing Pages That Perform Great',
      tag: 'Design Strategy • 6 Min Read',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      content: `
        <h4>The Psychology of First Impressions</h4>
        <p>A landing page has less than 3.5 seconds to anchor a visitor’s cognitive focus. High-converting pages do not bombard users with competing focal points; they structure attention through intentional hierarchy and cognitive momentum.</p>
        
        <h4>Five Principles Behind 20%+ Conversion Rates</h4>
        <p>1. <strong>The Unmistakable Value Promise:</strong> Eliminate jargon. State the concrete superpower your product unlocks within the first 6 words of your headline.</p>
        <p>2. <strong>Social Proof Placement:</strong> Don't bury validation at the footer. Anchor real user testimonials and reputable brand logos directly adjacent to your primary conversion trigger.</p>
        <p>3. <strong>Frictionless Interaction:</strong> Ensure forms require the bare minimum data fields needed to initiate dialogue.</p>
        <p>4. <strong>LCP Performance Benchmarking:</strong> Modern visitors abandon pages that take more than 1.8s to load on mobile. Optimize assets aggressively.</p>
      `
    },
    'story-2': {
      title: 'Starting and Scaling Your Career in Modern Art Direction',
      tag: 'Career & Brand • 8 Min Read',
      img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
      content: `
        <h4>From Solo Pixels to Vision Orchestration</h4>
        <p>The leap from individual contributor to Art Director requires a mental shift from "how do I draw this button?" to "what emotion should this entire brand ecosystem evoke across every medium?"</p>
        
        <h4>Communicating Vision with Precision</h4>
        <p>The best Art Directors speak the language of founders and engineers. They explain design decisions through business leverage, customer psychology, and technical feasibility rather than subjective personal taste.</p>
      `
    },
    'story-3': {
      title: 'How Can Designers Prepare for the Future of Spatial Computing?',
      tag: 'Future Tech • 5 Min Read',
      img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
      content: `
        <h4>Breaking Out of the 2D Rectangular Box</h4>
        <p>With hardware like Vision Pro and WebXR mature enough for daily consumer utility, our canvas is no longer bounded by pixels on a glass pane. We must now design for volumetric depth, physical acoustics, and ambient illumination.</p>
        
        <h4>New Rules of Spatial Typography & Ergonomics</h4>
        <p>In spatial environments, distance controls scale. Designing for neck ergonomics and focal comfort replaces traditional viewport CSS breakpoints. Explore Three.js, Spline, and USDZ workflows today to stay ahead of the next platform transition.</p>
      `
    }
  };

  storyRows.forEach((row) => {
    row.addEventListener('click', () => {
      const storyId = row.getAttribute('data-story');
      const data = storyData[storyId];
      if (!data || !storyModal || !storyModalContent) return;

      storyModalContent.innerHTML = `
        <span class="modal-meta-label" style="color: var(--accent-orange);">${data.tag}</span>
        <h2 style="font-family: var(--font-display); font-size: clamp(1.6rem, 3vw, 2.3rem); font-weight: 700; line-height: 1.15; margin-top: 0.5rem; text-transform: uppercase;">${data.title}</h2>
        
        <img src="${data.img}" alt="${data.title}" class="modal-hero-img">

        <div class="modal-body-text" style="font-size: 1.05rem; line-height: 1.75;">
          ${data.content}
        </div>
      `;

      storyModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeStoryModal() {
    if (!storyModal) return;
    storyModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (storyModalClose) {
    storyModalClose.addEventListener('click', closeStoryModal);
  }

  storyModal?.addEventListener('click', (e) => {
    if (e.target === storyModal) {
      closeStoryModal();
    }
  });

  // Global Escape Key Listener for Modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
      closeStoryModal();
    }
  });

  // --- 8. FAQ Accordion (services.html) ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach((other) => other.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // --- 9. Live Clock in Footer ---
  const liveClockEl = document.getElementById('liveClock');
  function updateLiveClock() {
    if (!liveClockEl) return;
    const now = new Date();
    const options = {
      timeZone: 'America/Los_Angeles',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    const timeString = new Intl.DateTimeFormat('en-US', options).format(now);
    liveClockEl.textContent = `SAN FRANCISCO, CA (PDT) — ${timeString}`;
  }
  updateLiveClock();
  setInterval(updateLiveClock, 1000);

  // --- 10. Budget Selection Chips in Contact Form ---
  const budgetChips = document.querySelectorAll('.budget-chip');
  const budgetInput = document.getElementById('selectedBudget');

  budgetChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      budgetChips.forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
      if (budgetInput) {
        budgetInput.value = chip.getAttribute('data-value');
      }
    });
  });

  // --- 11. Toast Notification System ---
  const toastNotice = document.getElementById('toastNotice');
  const toastMessage = document.getElementById('toastMessage');
  let toastTimer = null;

  function showToast(message) {
    if (!toastNotice || !toastMessage) return;
    toastMessage.textContent = message;
    toastNotice.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 4000);
  }

  // --- 12. Copy Email to Clipboard ---
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'julian@cross.design';
      navigator.clipboard.writeText(email).then(() => {
        showToast('✓ Email copied to clipboard: ' + email);
      }).catch(() => {
        showToast('Email: ' + email);
      });
    });
  }

  // --- 13. Contact Form Submission ---
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('formName')?.value.trim();
      const email = document.getElementById('formEmail')?.value.trim();
      const message = document.getElementById('formMessage')?.value.trim();

      if (!name || !email || !message) {
        showToast('⚠️ Please fill out all required fields.');
        return;
      }

      const submitBtn = contactForm.querySelector('.btn-form-submit');
      const origText = submitBtn.innerHTML;
      submitBtn.innerHTML = 'Sending Inquiry...';
      submitBtn.disabled = true;

      setTimeout(() => {
        showToast(`🎉 Thank you, ${name}! Your inquiry has been sent successfully.`);
        contactForm.reset();
        submitBtn.innerHTML = origText;
        submitBtn.disabled = false;
        budgetChips.forEach((c) => c.classList.remove('active'));
        if (budgetChips[1]) budgetChips[1].classList.add('active');
      }, 1200);
    });
  }

  // --- 14. Back to Top Button ---
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
