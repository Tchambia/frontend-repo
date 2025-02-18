// ============================================
//             Hero Animations
// ============================================
function animateHeroBg() {
  // Check if required elements exist
  if (!document.querySelector(".hero-bg") || !document.querySelector("#hero")) return;
  
  gsap.to(".hero-bg", {
    scrollTrigger: {
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    },
    opacity: 0
  });
}

// ============================================
//            Page Animations
// ============================================
function animatePageElements() {
  const timeline = gsap.timeline({ defaults: { ease: "power2.out" } });

  if (document.querySelector(".hero-content")) {
    timeline.from(".hero-content", { opacity: 0, x: -100, duration: 1 });
  }

  if (document.querySelectorAll(".nav-links li").length) {
    timeline.from(
      ".nav-links li",
      { opacity: 0, y: -20, stagger: 0.2, duration: 0.8 },
      "-=0.5"
    );
  }

  if (document.querySelector(".about-container")) {
    timeline.from(".about-container", { opacity: 0, y: 50, duration: 1 }, "-=0.5");
  }

  if (document.querySelectorAll(".project-item").length) {
    timeline.from(
      ".project-item",
      { opacity: 0, scale: 0.8, stagger: 0.2, duration: 1 },
      "-=0.5"
    );
  }

  if (document.querySelector(".contact-container")) {
    timeline.from(".contact-container", { opacity: 0, y: 50, duration: 1 }, "-=0.5");
  }
}

// ============================================
//             Navigation
// ============================================
function initHamburgerMenu() {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("open");
  });
}

// ============================================
//            Initialization
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  // Register ScrollTrigger (if available)
  if (gsap && gsap.registerPlugin) {
    gsap.registerPlugin(ScrollTrigger);
  }
  animateHeroBg();
  animatePageElements();
  initHamburgerMenu();
});
