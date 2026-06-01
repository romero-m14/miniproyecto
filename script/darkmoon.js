document.addEventListener("DOMContentLoaded", () => {
  const botoncito = document.querySelector("#btndark");
  const documento = document.documentElement; 
  const headerLogo = document.querySelector("#header-logo"); 

  function actualizarLogo() {
    if (!headerLogo) return; 

    if (documento.classList.contains("dark")) {
      headerLogo.src = "./galeria/logo1.png"; 
    } else {
      headerLogo.src = "./galeria/logo.svg";
    }
  }
  if (botoncito) {
    function cambiarModo() {
      documento.classList.toggle("dark");
      actualizarLogo(); 
    }
    botoncito.addEventListener("click", cambiarModo);
  }
  actualizarLogo();
});