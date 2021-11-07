const bikeCards = document.querySelectorAll('.bikes__bike-card');
let activeCard = null;
let activeCardOrder = 0;
let activeCardPosition = 'first';
let startCoordinteX = 0;
let cardsSlideDirection = 'none';
let currentTransition = 0;

function removeCardsTranslation(card) {
  card.classList.remove('bikes__bike-card_slide_right');
  card.classList.remove('bikes__bike-card_slide_left');
}

function getArrayOfSiblings (element) {
  return Array.from(element.parentNode.children);
}

function findActiveCardOrder (activeCard) {
  return getArrayOfSiblings(activeCard).indexOf(activeCard);
}

function findActiveCardExtremePosition (activeCardOrder) {
  if (activeCardOrder === 0) {
    return 'first';
  }
  else if (activeCardOrder + 1 === getArrayOfSiblings(activeCard).length) {
    return 'last';
  }
  else {
    return 'none';
  }
}

function slideCards (direction) {
  const activeBikesList = activeCard.parentElement;
  if (direction === 'left') {
    currentTransition -= 1;
  }
  else if (direction === 'right') {
    currentTransition += 1;
  }
  activeBikesList.style.transform = `translateX(calc(100% * ${currentTransition / getArrayOfSiblings(activeCard).length}))`;
}

function switchSliderIndicator (direction) {
  const activeSliderIndicator = document.querySelector('.bikes__slider-indicator-dot_active');
  activeSliderIndicator.classList.remove('bikes__slider-indicator-dot_active');
  if (direction === 'left') {
    getArrayOfSiblings(activeSliderIndicator)[activeCardOrder + 1].classList.add('bikes__slider-indicator-dot_active');
  }
  else if (direction === 'right') {
    getArrayOfSiblings(activeSliderIndicator)[activeCardOrder - 1].classList.add('bikes__slider-indicator-dot_active');
  }
}

function resetSlider () {
  const activeCardList = document.querySelector('.bikes__bikes-list_active');
  const activeSliderIndicator = document.querySelector('.bikes__slider-indicator-dot_active');
  activeCardList.removeAttribute('style');
  activeSliderIndicator.classList.remove('bikes__slider-indicator-dot_active');
  getArrayOfSiblings(activeSliderIndicator)[0].classList.add('bikes__slider-indicator-dot_active');
  currentTransition = 0;
}

bikeCards.forEach(card => {
  card.addEventListener('touchstart', event => {
    if (window.innerWidth < 768) {
      activeCard = event.currentTarget;
      activeCardOrder = findActiveCardOrder(activeCard);
      activeCardExtremePosition = findActiveCardExtremePosition(activeCardOrder);
      startCoordinteX = event.changedTouches[0].screenX;
      cardsSlideDirection = 'none';
    }
  });
  card.addEventListener('touchmove', event => {
    if (window.innerWidth < 768) {
      const coordinateDifference = startCoordinteX - event.changedTouches[0].screenX;
      if (coordinateDifference <= 50 && coordinateDifference >= -50) {
        removeCardsTranslation(activeCard);
        cardsSlideDirection = 'none';
      }
      else if (coordinateDifference > 50 && activeCardExtremePosition !== 'last') {
        activeCard.classList.remove('bikes__bike-card_slide_right');
        activeCard.classList.add('bikes__bike-card_slide_left');
        cardsSlideDirection = 'left';
      }
      else if (coordinateDifference < -50 && activeCardExtremePosition !== 'first') {
        activeCard.classList.remove('bikes__bike-card_slide_left');
        activeCard.classList.add('bikes__bike-card_slide_right');
        cardsSlideDirection = 'right';
      }
    }
  });
  card.addEventListener('touchend', () => {
    if (window.innerWidth < 768) {
      if (cardsSlideDirection === 'left' || cardsSlideDirection === 'right') {
        slideCards(cardsSlideDirection);
        switchSliderIndicator(cardsSlideDirection);
      }
      removeCardsTranslation(activeCard);
    }
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    resetSlider();
  }
});



