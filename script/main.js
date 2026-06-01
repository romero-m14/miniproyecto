import { habilidades, habilidadesAdicionales } from './habilidades.js';
import { proyectos } from './proyectos.js';

const infoUsuario = {
  nombre: "Miguel Romero",
  descripcion: "La programación no es solo mi trabajo, es lo que me apasiona. Como desarrollador Full Stack con manejo de ReactJS y herramientas como Elementor o WooCommerce, disfruto dando vida a proyectos digitales desde cero. Mi formación es constante: actualmente estoy profundizando en mis estudios de Frontend para dominar las interfaces más modernas. En mis ratos libres, encuentro el equilibrio perfecto entre la estrategia de los juegos de PC y la narrativa de los libros de historias.",
  nivelBackend: "85",
  nivelFrontend: "93",
  nivelCSS: "70",
  aniosExperiencia: "4",
  opinionExtra: {
    autor: "Mi Papa",
    comentario: "Excelente desarrollador web. Diseño profesional, entrega rápida y excelente comunicación."
  },
  imgprofile: "./galeria/perfil.png", 
  otrasImagenes: {
    logoHeader: "./galeria/logo1.png",   
    decoracionSeccion1: "./galeria/mi foto.jpg", 
    decoracionSeccion2: "./galeria/foto2.jpg",
    decoracionSeccion3: "./galeria/foto3.jpg"
  }
};
function cargarDatosPerfil() {
  const txtNombre = document.querySelector("#perfil-nombre");
  const txtDesc = document.querySelector("#perfil-descripcion");
  const txtAnios = document.querySelector("#perfil-anios");
  const imgProf = document.querySelector("#perfil-img");
  const logoHead = document.querySelector("#header-logo");

  if (txtNombre) txtNombre.textContent = infoUsuario.nombre;
  if (txtDesc) txtDesc.textContent = `"${infoUsuario.descripcion}"`;
  if (txtAnios) txtAnios.textContent = infoUsuario.aniosExperiencia;
  if (imgProf) imgProf.src = infoUsuario.imgprofile;
  if (logoHead) logoHead.src = infoUsuario.otrasImagenes.logoHeader;

  const opinionAutor = document.querySelector("#opinion-autor");
  const opinionTexto = document.querySelector("#opinion-texto");
  if (opinionAutor) opinionAutor.textContent = `Opinión de ${infoUsuario.opinionExtra.autor}`;
  if (opinionTexto) opinionTexto.textContent = `"${infoUsuario.opinionExtra.comentario}"`;

  const deco1 = document.querySelector("#deco-1");
  const deco2 = document.querySelector("#deco-2");
  const deco3 = document.querySelector("#deco-3");
  if (deco1) deco1.src = infoUsuario.otrasImagenes.decoracionSeccion1;
  if (deco2) deco2.src = infoUsuario.otrasImagenes.decoracionSeccion2;
  if (deco3) deco3.src = infoUsuario.otrasImagenes.decoracionSeccion3;

  const barraBack = document.querySelector("#barra-backend");
  const barraFront = document.querySelector("#barra-frontend");
  const barraCSS = document.querySelector("#barra-css");
  
  if (barraBack) {
    barraBack.style.width = `${infoUsuario.nivelBackend}%`;
    barraBack.parentElement.previousElementSibling.lastElementChild.textContent = `${infoUsuario.nivelBackend}%`;
  }
  if (barraFront) {
    barraFront.style.width = `${infoUsuario.nivelFrontend}%`;
    barraFront.parentElement.previousElementSibling.lastElementChild.textContent = `${infoUsuario.nivelFrontend}%`;
  }
  if (barraCSS) {
    barraCSS.style.width = `${infoUsuario.nivelCSS}%`;
    barraCSS.parentElement.previousElementSibling.lastElementChild.textContent = `${infoUsuario.nivelCSS}%`;
  }
}

const btnMenu = document.querySelector("#btn-menu");
const menuNavegacion = document.querySelector("#menu-navegacion");
if (btnMenu && menuNavegacion) {
  btnMenu.addEventListener("click", () => {
    menuNavegacion.classList.toggle("hidden");
    menuNavegacion.classList.toggle("flex");
  });
}

const contenedorHabilidades = document.querySelector("#contenedor-habilidades");
const contenedorAdicionales = document.querySelector("#contenedor-adicionales");

function cargarHabilidades() {
  if (contenedorHabilidades) {
    contenedorHabilidades.innerHTML = "";
    habilidades.forEach((hab, index) => {
      const card = document.createElement("div");
      card.className = "bg-[#131b2e] border border-slate-800/60 rounded-xl h-28 flex flex-col items-center justify-center card-hover opacity-0 scale-95 transition-all duration-700 relative overflow-hidden group select-none";
      card.style.transitionDelay = `${index * 60}ms`;

      card.innerHTML = `
        <div class="flex flex-col items-center justify-center transition-all duration-300 group-hover:-translate-y-2">
          <img src="${hab.url}" alt="${hab.nombre}" class="w-10 h-10 object-contain ${hab.darkInvert ? 'dark:invert' : ''}" />
        </div>
        <div class="absolute bottom-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <span class="text-[10px] text-lime-400 font-bold px-1.5 py-0.5 bg-lime-950/40 rounded border border-lime-900/30">${hab.nivel}</span>
        </div>
      `;
      contenedorHabilidades.appendChild(card);

      setTimeout(() => {
        card.classList.remove("opacity-0", "scale-95");
        card.classList.add("opacity-100", "scale-100");
      }, 50);
    });
  }
  if (contenedorAdicionales) {
    contenedorAdicionales.innerHTML = "";
    habilidadesAdicionales.forEach((hab, index) => {
      const img = document.createElement("img");
      img.src = hab.url;
      img.alt = hab.nombre;
      img.className = `h-7 w-auto object-contain opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 filter grayscale contrast-125 hover:grayscale-0 ${hab.darkInvert ? 'dark:invert' : ''}`;
      img.title = hab.nombre; 
      
      contenedorAdicionales.appendChild(img);
    });
  }
}

function inicializarProyectos() {
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
const formulario = document.querySelector("#form-contacto");
if (formulario) {
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = formulario.querySelector("input[type='text']").value.trim();
    const email = formulario.querySelector("input[type='email']").value.trim();
    const comentarios = formulario.querySelector("textarea").value.trim();

    if (!nombre || !email || !comentarios) {
      alert("❌ Por favor, rellena todos los campos.");
      return;
    }
    window.location.href = `mailto:tu-correo@ejemplo.com?subject=Contacto&body=Nombre: ${nombre}%0AEmail: ${email}%0A%0A${comentarios}`;
  });
}
document.addEventListener("DOMContentLoaded", () => {
  cargarDatosPerfil();
  cargarHabilidades();     
  inicializarProyectos();  
});

const btnDownloadCV = document.querySelector("#btn-download-cv");

if (btnDownloadCV) {
  btnDownloadCV.addEventListener("click", () => {
    alert("CV descargado gracias por visitarnos");

  });
}