// Solicita la edad al usuario
let edadIngresada = prompt("Ingresá tu edad:");
let edad = parseInt(edadIngresada);

// Verifica si la edad es un número válido
if (isNaN(edad)) {
  console.log("Por favor, ingresá una edad válida.");
} else {
  // Pregunta si es miembro VIP
  let esVIP = confirm("¿Sos miembro VIP? (Aceptar = Sí / Cancelar = No)");

  // Lógica de acceso
  if (edad >= 18) {
    console.log("Acceso permitido al evento.");

    // Verifica si también es VIP
    if (esVIP) {
      console.log("Acceso al área exclusiva VIP concedido.");
    } else {
      console.log("No tenés acceso al área exclusiva.");
    }

  } else {
    console.log("Acceso denegado. Debés tener al menos 18 años.");
  }
}
