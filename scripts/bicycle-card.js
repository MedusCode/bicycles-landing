const bicycleCard = document.querySelector('.lead__bicycle-card');
const bicycleCardMovementAred = document.querySelector('.lead__bicycle-card-movement-area');

function getElementTopPossition (element) {
  return element.getBoundingClientRect().top + document.documentElement.scrollTop;
}

function setBicycleCardTopPossition () {
  const topPossition = getElementTopPossition(bicycleCardMovementAred);
  bicycleCard.style.top = `${topPossition}px`;
}

window.addEventListener("resize", () => {
  setBicycleCardTopPossition()
});

setBicycleCardTopPossition();
