document.documentElement.classList.add('js-enabled');

const menuButton = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#menu-principal');
const navLinks = document.querySelectorAll('.main-nav a');
const year = document.querySelector('#ano-atual');

if (year) {
  const currentYear = String(new Date().getFullYear());
  year.textContent = currentYear;
  year.setAttribute('datetime', currentYear);
}

if (menuButton && mainNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';

    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Abrir menu de navegação' : 'Fechar menu de navegação');
    mainNav.classList.toggle('is-open', !isOpen);
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (link.getAttribute('href')?.startsWith('#')) {
      navLinks.forEach((item) => item.removeAttribute('aria-current'));
      link.setAttribute('aria-current', 'true');
    }

    if (menuButton && mainNav) {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Abrir menu de navegação');
      mainNav.classList.remove('is-open');
    }
  });
});
