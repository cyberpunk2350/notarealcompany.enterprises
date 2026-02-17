document.addEventListener("DOMContentLoaded", () => {
  const navContainer = document.querySelector("nav");
  if (!navContainer) return;

  // Load nav.html dynamically
  fetch("partials/nav.html")
    .then(res => res.text())
    .then(html => {
      navContainer.innerHTML = html;

      const navToggle = document.querySelector(".nav-toggle");
      const navLinks = document.querySelector(".nav-links");

      if (navToggle && navLinks) {
        navToggle.addEventListener("click", () => {
          navLinks.classList.toggle("nav-open");
        });
      }
    })
    .catch(err => console.error("Failed to load nav:", err));
});
