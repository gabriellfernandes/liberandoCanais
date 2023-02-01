const childsHeader = [
  `<div class="headerSlider">
    <img
      class="headerSliderIcon"
      src="./src/assets/headerCarousel/shield.png"
    />
    <p class="headerSliderText">Site 100% seguro com segurança SSL</p>
  </div>`,

  `<div class="headerSlider">
    <img
      class="headerSliderIcon"
      src="./src/assets/headerCarousel/creditcard.png"
    />
    <p class="headerSliderText">Pague com cartões em até 12x</p>
  </div>`,

  `<div class="headerSlider">
    <img
      class="headerSliderIcon"
      src="./src/assets/headerCarousel/shield.png"
    />
    <p class="headerSliderText">Site 100% seguro com segurança SSL</p>
  </div>`,

  `<div class="headerSlider">
    <img
      class="headerSliderIcon"
      src="./src/assets/headerCarousel/creditcard.png"
    />
    <p class="headerSliderText">Pague com cartões em até 12x</p>
  </div>`,
];

const childsHeaderRevese = [
  `<div class="headerSliderReverse">
      <img
        class="headerSliderIcon"
        src="./src/assets/headerCarousel/shield.png"
      />
      <p class="headerSliderText">Site 100% seguro com segurança SSL</p>
    </div>`,

  `<div class="headerSliderReverse">
      <img
        class="headerSliderIcon"
        src="./src/assets/headerCarousel/creditcard.png"
      />
      <p class="headerSliderText">Pague com cartões em até 12x</p>
    </div>`,

  `<div class="headerSliderReverse">
      <img
        class="headerSliderIcon"
        src="./src/assets/headerCarousel/shield.png"
      />
      <p class="headerSliderText">Site 100% seguro com segurança SSL</p>
    </div>`,

  `<div class="headerSliderReverse">
      <img
        class="headerSliderIcon"
        src="./src/assets/headerCarousel/creditcard.png"
      />
      <p class="headerSliderText">Pague com cartões em até 12x</p>
    </div>`,
];
const headerCarousel = document.getElementById("headerCarousel");
const childsElements = document.getElementsByClassName("headerSlider");

let actualHeaderValue = 0;
let statusHeader = true;
function nextElementHeader() {
  headerCarousel.removeChild(childsElements[0]);

  headerCarousel.innerHTML += childsHeader[actualHeaderValue];
  actualHeaderValue++;
  if (actualHeaderValue > childsElements.length - 1) {
    actualHeaderValue = 0;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    if (statusHeader) {
      nextElementHeader();
    }
  }, 4000);
});

const nextChildHeaderCarousel = document.getElementById("headerSliderBtnsNext");

nextChildHeaderCarousel.addEventListener("click", () => {
  nextElementHeader();
});

function backElementHeader() {
  if (childsElements.length === 4) {
    childsElements[0].className = "headerSliderReverse";
    childsElements[0].className = "headerSliderReverse";
    childsElements[0].className = "headerSliderReverse";
    childsElements[0].className = "headerSliderReverse";

    statusHeader = false;

    const newChidsElements = document.getElementsByClassName(
      "headerSliderReverse"
    );

    headerCarousel.removeChild(newChidsElements[newChidsElements.length - 1]);
    headerCarousel.innerHTML =
      childsHeaderRevese[actualHeaderValue] + headerCarousel.innerHTML;
    actualHeaderValue++;
    if (actualHeaderValue > childsHeaderRevese.length - 1) {
      actualHeaderValue = 0;
    }

    setTimeout(() => {
      newChidsElements[0].className = "headerSlider";
      newChidsElements[0].className = "headerSlider";
      newChidsElements[0].className = "headerSlider";
      newChidsElements[0].className = "headerSlider";
      statusHeader = true;
    }, 4000);
  }

  if (childsElements.length === 0) {
    const newChidsElements = document.getElementsByClassName(
      "headerSliderReverse"
    );

    headerCarousel.removeChild(newChidsElements[newChidsElements.length - 1]);
    headerCarousel.innerHTML =
      childsHeaderRevese[actualHeaderValue] + headerCarousel.innerHTML;
    actualHeaderValue++;
    if (actualHeaderValue > childsHeaderRevese.length - 1) {
      actualHeaderValue = 0;
    }

    setTimeout(() => {
      newChidsElements[0].className = "headerSlider";
      newChidsElements[0].className = "headerSlider";
      newChidsElements[0].className = "headerSlider";
      newChidsElements[0].className = "headerSlider";
      statusHeader = true;
    }, 4000);
  }
}

const backChildHeaderCarousel = document.getElementById("headerSliderBtnsBack");

backChildHeaderCarousel.addEventListener("click", () => {
  backElementHeader();
});
