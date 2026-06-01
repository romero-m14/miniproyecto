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

  if (txtNombre && infoUsuario.nombre) txtNombre.textContent = infoUsuario.nombre;
  if (txtDesc && infoUsuario.descripcion) txtDesc.textContent = `"${infoUsuario.descripcion}"`;
  if (txtAnios && infoUsuario.aniosExperiencia) txtAnios.textContent = infoUsuario.aniosExperiencia;
  
  if (imgProf && infoUsuario.imgprofile) {
    imgProf.src = infoUsuario.imgprofile;
  }
  if (logoHead && infoUsuario.otrasImagenes?.logoHeader) {
    logoHead.src = infoUsuario.otrasImagenes.logoHeader;
  }

  const opinionAutor = document.querySelector("#opinion-autor");
  const opinionTexto = document.querySelector("#opinion-texto");
  if (opinionAutor && infoUsuario.opinionExtra?.autor) opinionAutor.textContent = `Opinión de ${infoUsuario.opinionExtra.autor}`;
  if (opinionTexto && infoUsuario.opinionExtra?.comentario) opinionTexto.textContent = `"${infoUsuario.opinionExtra.comentario}"`;

  const deco1 = document.querySelector("#deco-1");
  const deco2 = document.querySelector("#deco-2");
  const deco3 = document.querySelector("#deco-3");
  if (deco1 && infoUsuario.otrasImagenes?.decoracionSeccion1) deco1.src = infoUsuario.otrasImagenes.decoracionSeccion1;
  if (deco2 && infoUsuario.otrasImagenes?.decoracionSeccion2) deco2.src = infoUsuario.otrasImagenes.decoracionSeccion2;
  if (deco3 && infoUsuario.otrasImagenes?.decoracionSeccion3) deco3.src = infoUsuario.otrasImagenes.decoracionSeccion3;

  const barraBack = document.querySelector("#barra-backend");
  const barraFront = document.querySelector("#barra-frontend");
  const barraCSS = document.querySelector("#barra-css");
  
  if (barraBack && barraBack.parentElement?.previousElementSibling?.lastElementChild) {
    barraBack.style.width = `${infoUsuario.nivelBackend}%`;
    barraBack.parentElement.previousElementSibling.lastElementChild.textContent = `${infoUsuario.nivelBackend}%`;
  }
  if (barraFront && barraFront.parentElement?.previousElementSibling?.lastElementChild) {
    barraFront.style.width = `${infoUsuario.nivelFrontend}%`;
    barraFront.parentElement.previousElementSibling.lastElementChild.textContent = `${infoUsuario.nivelFrontend}%`;
  }
  if (barraCSS && barraCSS.parentElement?.previousElementSibling?.lastElementChild) {
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
    habilidadesAdicionales.forEach((hab) => {
      const img = document.createElement("img");
      img.src = hab.url;
      img.alt = hab.nombre;
      img.className = `h-7 w-auto object-contain opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 filter grayscale contrast-125 hover:grayscale-0 ${hab.darkInvert ? 'dark:invert' : ''}`;
      img.title = hab.nombre; 
      
      contenedorAdicionales.appendChild(img);
    });
  }
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
});

const btnDownloadCV = document.querySelector("#btn-download-cv");
if (btnDownloadCV) {
  btnDownloadCV.addEventListener("click", () => {
    alert("CV descargado gracias por visitarnos");
  });
}