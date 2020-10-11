$('button').hover(function() {
   $(this).toggleClass('active');
})

let count = 0;
const value = document.querySelector('.value');
const button = document.querySelectorAll('.btn');

button.forEach( btn => {
   btn.addEventListener('click', function(e) {
      const buttons = e.target.classList;

      value.classList.add('fadeAnimation');

      setTimeout(() => {
         value.classList.remove('fadeAnimation');
      }, 500)

      if( buttons.contains('plus')) {
         count++;
      } else if(buttons.contains('minus')) {
         count--;
      } else {
         count = 0;
      }

      if( count < 0) {
         value.style.color = 'red';
      } else if( count > 0) {
         value.style.color = '#73FA89';
      } else if( count === 0) {
         value.style.color = 'black';
      }

      value.innerHTML = count;

   })
})