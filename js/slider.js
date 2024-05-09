let slideIndex = 0;
let timer;

function showSlide(n) {
  const slides = document.querySelectorAll('.slide');
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex].style.display = 'block';
}

function nextSlide() {
  showSlide(slideIndex += 1);
}

function prevSlide() {
  showSlide(slideIndex -= 1);
}

function startSlider() {
  timer = setInterval(nextSlide, 2000); // Cambia de diapositiva cada 3 segundos (3000 milisegundos)
}

function stopSlider() {
  clearInterval(timer);
}

document.addEventListener("DOMContentLoaded", function() {
  showSlide(slideIndex);
  startSlider();
});

// Agregar eventos para pausar el slider al pasar el mouse sobre él
document.querySelector('.slider-container').addEventListener('mouseenter', stopSlider);
document.querySelector('.slider-container').addEventListener('mouseleave', startSlider);