const slider = document.querySelector('.items');

let isDown = false;
let startX = 0;

// 🔥 VERY IMPORTANT: attach to slider
slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX;
});

// 🔥 MUST be on document (Cypress triggers globally)
document.addEventListener('mousemove', (e) => {
  if (!isDown) return;

  const dx = e.pageX - startX;

  // 🔥 KEY: force scroll change
  slider.scrollLeft -= dx;

  // reset start point (incremental movement)
  startX = e.pageX;
});

document.addEventListener('mouseup', () => {
  isDown = false;
});