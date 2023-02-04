const createFaqItem = () => {
  const divFaq = document.querySelector(".containerFaq");

  const query = [
    {
      title: "Como funciona para acessar a área de membros?",
      description:
        "Após a aprovação do seu pagamento, você receberá os dados de acesso automaticamente no e-mail cadastrado no ato da compra. Por isso, é importante que você cadastre um e-mail válido.",
    },
    {
      title: "Não tenho facilidade com tecnologia",
      description:
        "Fique tranquilo. O portal é fácil de usar. Em último caso, se houver dúvidas, você poderá pedir a ajuda de algum conhecido ou algum familiar. Mas é extremamente fácil e intuitivo usar a área de membros.",
    },
    {
      title: "Qual a garantia do produto?",
      description:
        "Se não conseguir fazer o funcionamento, falha de sinal ou travas nós garantimos o reembolso.",
    },
    {
      title: "Como vou receber os canais?",
      description:
        "A lista sincroniza sempre automaticamente pelos nossos servidores.",
    },
    {
      title: "Se testar e não gostar?",
      description:
        "Tem 14 dias de garantia incondicional, ou seja, se você receber e, por algum motivo, não gostar devolvemos todo o seu dinheiro.",
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

const createChannelItem = () => {
  const divChannel = document.querySelector(".containerChannels");

  const channels = [
    {
      title: "Esporte",
      href: "./src/assets/canaisExemple/esporte1.png",
      qntImages: 7,
    },
    {
      title: "Ultra HD",
      href: "./src/assets/canaisExemple/ultra1.webp",
      qntImages: 4,
    },
    {
      title: "Aberto",
      href: "./src/assets/canaisExemple/aberto1.png",
      qntImages: 4,
    },
    {
      title: "Filmes & Séries",
      href: "./src/assets/canaisExemple/filmes1.png",
      qntImages: 5,
    },
    {
      title: "Infantil",
      href: "./src/assets/canaisExemple/infantil1.webp",
      qntImages: 2,
    },
    {
      title: "Variedades",
      href: "./src/assets/canaisExemple/variedades1.png",
      qntImages: 4,
    },
    {
      title: "Cultura",
      href: "./src/assets/canaisExemple/cultura1.png",
      qntImages: 2,
    },

    {
      title: "Notícias",
      href: "./src/assets/canaisExemple/noticias1.png",
      qntImages: 1,
    },
    {
      title: "Adulto",
      href: "./src/assets/canaisExemple/adultos1.png",
      qntImages: 2,
    },
  ];

  const div = document.createElement("div");
  div.className = "containerChannels__list";

  channels.forEach((elem) => {
    const details = document.createElement("details");
    details.classList.add(`detailsqnt${elem.qntImages}`);
    if (elem.title === "Esporte") {
        details.open = true;
    }

    details.addEventListener("toggle", (e) => {
      e.preventDefault();

      if (!details.open) {
        details.open = true;
        details.className.includes("channelsLeave")
          ? details.classList.remove("channelsLeave")
          : details.classList.add("channelsLeave");
      }
    });

    const summary = document.createElement("summary");
    summary.innerText = elem.title;

    const list = document.createElement("ul");

    for (i = 1; i <= elem.qntImages; i++) {
      const li = document.createElement("li");
      const img = document.createElement("img");
      img.src = elem.href.replace("1", i);
      li.append(img);
      list.append(li);
    }

    details.append(summary, list);

    div.appendChild(details);
    divChannel.appendChild(div);
  });
};


createChannelItem();
createFaqItem();
