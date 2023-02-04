const openModalBtn = document.querySelector("#openModalBtn");
const openModalBtn2 = document.querySelector("#openModalBtn2");
const openModalBtn3 = document.querySelector("#openModalBtn3");
const openModalBtn4 = document.querySelector("#openModalBtn4");
const openModalBtn5 = document.querySelector("#openModalBtn5");
const openModalBtn6 = document.querySelector("#openModalBtn6");
const openModalBtn7 = document.querySelector("#openModalBtn7");
const openModalBtn8 = document.querySelector("#openModalBtn8");
const openModalBtn9 = document.querySelector("#openModalBtn9");
const openModalBtn10 = document.querySelector("#openModalBtn8");
const openModalBtn11 = document.querySelector("#openModalBtn9");

const modal = document.querySelector("#myModal");
const modal2 = document.querySelector("#myModal2");
const modal3 = document.querySelector("#myModal3");
const modal4 = document.querySelector("#myModal4");

const closeBtn = document.querySelector(".closeBtn");
const closeBtn2 = document.querySelector(".closeBtn2");
const closeBtn3 = document.querySelector(".closeBtn3");
const closeBtn4 = document.querySelector(".closeBtn4");

const modalContent = document.querySelector(".modal-content");
const modalContent2 = document.querySelector(".modal-content2");
const modalContent3 = document.querySelector(".modal-content3");
const modalContent4 = document.querySelector(".modalApp");


openModalBtn.addEventListener("click", function () {
  modal.style.display = "flex";

  modalContent.classList.remove("modal-contentLeave");
});

openModalBtn2.addEventListener("click", function () {
  modal2.style.display = "flex";

  modalContent2.classList.remove("modal-contentLeave");
});

openModalBtn3.addEventListener("click", function () {
  modal3.style.display = "flex";

  modalContent3.classList.remove("modal-contentLeave");
});

openModalBtn4.addEventListener("click", function () {
  modal3.style.display = "flex";

  modalContent3.classList.remove("modal-contentLeave");
});

openModalBtn5.addEventListener("click", function () {
  modal3.style.display = "flex";

  modalContent3.classList.remove("modal-contentLeave");
});

openModalBtn6.addEventListener("click", function () {
  modal4.style.display = "flex";

  modalContent4.classList.remove("modalAppLeave");
});

openModalBtn7.addEventListener("click", function () {
  modal4.style.display = "flex";

  modalContent4.classList.remove("modalAppLeave");
});

openModalBtn8.addEventListener("click", function () {
  modal4.style.display = "flex";

  modalContent4.classList.remove("modalAppLeave");
});

openModalBtn9.addEventListener("click", function () {
  modal4.style.display = "flex";

  modalContent4.classList.remove("modalAppLeave");
});

openModalBtn10.addEventListener("click", function () {
  modal4.style.display = "flex";

  modalContent4.classList.remove("modalAppLeave");
});

openModalBtn11.addEventListener("click", function () {
  modal4.style.display = "flex";

  modalContent4.classList.remove("modalAppLeave");
});






closeBtn.addEventListener("click", function () {
  modalContent.classList.add("modal-contentLeave");

  setTimeout(() => {
    modal.style.display = "none";
  }, 320);
});

closeBtn2.addEventListener("click", function () {
  modalContent2.classList.add("modal-contentLeave");

  setTimeout(() => {
    modal2.style.display = "none";
  }, 320);
});

closeBtn3.addEventListener("click", function () {
  modalContent3.classList.add("modal-contentLeave");

  setTimeout(() => {
    modal3.style.display = "none";
  }, 320);
});

closeBtn4.addEventListener("click", function () {
  modalContent4.classList.add("modalAppLeave");

  setTimeout(() => {
    modal4.style.display = "none";
  }, 320);
});