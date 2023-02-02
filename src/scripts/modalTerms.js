const openModalBtn = document.querySelector("#openModalBtn");
const openModalBtn2 = document.querySelector("#openModalBtn2");

const modal = document.querySelector("#myModal");
const modal2 = document.querySelector("#myModal2");

const closeBtn = document.querySelector(".closeBtn");
const closeBtn2 = document.querySelector(".closeBtn2");

const modalContent = document.querySelector(".modal-content");
const modalContent2 = document.querySelector(".modal-content2");

console.log(modalContent2, closeBtn2)

openModalBtn.addEventListener("click", function () {
  modal.style.display = "flex";

  modalContent.classList.remove("modal-contentLeave");
});

openModalBtn2.addEventListener("click", function () {
  modal2.style.display = "flex";

  modalContent2.classList.remove("modal-contentLeave");
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
