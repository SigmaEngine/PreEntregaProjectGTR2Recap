// Lista de productos de ejemplo
const productos = [
  { nombre: "Camisa", precio: 25.99, descuento: true },
  { nombre: "Pantalón", precio: 40.00, descuento: false },
  { nombre: "Zapatos", precio: 60.50, descuento: true },
  { nombre: "Gorra", precio: 15.00, descuento: false },
  { nombre: "Bufanda", precio: 10.99, descuento: true }
];

// Contadores para los productos con y sin descuento
let conDescuento = 0;
let sinDescuento = 0;

// Validaciones y recorrido de la lista
for (let i = 0; i < productos.length; i++) {
  const producto = productos[i];

  // Validación básica de datos
  if (producto.nombre && typeof producto.precio === "number" && producto.precio >= 0) {
    if (producto.descuento === true) {
      console.log(`Producto con descuento: ${producto.nombre} - Precio: $${producto.precio}`);
      conDescuento++;
    } else {
      sinDescuento++;
    }
  } else {
    console.warn(`Producto inválido en la posición ${i}:`, producto);
  }
}

// Mostrar resumen al final
console.log(`\nTotal de productos con descuento: ${conDescuento}`);
console.log(`Total de productos sin descuento: ${sinDescuento}`);
