// Paso 1: Capturar los números ingresados por el usuario
let input1 = prompt("Ingresá el primer número:");
let input2 = prompt("Ingresá el segundo número:");

// Paso 2: Validar que los valores ingresados sean números
if (isNaN(input1) || isNaN(input2)) {
    console.log("Por favor, ingresá solo números válidos.");
} else {
    // Paso 3: Convertir los valores a números (puede ser decimal)
    let num1 = parseFloat(input1);
    let num2 = parseFloat(input2);

    // Paso 4: Realizar operaciones aritméticas
    let suma = num1 + num2;
    let resta = num1 - num2;
    let multiplicacion = num1 * num2;
    let division = num2 !== 0 ? num1 / num2 : "No se puede dividir por cero";

    // Paso 5: Mostrar los resultados en la consola
    console.log("Suma:", suma);
    console.log("Resta:", resta);
    console.log("Multiplicación:", multiplicacion);
    console.log("División:", division);

    // Paso 6: Verificar si la suma es mayor o menor que un valor dado (por ejemplo, 100)
    let valorComparacion = 100;
    if (suma > valorComparacion) {
        console.log(`La suma (${suma}) es mayor que ${valorComparacion}.`);
    } else if (suma < valorComparacion) {
        console.log(`La suma (${suma}) es menor que ${valorComparacion}.`);
    } else {
        console.log(`La suma es exactamente igual a ${valorComparacion}.`);
    }
}
