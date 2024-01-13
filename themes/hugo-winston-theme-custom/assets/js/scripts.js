var body = document.querySelector('body');
var menuTrigger = document.querySelector('#toggle-menu-main-mobile');
var menuContainer = document.querySelector('#menu-main-mobile');
var hamburgerIcon = document.querySelector('.hamburger');

if (menuTrigger !== null) {
  menuTrigger.addEventListener('click', function(e) {
    menuContainer.classList.toggle('open');
    hamburgerIcon.classList.toggle('is-active');
    body.classList.toggle('lock-scroll');
  });
}

// Set/toggle light/dark mode

function setThemeMode(themeMode) {
  if (themeMode === 'dark') {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
}

document.getElementById('toggle-theme-mode').addEventListener('click', function(e) {
  e.preventDefault();

  var themeMode = body.classList.contains('dark-mode') ? 'light' : 'dark';

  localStorage.setItem('theme-mode', themeMode);
  setThemeMode(themeMode);
}, false);

document.addEventListener('DOMContentLoaded', function() {
  var themeMode = localStorage.getItem('theme-mode') || 'light';
  setThemeMode(themeMode);
});
