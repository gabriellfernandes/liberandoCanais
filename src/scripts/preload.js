const modal = document.querySelector("#preLoad")
const button = document.querySelector("#continue")
const body = document.querySelector("#body")

window.addEventListener("load", function () {
    button.classList.remove("opacityButton") 
});

button.addEventListener("click", () => {
    console.log(modal)
    modal.remove()
    body.classList.remove("noScroll")
})