window.addEventListener("load", () => {
  const contenido = document.getElementById("contenido");
  const video = document.getElementById("video-fondo");
  const sobremi = document.querySelectorAll(".sobre-mi");
  const videocont = document.querySelectorAll(".video-contenedor");
  const imgcont = document.getElementById("logos-contenedor");

  // Mostrar todo inmediatamente
  contenido.style.opacity = 1;
  video.style.opacity = 1;

  sobremi.forEach(sec => sec.style.opacity = 1);
  videocont.forEach(vc => vc.style.opacity = 1);

  imgcont.style.opacity = 1;

  // Permitir scroll
  document.body.style.overflow = "auto";
});
