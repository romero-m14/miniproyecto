import { proyectos } from './proyectos.js';

const imagenesReales = [
  "./galeria/fronted.jfif",
  "./galeria/jugador.jpg",
  "./galeria/programador.avif"
];

function inicializarProyectos() {
  const contenedor = document.querySelector("#contenedor-proyectos");
  if (!contenedor) return; 
  contenedor.innerHTML = ""; 

  proyectos.forEach((proy, index) => {
    const card = document.createElement("div");
    card.className = "bg-white dark:bg-zinc-900/40 border border-slate-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 flex flex-col group";
    const rutaImagenLocal = imagenesReales[index] || proy.imagen;

    card.innerHTML = `
      <div class="overflow-hidden relative h-48 bg-slate-900">
        <img 
          src="${rutaImagenLocal}" 
          alt="${proy.titulo}" 
          class="w-full h-full object-cover transition duration-500 group-hover:scale-110" 
        />
      </div>
      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-lime-600 dark:group-hover:text-lime-300 transition">${proy.titulo}</h3>
          <p class="text-xs text-slate-600 dark:text-gray-300 leading-relaxed">${proy.descripcion}</p>
        </div>
        <button class="mt-6 border border-lime-600 text-lime-600 dark:border-lime-300 dark:text-lime-300 px-4 py-2 rounded-full text-xs font-semibold hover:bg-lime-600 hover:text-white dark:hover:bg-lime-300 dark:hover:text-black transition self-start">
          Ver detalles
        </button>
      </div>
    `;
    contenedor.appendChild(card);
  });
}

const btnMenu = document.querySelector("#btn-menu");
const menuNavegacion = document.querySelector("#menu-navegacion");
if (btnMenu && menuNavegacion) {
  btnMenu.addEventListener("click", () => {
    menuNavegacion.classList.toggle("hidden");
    menuNavegacion.classList.toggle("flex");
  });
}
document.addEventListener("DOMContentLoaded", () => {
  inicializarProyectos();
});