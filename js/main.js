document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal(".home");
ScrollReveal().reveal("#intro", { delay: 200 });
ScrollReveal().reveal(".features-card", { delay: 200 });
