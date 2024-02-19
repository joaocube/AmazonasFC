let divJogadores = document.querySelector("#jogadores");

fetch("jogadores.json").then((response) => {
  response.json().then((jogadores) => {
    console.log(jogadores);
  });
});
