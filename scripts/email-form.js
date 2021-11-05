const emailForm = document.querySelector('.footer__email-form');
const emailInput = document.querySelector('.footer__email-input');
const submitButton = document.querySelector('.footer__submit-button');
let focus = 0;

function showSubmitButton () {
  submitButton.classList.add('footer__submit-button_active');
}

function hideSubmitButton () {
  submitButton.style.opacity = 0;
  setTimeout(() => {
    submitButton.classList.remove('footer__submit-button_active');
    submitButton.removeAttribute('style');
  }, 150)
}

function submitEmailForm (event) {
  event.preventDefault();
  if (event.target.checkValidity()) {
    // sent form to server here
    emailInput.setAttribute('placeholder', 'Курто!');
    emailInput.value = '';
    hideSubmitButton();
  }
}

emailForm.addEventListener('focusin', () => {
  focus++;
  showSubmitButton();
});

emailForm.addEventListener('focusout', () => {
  focus--;
  setTimeout(() => {
    if (focus == 0) {
      hideSubmitButton();
    }
  }, 50)
});

emailForm.addEventListener('submit', (event) => {
  submitEmailForm(event);
});





