// Solicitar nombre y edad al usuario
let nombre = prompt("Ingresá tu nombre:");
let edadStr = prompt("Ingresá tu edad:");

// Validar si la edad es un número
if (isNaN(edadStr)) {
    console.log("La edad ingresada no es un número válido.");
} else {
    // Convertir edad de string a número
    let edad = parseInt(edadStr);

    // Concatenar y mostrar mensaje
    let mensaje = "Hola " + nombre + ", tenés " + edad + " años.";
    console.log(mensaje);

    // Verificar si es mayor de edad
    if (edad >= 18) {
        console.log("Sos mayor de edad.");
    } else {
        console.log("Sos menor de edad.");
    }
}
