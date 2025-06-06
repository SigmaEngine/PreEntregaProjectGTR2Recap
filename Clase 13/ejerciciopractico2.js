// Recuperar la cantidad del carrito desde LocalStorage al cargar la página
let contador = localStorage.getItem('carrito');
contador = contador ? parseInt(contador) : 0;

// Mostrar el contador inicial
document.getElementById('contador').innerText = contador;

// Agregar evento a todos los botones "Agregar al carrito"
document.querySelectorAll('.agregar').forEach(boton => {
  boton.addEventListener('click', () => {
    contador++;
    localStorage.setItem('carrito', contador);
    document.getElementById('contador').innerText = contador;
  });
});
