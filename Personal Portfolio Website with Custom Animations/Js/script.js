// Fade out the hero background as we scroll down
gsap.to(".hero-bg", {
  scrollTrigger: {
    trigger: "#hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  },
  opacity: 0
});

// Additional GSAP animations for interactive effects
document.addEventListener('DOMContentLoaded', () => {
  gsap.from('.hero-content', { opacity: 0, x: -100, duration: 1, ease: "power2.out" });
  gsap.from('.nav-links li', { opacity: 0, y: -20, stagger: 0.2, duration: 0.8 });
  gsap.from('.about-container', { opacity: 0, y: 50, duration: 1 });
  gsap.from('.project-item', { opacity: 0, scale: 0.8, stagger: 0.2, duration: 1 });
  gsap.from('.contact-container', { opacity: 0, y: 50, duration: 1 });
});

// Hamburger Menu Toggle for Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
