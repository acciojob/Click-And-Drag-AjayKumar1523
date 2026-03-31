const slider = document.querySelector('.items');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX;
  scrollLeft = slider.scrollLeft;
});

document.addEventListener('mousemove', (e) => {
  if (!isDown) return;

  const walk = e.pageX - startX;
  slider.scrollLeft = scrollLeft - walk;
});

document.addEventListener('mouseup', () => {
  isDown = false;
});