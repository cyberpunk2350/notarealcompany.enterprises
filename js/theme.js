// js/theme.js
// Keeps dark mode default and provides a toggle with persistence.

(function(){
  const body = document.body;
  const storageKey = 'narc_theme'; // 'dark' or 'light'

  // Apply saved theme or default to dark
  const saved = localStorage.getItem(storageKey);
  if(saved === 'light') {
    body.classList.add('light-mode');
  } else {
    // default dark: ensure no 'light-mode' class
    body.classList.remove('light-mode');
  }

  // Expose toggle function globally for use in header button
  window.toggleTheme = function(){
    body.classList.toggle('light-mode');
    if(body.classList.contains('light-mode')) localStorage.setItem(storageKey,'light');
    else localStorage.setItem(storageKey,'dark');
  };

  // Optional: small helper to initialize any other UI later
  document.addEventListener('DOMContentLoaded', ()=> {
    // nothing else now, placeholder for future scripts
  });
})();
