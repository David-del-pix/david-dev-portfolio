// Scroll animation
const fadeElements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

fadeElements.forEach((el) => observer.observe(el));

// Project slideshow
let projectImages = document.querySelectorAll(".project-img");
let current = 0;

setInterval(() => {
  projectImages.forEach(img => img.style.opacity = "0");
  projectImages[current].style.opacity = "1";
  current = (current + 1) % projectImages.length;
}, 3000);
