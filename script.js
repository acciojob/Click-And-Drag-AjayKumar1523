const slider = document.querySelector('.items');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX;              // ✅ FIX: no offsetLeft
  scrollLeft = slider.scrollLeft;
});

document.addEventListener('mousemove', (e) => {
  if (!isDown) return;

  const dx = e.pageX - startX;   // ✅ pure delta
  slider.scrollLeft = scrollLeft - dx;
});

document.addEventListener('mouseup', () => {
  isDown = false;
});