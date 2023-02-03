const openModalBtn = document.querySelector("#openModalBtn");
const openModalBtn2 = document.querySelector("#openModalBtn2");
const openModalBtn3 = document.querySelector("#openModalBtn3");
const openModalBtn4 = document.querySelector("#openModalBtn4");
const openModalBtn5 = document.querySelector("#openModalBtn5");

const modal = document.querySelector("#myModal");
const modal2 = document.querySelector("#myModal2");
const modal3 = document.querySelector("#myModal3");

const closeBtn = document.querySelector(".closeBtn");
const closeBtn2 = document.querySelector(".closeBtn2");
const closeBtn3 = document.querySelector(".closeBtn3");

const modalContent = document.querySelector(".modal-content");
const modalContent2 = document.querySelector(".modal-content2");
const modalContent3 = document.querySelector(".modal-content3");



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
