const images = [
  `<li class="movieSlide animate">
  <img src="./src/assets/MoviesCarousel/banker.jpeg" />
</li>`,
  `<li class="movieSlide animate">
  <img src="./src/assets/MoviesCarousel/batman.jpeg" />
</li>`,
  `<li class="movieSlide animate">
  <img src="./src/assets/MoviesCarousel/bruxo.jpeg" />
</li>`,
  `<li class="movieSlide animate">
  <img src="./src/assets/MoviesCarousel/homemnorte.jpeg" />
</li>`,
  `<li class="movieSlide animate">
  <img src="./src/assets/MoviesCarousel/joker.jpeg" />
</li>`,
  `<li class="movieSlide animate">
  <img src="./src/assets/MoviesCarousel/loki.jpeg" />
</li>`,
  `<li class="movieSlide animate">
  <img src="./src/assets/MoviesCarousel/mandalorian.jpeg" />
</li>`,
  `<li class="movieSlide animate">
  <img src="./src/assets/MoviesCarousel/strange.jpeg" />
</li>`,
  `<li class="movieSlide animate">
  <img src="./src/assets/MoviesCarousel/tim.png" />
</li>`,
  `<li class="movieSlide animate">
  <img src="./src/assets/MoviesCarousel/vikings.jpeg" />
</li>`,
];

const animations = [];
document.addEventListener("DOMContentLoaded", () => {
  let actualValue = 0;
  const moviesCarousel = document.getElementById("moviesCarousel");
  const childs = document.getElementsByClassName("movieSlide");
  setInterval(() => {
    moviesCarousel.removeChild(childs[0]);

    moviesCarousel.innerHTML += images[actualValue];
    actualValue++;
    if (actualValue > childs.length - 1) {
      actualValue = 0;
    }
  }, 4000);
});
