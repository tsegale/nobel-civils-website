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
