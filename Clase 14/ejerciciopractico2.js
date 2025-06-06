// URL de ejemplo para obtener productos (puede usar https://fakestoreapi.com/)
const API_URL = 'https://fakestoreapi.com/products';

// Seleccionamos elementos del DOM
const contenedorProductos = document.getElementById('productos');
const contadorCarrito = document.getElementById('contador-carrito');

// Función para cargar el carrito desde localStorage
function cargarCarrito() {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  return carrito;
}

// Función para guardar el carrito en localStorage
function guardarCarrito(carrito) {
  localStorage.setItem('carrito', JSON.stringify(carrito));
  contadorCarrito.textContent = carrito.length;
}

// Función para añadir producto al carrito
function agregarAlCarrito(producto) {
  const carrito = cargarCarrito();
  carrito.push(producto);
  guardarCarrito(carrito);
}

// Función para crear tarjeta de producto
function crearTarjetaProducto(producto) {
  const tarjeta = document.createElement('div');
  tarjeta.className = 'producto';

  tarjeta.innerHTML = `
    <h3>${producto.title}</h3>
    <img src="${producto.image}" alt="${producto.title}" width="100">
    <p>Precio: $${producto.price}</p>
    <button>Añadir al carrito</button>
  `;

  const boton = tarjeta.querySelector('button');
  boton.addEventListener('click', () => {
    agregarAlCarrito(producto);
  });

  contenedorProductos.appendChild(tarjeta);
}

// Función principal para cargar los productos desde la API
async function cargarProductos() {
  try {
    const res = await fetch(API_URL);
    const productos = await res.json();
    productos.forEach(crearTarjetaProducto);
  } catch (error) {
    console.error('Error cargando productos:', error);
  }
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  cargarProductos();
  // Mostrar cantidad actual de productos en el carrito
  const carrito = cargarCarrito();
  contadorCarrito.textContent = carrito.length;
});
