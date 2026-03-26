// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// WhatsApp function
function openWhatsApp() {
  window.open("https://wa.me/27732551065", "_blank");
}

// Navbar scroll effect
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

// Loading screen
window.addEventListener('load', () => {
  const loading = document.getElementById('loading');
  setTimeout(() => {
    loading.classList.add('hidden');
  }, 1000);

  // Active nav highlight
  const path = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (href === 'index.html' && path === '')) {
      link.classList.add('active');
    }
  });

  // WhatsApp button icons + aria-labels
  document.querySelectorAll('.cta-button').forEach(btn => {
    btn.classList.add('whatsapp-btn');
    btn.setAttribute('aria-label', 'Chat on WhatsApp');
    if (!btn.querySelector('.button-icon')) {
      const icon = document.createElement('span');
      icon.className = 'button-icon';
      icon.innerHTML = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.52 3.48a11.928 11.928 0 0 0-8.45-3.5c-6.59 0-11.95 5.35-11.95 11.95 0 2.11.55 4.16 1.6 5.96L0 24l5.76-1.5a11.84 11.84 0 0 0 5.86 1.5h.01c6.59 0 11.95-5.35 11.95-11.95 0-2.85-1.11-5.52-3.08-7.55Zm-8.42 17.42h-.01c-1.8 0-3.57-.47-5.13-1.36l-.37-.22-3.42.89.92-3.34-.24-.38a8.5 8.5 0 0 1-1.31-4.55c0-4.7 3.82-8.53 8.52-8.53 2.28 0 4.42.89 6.03 2.5a8.45 8.45 0 0 1 2.49 6.05c0 4.7-3.82 8.53-8.51 8.53Zm4.6-6.3c-.25-.12-1.5-.74-1.73-.82-.23-.08-.4-.12-.57.12-.17.25-.65.82-.8.99-.15.17-.3.19-.55.06-.25-.12-1.05-.39-2.01-1.25-.75-.66-1.25-1.47-1.4-1.73-.15-.26-.02-.4.11-.52.11-.11.25-.3.38-.45.13-.15.17-.26.26-.43.08-.17.04-.31-.02-.43-.06-.12-.57-1.37-.78-1.87-.21-.5-.43-.43-.56-.44-.14-.01-.3-.01-.46-.01a.87.87 0 0 0-.63.29c-.22.24-.84.82-.84 2 0 1.18.86 2.33.98 2.49.12.16 1.68 2.56 4.06 3.59 2.38 1.03 2.4.69 2.83.65.44-.05 1.5-.61 1.71-1.21.21-.6.21-1.12.15-1.23-.06-.11-.24-.17-.48-.29Z"/></svg>';
      btn.insertBefore(icon, btn.firstChild);
    }
    if (!btn.getAttribute('aria-label')) {
      btn.setAttribute('aria-label', 'Chat on WhatsApp');
    }
  });
});