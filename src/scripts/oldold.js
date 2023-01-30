const slider = document.querySelector(".slider");
const btnLeft = document.getElementById("moveLeft");
const btnRight = document.getElementById("moveRight");
const indicators = document.querySelectorAll(".indicator");

let baseSliderWidth = slider.offsetWidth;
let activeIndex = 0; // the current page on the slider

let movies = [
  {
    src: "./src/assets/MoviesCarousel/banker.jpeg",
  },
  {
    src: "./src/assets/MoviesCarousel/batman.jpeg",
  },

  {
    src: "./src/assets/MoviesCarousel/bruxo.jpeg",
  },

  {
    src: "./src/assets/MoviesCarousel/homemnorte.jpeg",
  },
  {
    src: "./src/assets/MoviesCarousel/joker.jpeg",
  },
  {
    src: "./src/assets/MoviesCarousel/loki.jpeg",
  },
  {
    src: "./src/assets/MoviesCarousel/mandalorian.jpeg",
  },
  {
    src: "./src/assets/MoviesCarousel/strange.jpeg",
  },
  {
    src: "./src/assets/MoviesCarousel/tim.png",
  },
  {
    src: "./src/assets/MoviesCarousel/vikings.jpeg",
  },
];

// Fill the slider with all the movies in the "movies" array
function populateSlider() {
  movies.forEach((image) => {
    // Clone the initial movie thats included in the html, then replace the image with a different one
    const newMovie = document.getElementById("movie0");
    let clone = newMovie.cloneNode(true);
    let img = clone.querySelector("img");
    img.src = image.src;

    slider.insertBefore(clone, slider.childNodes[slider.childNodes.length - 1]);
  });
}

populateSlider();

// delete the initial movie in the html
const initialMovie = document.getElementById("movie0");
initialMovie.remove();

// Update the indicators that show which page we're currently on
function updateIndicators(index) {
  indicators.forEach((indicator) => {
    indicator.classList.remove("active");
  });
  let newActiveIndicator = indicators[index];
  newActiveIndicator.classList.add("active");
}

// Scroll Left button
btnLeft.addEventListener("click", (e) => {
  let movieWidth = document
    .querySelector(".movie")
    .getBoundingClientRect().width;
  let scrollDistance = movieWidth * 1; // Scroll the length of 6 movies. TODO: make work for mobile because (4 movies/page instead of 6)

  slider.scrollBy({
    top: 0,
    left: -scrollDistance,
    behavior: "smooth",
  });
  activeIndex = (activeIndex - 1) % 3;
  console.log(activeIndex);
  updateIndicators(activeIndex);
});

// Scroll Right button
btnRight.addEventListener("click", (e) => {
  let movieWidth = document
    .querySelector(".movie")
    .getBoundingClientRect().width;
  let scrollDistance = movieWidth * 1; // Scroll the length of 6 movies. TODO: make work for mobile because (4 movies/page instead of 6)

  console.log(`movieWidth = ${movieWidth}`);
  console.log(`scrolling right ${scrollDistance}`);

  // if we're on the last page
  if (activeIndex == 2) {
    // duplicate all the items in the slider (this is how we make 'looping' slider)
    populateSlider();
    slider.scrollBy({
      top: 0,
      left: +scrollDistance,
      behavior: "smooth",
    });
    activeIndex = 0;
    updateIndicators(activeIndex);
  } else {
    slider.scrollBy({
      top: 0,
      left: +scrollDistance,
      behavior: "smooth",
    });
    activeIndex = (activeIndex + 1) % 3;
    console.log(activeIndex);
    updateIndicators(activeIndex);
  }
});

// slider.addEventListener("scroll", (e) => {
//   console.log(slider.scrollLeft);
//   console.log(slider.offsetWidth);
// });
document.addEventListener("DOMContentLoaded", function (event) {
  let carousel = document.getElementById("moviesCarousel");

  amount = document.getElementsByClassName("movieSlide").length;
  // get the width of the container
  moveOffset = parseInt(
    window.getComputedStyle(document.getElementById("moviesSlideWrapper"))
      .width,
    10
  );
  // calcuate the width of the carousel
  document.getElementById("moviesCarousel").style.width =
    amount * moveOffset + "px";
  // prevent multiple click when transition
  for (let i = 0; i < amount; i++) {
    currTransl[i] = -moveOffset;
    document
      .getElementsByClassName("movieSlide")
      [i].addEventListener("transitionend", transitionCompleted, true);
    document
      .getElementsByClassName("movieSlide")
      [i].addEventListener("webkitTransitionEnd", transitionCompleted, true);
    document
      .getElementsByClassName("movieSlide")
      [i].addEventListener("oTransitionEnd", transitionCompleted, true);
    document
      .getElementsByClassName("movieSlide")
      [i].addEventListener("MSTransitionEnd", transitionCompleted, true);
  }
  // add the last item to the start so that translateX(-moveOffset) works (In case the first click is the previous button)
  document
    .getElementById("moviesCarousel")
    .insertBefore(
      document.getElementById("moviesCarousel").children[10],
      document.getElementById("moviesCarousel").children[0]
    );
  // add click events to control arrows
  document.getElementById("prev").addEventListener("click", prev, true);
  document.getElementById("next").addEventListener("click", next, true);
});