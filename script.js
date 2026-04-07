// Select container and items
const container = document.querySelector('.items');
const items = document.querySelectorAll('.item');

// --------------------
// 1. Arrange in Grid
// --------------------
items.forEach((item, index) => {
  const col = index % 6;                  // 6 items per row
  const row = Math.floor(index / 6);

  item.style.position = "absolute";
  item.style.left = `${col * 120 + 10}px`;
  item.style.top = `${row * 120 + 10}px`;
});

// --------------------
// 2. Drag Variables
// --------------------
let activeItem = null;
let offsetX = 0;
let offsetY = 0;

// --------------------
// 3. Mouse Down (Select Cube)
// --------------------
items.forEach(item => {
  item.addEventListener('mousedown', (e) => {
    activeItem = item;

    // Distance between mouse and cube corner
    offsetX = e.offsetX;
    offsetY = e.offsetY;

    item.style.cursor = 'grabbing';
    item.style.zIndex = 1000; // bring to front
  });
});

// --------------------
// 4. Mouse Move (Drag Cube)
// --------------------
document.addEventListener('mousemove', (e) => {
  if (!activeItem) return;

  const rect = container.getBoundingClientRect();

  let x = e.clientX - rect.left - offsetX;
  let y = e.clientY - rect.top - offsetY;

  // --------------------
  // 5. Boundary Constraints
  // --------------------
  const maxX = container.clientWidth - activeItem.offsetWidth;
  const maxY = container.clientHeight - activeItem.offsetHeight;

  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));

  // Apply position
  activeItem.style.left = `${x}px`;
  activeItem.style.top = `${y}px`;
});

// --------------------
// 6. Mouse Up (Drop Cube)
// --------------------
document.addEventListener('mouseup', () => {
  if (activeItem) {
    activeItem.style.cursor = 'grab';
    activeItem.style.zIndex = 1;
  }
  activeItem = null;
});