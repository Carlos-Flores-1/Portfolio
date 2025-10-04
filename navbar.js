// navbar.js - Reusable responsive navbar injection
function injectNavbar(options = {}) {
  const brand = options.brand || 'CF';
  const links = options.links || [
    { text: 'Home', href: 'index.html' },
    { text: 'Resume', href: 'Carlos_Flores_Resume.pdf', target: '_blank'},
  ];
  const nav = document.createElement('nav');
  nav.className = 'navbar';
  nav.innerHTML = `
    <div class="navbar-brand">${brand}</div>
    <button class="navbar-toggle" id="navbar-toggle" aria-label="Toggle navigation">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>
    <ul class="navbar-menu" id="navbar-menu">
      ${links.map(link => `<li><a href='${link.href}'${link.target ? ` target='${link.target}'` : ''}>${link.text}</a></li>`).join('')}
    </ul>
  `;
  const placeholder = document.getElementById('navbar-placeholder');
  if (placeholder) {
    placeholder.parentNode.replaceChild(nav, placeholder);
  } else {
    document.body.insertBefore(nav, document.body.firstChild);
  }

  // Hamburger toggle logic
  const toggle = nav.querySelector('#navbar-toggle');
  const menu = nav.querySelector('#navbar-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      menu.classList.toggle('active');
      toggle.classList.toggle('open');
    });
  }
}

// Fade-in on scroll animation
function handleScrollFadeIn() {
  const fadeEls = document.querySelectorAll('.fade-in-on-scroll');
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add('visible');
    }
  });
}

// Automatically inject navbar on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
  injectNavbar();
  handleScrollFadeIn(); // Initial check
});

// Add scroll event listener
window.addEventListener('scroll', handleScrollFadeIn);
