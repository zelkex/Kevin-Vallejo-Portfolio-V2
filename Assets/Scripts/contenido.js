window.addEventListener("load", () => {
  const menu = document.getElementById("menu");

  // Espera a que la intro y el texto de bienvenida desaparezcan
  // En tu caso el fade del texto dura 1.5s y comienza después de 2.2 + 4s del rombo
  // Total: 2.2 + 4 + 1.5 = 7.7s
  setTimeout(() => {
    menu.style.opacity = 1; // mostrar menú horizontal
  }, 7700); 
});
