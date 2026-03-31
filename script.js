const slider = document.querySelector('.items');

let isDown = false;
let lastX;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  lastX = e.pageX;
});

document.addEventListener('mousemove', (e) => {
  if (!isDown) return;

  const dx = e.pageX - lastX;

  // 🔥 incremental update (key fix)
  slider.scrollLeft -= dx;

  lastX = e.pageX;
});

document.addEventListener('mouseup', () => {
  isDown = false;
});