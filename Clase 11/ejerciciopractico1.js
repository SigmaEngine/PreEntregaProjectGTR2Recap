// Función para validar la edad de una persona
function validarEdad(nombre, edad) {
  if (edad >= 18) {
    console.log(`${nombre} es mayor de edad.`);
  } else {
    const faltan = 18 - edad;
    console.log(`${nombre} es menor de edad. Le faltan ${faltan} año(s) para cumplir 18.`);
  }
}

// Ejemplos de uso
validarEdad("María", 20);
// Salida en consola: María es mayor de edad.

validarEdad("Carlos", 15);
// Salida en consola: Carlos es menor de edad. Le faltan 3 año(s) para cumplir 18.
