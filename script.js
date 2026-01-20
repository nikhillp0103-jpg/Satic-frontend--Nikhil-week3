document.addEventListener('DOMContentLoaded', function() {
  
  // 1. MOBILE HAMBURGER - BULLETPROOF
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const body = document.body;

  function toggleMobileMenu() {
    navLinks.classList.toggle('mobile-open');
    navToggle.classList.toggle('open');
    body.classList.toggle('menu-open');
  }

  navToggle.addEventListener('click', toggleMobileMenu);

  // Close on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('mobile-open');
      navToggle.classList.remove('open');
      body.classList.remove('menu-open');
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('mobile-open');
      navToggle.classList.remove('open');
      body.classList.remove('menu-open');
    }
  });

  // 2. SCROLL ANIMATIONS
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        if (entry.target.classList.contains('stat-card')) {
          animateCounter(entry.target);
        }
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });

  // 3. STATS COUNTER
  function animateCounter(statCard) {
    const counter = statCard.querySelector('.stat-number');
    const target = parseInt(statCard.dataset.count);
    const unit = statCard.dataset.unit || '%';
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      counter.textContent = Math.floor(current) + (unit === '%' ? '%' : 'x');
    }, 30);
  }

  // 4. KINETIC TYPOGRAPHY
  const kineticTitle = document.querySelector('.kinetic-title');
  if (kineticTitle) {
    kineticTitle.innerHTML = kineticTitle.textContent
      .split('')
      .map(char => char === ' ' ? '<span class="letter space"></span>' : `<span class="letter">${char}</span>`)
      .join('');
  }

  // 5. BUTTON HOVERS
  document.querySelectorAll('.btn-primary-3d, .btn-glass, .btn-trending').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-4px) scale(1.02)';
    });
    btn.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
});
