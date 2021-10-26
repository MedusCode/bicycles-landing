const list = document.querySelector('.header__list');
const listElements = document.querySelectorAll('.header__list-element')
const burgerContainer = document.querySelector('.header__burger-container');
const burger = document.querySelector('.header__burger');


function closeListSmoothy () {
  list.style.opacity = 0;
    setTimeout(() => {
      list.classList.remove('header__list_opened');
      list.removeAttribute('style');
    }, 300);
}

function closeOrOpenNavigation () {
  burger.classList.toggle('header__burger_opened');
  if (list.classList.contains('header__list_opened')) {
    closeListSmoothy();
  }
  else {
    list.classList.add('header__list_opened');
  }
}

burgerContainer.addEventListener('click', () => {
  closeOrOpenNavigation();
});

listElements.forEach(element => {
  element.addEventListener('click', () => {
    if (window.innerWidth <= 450) {
      closeOrOpenNavigation();
    }
  });
});

