export const habilidades = [
  { nombre: "HTML5", url: "https://devicon-website.vercel.app/api/html5/original.svg" },
  { nombre: "CSS3", url: "https://devicon-website.vercel.app/api/css3/original.svg" },
  { nombre: "JavaScript", url: "https://devicon-website.vercel.app/api/javascript/original.svg" },
  { nombre: "React", url: "https://devicon-website.vercel.app/api/react/original.svg" },
  { nombre: "NextJS", url: "https://devicon-website.vercel.app/api/nextjs/original.svg", darkInvert: true },
  { nombre: "NodeJS", url: "https://devicon-website.vercel.app/api/nodejs/original.svg" },
  { nombre: "Tailwind", url: "https://devicon-website.vercel.app/api/tailwindcss/plain.svg" },
  { nombre: "MongoDB", url: "https://devicon-website.vercel.app/api/mongodb/original.svg" }
];

export const proyectos = [
  {
    titulo: "E-Commerce Platform",
    descripcion: "Tienda virtual interactiva desarrollada con ReactJS y Tailwind CSS. Incluye carrito de compras dinámico, gestión de productos y diseño responsivo optimizado para ventas.",
    imagen: "../galeria/programador.avif"
  },
  {
    titulo: "Gaming Hub",
    descripcion: "Plataforma web para comunidades de videojuegos que conecta con APIs externas. Carga estadísticas, perfiles de usuarios y contenido multimedia en tiempo real.",
    imagen: "../galeria/jugador.jpg"
  },
  {
    titulo: "Frontend Dashboard",
    descripcion: "Panel de administración modular para analíticas de negocio. Implementa gráficos interactivos, control de estados y un sistema nativo de modo oscuro.",
    imagen: "../galeria/fronted.jfif"
  }
];
export function inicializarProyectos() {
  const contenedor = document.querySelector("#contenedor-proyectos");
  if (!contenedor) return; 

  contenedor.innerHTML = ""; 

  proyectos.forEach(proy => {
    const card = document.createElement("div");
    card.className = "glass rounded-3xl overflow-hidden card-hover border border-slate-200 dark:border-zinc-800 flex flex-col group";

    card.innerHTML = `
      <div class="overflow-hidden relative h-48">
        <img src="${proy.imagen}" alt="${proy.titulo}" class="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
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