const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

navToggle?.addEventListener('click', () => {
  siteNav.classList.toggle('open');
});

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => siteNav.classList.remove('open'));
});

document.getElementById('year').textContent = new Date().getFullYear();
