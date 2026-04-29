const heroVideo = document.getElementById("heroVideo");
const heroVideoSource = document.getElementById("heroVideoSource");

const heroVideos = ["assets/videos/vid1.mov", "assets/videos/vid2.mov"];

let currentVideo = 0;

heroVideo.addEventListener("ended", () => {
  currentVideo = (currentVideo + 1) % heroVideos.length;
  heroVideoSource.src = heroVideos[currentVideo];
  heroVideo.load();
  heroVideo.play();
});

const revealElements = document.querySelectorAll(
  ".section-heading, .section-text, .section-image, .service-card, .project-card, .commit-card, .gallery img, .contact-card, .stats-grid div",
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

const revealOnScroll = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

revealElements.forEach((element) => {
  revealOnScroll.observe(element);
});

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}
