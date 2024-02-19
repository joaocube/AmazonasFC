// TODOS OS LINKS ABREM EM OUTRA ABA
let links = document.querySelectorAll(".link");
links.forEach(function (link) {
  link.setAttribute("target", "_blank");
});
// VOLTAR AO TOPO
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// ADICIONAR CARDS DE PATROCINIO
function ads() {
  fetch("js/ad.json")
    .then((response) => response.json())
    .then((patrocinios) => {
      const container = document.querySelector("#patrocinio");

      patrocinios.map((patrocinios) => {
        const card = document.createElement("div");
        card.classList.add("patrocinio-card");

        // CRIANDO IMAGEM E TITULO
        const img = document.createElement("img");
        img.src = patrocinios.imagem;
        // img.alt = patrocinios.nome;
        // const titulo = document.createElement("p");
        // titulo.textContent = patrocinios.nome;

        card.appendChild(img);
        // card.appendChild(titulo);
        container.appendChild(card);
      });
    });
}
ads();
// ADICIONAR CARDS DE TROFEUS
function trofeus() {
  fetch("js/trofeus.json")
    .then((response) => response.json())
    .then((trofeus) => {
      const containerTrofeu = document.querySelector("#trofeus");

      trofeus.map((trofeus) => {
        const cardTrofeu = document.createElement("div");
        cardTrofeu.classList.add("trofeu-card");

        // CRIANDO IMAGEM E TITULO
        const imgTrofeu = document.createElement("img");
        imgTrofeu.src = trofeus.imagem;
        const quantidadeCampeao = document.createElement("h1");
        quantidadeCampeao.classList.add("font3-Brd5");
        quantidadeCampeao.textContent = trofeus.quantidade;

        const tituloNome = document.createElement("p");
        tituloNome.classList.add("font1-pBms");
        tituloNome.textContent = trofeus.titulo;

        cardTrofeu.appendChild(imgTrofeu);
        cardTrofeu.appendChild(quantidadeCampeao);
        cardTrofeu.appendChild(tituloNome);
        containerTrofeu.appendChild(cardTrofeu);
      });
    });
}
trofeus();
