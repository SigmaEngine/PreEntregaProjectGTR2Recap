function calcularPrecioConIVA(precio, iva = 21) {
  // Calculamos el monto del IVA
  const montoIVA = (precio * iva) / 100;

  // Sumamos el IVA al precio original
  const precioTotal = precio + montoIVA;

  // Mostramos el precio total en la consola
  console.log(`El precio total con un IVA del ${iva}% es: $${precioTotal.toFixed(2)}`);
}

// Ejemplos de uso:
calcularPrecioConIVA(1000);          // Usa el IVA predeterminado del 21%
calcularPrecioConIVA(1000, 10.5);    // Usa un IVA personalizado del 10.5%
