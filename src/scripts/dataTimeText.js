let date = new Date();
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("today").innerHTML = "ATENÇÃO: Este produto está prestes a se esgotar, oferta especial apenas hoje! " + date.toLocaleDateString('pt-BR', options);