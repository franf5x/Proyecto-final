document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.hero-slider .slide');
  const flechaIzquierda = document.querySelector('.flecha.izquierda');
  const flechaDerecha = document.querySelector('.flecha.derecha');
  let index = 0;

  function mostrarSlide(i) {
    slides.forEach(slide => slide.classList.remove('activo'));
    slides[i].classList.add('activo');
  }

  flechaDerecha.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    mostrarSlide(index);
  });

  flechaIzquierda.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    mostrarSlide(index);
  });

  // Opcional: rotación automática
  setInterval(() => {
    index = (index + 1) % slides.length;
    mostrarSlide(index);
  }, 6000);
});

