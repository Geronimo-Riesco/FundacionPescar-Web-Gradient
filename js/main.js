document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal(".home");
ScrollReveal().reveal("#intro", { delay: 400 });
ScrollReveal().reveal(".features-card", { delay: 400 });
ScrollReveal().reveal(".contact-details", { delay: 400 });
