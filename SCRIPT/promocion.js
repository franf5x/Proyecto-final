// Mostrar ventana emergente automáticamente al cargar
window.addEventListener('load', function () {
  document.getElementById("popup").style.display = "block";
  document.getElementById("overlay").style.display = "block";
});

function cerrarPromocion() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
};