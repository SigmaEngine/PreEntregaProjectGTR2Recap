// preferencias.js

document.addEventListener("DOMContentLoaded", () => {
  // Recuperar preferencias al cargar la página
  const nombreGuardado = localStorage.getItem("nombre");
  const colorFondoGuardado = localStorage.getItem("colorFondo");

  if (nombreGuardado && colorFondoGuardado) {
    document.body.style.backgroundColor = colorFondoGuardado;
    document.getElementById("saludo").textContent = `¡Hola, ${nombreGuardado}!`;
  }

  // Manejar el envío del formulario
  const form = document.getElementById("preferenciasForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const colorFondo = document.getElementById("colorFondo").value;

    // Guardar preferencias en localStorage
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("colorFondo", colorFondo);

    // Aplicar cambios
    document.body.style.backgroundColor = colorFondo;
    document.getElementById("saludo").textContent = `¡Hola, ${nombre}!`;
  });
});
