const containerBlinkin = document.querySelector(".container .blinkin");
const fragment = document.createDocumentFragment();

for (let i = 1; i <= 50; i++) {
  const span = document.createElement("span");
  span.className = "blinkin__animation";
  span.style.setProperty("--i", i);
  fragment.appendChild(span);
}

containerBlinkin.appendChild(fragment);

// Formulario e input y label de email
const form = document.querySelector(".login__form");
const labelEmail = form.querySelector(".label--email .label__input");
const inputEmail = form.querySelector(".label--email .input__email");
change(inputEmail, labelEmail);

// Input, label e icono
const labelPassword = form.querySelector(".label--password .label__input");
const inputPassword = form.querySelector(".label--password .input__password");
const icon = form.querySelector(".visibility__icon");
change(inputPassword, labelPassword);

// Muestra u oculta la contraseña del input password
icon.addEventListener("click", () => {
  const type = inputPassword.type === "password" ? "text" : "password";
  const iconText = type === "password" ? "Visibility" : "Visibility_Off";

  icon.textContent = iconText;
  inputPassword.type = type;
});

/**
 * Agrega el foco al label de su input correspondiente para que no vuelva a su estado por si el input tiene texto
 * @param {*} input: Input correspondiente
 * @param {*} label Label con el foco
 */
function change(input, label) {
  input.addEventListener("input", (e) => {
    const hasText = e.target.value.length > 0 ? true : false; // Si el input tiene text

    // Agrega o remueve el foco
    if (hasText && !label.classList.contains("label__focus")) label.classList.add("label__focus");
    else if (!hasText && label.classList.contains("label__focus")) label.classList.remove("label__focus");
  });
}

// Evita que se recarge la pagina
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
