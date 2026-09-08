/**
 * URBANisty — Supermodern 3D Interactive Engine
 * Universal Header, Footer, Cart Drawer, 3D Tilt, Audio Chimes & Modals
 */

// Global state
const PAGE = document.body.dataset.page || "";

/* ==========================================================================
   0. THEME MANAGER (Studio Editorial Light vs Stealth Titanium Dark)
   ========================================================================== */
const UrbanTheme = {
  key: 'urbanisty_theme',
  getTheme() {
    try {
      return localStorage.getItem(this.key) || 'light';
    } catch(e) {
      return 'light';
    }
  },
  applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    try {
      localStorage.setItem(this.key, theme);
    } catch(e) {}
    this.updateToggleIcons();
  },
  toggle() {
    AudioFx.playPop();
    const current = this.getTheme();
    const next = current === 'dark' ? 'light' : 'dark';
    this.applyTheme(next);
    UrbanToast.show(
      next === 'dark' ? 'Obsidian Dark Mode' : 'Pale Concrete Light Mode',
      next === 'dark' ? 'Stealth Obsidian theme active.' : 'Crisp pale concrete luxury theme active.',
      next === 'dark' ? '🌙' : '☀️'
    );
  },
  updateToggleIcons() {
    const isDark = this.getTheme() === 'dark';
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
      btn.innerHTML = isDark
        ? `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`
        : `<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
      btn.title = isDark ? 'Switch to Pale Concrete Light' : 'Switch to Obsidian Dark';
    });
  },
  init() {
    this.applyTheme(this.getTheme());
  }
};

// Immediately apply theme to avoid flash
UrbanTheme.init();
const AudioFx = {
  ctx: null,
  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  },
  playPop() {
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      const now = this.ctx.currentTime;
      osc.frequency.setValueAtTime(580, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.12);
    } catch(e) {}
  },
  playChime() {
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();
      const now = this.ctx.currentTime;
      [523.25, 659.25, 783.99].forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.04);
        gain.gain.setValueAtTime(0.05, now + idx * 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.04 + 0.22);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.04);
        osc.stop(now + idx * 0.04 + 0.22);
      });
    } catch(e) {}
  }
};

/* ==========================================================================
   2. TOAST SYSTEM
   ========================================================================== */
const UrbanToast = {
  container: null,
  init() {
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.className = 'toast-container';
      document.body.appendChild(this.container);
    }
  },
  show(title, message, icon = '✦') {
    this.init();
    AudioFx.playChime();
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span class="toast-icon">${icon}</span>
      <div>
        <strong style="display:block; color:#fff; font-size:13px;">${title}</strong>
        <span style="color:var(--muted); font-size:12px;">${message}</span>
      </div>
    `;
    this.container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3200);
  }
};

/* ==========================================================================
   3. PERSISTENT CART SYSTEM
   ========================================================================== */
