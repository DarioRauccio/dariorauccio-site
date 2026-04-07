document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('mainNav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll('.stripe-link').forEach(link => {
    const url = link.dataset.link;
    if (!url || url.startsWith('STRIPE_')) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = '#contacto';
      });
    } else {
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener nofollow';
    }
  });
});
