const bicycleCard = document.querySelector('.lead__bicycle-card');
const imagesContainer = document.querySelector('.lead__images-container');
let isScrolling = false;


function getElementTopPossition (element) {
  return element.getBoundingClientRect().top + document.documentElement.scrollTop;
}

function setBicycleCardPossition () {
  const topPossition = getElementTopPossition(imagesContainer) + (imagesContainer.offsetHeight * 0.39);
  bicycleCard.style.top = `${topPossition}px`;
  bicycleCard.style.left = `${imagesContainer.offsetLeft}px`;
}


function dealWithScrolling () {
  // check if the top is more than 90%
  if (getElementTopPossition(bicycleCard) + bicycleCard.offsetHeight > getElementTopPossition(imagesContainer) + (imagesContainer.offsetHeight * 0.9)) {
    bicycleCard.removeAttribute('style');
    bicycleCard.style.position = 'absolute';
    bicycleCard.style.bottom = '10%';
    bicycleCard.style.left = '0';
  }

}


window.addEventListener("resize", () => {
  setBicycleCardPossition()
});

window.addEventListener("scroll", () => {
  if (isScrolling == false) {
    window.requestAnimationFrame(function() {
      dealWithScrolling();
      isScrolling = false;
    });
  }
  isScrolling = true;
});

setBicycleCardPossition()