const UrbanCart = {
  key: 'urbanisty_cart_items_v2',
  items: [],
  init() {
    try {
      const saved = localStorage.getItem(this.key);
      if (saved) {
        this.items = JSON.parse(saved);
      } else {
        this.items = [
          { id: 'cart-1', name: 'Modular Cyber Jacket', price: 145, qty: 1, img: 'product-cyber-jacket.jpg' },
          { id: 'cart-2', name: 'Aether Neon Runners', price: 120, qty: 1, img: 'product-sneaker.jpg' }
        ];
        this.save();
      }
    } catch(e) {
      this.items = [];
    }
    this.injectDrawerUI();
    this.updateBadge();
  },
  save() {
    try {
      localStorage.setItem(this.key, JSON.stringify(this.items));
    } catch(e) {}
    this.updateBadge();
    this.render();
  },
  add(item) {
    AudioFx.playPop();
    const existing = this.items.find(i => i.name === item.name);
    if (existing) {
      existing.qty += 1;
    } else {
      this.items.push({
        id: 'item-' + Date.now(),
        name: item.name,
        price: typeof item.price === 'number' ? item.price : parseInt(String(item.price).replace(/[^0-9]/g, '')) || 45,
        qty: 1,
        img: item.img || 'product-cyber-jacket.jpg'
      });
    }
    this.save();
    UrbanToast.show('Added to Bag', `${item.name} has been added.`);
    this.open();
  },
  remove(id) {
    this.items = this.items.filter(i => i.id !== id);
    this.save();
  },
  step(id, delta) {
    const item = this.items.find(i => i.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
      this.remove(id);
    } else {
      this.save();
    }
  },
  getTotal() {
    return this.items.reduce((sum, i) => sum + (i.price * i.qty), 0);
  },
  getCount() {
    return this.items.reduce((sum, i) => sum + i.qty, 0);
  },
  updateBadge() {
    const count = this.getCount();
    document.querySelectorAll('.cart-count').forEach(el => {
      el.textContent = count;
    });
    const subtotal = this.getTotal();
    document.querySelectorAll('.cart-nav-total').forEach(el => {
      el.textContent = `$${subtotal}`;
    });
  },
  injectDrawerUI() {
    if (document.getElementById('cart-drawer')) return;
    const overlay = document.createElement('div');
    overlay.className = 'cart-overlay';
    overlay.id = 'cart-overlay';
    overlay.onclick = () => this.close();

    const drawer = document.createElement('div');
    drawer.className = 'cart-drawer';
    drawer.id = 'cart-drawer';
    drawer.innerHTML = `
      <div class="cart-header">
        <h3><span style="color:var(--accent);">✦</span> Shopping Bag</h3>
        <button class="cart-close-btn" onclick="UrbanCart.close()">&times;</button>
      </div>
      <div class="cart-items-body" id="cart-items-list"></div>
      <div class="cart-footer">
        <div class="cart-subtotal-row">
          <span>Subtotal</span>
          <strong id="cart-drawer-subtotal">$0</strong>
        </div>
        <div class="cart-shipping-note">
          <span>⚡</span> Free Express Courier &amp; 30-Day Guarantee
        </div>
        <button class="btn accent" style="width:100%;" onclick="UrbanCart.checkout()">
          Proceed to Checkout &rarr;
        </button>
      </div>
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(drawer);
    this.render();
  },
  open() {
    const overlay = document.getElementById('cart-overlay');
    const drawer = document.getElementById('cart-drawer');
    if (overlay && drawer) {
      this.render();
      overlay.classList.add('show');
      drawer.classList.add('show');
      document.body.style.overflow = 'hidden';
    }
  },
  close() {
    const overlay = document.getElementById('cart-overlay');
    const drawer = document.getElementById('cart-drawer');
    if (overlay && drawer) {
      overlay.classList.remove('show');
      drawer.classList.remove('show');
      document.body.style.overflow = '';
    }
  },
  checkout() {
    if (this.items.length === 0) {
      UrbanToast.show('Cart is Empty', 'Add items before proceeding.', '⚠️');
      return;
    }
    UrbanToast.show('Initiating Checkout', `Processing $${this.getTotal()} order...`, '🔒');
    setTimeout(() => {
      alert('Thank you for shopping at URBANisty! This is a portfolio prototype.');
      this.close();
    }, 800);
  },
  render() {
    const list = document.getElementById('cart-items-list');
    const subtotalEl = document.getElementById('cart-drawer-subtotal');
    if (!list) return;

    if (this.items.length === 0) {
      list.innerHTML = `
        <div class="cart-empty-state">
          <div class="empty-icon">🛍️</div>
          <h4 style="margin-bottom:8px;">Your Bag is Empty</h4>
          <p style="font-size:13px; color:var(--muted); margin-bottom:20px;">Explore our new arrivals and add something special.</p>
          <a href="shop.html" class="btn sm accent" onclick="UrbanCart.close()">Explore Shop</a>
        </div>
      `;
      if (subtotalEl) subtotalEl.textContent = '$0';
      return;
    }

    list.innerHTML = this.items.map(item => `
      <div class="cart-item-row">
        <div class="cart-item-thumb">
          <img src="Public/images/${item.img}" onerror="this.onerror=null;this.src='https://picsum.photos/seed/${encodeURIComponent(item.name)}/100/100'">
        </div>
        <div class="cart-item-details">
          <h5>${item.name}</h5>
          <div class="price">$${item.price}</div>
        </div>
        <div class="cart-item-qty">
          <button onclick="UrbanCart.step('${item.id}', -1)">-</button>
          <span>${item.qty}</span>
          <button onclick="UrbanCart.step('${item.id}', 1)">+</button>
        </div>
        <button class="cart-item-remove" onclick="UrbanCart.remove('${item.id}')" title="Remove">&times;</button>
      </div>
    `).join('');

    if (subtotalEl) {
      subtotalEl.textContent = `$${this.getTotal()}`;
    }
  }
};

/* ==========================================================================
   4. 3D QUICK VIEW MODAL
   ========================================================================== */
const UrbanQuickView = {
  init() {
    if (document.getElementById('quick-view-modal')) return;
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.id = 'quick-view-modal';
    modal.onclick = (e) => {
      if (e.target === modal) this.close();
    };
    modal.innerHTML = `
      <div class="modal-card">
        <button class="modal-close" onclick="UrbanQuickView.close()">&times;</button>
        <div class="modal-media">
          <img id="qv-img" src="" alt="Product preview">
        </div>
        <div class="modal-info">
          <div class="badge cyan" style="margin-bottom:12px;">Featured Look</div>
          <h3 id="qv-title">Product Title</h3>
          <div class="modal-price" id="qv-price">$95</div>
          <p id="qv-desc">Crafted from premium technical textiles with ergonomic articulation and water-resistant finish.</p>
          <div style="display:flex; gap:12px; margin-bottom:24px;">
            <button class="finish-btn active"><span class="swatch" style="background:#ff4820"></span> Coral</button>
            <button class="finish-btn"><span class="swatch" style="background:#111"></span> Obsidian</button>
            <button class="finish-btn"><span class="swatch" style="background:#00f0ff"></span> Cyan</button>
          </div>
          <div style="display:flex; gap:12px; align-items:center; margin-top:8px;">
            <button class="btn accent" id="qv-add-btn" style="flex:1; height:46px; font-weight:700; display:inline-flex; align-items:center; justify-content:center; gap:8px;">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
              Add to Bag
            </button>
            <a href="shop.html" class="btn outline" id="qv-link" style="height:46px; padding:0 22px; display:inline-flex; align-items:center; justify-content:center; gap:6px; font-weight:600; white-space:nowrap;">
              View Details &rarr;
            </a>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  },
  open(product) {
    this.init();
    const modal = document.getElementById('quick-view-modal');
    document.getElementById('qv-title').textContent = product.name;
    document.getElementById('qv-price').textContent = product.price;
    document.getElementById('qv-img').src = `Public/images/${product.img}`;
    document.getElementById('qv-img').onerror = function() {
      this.src = `https://picsum.photos/seed/${encodeURIComponent(product.name)}/300/300`;
    };
    document.getElementById('qv-add-btn').onclick = () => {
      UrbanCart.add(product);
      this.close();
    };
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  },
  close() {
    const modal = document.getElementById('quick-view-modal');
    if (modal) {
      modal.classList.remove('show');
      document.body.style.overflow = '';
    }
  }
};

