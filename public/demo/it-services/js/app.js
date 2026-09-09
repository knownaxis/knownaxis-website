/**
 * Novaplex Technologies - Interactive Application Script
 * Enhanced with Scroll-Reveal, Animated Number Counters, Card Spotlights & Marquee
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initCursorFollower();
  initFeatureCards();
  initSectionHoverEffects();
  initPortfolioTabs();
  initPricingToggle();
  initTeamGrid();
  initSecurityAccordion();
  initTestimonialsGrid();
  initNewsGrid();
  initVideoModal();
  initNewsletterForm();
  
  // Dynamic Animation Controllers
  initScrollReveal();
  initNumberCounters();
  initCardSpotlight();
});

/* --------------------------------------------------------------------------
   1. Sticky Header & Mobile Nav
   -------------------------------------------------------------------------- */
function initNavigation() {
  const header = document.querySelector(".site-header");
  const mobileToggle = document.getElementById("mobileToggle");
  const navLinks = document.getElementById("navLinks");
  const links = document.querySelectorAll(".nav-item");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  });

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    links.forEach((l) => {
      l.addEventListener("click", () => navLinks.classList.remove("open"));
    });
  }
}

/* --------------------------------------------------------------------------
   2. Translucent Circle Cursor Follower (Smooth 60fps)
   -------------------------------------------------------------------------- */
function initCursorFollower() {
  const follower = document.getElementById("cursorFollower");
  if (!follower) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let followerX = mouseX;
  let followerY = mouseY;
  let isVisible = false;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!isVisible) {
      isVisible = true;
      follower.style.opacity = "1";
    }
  });

  function updateCursor() {
    followerX += (mouseX - followerX) * 0.16;
    followerY += (mouseY - followerY) * 0.16;
    follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
    requestAnimationFrame(updateCursor);
  }
  requestAnimationFrame(updateCursor);

  // Expand translucent circle on interactive items
  const hoverTargets = document.querySelectorAll("a, button, input, .service-feature-card, .pricing-plan-card, .news-card, .portfolio-tab-btn, .accordion-header-btn, .hero-badge-pointer");
  hoverTargets.forEach((target) => {
    target.addEventListener("mouseenter", () => follower.classList.add("cursor-grow"));
    target.addEventListener("mouseleave", () => follower.classList.remove("cursor-grow"));
  });

  document.addEventListener("mouseleave", () => {
    follower.style.opacity = "0";
    isVisible = false;
  });
}

/* --------------------------------------------------------------------------
   3. Distinct Hover Animations Across Sections
   (Services: 3D tilt; Hero: pointer wobble; Pillars: shimmer; Team/FAQ: clean no-effect)
   -------------------------------------------------------------------------- */
