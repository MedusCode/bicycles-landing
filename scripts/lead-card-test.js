const bicycleCard = document.querySelector('.lead__bicycle-card');
const imagesContainer = document.querySelector('.lead__images-container');
let isScrolling = false;


console.log(document.documentElement.scrollTop);

function moveBicycleCard (newPosition) {
  const newBicycleCardPosition = imagesContainer.offsetHeight * 0.39 + document.documentElement.scrollTop - bicycleCard.offsetTop;
  if (newBicycleCardPosition !== 0) {
    bicycleCard.style.transform = `translate(0, ${newBicycleCardPosition}px)`;
  }
}


function loop() {
  moveBicycleCard();
  requestAnimationFrame(loop);
}

loop();



// function dealWithScrolling () {
//   console.log(imagesContainer.offsetHeight * 0.39 + document.documentElement.scrollTop);
//   while (bicycleCard.offsetTop < imagesContainer.offsetHeight * 0.39 + document.documentElement.scrollTop) {

//     bicycleCard.style.top = `${bicycleCard.offsetTop + 0.5}px`
//   }
//   // bicycleCard.style.top = `${imagesContainer.offsetHeight * 0.39 + document.documentElement.scrollTop}px`
// }

// window.addEventListener("scroll", () => {
//   if (isScrolling == false) {
//     window.requestAnimationFrame(function() {
//       dealWithScrolling();
//       isScrolling = false;
//     });
//   }
//   isScrolling = true;
// });


