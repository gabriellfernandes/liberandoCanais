let index = 0,
  amount = 0,
  currTransl = [],
  translationComplete = true,
  moveOffset = 0;

let transitionCompleted = function () {
  translationComplete = true;
};

document.addEventListener("DOMContentLoaded", function (event) {
  let carousel = document.getElementById("carousel");

  amount = document.getElementsByClassName("slide").length;
  // get the width of the container
  moveOffset = parseInt(
    window.getComputedStyle(document.getElementById("carousel-container"))
      .width,
    10
  );
  // calcuate the width of the carousel
  document.getElementById("carousel").style.width = amount * moveOffset + "px";
  // prevent multiple click when transition
  for (let i = 0; i < amount; i++) {
    currTransl[i] = -moveOffset;
    document
      .getElementsByClassName("slide")
      [i].addEventListener("transitionend", transitionCompleted, true);
    document
      .getElementsByClassName("slide")
      [i].addEventListener("webkitTransitionEnd", transitionCompleted, true);
    document
      .getElementsByClassName("slide")
      [i].addEventListener("oTransitionEnd", transitionCompleted, true);
    document
      .getElementsByClassName("slide")
      [i].addEventListener("MSTransitionEnd", transitionCompleted, true);
  }
  // add the last item to the start so that translateX(-moveOffset) works (In case the first click is the previous button)
  document
    .getElementById("carousel")
    .insertBefore(
      document.getElementById("carousel").children[2],
      document.getElementById("carousel").children[0]
    );
  // add click events to control arrows
  document.getElementById("prev").addEventListener("click", prev, true);
  document.getElementById("next").addEventListener("click", next, true);
});

function prev() {
  if (translationComplete === true) {
    translationComplete = false;
    index--;
    if (index == -1) {
      index = amount - 1;
    }
    let outerIndex = index % amount;
    for (let i = 0; i < amount; i++) {
      let slide = document.getElementsByClassName("slide")[i];
      slide.style.opacity = "1";
      slide.style.transform =
        "translateX(" + (currTransl[i] + moveOffset) + "px)";
      currTransl[i] = currTransl[i] + moveOffset;
    }
    let outerSlide = document.getElementsByClassName("slide")[outerIndex];
    outerSlide.style.transform =
      "translateX(" + (currTransl[outerIndex] - moveOffset * amount) + "px)";
    outerSlide.style.opacity = "0";
    currTransl[outerIndex] = currTransl[outerIndex] - moveOffset * amount;
  }
}

function next() {
  if (translationComplete === true) {
    translationComplete = false;
    let outerIndex = index % amount;
    index++;
    for (let i = 0; i < amount; i++) {
      let slide = document.getElementsByClassName("slide")[i];
      slide.style.opacity = "1";
      slide.style.transform =
        "translateX(" + (currTransl[i] - moveOffset) + "px)";
      currTransl[i] = currTransl[i] - moveOffset;
    }
    let outerSlide = document.getElementsByClassName("slide")[outerIndex];
    outerSlide.style.transform =
      "translateX(" + (currTransl[outerIndex] + moveOffset * amount) + "px)";
    outerSlide.style.opacity = "0";
    currTransl[outerIndex] = currTransl[outerIndex] + moveOffset * amount;
  }
}
