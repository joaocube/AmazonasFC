// TRANSICAO DE IMAGENS - SLIDER
const slider = document.querySelector(".slider");
const slides = slider.querySelectorAll(".slide");
let currentIndex = 0;

function showImage(index) {
  slides.forEach((image, i) => {
    if (i === index) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showImage(currentIndex);
}
function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

// imagem inicial
showImage(currentIndex);
// muda slide a cada x segundos
setInterval(nextSlide, 6000);
// -----------------------------------
