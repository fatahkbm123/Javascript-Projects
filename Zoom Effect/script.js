const image = document.querySelector('.Container img');
image.addEventListener('mousemove', function (e) {
   const x = e.offsetX;
   const y = e.offsetY;

   image.style.transformOrigin = `${x}px ${y}px`;
   image.style.transform = 'scale(1.5)';
})

image.addEventListener('mouseleave', function (e) {
   image.style.transformOrigin = 'center center';
   image.style.transform = 'scale(1)';
})
