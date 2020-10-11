const button = document.querySelector('button');
const modals = document.querySelector('.Card');
const close = document.querySelector('.Card span');

function toggleModals(element) {
   element.classList.toggle('active');
}

function toggleButton(element) {
   element.classList.toggle('active');
}

document.addEventListener('click', function (e) {
   e.preventDefault();

   if (e.target.classList.contains('button')) {
      toggleModals(modals);
      toggleButton(button);
      document.querySelector('body').style.backgroundColor = 'black';
   }

   if (e.target.classList.contains('x')) {
      toggleButton(button);
      toggleModals(modals);
      document.querySelector('body').style.backgroundColor = 'white';
   }
})