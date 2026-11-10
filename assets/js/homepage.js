// All academic content is rendered by Jekyll; JavaScript only enhances controls.
document.body.classList.add('js');

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-navigation');
menuToggle.hidden = false;

function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(expanded));
  navigation.classList.toggle('is-open', expanded);
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuToggle.focus();
  }
});

const desktop = window.matchMedia('(min-width: 1024px)');
desktop.addEventListener('change', closeMenu);

const newsToggle = document.querySelector('#news-toggle');
const olderNews = document.querySelector('#older-news');
newsToggle.hidden = false;
olderNews.hidden = true;
newsToggle.addEventListener('click', () => {
  const expanded = newsToggle.getAttribute('aria-expanded') !== 'true';
  newsToggle.setAttribute('aria-expanded', String(expanded));
  olderNews.hidden = !expanded;
  newsToggle.textContent = expanded ? 'Show Less ↑' : 'View All →';
});

document.querySelectorAll('.image-toggle').forEach((toggle) => {
  const preview = document.getElementById(toggle.getAttribute('aria-controls'));
  // Keep the direct image link as a fallback when JavaScript is unavailable.
  toggle.setAttribute('role', 'button');
  toggle.addEventListener('click', (event) => {
    event.preventDefault();
    const expanded = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(expanded));
    preview.hidden = !expanded;
    toggle.closest('.publication').classList.toggle('is-expanded', expanded);
  });
  toggle.addEventListener('keydown', (event) => {
    if (event.key === ' ') {
      event.preventDefault();
      toggle.click();
    }
  });
});

// Retain old incoming anchors as well as the reference site's common section URLs.
const aliases = {
  '-about-me': 'about-me', about: 'about-me',
  'latest-news': '-news', publications: '-publications',
  honors: '-honors-and-awards', services: '-academic-service',
  educations: 'education', contact: '-contact'
};
function resolveAnchor() {
  const target = aliases[window.location.hash.slice(1)];
  if (target) document.getElementById(target).scrollIntoView();
}
window.addEventListener('hashchange', resolveAnchor);
resolveAnchor();

const navLinks = [...navigation.querySelectorAll('a')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of navLinks) {
        if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
    }
  }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
  navLinks.forEach((link) => observer.observe(document.getElementById(link.hash.slice(1))));
}
