const slider = document.querySelector('.items');

let isDown = false;
let startX = 0;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX;
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;

  const walk = startX - e.pageX; // 🔥 FIXED direction

  // 🔥 IMPORTANT: always increase scrollLeft
  slider.scrollLeft += walk;
});

slider.addEventListener('mouseup', () => {
  isDown = false;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
});