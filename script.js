const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

const heroVideo = document.getElementById("heroVideo");
const heroVideoSource = document.getElementById("heroVideoSource");

const heroVideos = ["assets/videos/vid1.mov", "assets/videos/vid2.mov"];

let currentVideo = 0;

if (heroVideo && heroVideoSource) {
  heroVideo.addEventListener("ended", () => {
    currentVideo = (currentVideo + 1) % heroVideos.length;
    heroVideoSource.src = heroVideos[currentVideo];
    heroVideo.load();
    heroVideo.play();
  });
}

const lightbox = document.getElementById("lightbox");
const lightboxContent = document.getElementById("lightboxContent");
const lightboxClose = document.getElementById("lightboxClose");

document.querySelectorAll(".gallery-grid img").forEach((img) => {
  img.addEventListener("click", () => {
    lightboxContent.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
    lightbox.classList.add("active");
  });
});

document.querySelectorAll(".video-card").forEach((card) => {
  const video = card.querySelector("video");

  card.addEventListener("mouseenter", () => {
    video.currentTime = 0;
    video.play();
  });

  card.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });

  card.addEventListener("click", () => {
    lightboxContent.innerHTML = `<video src="${video.src}" controls autoplay></video>`;
    lightbox.classList.add("active");
  });
});

function closeLightbox() {
  lightbox.classList.remove("active");
  lightboxContent.innerHTML = "";
}

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
