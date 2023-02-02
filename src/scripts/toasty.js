const toast = document.getElementById("toast");
const toastName = document.getElementById("toast-name");
const toastPlan = document.getElementById("toast-plan");
const toastClose = document.getElementById("toast-close");

const names = [
  "Ana",
  "Beatriz",
  "Carlos",
  "Daniel",
  "Eduardo",
  "Fabiana",
  "Gabriel",
  "Heitor",
  "Isabela",
  "João",
  "Karen",
  "Lucas",
  "Mariana",
  "Nicolle",
  "Otávio",
  "Paula",
  "Ricardo",
  "Sabrina",
  "Thiago",
];
const plans = ["Mensal", "Trimestral", "Semestral"];

let timeoutId;

function showToast() {
  const name = names[Math.floor(Math.random() * names.length)];
  const plan = plans[Math.floor(Math.random() * plans.length)];
  toastName.innerText = name + " ";

  toastPlan.innerHTML = ` <span class="buyText">acabou de comprar</span>`;

  toast.classList.add("show");
  resetTimeout();
}

let timeout4s = null;

let resetTimeout = () => {
  clearTimeout(timeout4s);
  timeout4s = setTimeout(() => {
    hideToast();
  }, 4000);
}

timeoutId = setInterval(() => {
  showToast();
}, 30000);

function hideToast() {
  toast.classList.remove("show");
  clearTimeout(timeout4s);
}

toastClose.addEventListener("click", hideToast);

setTimeout(() => {
  showToast();
}, 10000);