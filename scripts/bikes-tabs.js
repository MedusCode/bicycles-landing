const styleButtons = document.querySelectorAll('.bikes__button');
const bikesLists = document.querySelectorAll('.bikes__bikes-list');
const stylesList = document.querySelector('.bikes__styles-list')
const styles = ['road', 'gravel', 'tt'];
let isDropdownMenuOpened = false;

function defineStyle (button) {
  return styles.find(element => button.classList.contains(element));
}

function openDropdownMenu () {
  stylesList.classList.add('bikes__styles-list-opened');
}

function closeDropdownMenu () {
  stylesList.classList.remove('bikes__styles-list-opened');
}

function toggleButton (button) {
  button.classList.toggle('bikes__button_active');
  button.parentElement.classList.toggle('bikes__style_active');
}

function switchButton (style) {
  styleButtons.forEach(element => {
    if (element.classList.contains('bikes__button_active') && element.classList.contains(style)) {
      return;
    }
    else if (element.classList.contains('bikes__button_active')) {
      toggleButton(element);
    }
    else if (element.classList.contains(style)) {
      toggleButton(element);
    }
  });
}

function changeListSmoothly (previousList, nextList) {
  resetSlider(); // from bikes-slider.js
  nextList.style.opacity = 0;
  previousList.style.opacity = 0;
  setTimeout(() => {
    previousList.classList.remove('bikes__bikes-list_active');
    nextList.classList.add('bikes__bikes-list_active');
    nextList.style.opacity = 1;
  }, 150);
}

function switchTab (style) {
  let sameTab = false;
  bikesLists.forEach(element => {
    if (element.classList.contains('bikes__bikes-list_active') && element.classList.contains(style)) {
      sameTab = true;
      return;
    }
    else if (element.classList.contains('bikes__bikes-list_active')) {
      previousList = element;
    }
    else if (element.classList.contains(style)) {
      nextList = element;
    }
  });
  if (sameTab) {
    return;
  }
  else {
    changeListSmoothly(previousList, nextList);
  }
}

const closeDropdownMenuMissClick = function (event) {
  if (isDropdownMenuOpened && event.target.parentElement.parentElement !== stylesList) {
    closeDropdownMenu();
    isDropdownMenuOpened = false;
    document.removeEventListener('click', closeDropdownMenuMissClick);
  }
}

styleButtons.forEach(element => {
  element.addEventListener('click', (event) => {
    if (window.innerWidth >= 768 || isDropdownMenuOpened) {
      const style = defineStyle(event.target);
      switchButton(style);
      switchTab(style);
      closeDropdownMenu();
      document.removeEventListener('click', closeDropdownMenuMissClick);
      isDropdownMenuOpened = false;
    }
    else {
      openDropdownMenu();
      document.addEventListener('click', closeDropdownMenuMissClick);
      isDropdownMenuOpened = true;
    }
  });
});
