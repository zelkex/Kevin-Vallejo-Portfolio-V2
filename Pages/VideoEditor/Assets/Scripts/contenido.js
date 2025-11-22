window.addEventListener("load", () => {
  // Mostrar todo el contenido desde el inicio
  const contenido = document.getElementById("contenido");
  const video = document.getElementById("video-fondo");
  const sobremi = document.getElementById("sobre-mi");
  const videocont = document.getElementById("video-contenedor");
  const imgcont = document.getElementById("logos-contenedor");
  const menu = document.getElementById("menu");

  contenido.style.opacity = 1;
  video.style.opacity = 1;
  sobremi.style.opacity = 1;
  videocont.style.opacity = 1;
  imgcont.style.opacity = 1;
  menu.style.opacity = 1;

  document.body.style.overflow = "auto"; // permitir scroll
});
