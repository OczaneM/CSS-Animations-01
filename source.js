const getElement = element => document.querySelector(element);

/* Elements */
const bars = getElement(".center");
const firstBar = getElement(".firstbar");
const secondBar = getElement(".secondbar");
const thirdBar = getElement(".thirdbar");

/* Methods */
const handleBarsClick = event => {
  secondBar.classList.toggle("shrink");
  // firstBar.classList.toggle("slide_animation");
  firstBar.classList.toggle("rotate_animation");
};

bars.addEventListener("click", handleBarsClick);
