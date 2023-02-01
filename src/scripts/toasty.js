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

  toastPlan.innerHTML = ` <span class="buyText">comprou um plano</span> ${plan}`;

  if (plan === "Trimestral") {
    toastPlan.innerHTML += "<span class='buyText'> (Popular)</span>";
  }

  toast.classList.add("show");
}

timeoutId = setInterval(() => {
  if (toast.className.includes("show")) {
    hideToast();
  } else {
    toast.classList.add("show");
    showToast();
  }
}, 15000);

function hideToast() {
  toast.classList.remove("show");
}

toastClose.addEventListener("click", hideToast);

showToast();
