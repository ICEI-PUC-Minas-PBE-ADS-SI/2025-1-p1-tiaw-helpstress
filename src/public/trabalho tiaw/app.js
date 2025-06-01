const cardsData = [
  {
    titulo: "Desacelera",
    descricao: "Regule a ansiedade e o estresse em menos de 5 minutos.",
    imagem: "https://cdn-icons-png.flaticon.com/512/4151/4151571.png",
  },
  {
    titulo: "Durmazen",
    descricao: "Vença a insônia com nosso relaxamento guiado online.",
    imagem: "https://cdn-icons-png.flaticon.com/512/3909/3909444.png",
  },
  {
    titulo: "Aqui e Agora",
    descricao: "4 meditações para formar uma âncora de bem-estar no momento presente.",
    imagem: "https://cdn-icons-png.flaticon.com/512/742/742752.png",
  },
];

const container = document.getElementById("cards-container");


if (container.children.length === 0) {
  cardsData.forEach((card) => {
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.innerHTML = `
      <img src="${card.imagem}" alt="${card.titulo}" />
      <h3>${card.titulo}</h3>
      <p>${card.descricao}</p>
      <a href="detalhes.html">Experimente</a>
    `;
    cardDiv.addEventListener("click", () => {
      window.location.href = "detalhes.html";
    });
    container.appendChild(cardDiv);
  });
}
