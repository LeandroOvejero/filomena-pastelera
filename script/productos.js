// Array de productos
const productos = [
    {
        nombre: "Alfajores Artesanales",
        descripcion: "Alfajores hechos con amor, siguiendo las recetas de la abuela Filomena.",
        precio: 1500,
        imagen: "../images/Alfajores-1.jpg"
    },
    {
        nombre: "Tortas Personalizadas",
        descripcion: "Tortas hechas a medida para cada ocasión especial.",
        precio: 12000,
        imagen: "../images/Torta-1.jpg"
    },
    {
        nombre: "Panes Dulces e Integrales",
        descripcion: "Tradición y nutrición en cada bocado.",
        precio: 3000,
        imagen: "../images/Panes-1.jpg"
    }
];

// Función para cargar productos en el HTML
function cargarProductos() {
    const contenedorProductos = document.getElementById("productos-dinamicos");

    productos.forEach(producto => {
        // Crear la estructura HTML de cada tarjeta
        const tarjetaHTML = `
            <div class="tarjeta">
                <div class="tarjeta-imagen">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                </div>
                <div class="tarjeta-descripcion">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                    <p>Precio: $${producto.precio}</p>
                    <button class="btn-agregar" data-nombre="${producto.nombre}">Agregar al carrito</button>
                </div>
            </div>
        `;

        // Insertar el HTML generado dentro del contenedor
        contenedorProductos.innerHTML += tarjetaHTML;
    });

    // Agregar eventos a los botones de "Agregar al carrito"
    const botonesAgregar = document.querySelectorAll(".btn-agregar");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

// Función para agregar un producto al carrito
function agregarAlCarrito(event) {
    const nombreProducto = event.target.getAttribute("data-nombre");
    const producto = productos.find(prod => prod.nombre === nombreProducto);

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));

    alert(`${producto.nombre} ha sido agregado al carrito.`);
    cargarCarrito();
}

// Función para cargar productos en el carrito
function cargarCarrito() {
    const contenedorCarrito = document.getElementById("productos-carrito");
    const totalCarrito = document.getElementById("total-carrito");

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    contenedorCarrito.innerHTML = "";
    let total = 0;

    carrito.forEach(producto => {
        // Crear la estructura HTML de cada tarjeta de producto en el carrito
        const tarjetaHTML = `
            <div class="tarjeta">
                <div class="tarjeta-imagen">
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                </div>
                <div class="tarjeta-descripcion">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                    <p>Precio: $${producto.precio}</p>
                </div>
            </div>
        `;

        // Insertar el HTML generado dentro del contenedor
        contenedorCarrito.innerHTML += tarjetaHTML;
        total += producto.precio;
    });

    totalCarrito.innerHTML = `Total: $${total}`;
}

// Función para vaciar el carrito
function vaciarCarrito() {
    localStorage.removeItem("carrito");
    cargarCarrito();
    alert("El carrito ha sido vaciado.");
}

// Añadir evento al botón "Vaciar Carrito"
document.getElementById("btn-vaciar-carrito").addEventListener("click", vaciarCarrito);

// Llamar a la función para cargar los productos y el carrito cuando la página se cargue
document.addEventListener("DOMContentLoaded", () => {
    cargarProductos();
    cargarCarrito();
});
