// Elementos del DOM
const sign_up_card = document.querySelector(".sign-up-card");
const success_card = document.querySelector(".success-card");
const sign_up_form = document.querySelector(".sign-up-form");
const email = document.getElementById("email");
const submit_btn = document.querySelector(".submit-btn");
const dismiss_btn = document.querySelector(".dismiss-btn");
const submitted_email = document.querySelector(".submitted-email");

// Eventos
submit_btn.addEventListener("click", submitEmail);
dismiss_btn.addEventListener("click", toggleCards);

/* Funciones */
// toggle cards
function toggleCards() {
  sign_up_card.classList.toggle("hidden");
  success_card.classList.toggle("hidden");
}

// validar email mediante expresiones regulares
function validateEmail(email) {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  
  return String(email).toLowerCase().match(regex);
}

// envío de formulario
function submitEmail(e) {
  e.preventDefault();

  // email válido
  if (validateEmail(email.value)) {
    submitted_email.innerText = email.value;
    toggleCards();
    email.value = "";
    sign_up_form.classList.remove("error");
  }
  // email inválido
  else {
    sign_up_form.classList.add("error");
  }
}
