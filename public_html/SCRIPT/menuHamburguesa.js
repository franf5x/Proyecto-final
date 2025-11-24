document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector(".hamburguesa");
  const nav = document.querySelector("nav");
  const enlaces = document.querySelectorAll(".nav-enlace");

  btn.addEventListener("click", function () {
    nav.classList.toggle("mostrar");
  });

  enlaces.forEach(enlace => {
    enlace.addEventListener("click", () => {
      nav.classList.remove("mostrar");
    });
  });
});

