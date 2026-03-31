const container = document.querySelector('.items');
const items = document.querySelectorAll('.item');

let activeItem = null;
let offsetX = 0;
let offsetY = 0;

// Set initial grid positions manually
items.forEach((item, index) => {
  const cols = 5;
  const gap = 120;

  const row = Math.floor(index / cols);
  const col = index % cols;

  item.style.left = `${col * gap}px`;
  item.style.top = `${row * gap}px`;
});

// Mouse Down → Select cube
items.forEach(item => {
  item.addEventListener('mousedown', (e) => {
    activeItem = item;

    const rect = item.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    item.style.cursor = 'grabbing';
  });
});

// Mouse Move → Drag cube
document.addEventListener('mousemove', (e) => {
  if (!activeItem) return;

  const containerRect = container.getBoundingClientRect();

  let x = e.clientX - containerRect.left - offsetX;
  let y = e.clientY - containerRect.top - offsetY;

  // Boundary constraints
  const maxX = container.clientWidth - activeItem.offsetWidth;
  const maxY = container.clientHeight - activeItem.offsetHeight;

  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));

  activeItem.style.left = `${x}px`;
  activeItem.style.top = `${y}px`;
});

// Mouse Up → Drop cube
document.addEventListener('mouseup', () => {
  if (activeItem) {
    activeItem.style.cursor = 'grab';
  }
  activeItem = null;
});