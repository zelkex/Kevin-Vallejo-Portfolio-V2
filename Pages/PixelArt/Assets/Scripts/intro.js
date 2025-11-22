//Animacion Intro
window.addEventListener("load", () => {
  const intro = document.getElementById("intro");
  const contenido = document.getElementById("contenido");
  const bienvenida = document.getElementById("bienvenida");
  const video = document.getElementById("video-fondo");
  const sobremi = document.getElementById("sobre-mi");
  const videocont = document.getElementById("video-contenedor")
  const imgcont = document.getElementById("logos-contenedor")

  // Después de 2.2s (caída + expansión del rombo)
  setTimeout(() => {
    // Primero desaparece el rombo/fondo
    intro.style.transition = "opacity 4s"; // rombo/fondo desaparece en 4 segundos
    intro.style.opacity = 0;

    // Después de que el rombo/fondo desaparece, desaparece el texto
    setTimeout(() => {
      bienvenida.style.transition = "opacity 1.5s"; // texto desaparece en 3 segundos
      bienvenida.style.opacity = 0;

      // Ocultar elementos completamente después de la transición del texto
      setTimeout(() => {
        intro.style.display = "none";
        bienvenida.style.display = "none";
        contenido.style.opacity = 1; // mostrar contenido principal
        video.style.opacity = 1;
        sobremi.style.opacity = 1;
        videocont.style.opacity = 1;
        imgcont.style.opacity = 1;

        document.body.style.overflow = "auto"
      }, 1500); // coincide con la duración de la transición del texto
    }, 4000); // espera a que termine la transición del rombo
  }, 2200); // espera los 2.2s de animación inicial del rombo
});
