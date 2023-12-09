document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const hambIcon = document.querySelector('.hamburger i');

  const toggleMenu = () => {
    mobileMenu.classList.toggle('show');
    hambIcon.classList.toggle('fa-bars');
    hambIcon.classList.toggle('fa-xmark');
  };

  hamburgerButton.addEventListener('click', toggleMenu);

  mobileMenu.addEventListener('click', (e) => {
    if (e.target.closest('.mobile-menu')) {
      toggleMenu();
    }
  });

  // Reset menu state when the DOM is loaded
  window.addEventListener('load', () => {
    mobileMenu.classList.remove('show');
    hambIcon.classList.remove('fa-xmark');
    hambIcon.classList.add('fa-bars');
  });
});
