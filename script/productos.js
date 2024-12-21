// Array de productos
const productos = [
    {
        nombre: "Alfajores Artesanales",
        descripcion: "Alfajores hechos con amor, siguiendo las recetas de la abuela Filomena.",
        precio: 1500,
        imagen: "../images/Alfajores-1.jpg" // Ruta relativa desde la ubicación del HTML
    },
    {
        nombre: "Tortas Personalizadas",
        descripcion: "Tortas hechas a medida para cada ocasión especial.",
        precio: 12000,
        imagen: "../images/Torta-1.jpg" // Ruta relativa
    },
    {
        nombre: "Panes Dulces e Integrales",
        descripcion: "Tradición y nutrición en cada bocado.",
        precio: 3000,
        imagen: "../images/Panes-1.jpg" // Ruta relativa
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
                    <button class="btn-agregar">Agregar al carrito</button>
                </div>
            </div>
        `;

        // Insertar el HTML generado dentro del contenedor
        contenedorProductos.innerHTML += tarjetaHTML;
    });
}

// Llamar a la función para cargar los productos cuando la página se cargue
document.addEventListener("DOMContentLoaded", cargarProductos);