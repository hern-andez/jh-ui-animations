import gsap from "gsap";

// Posiciones de la celda A, B donde debe de estar los divs animados
const estado = [
  [
    [0, 0],
    [0, 3],
  ],
  [
    [0, 0],
    [1, 1],
  ],
  [
    [0, 0],
    [3, 0],
  ],
  [
    [2, 0],
    [3, 1],
  ],
  [
    [3, 0],
    [3, 3],
  ],
  [
    [2, 2],
    [3, 3],
  ],
  [
    [0, 3],
    [3, 3],
  ],
  [
    [0, 2],
    [1, 3],
  ],
];

let index = -1; // Indice de filas para guardar las celdas en su fila correspondiente (4x4)
const container = document.querySelector(".container");
const cells = Array.from({ length: 4 }, () => {
  index++;
  return container.querySelectorAll(`.cell[data-y="${index}"]`);
});
let time = 0.55; // Tiempo que tardara la figura en cambiar de estado
let renderSecondFigure = false; // Indica si es momento de renderizar la segunda figura

gsap.to({}, { delay: 1, onStart: () => dimensionadorDiv("div--first") }); // Renderiza la primera figura

/**
 * Renderiza las figuras y anima los cambio de estado
 * @param {*} className: Clase que diferenciara las 2 figuras
 */
function dimensionadorDiv(className) {
  // Animación de cambio de estado
  const figureTl = gsap.timeline({ repeat: Infinity, repeatDelay: time });
  let indexState = 0;

  // Figura renderizada
  const divAnimado = document.createElement("div");
  divAnimado.classList.add("div__animation", className);
  container.appendChild(divAnimado);

  figureTl.to(
    {},
    {
      onComplete: () => {
        // Nuevo estado y posiciones de la figura
        const [origin, destination] = estado[indexState];
        const cellA = cells[origin[0]][origin[1]];
        const cellB = cells[destination[0]][destination[1]];

        // Información sobre celdas y contenedor
        const infoCellA = cellA.getBoundingClientRect();
        const infoCellB = cellB.getBoundingClientRect();
        const infoContainer = container.getBoundingClientRect();

        // Calcula la nueva posición y dimensión del div animado según las celdas y el contenedor
        const left = infoCellA.x - infoContainer.x;
        const top = infoCellA.y - infoContainer.y;
        const width = `${infoCellB.x + infoCellB.width - infoCellA.x}px`;
        const height = `${infoCellB.y + infoCellB.height - infoCellA.y}px`;

        if (renderSecondFigure === false && indexState === 3) {
          // Renderiza la segunda figura
          renderSecondFigure = true;
          dimensionadorDiv("div--second");
        }

        // Cambia el estado de la figura
        gsap.set(divAnimado, { left, top, width, height });
        indexState = indexState === estado.length - 1 ? 0 : indexState + 1; // Bucle para que la figura retorne a su estado original
      },
    },
  );
}