/* ==========================================================================
   5. OPTIMIZED 3D TILT ENGINE (Hardware Accelerated & Throttled)
   ========================================================================== */
function init3DTilt() {
  const cards = document.querySelectorAll('.card, .promo, .deal, .testi');

  cards.forEach(card => {
    if (card.dataset.tiltReady) return;
    card.dataset.tiltReady = 'true';

    let bounds = null;
    let rafId = null;

    card.addEventListener('mouseenter', () => {
      bounds = card.getBoundingClientRect();
    }, { passive: true });

    card.addEventListener('mousemove', (e) => {
      if (!bounds) bounds = card.getBoundingClientRect();
      if (rafId) return; // Throttled to frame rate!
      rafId = requestAnimationFrame(() => {
        rafId = null;
        const xPct = (e.clientX - bounds.left) / bounds.width;
        const yPct = (e.clientY - bounds.top) / bounds.height;
        const tiltX = (0.5 - yPct) * 10;
        const tiltY = (xPct - 0.5) * 10;
        card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-4px)`;
      });
    }, { passive: true });

    card.addEventListener('mouseleave', () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      bounds = null;
      card.style.transform = '';
    }, { passive: true });
  });
}

/* ==========================================================================
   7. SCROLL REVEAL OBSERVER
   ========================================================================== */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal, .card, .promo, .showroom-container, .deal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

/* ==========================================================================
   8. SHARED HEADER & FOOTER GENERATOR
   ========================================================================== */
function renderHeader() {
  const headerEl = document.getElementById('site-header');
  if (!headerEl) return;

  function navLink(label, href, key) {
    return `<a href="${href}" class="${PAGE === key ? 'active' : ''}">${label}</a>`;
  }

  headerEl.innerHTML = `
    <div class="mainnav" id="nav-bar">
      <div class="wrap">
        <a href="index.html" class="logo">
          <span class="mark">U</span>RBANISTY
        </a>
        <nav class="navlinks">
          ${navLink('Home', 'index.html', 'home')}
          ${navLink('Shop', 'shop.html', 'shop')}
          ${navLink('About', 'about.html', 'about')}
          ${navLink('Journal', 'blog.html', 'blog')}
          ${navLink('Contact', 'contact.html', 'contact')}
        </nav>
        <div class="navicons">
          <button class="icon-btn theme-toggle-btn" onclick="UrbanTheme.toggle()" title="Toggle Light/Dark Theme" aria-label="Toggle Theme">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          </button>
          <button class="icon-btn" onclick="UrbanToast.show('Search Activated', 'Type product name or category...', '🔍')" title="Search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
          <div class="cart-trigger" onclick="UrbanCart.open()" title="View Shopping Bag">
            <span class="cart-nav-total">$0</span>
            <span class="cart-count">0</span>
          </div>
        </div>
      </div>
    </div>
  `;
  UrbanTheme.updateToggleIcons();

  // Dynamic navbar blur on scroll (passive & throttled by state)
  let isNavScrolled = false;
  function updateNavScroll() {
    const shouldBeScrolled = window.scrollY > 40;
    if (shouldBeScrolled !== isNavScrolled) {
      isNavScrolled = shouldBeScrolled;
      const bar = document.getElementById('nav-bar');
      if (bar) {
        if (isNavScrolled) {
          bar.classList.add('scrolled');
        } else {
          bar.classList.remove('scrolled');
        }
      }
    }
  }
  window.addEventListener('scroll', updateNavScroll, { passive: true });
  updateNavScroll();
}

function renderFooter() {
  const footerEl = document.getElementById('site-footer');
  if (!footerEl) return;

  footerEl.innerHTML = `
    <footer class="site">
      <div class="wrap foot-grid">
        <div>
          <div class="logo"><span class="mark">U</span>RBANISTY</div>
          <p>Supermodern streetwear and luxury lifestyle apparel engineered for the contemporary vanguard.</p>
          <div class="foot-social">
            <a href="#" onclick="UrbanToast.show('Social Link', 'Connected to Instagram'); return false;">ig</a>
            <a href="#" onclick="UrbanToast.show('Social Link', 'Connected to Twitter / X'); return false;">x</a>
            <a href="#" onclick="UrbanToast.show('Social Link', 'Connected to Discord'); return false;">dc</a>
            <a href="#" onclick="UrbanToast.show('Social Link', 'Connected to YouTube'); return false;">yt</a>
          </div>
        </div>
        <div>
          <h5>Collections</h5>
          <ul>
            <li><a href="shop.html">New Arrivals</a></li>
            <li><a href="shop.html">Men's Apparel</a></li>
            <li><a href="shop.html">Techwear Jackets</a></li>
            <li><a href="shop.html">Footwear &amp; Bags</a></li>
          </ul>
        </div>
        <div>
          <h5>Brand</h5>
          <ul>
            <li><a href="about.html">Design Philosophy</a></li>
            <li><a href="about.html">Eco-Materials</a></li>
            <li><a href="blog.html">Editorial Journal</a></li>
            <li><a href="contact.html">Atelier Contact</a></li>
          </ul>
        </div>
        <div>
          <h5>Join The Collective</h5>
          <p style="margin-bottom:14px;">Unlock early access drops, secret archive sales &amp; VIP member perks.</p>
          <div style="display:flex; gap:8px;">
            <input class="field" id="footer-newsletter-input" placeholder="Enter email..." style="margin-bottom:0; padding:10px 14px; font-size:13px;">
            <button class="btn accent sm" onclick="handleNewsletterSubmit()">Join</button>
          </div>
        </div>
      </div>
      <div class="copybar">
        Copyright &copy; ${new Date().getFullYear()} URBANisty &bull; Modern Streetwear &amp; Apparel &bull; All Rights Reserved.
      </div>
    </footer>
  `;
}

function handleNewsletterSubmit() {
  const inp = document.getElementById('footer-newsletter-input');
  if (inp && inp.value.trim().length > 3) {
    UrbanToast.show('VIP Access Granted', `Welcome aboard! Confirmation sent to ${inp.value}`, '⚡');
    inp.value = '';
  } else {
    UrbanToast.show('Please enter a valid email', 'Ensure your address is correct.', '⚠️');
  }
}

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
  UrbanCart.init();
  UrbanQuickView.init();
  init3DTilt();
  initScrollReveal();
});