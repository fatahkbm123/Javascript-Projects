const inputKey = document.querySelector('.key');
const inputVal = document.querySelector('.value');
const form = document.querySelector('form');

function addErrors(element, message) {
   const formGroup = element.parentElement; //form-group
   const small = formGroup.querySelector('small');

   // message
   small.textContent = message;
   formGroup.className = 'form-group error';
}

function addSuccess(element, key, value) {
   const formGroup = element.parentElement; //form-group
   formGroup.className = 'form-group success';

   setTimeout(() => {
      removeClass('form-group');
   }, 500)

   fieldKosong([element]);
}

function addStorage(key, value) {
   localStorage.setItem(key, value);
}

function removeClass(element) {
   const formGroup = document.querySelectorAll(`.${element}`);
   formGroup.forEach(fGroup => {
      fGroup.classList.remove('success');
   });
}

function isRequired(inputArr) {
   const keyValue = inputKey.value;
   const valueValues = inputVal.value;
   let isRequired = false;
   inputArr.forEach(input => {
      if (input.value.trim() === '') {
         addErrors(input, `${getFieldName(input)} is Required`);
         isRequired = true;
      } else {
         addSuccess(input);
         localStorage.setItem(keyValue, valueValues);
         location.reload();
      }
   })

   return isRequired;
}

function getFieldName(input) {
   // id => K + next char++
   return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function fieldKosong(input) {
   // params is array
   input.forEach(inputs => {
      // Set value kosong
      inputs.value = '';
   })
}


form.addEventListener('submit', function (e) {
   e.preventDefault();

   if (!isRequired([inputKey, inputVal])) {
      return true;
   }
});

let ul = document.createElement('ul');
ul.classList.add('list-group');
ul.classList.add('list-group-flush');
const content = document.querySelector('.Content');
content.appendChild(ul);

let index = 1;
for (let i = 0; i < localStorage.length; i++) {

   const key = localStorage.key(i);
   const value = localStorage.getItem(key)

   ul.innerHTML += `<li class="list-group-item list-group-item-action">${index++}. ${key} : ${value}</li>`;
}


