const buttonLeft = document.querySelector('.styles__button-left');
const buttonRight = document.querySelector('.styles__button-right');
const stylesSlider = document.querySelector('.styles__slider');
const stylesTitle = document.querySelector('.styles__title');
const stylesParagraph = document.querySelector('.styles__paragraph');


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

function setSectionTexts (nextElement) {
  const key = nextElement.classList[0];
  stylesTitle.style.opacity = '0';
  stylesParagraph.style.opacity = '0';

  // after text hides
  setTimeout(() => {
    stylesTitle.textContent = stylesTexts[key].title;
    stylesParagraph.textContent = stylesTexts[key].paragraph;
    removeStyleAtribute(stylesTitle);
    removeStyleAtribute(stylesParagraph);
  }, 200)
}

function slide (previousElement, nextElement, elementForCopy, hiddenElement, translateSlider, direction) {
  const previousElementIcon = getElementIcon(previousElement);
  const nextElementIcon = getElementIcon(nextElement);
  toggleTransition(stylesSlider, nextElementIcon, previousElementIcon);
  translateXSlider(translateSlider);
  toggleIcons(previousElementIcon, nextElementIcon);
  setSectionTexts(nextElement);

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
  disableButtons(true);
  slideDirection('left');
});

buttonRight.addEventListener('click', () => {
  disableButtons(true);
  slideDirection('right');
});
