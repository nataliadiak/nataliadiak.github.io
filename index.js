// Scroll-based background transition
let ticking = false;

function updateBackground() {
  const scrollY = window.scrollY;
  const h = window.innerHeight;
  const start = h * 0.3;
  const end = h * 1.2;

  let t = 0;
  if (scrollY > start) {
    t = Math.min(1, (scrollY - start) / (end - start));
  }

  document.getElementById("bg-city").style.opacity = t;
  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(updateBackground);
    ticking = true;
  }
}, { passive: true });