function initSectionHoverEffects() {
  // Effect A: 3D Magnetic Perspective Tilt on Service Cards
  const serviceCards = document.querySelectorAll(".service-feature-card");
  serviceCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = (-y / rect.height) * 12;
      const rotateY = (x / rect.width) * 12;
      card.style.transform = `perspective(800px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)";
    });
  });

  // Effect B: Hero Floating Badges (Solution / Technology) Interactive Float
  const badges = document.querySelectorAll(".hero-badge-pointer");
  const hero = document.getElementById("hero");
  if (hero && badges.length) {
    hero.addEventListener("mousemove", (e) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      badges.forEach((b, idx) => {
        const factor = idx === 0 ? 15 : -15;
        b.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    });
    hero.addEventListener("mouseleave", () => {
      badges.forEach((b) => (b.style.transform = "translate(0, 0)"));
    });
  }

  // Effect C: Mid-Page CTA Mouse-Tracking Spotlight
  const ctaCard = document.querySelector(".cta-banner-card");
  if (ctaCard) {
    ctaCard.addEventListener("mousemove", (e) => {
      const rect = ctaCard.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      ctaCard.style.setProperty("--glow-x", `${x}%`);
      ctaCard.style.setProperty("--glow-y", `${y}%`);
    });
  }
}

/* --------------------------------------------------------------------------
   3. 4 Harmonized Feature Cards (Modern Enterprise Glassmorphism)
   -------------------------------------------------------------------------- */
const ICONS = {
  cloud: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,
  shield: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  code: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  headset: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5a9 9 0 0 1 18 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/><path d="M21 16v2a3 3 0 0 1-3 3h-5"/></svg>`,
  arrowRight: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  check: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`
};

function initFeatureCards() {
  const container = document.getElementById("featuresGrid");
  if (!container) return;

  container.innerHTML = NOVAPLEX_DATA.featureCards.map((card, idx) => `
    <div class="service-feature-card reveal stagger-${idx + 1} ${card.isFeatured ? 'featured-service' : ''}">
      <div class="card-spotlight"></div>
      <div class="service-card-top">
        <div class="service-feat-icon-wrap">
          ${ICONS[card.icon] || ICONS.cloud}
        </div>
        ${card.badge ? `<span class="service-feat-badge">${card.badge}</span>` : ''}
      </div>
      <h3 class="service-feat-title">${card.title}</h3>
      <p class="service-feat-desc">${card.desc}</p>
      <div class="service-card-bottom">
        <a href="#services" class="service-feat-link">
          ${card.linkText} ${ICONS.arrowRight}
        </a>
      </div>
    </div>
  `).join("");
}

/* --------------------------------------------------------------------------
   3. Tabbed Portfolios
   -------------------------------------------------------------------------- */
function initPortfolioTabs() {
  const tabsContainer = document.getElementById("portfolioTabs");
  const showcaseContainer = document.getElementById("portfolioShowcase");
  if (!tabsContainer || !showcaseContainer) return;

  // Render Tabs
  tabsContainer.innerHTML = NOVAPLEX_DATA.portfolioTabs.map((tab, idx) => `
    <button class="portfolio-tab-btn ${idx === 0 ? 'active' : ''}" data-tab="${tab.id}">
      <span>${tab.label}</span>
    </button>
  `).join("");

  function renderShowcase(tabId) {
    const item = NOVAPLEX_DATA.portfolios[tabId] || NOVAPLEX_DATA.portfolios["tech"];

    showcaseContainer.style.opacity = "0";
    showcaseContainer.style.transform = "translateY(14px) scale(0.98)";
    showcaseContainer.style.transition = "opacity 0.28s ease, transform 0.28s cubic-bezier(0.16, 1, 0.3, 1)";

    setTimeout(() => {
      showcaseContainer.innerHTML = `
        <div class="portfolio-img-wrap">
          <img src="${item.image}" alt="${item.title}" loading="lazy">
        </div>
        <div class="portfolio-details">
          <div class="portfolio-subtitle">${item.subtitle}</div>
          <h3>${item.title}</h3>
          <p class="portfolio-desc">${item.desc}</p>
          
          <div class="portfolio-metrics-row">
            ${item.metrics.map((m) => `
              <div>
                <div class="p-metric-val">${m.val}</div>
                <div class="p-metric-lbl">${m.label}</div>
              </div>
            `).join("")}
          </div>

          <a href="#contact" class="btn-pill-primary">
            Request Case Study Spec
            ${ICONS.arrowRight}
          </a>
        </div>
        <div class="portfolio-mockup-wrap">
          <img src="${item.mobileMockup}" alt="Mobile preview" loading="lazy">
        </div>
      `;

      showcaseContainer.style.opacity = "1";
      showcaseContainer.style.transform = "translateY(0) scale(1)";
    }, 140);
  }

  // Click Handler
  tabsContainer.querySelectorAll(".portfolio-tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      tabsContainer.querySelectorAll(".portfolio-tab-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderShowcase(btn.getAttribute("data-tab"));
    });
  });

  renderShowcase("tech");
}

/* --------------------------------------------------------------------------
   4. Pricing Plan Monthly / Annual Toggle with Pop Animation
   -------------------------------------------------------------------------- */
let isAnnualBilling = false;

function initPricingToggle() {
  const toggleTrack = document.getElementById("pricingToggleTrack");
  const monthlyLabel = document.getElementById("toggleMonthlyLabel");
  const annualLabel = document.getElementById("toggleAnnualLabel");
  const cardsContainer = document.getElementById("pricingCardsGrid");

  if (!cardsContainer) return;

  function renderPricingCards(triggerPop = false) {
    cardsContainer.innerHTML = NOVAPLEX_DATA.pricing.map((plan, idx) => {
      const price = isAnnualBilling ? plan.priceAnnual : plan.priceMonthly;
      return `
        <div class="pricing-plan-card reveal stagger-${idx + 1} ${plan.isFeatured ? 'featured-plan' : ''}">
          <div class="card-spotlight"></div>
          <div class="plan-top-banner">
            <div class="plan-top-left">
              <span class="plan-badge-mini">${plan.badge}</span>
              <h3 class="plan-name">${plan.name}</h3>
            </div>
            <div class="plan-banner-icon">
              ${idx === 0 ? ICONS.code : idx === 1 ? ICONS.cloud : ICONS.shield}
            </div>
          </div>

          <div class="plan-body-content">
            <div class="plan-price-wrap">
              <span class="plan-currency">$</span>
              <span class="plan-price-num ${triggerPop ? 'price-pop' : ''}">${price.toLocaleString()}</span>
              <span class="plan-period">/ ${plan.period}</span>
            </div>

            <ul class="plan-features-list">
              ${plan.features.map((feat) => `
                <li class="plan-feat-item">
                  ${ICONS.check}
                  <span>${feat}</span>
                </li>
              `).join("")}
            </ul>

            <a href="#contact" class="${plan.isFeatured ? 'btn-plan-featured' : 'btn-plan-standard'}">
              ${plan.btnText}
            </a>
          </div>
        </div>
      `;
    }).join("");

    initCardSpotlight();
    initScrollReveal();
  }

  function setBilling(annual) {
    isAnnualBilling = annual;
    if (toggleTrack) {
      if (isAnnualBilling) {
        toggleTrack.classList.add("active");
        annualLabel?.classList.add("active");
        monthlyLabel?.classList.remove("active");
      } else {
        toggleTrack.classList.remove("active");
        annualLabel?.classList.remove("active");
        monthlyLabel?.classList.add("active");
      }
    }
    renderPricingCards(true);
  }

  toggleTrack?.addEventListener("click", () => setBilling(!isAnnualBilling));
  monthlyLabel?.addEventListener("click", () => setBilling(false));
  annualLabel?.addEventListener("click", () => setBilling(true));

  renderPricingCards(false);
}

/* --------------------------------------------------------------------------
   5. Skilled Expert Team Grid
   -------------------------------------------------------------------------- */
function initTeamGrid() {
  const container = document.getElementById("teamCardsGrid");
  if (!container) return;

  container.innerHTML = NOVAPLEX_DATA.team.map((member, idx) => `
    <div class="team-expert-card reveal stagger-${idx + 1}">
      <div class="card-spotlight"></div>
      <div class="team-card-inner">
        <div class="team-img-box">
          <img src="${member.image}" alt="${member.name}" loading="lazy">
        </div>
        <div class="team-info-box">
          <h4 class="team-name">${member.name}</h4>
          <div class="team-role">${member.role}</div>
        </div>
      </div>
    </div>
  `).join("");
}

/* --------------------------------------------------------------------------
   6. Security Accordion
   -------------------------------------------------------------------------- */
function initSecurityAccordion() {
  const container = document.getElementById("securityAccordion");
  if (!container) return;

  container.innerHTML = NOVAPLEX_DATA.securityAccordion.map((item, idx) => `
    <div class="accordion-item ${idx === 0 ? 'active' : ''}">
      <button class="accordion-header-btn" aria-expanded="${idx === 0}">
        <span>${item.q}</span>
        <svg class="accordion-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div class="accordion-body-content">
        <div class="accordion-inner-text">
          ${item.a}
        </div>
      </div>
    </div>
  `).join("");

  const items = container.querySelectorAll(".accordion-item");
  items.forEach((item) => {
    const btn = item.querySelector(".accordion-header-btn");
    btn?.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      items.forEach((i) => {
        i.classList.remove("active");
        i.querySelector(".accordion-header-btn")?.setAttribute("aria-expanded", "false");
      });

      if (!isActive) {
        item.classList.add("active");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });
}

/* --------------------------------------------------------------------------
   7. Testimonials Grid
   -------------------------------------------------------------------------- */
function initTestimonialsGrid() {
  const container = document.getElementById("testimonialsGrid");
  if (!container) return;

  container.innerHTML = NOVAPLEX_DATA.testimonials.map((t, idx) => `
    <div class="testimonial-card reveal stagger-${idx + 1} ${t.isHighlighted ? 'featured-testimonial' : ''}">
      <div class="card-spotlight"></div>
      <div class="test-card-top">
        <div class="test-stars">★★★★★</div>
        <div class="test-quote-icon">“</div>
      </div>
      <p class="test-quote-text">"${t.quote}"</p>
      <div class="test-author-row">
        <img class="test-avatar" src="${t.avatar}" alt="${t.author}">
        <div>
          <div class="test-name">${t.author}</div>
          <div class="test-company">${t.role} • <strong>${t.company}</strong></div>
        </div>
      </div>
    </div>
  `).join("");
}

/* --------------------------------------------------------------------------
   8. News & Insights Grid
   -------------------------------------------------------------------------- */
function initNewsGrid() {
  const container = document.getElementById("newsCardsGrid");
  if (!container) return;

  container.innerHTML = NOVAPLEX_DATA.news.map((post, idx) => `
    <div class="news-card reveal stagger-${idx + 1}">
      <div class="card-spotlight"></div>
      <div class="news-img-box">
        <img src="${post.image}" alt="${post.title}" loading="lazy">
      </div>
      <div class="news-content-box">
        <div class="news-meta-row">
          <span class="news-category-tag">${post.category}</span>
          <span class="news-date">${post.date}</span>
        </div>
        <h4 class="news-title">${post.title}</h4>
        <div class="news-card-footer">
          <span class="news-author-name">By ${post.author}</span>
          <a href="#contact" class="news-read-more">
            Read ${ICONS.arrowRight}
          </a>
        </div>
      </div>
    </div>
  `).join("");
}

/* --------------------------------------------------------------------------
   9. Video Modal
   -------------------------------------------------------------------------- */
function initVideoModal() {
  const playBtn = document.getElementById("videoPlayBtn");
  if (!playBtn) return;

  playBtn.addEventListener("click", () => {
    let modal = document.getElementById("videoModalDialog");
    if (!modal) {
      modal = document.createElement("dialog");
      modal.id = "videoModalDialog";
      modal.style.padding = "0";
      modal.style.border = "none";
      modal.style.borderRadius = "16px";
      modal.style.background = "#000000";
      modal.style.maxWidth = "800px";
      modal.style.width = "90%";
      modal.style.margin = "auto";
      modal.style.boxShadow = "0 25px 60px rgba(0,0,0,0.8)";
      modal.innerHTML = `
        <div style="position: relative; padding-bottom: 56.25%; height: 0;">
          <iframe 
            src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1" 
            title="Novaplex Cloud Overview" 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; border-radius: 16px;" 
            allow="autoplay; encrypted-media" 
            allowfullscreen>
          </iframe>
          <button id="closeVideoModal" style="position: absolute; top: 12px; right: 12px; background: rgba(0,0,0,0.7); color: #fff; width: 36px; height: 36px; border-radius: 50%; font-size: 18px; z-index: 10; border: none; cursor: pointer;">✕</button>
        </div>
      `;
      document.body.appendChild(modal);

      modal.querySelector("#closeVideoModal").addEventListener("click", () => modal.close());
      modal.addEventListener("click", (e) => {
        const rect = modal.getBoundingClientRect();
        if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
          modal.close();
        }
      });
    }
    modal.showModal();
  });
}

/* --------------------------------------------------------------------------
   10. Newsletter Form
   -------------------------------------------------------------------------- */
function initNewsletterForm() {
  const form = document.getElementById("footerNewsletterForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = form.querySelector('input[type="email"]');
    if (input && input.value) {
      alert(`Thank you! ${input.value} has been subscribed to Novaplex Tech Insights.`);
      input.value = "";
    }
  });
}

/* --------------------------------------------------------------------------
   11. Scroll-Driven Reveal Animations (IntersectionObserver)
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  const targets = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");
  if (!targets.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  });

  targets.forEach((el) => observer.observe(el));
}

/* --------------------------------------------------------------------------
   12. Animated Number Counters
   -------------------------------------------------------------------------- */
function initNumberCounters() {
  const counters = document.querySelectorAll(".counter-num");
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const targetVal = parseFloat(el.getAttribute("data-counter") || "0");
        const decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
        const suffix = el.getAttribute("data-suffix") || "";
        const duration = 1800; // ms
        let startTime = null;

        function updateCounter(timestamp) {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          
          // Smooth easeOutExpo
          const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          const currentVal = (targetVal * easeProgress).toFixed(decimals);

          el.textContent = `${currentVal}${suffix}`;

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            el.textContent = `${targetVal.toFixed(decimals)}${suffix}`;
          }
        }

        requestAnimationFrame(updateCounter);
        obs.unobserve(el);
      }
    });
  }, {
    threshold: 0.3
  });

  counters.forEach((c) => observer.observe(c));
}

/* --------------------------------------------------------------------------
   13. Dynamic Card Spotlight Glow (Mouse Tracking)
   -------------------------------------------------------------------------- */
function initCardSpotlight() {
  const cards = document.querySelectorAll(".service-feature-card, .pricing-plan-card, .team-expert-card, .news-card");
  
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });
}
