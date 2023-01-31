const createFaqItem = () => {
  const divFaq = document.querySelector(".containerFaq");

  const query = [
    {
      title: "O que é?",
      description:
        "É um novo método de transmissão de sinais televisivos. Assim como o VOIP (Voz sobre IP), usa o protocolo IP Internet Protocol como meio de transporte do conteúdo.",
    },
    {
      title: "Posso testar antes de assinar?",
      description:
        "Possuímos planos mensais, onde você pode renovar livremente. Assim como também possuímos planos mais longos como os anuais com grandes descontos, o poder de escolha é seu.",
    },
    {
      title: "Como funciona as renovações?",
      description:
        "Nossas assinaturas não possuem taxas, multas ou fidelidades, podendo ser cancelado a qualquer momento.",
    },
    {
      title: "Posso assistir em mais de uma tela?",
      description:
        "Você pode configurar seu login em diversos dispositivos, porém não poderá ver simultâneamente em duas telas sem adquirir o ponto extra. Adquira o ponto extra para ver em mais de uma tela ao mesmo tempo. Se ainda restar alguma dúvida entre em contato conosco, ficaremos feliz em esclarecer toda e qualquer dúvida",
    },
    {
      title: "É necessário uma Tv Box?",
      description:
        "O uso de uma box é necessário se sua televisão não ser uma SmartTv.",
    },
  ];

  const div = document.createElement("div");
  div.className = "containerFaq__list";

  query.forEach((elem) => {
    const details = document.createElement("details");
    elem.title == "Posso assistir em mais de uma tela?" &&
      details.classList.add("containerFaq__item");

    details.addEventListener("toggle", (e) => {
      e.preventDefault();

      if (!details.open) {
        details.className.includes("detailsLeave")
          ? details.classList.remove("detailsLeave")
          : details.classList.add("detailsLeave");

        details.open = true;
      }
    });

    const summary = document.createElement("summary");
    summary.innerText = elem.title;

    const paragraph = document.createElement("p");
    paragraph.innerText = elem.description;

    details.append(summary, paragraph);

    div.appendChild(details);
    divFaq.appendChild(div);
  });
};

createFaqItem();
