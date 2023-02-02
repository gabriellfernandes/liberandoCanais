const openModalBtn = document.querySelector("#openModalBtn");
const modal = document.querySelector("#myModal");
const closeBtn = document.querySelector(".closeBtn");
const modalContent = document.querySelector(".modal-content");

openModalBtn.addEventListener("click", function () {
  modal.style.display = "flex";

  modalContent.classList.remove("modal-contentLeave");
});

closeBtn.addEventListener("click", function () {
  modalContent.classList.add("modal-contentLeave");

  setTimeout(() => {
    modal.style.display = "none";
  }, 320);
});
