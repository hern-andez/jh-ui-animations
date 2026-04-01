import gsap from "gsap";
import projectsJson from "./projects.json" with { type: "json" }; // Json con información de cada animación

const cardContainer = document.querySelector(".container__card");

if (cardContainer) {
  const btnClass = "card__project"; // Clase de cada botón

  for (const json of projectsJson) {
    const gif = new URL(`../${json.id}/demo.gif`, import.meta.url).href; // Ruta del gif correspondiente

    // Crea el botón de cada animación
    const btn = document.createElement("button");
    btn.className = btnClass;
    btn.ariaLabel = json.name;
    btn.onclick = () => window.open(json.url, "TARGET_BLANK"); // Abre la animación en otra pagina

    // Titula, descripción y gif de demo
    const htmlCode = `
        <div class="project__demo">
          <img src="${gif}" alt="Demo gif"/>
        </div>
        <div class="project__information">
          <strong>${json.name}</strong>
          <p>${json.description}</p>
        </div>
    `;

    // Renderiza en el DOM
    btn.innerHTML = htmlCode;
    cardContainer.insertAdjacentElement("afterbegin", btn);
  }

  // Anima el render de cada botón
  gsap.to("." + btnClass, {
    stagger: {
      each: 0.12,
      from: "random",
    },
    duration: 0.5,
    delay: 0.5,
    ease: "power1",
    opacity: 1,
    scale: 1,
  });
} else {
  console.error("Card container not found");
}
