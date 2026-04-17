// ========== NAV SCROLL EFFECT ==========
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

// ========== MOBILE NAV TOGGLE ==========
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close mobile nav when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  });
});

// ========== SMOOTH ACTIVE NAV LINKS ==========
const sections = document.querySelectorAll('section[id]');
const allNavLinks = document.querySelectorAll('.nav-links a');

function updateActiveLink() {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });
  allNavLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveLink, { passive: true });

// ========== PROJECT CARD SCROLL REVEAL ==========
const projectCards = document.querySelectorAll('.project-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const card = entry.target;
      const delay = Array.from(projectCards).indexOf(card) % 3 * 80;
      setTimeout(() => {
        card.classList.add('visible');
      }, delay);
      observer.unobserve(card);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

projectCards.forEach(card => observer.observe(card));

// ========== FOOTER YEAR ==========
document.getElementById('year').textContent = new Date().getFullYear();

// ========== TYPING CURSOR EFFECT (hero role) ==========
const roleEl = document.querySelector('.hero-role');
if (roleEl) {
  const text = roleEl.textContent;
  roleEl.textContent = '';
  let i = 0;

  function typeChar() {
    if (i < text.length) {
      roleEl.textContent += text[i];
      i++;
      setTimeout(typeChar, 38);
    }
  }

  // Start after hero animation delay
  setTimeout(typeChar, 600);
}
