const getElement = element => document.querySelector(element);

/* Elements */
const bars = getElement(".center");
const firstBar = getElement(".firstbar");
const secondBar = getElement(".secondbar");
const thirdBar = getElement(".thirdbar")

/* Methods */
const handleBarsClick = event => {
	secondBar.classList.toggle("shrink");
	firstBar.classList.toggle("slide_animation");
	firstBar.classList.toggle("rotate_animation");
	firstBar.classList.toggle("firstbar_finish");
	// thirdBar.classList.toggle("slideup");
	// firstBar.classList.toggle("rotateright");
	// thirdBar.classList.toggle("rotateleft");
}

bars.addEventListener("click", handleBarsClick);


