// get modal element
var modal = document.getElementById('contact-modal');

// get open modal button
var sendLetterButton = document.getElementById('send-letter-button');

// get close button
var closeModalButton = document.getElementById('close-modal-button');

// listen for open click
sendLetterButton.addEventListener('click', openContactModal);

// listen for close click
closeModalButton.addEventListener('click', closeContactModal);

// listen for click outside of modal window
window.addEventListener('click', outsideClick);

// function to open modal
function openContactModal() {
  console.log('in openContactModal function');
  modal.style.display = 'block';
}

// function to close modal
function closeContactModal() {
  console.log('in closeContactModal function');
  modal.style.display = 'none';
}

// function to close modal if outside modal
function outsideClick(e) {
  console.log('in outsideClick function');
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
