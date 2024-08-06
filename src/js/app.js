/* ======================================================================
                            VARIABLES
====================================================================== */

const btnsNumber = document.querySelectorAll(".btn-number");
const btnSubmit = document.querySelector(".btn-submit");
const modal = document.querySelector("#modal");
const message = document.querySelector("#message");

let selected = "";

/* ======================================================================
                            EVENT LISTENERS
====================================================================== */

btnsNumber.forEach((btn) => {
  btn.addEventListener("click", function () {
    // Quitar estilos al boton seleccioando
    removeActive();

    // Agregar activo al boton selecionado;
    this.classList.add("btn-active");

    // Guardar el valor seleccionado
    selected = this.textContent;

    // Colocar el valor en la targeta
    addValue();
  });
});

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  // Validar dato seleccioando
  if (selected != "") {
    // Mostrar mensaje
    showModal();
  }
});

/* ======================================================================
                            FUNCIONES
===================================================================== */
function removeActive() {
  btnsNumber.forEach((btn) => {
    btn.classList.remove("btn-active");
  });
}

function addValue() {
  message.textContent = `Your selected ${selected} out of 5`;
}

function showModal() {
  // Mostrar nodal
  modal.classList.remove("hidden");
  setTimeout(() => {
    // Reiniciar formulario
    modal.classList.add("hidden");
    selected = "";
    removeActive();
  }, 5000);
}
