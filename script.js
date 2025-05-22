// Проста автокарусель (можна покращити)
const imgs = document.querySelectorAll('.carousel-img');
let i = 0;
setInterval(() => {
  imgs.forEach((img, idx) => img.style.display = (idx === i ? 'block' : 'none'));
  i = (i + 1) % imgs.length;
}, 2000);