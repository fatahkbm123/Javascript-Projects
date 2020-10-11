const typeWriting = function (txtElement, words, wait = 3000) {
   // set Constructor
   this.txtElement = txtElement;
   this.words = words;
   this.getText = '';
   this.wordIndex = 0;
   this.wait = parseInt(wait, 10);
   this.type();
   this.isDeleting = false;
}

// Type Method
typeWriting.prototype.type = function () {
   // Current index of word
   const current = this.wordIndex % this.words.length;
   // Get Full text current
   const fullText = this.words[current];

   // Check if delete
   if (this.isDeleting) {
      // Remove char
      this.getText = fullText.slice(0, this.getText.length - 1)
   } else {
      // Add Char
      this.getText = fullText.slice(0, this.getText.length + 1)
   }

   // Insert text into element
   this.txtElement.innerHTML = `<span class="text">${this.getText}</span>`;

   // Type Speed
   let typeSpeed = 300;

   // If Word is complete
   if (!this.isDeleting && this.getText === fullText) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete true
      this.isDeleting = true;
   } else if (this.isDeleting && this.getText === '') {
      // Set delete false
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
   }

   if (this.isDeleting) {
      typeSpeed /= 2;
   }

   setTimeout(() => this.type(), typeSpeed);
}

// Init on DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
   const txtElement = document.querySelector('.txt-type');
   const words = JSON.parse(txtElement.getAttribute('data-words'));
   const wait = txtElement.getAttribute('data-wait');

   // Init TypeWriter
   new typeWriting(txtElement, words, wait);
}




