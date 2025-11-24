document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.hero-slider .slide');
  let index = 0;

  function mostrarSiguiente() {
    slides[index].classList.remove('activo');
    index = (index + 1) % slides.length;
    slides[index].classList.add('activo');
  }

  setInterval(mostrarSiguiente, 6000); // cambia cada 6 segundos
});


