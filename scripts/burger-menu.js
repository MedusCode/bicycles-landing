const list = document.querySelector('.header__list');
const listElements = document.querySelectorAll('.header__list-element')
const burgerContainer = document.querySelector('.header__burger-container');
const burger = document.querySelector('.header__burger');
const themeSwitcher = document.querySelector('.header__theme-switcher')

function showElement (element) {
  element.style.visibility = 'visible';
  element.style.opacity = 1;
}

function hideElement (element) {
  element.style.opacity = 0;
    setTimeout(() => {
      element.style.visibility = 'hidden';
    }, 300);
}

function closeOrOpenNavigation () {
  burger.classList.toggle('header__burger_opened');
  if (burger.classList.contains('header__burger_opened')) {
    showElement(list);
    showElement(themeSwitcher)
  }
  else {
    hideElement(list);
    hideElement(themeSwitcher);
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

window.addEventListener("resize", () => {
  if (window.innerWidth > 450) {
    list.removeAttribute('style');
    burger.classList.remove('header__burger_opened');
  }
});
