const buttonLeft = document.querySelector('.styles__button_direction_left');
const buttonRight = document.querySelector('.styles__button_direction_right');
const stylesSlider = document.querySelector('.styles__slider');


function disableButtons (boolean) {
  buttonLeft.disabled = boolean;
  buttonRight.disabled = boolean;
}

function cloneElement (element) {
  return element.cloneNode('true');
}

function toggleTransition (stylesSlider, nextElementIcon, previousElementIcon) {
  stylesSlider.classList.toggle('styles__element-animating');
  nextElementIcon.classList.toggle('styles__element-animating');
  previousElementIcon.classList.toggle('styles__element-animating');
}

function getElementIcon (element) {
  return element.querySelector('.styles__icon');
}

function translateXSlider (position) {
  stylesSlider.style.transform = `translate(${position}, 0)`;
}

function toggleIcons (previousElementIcon, nextElementIcon) {
  previousElementIcon.classList.remove('styles__icon_active');
  nextElementIcon.classList.add('styles__icon_active');
}

function removeStyleAtribute (element) {
  element.removeAttribute('style');
}

function sliderElementsRegroup (hiddenElement, elementCopy, slide) {
  stylesSlider.removeChild(hiddenElement);
  if (slide === 'right') {
    stylesSlider.append(elementCopy);
  }
  else if (slide === 'left') {
    stylesSlider.prepend(elementCopy);
  }
}

function changeTexts (previousElement, nextElement) {
  const previousTitle = previousElement.querySelector('.styles__title');
  const previousParagraph = previousElement.querySelector('.styles__paragraph');
  nextElement.querySelector('.styles__title').classList.add('styles__title_active');
  nextElement.querySelector('.styles__paragraph').classList.add('styles__paragraph_active');
  previousTitle.style.opacity = '0';
  previousParagraph.style.opacity = '0';

  // after text changing
  setTimeout(() => {
    previousTitle.classList.remove('styles__title_active');
    previousParagraph.classList.remove('styles__paragraph_active');
    removeStyleAtribute(previousTitle);
    removeStyleAtribute(previousParagraph);
  }, 599)
}

function slide (previousElement, nextElement, elementForCopy, hiddenElement, translateSlider, direction) {
  disableButtons(true);
  const previousElementIcon = getElementIcon(previousElement);
  const nextElementIcon = getElementIcon(nextElement);
  toggleTransition(stylesSlider, nextElementIcon, previousElementIcon);
  translateXSlider(translateSlider);
  toggleIcons(previousElementIcon, nextElementIcon);
  changeTexts(previousElement, nextElement);

  // after slide
  setTimeout(() => {
    toggleTransition(stylesSlider, nextElementIcon, previousElementIcon);
    removeStyleAtribute(stylesSlider);
    const elementCopy = cloneElement(elementForCopy);
    sliderElementsRegroup(hiddenElement, elementCopy, direction);
    disableButtons(false);
  }, 600)
}

function slideDirection(direction) {
  const sliderElements = document.querySelectorAll('.styles__slider-element');
  if (direction === 'left') {
    slide(sliderElements[1], sliderElements[0], sliderElements[2], sliderElements[3], '0', direction);
  }
  else if (direction === 'right') {
    slide(sliderElements[1], sliderElements[2], sliderElements[1], sliderElements[0], 'calc(-50%)', direction);
  }
}


buttonLeft.addEventListener('click', () => {
  slideDirection('left');
});

buttonRight.addEventListener('click', () => {
  slideDirection('right');
});
