window.addEventListener("load", () => {
  const intro = document.getElementById("intro");
  const contenido = document.getElementById("contenido");

  // Tiempo total: caída + expansión = 1.2s + 1s
  setTimeout(() => {
    intro.style.opacity = 0;
    intro.style.transition = "0.6s";
    
    setTimeout(() => {
      intro.style.display = "none";
      contenido.style.opacity = 1;
      document.body.style.overflow = "auto";
    }, 600);

  }, 2200);
});
