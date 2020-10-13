const check = document.querySelector('.menu-toggle');
const slide = document.querySelector('nav ul');

check.addEventListener('click', function() {
   slide.classList.toggle('slide');
   document.body.classList.toggle('active');
})