const liStreamPlat = [
  `<li class="streamingPlatformsSlide animate">
  <img src="./src/assets/streamingCarousel/appletv.png" />
</li>`,
  `<li class="streamingPlatformsSlide animate">
  <img src="./src/assets/streamingCarousel/disneyplus.png" />
</li>`,
  `<li class="streamingPlatformsSlide animate">
  <img src="./src/assets/streamingCarousel/globoplay.png" />
</li>`,
  `<li class="streamingPlatformsSlide animate">
  <img src="./src/assets/streamingCarousel/hbomax.png" />
</li>`,
  `<li class="streamingPlatformsSlide animate">
  <img src="./src/assets/streamingCarousel/HuluLogo.png" />
</li>`,
  `<li class="streamingPlatformsSlide animate">
  <img src="./src/assets/streamingCarousel/netflix_o7nyzq.png" />
</li>`,
  `<li class="streamingPlatformsSlide animate">
  <img src="./src/assets/streamingCarousel/paramount-plus.png" />
</li>`,
  `<li class="streamingPlatformsSlide animate">
  <img src="./src/assets/streamingCarousel/primevideo.png" />
</li>`,
  `<li class="streamingPlatformsSlide animate">
  <img src="./src/assets/streamingCarousel/starplus.png" />
</li>`,
];

document.addEventListener("DOMContentLoaded", () => {
  let actualValueStreamPlat = 0;
  const streamPlatCarousel = document.getElementById(
    "streamingPlatformsCarousel"
  );
  const childsStreamPlat = document.getElementsByClassName(
    "streamingPlatformsSlide"
  );
  setInterval(() => {
    streamPlatCarousel.removeChild(childsStreamPlat[0]);

    streamPlatCarousel.innerHTML += liStreamPlat[actualValueStreamPlat];
    actualValueStreamPlat++;
    if (actualValueStreamPlat > childsStreamPlat.length - 1) {
      actualValueStreamPlat = 0;
    }
  }, 4000);
});
