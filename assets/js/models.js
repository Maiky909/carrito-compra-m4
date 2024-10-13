// Clase Producto con ID
class Producto {
  constructor(id, nombre, precio, genero, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.genero = genero;
    this.precio = precio;
    this.imagen = imagen;
  }
}

// Clase Carrito
class Carrito {
  constructor() {
    this.items = []; // Lista de productos en el carrito
  }

  // Método para agregar productos al carrito
  agregarProducto(producto, talla, cantidad) {
    // Verificar si ya existe el mismo producto con la misma talla
    const itemExistente = this.items.find(
      (item) => item.producto.id === producto.id && item.talla === talla
    );

    if (itemExistente) {
      // Si ya existe, actualizar la cantidad
      itemExistente.cantidad += cantidad;
    } else {
      // Si no existe, agregar un nuevo item
      this.items.push({ producto, talla, cantidad });
    }
  }

  // Método para mostrar los detalles del carrito
  mostrarCarrito() {
    if (this.items.length === 0) {
      alert("El carrito está vacío.");
    } else {
      let detallesCarrito = "Productos en el carrito:\n";
      this.items.forEach((item) => {
        detallesCarrito += `${item.producto.nombre} - Talla: ${item.talla}, Cantidad: ${item.cantidad}\n`;
      });
      alert(detallesCarrito);
    }
  }
}

// Crear productos
const listadoProductos = [
  new Producto(1, "Jordan Retro 4 Red Thunder", 1200, "Hombre"),
  new Producto(2, "Nike Air Force 1 Off-White", 1500, "Unisex"),
  new Producto(3, "Bape Superstar", 1800, "Mujer"),
  new Producto(4, "Vans Old Skool", 800, "Unisex"),
  new Producto(5, "Air Jordan 1 High", 1300, "Hombre"),
  new Producto(6, "Adidas Yeezy Boost 350 V2", 2000, "Hombre"),
  new Producto(7, "Reebok Classic Leather", 700, "Mujer"),
  new Producto(8, "DC Shoes Lynx", 900, "Hombre"),
  new Producto(9, "Nike SB Dunk Low Pro ISO", 1100, "Unisex"),
  new Producto(10, "Adidas Yung-1", 1600, "Hombre"),
  new Producto(11, "Bape x Adidas Ultraboost", 1900, "Mujer"),
  new Producto(12, "Vans Sk8-Hi", 1100, "Unisex"),
  new Producto(13, "ASICS Gel-Cumulus 23", 1400, "Hombre"),
  new Producto(14, "Adidas Yeezy 750 Boost", 2200, "Hombre"),
  new Producto(15, "Saucony Grid 9000", 1200, "Unisex"),
  new Producto(16, "Reebok Club C", 1000, "Mujer"),
  new Producto(17, "Skechers Relaxed Fit: Ultra", 1500, "Unisex"),
  new Producto(18, "Air Jordan 4 Black Cat", 1800, "Hombre"),
  new Producto(19, "Bape Superstar Rocket Raccoon", 1900, "Unisex"),
  new Producto(20, "Adidas Ultraboost 20", 2100, "Unisex"),
];

function mostrarProductos() {
  const productList = document.getElementById("product-list");

  listadoProductos.forEach((producto) => {
    const productHTML = `
            <div class="col-md-3">
                <div class="card product-card">
                    <img src="https://via.placeholder.com/150x150" class="card-img-top" alt="${producto.nombre}">
                    <div class="card-body">
                        <h6 class="card-title">${producto.nombre}</h5>
                        <p class="card-text text-muted">Zapatillas para: ${producto.genero}</p>
                        <p class="card-text">Precio: $${producto.precio}</p>
                        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#productModal" onclick="mostrarDetalles(${producto.id})">Ver detalles</button>
                    </div>
                </div>
            </div>
        `;
    productList.innerHTML += productHTML;
  });
}

document.addEventListener("DOMContentLoaded", function () {
  mostrarProductos();
});

function generarTallas(genero) {
  let tallas = [];

  if (genero === "Hombre") {
    for (let i = 38; i <= 45; i++) {
      tallas.push(i);
    }
  } else if (genero === "Mujer") {
    for (let i = 35; i <= 41; i++) {
      tallas.push(i);
    }
  } else if (genero === "Unisex") {
    for (let i = 35; i <= 45; i++) {
      tallas.push(i);
    }
  }

  return tallas;
}

let carrito = new Carrito(); // Crear una instancia del carrito

function mostrarDetalles(idProducto) {
  const producto = listadoProductos.find((p) => p.id === idProducto);

  if (producto) {
    // Actualizar los detalles en el modal
    document.getElementById("modal-name").textContent = producto.nombre;
    document.getElementById(
      "modal-price"
    ).textContent = `Precio: $${producto.precio}`;
    document.getElementById("modal-img").src = producto.imagen;

    // Generar las tallas basadas en el género del producto
    const tallas = generarTallas(producto.genero);
    const sizeSelect = document.getElementById("size");
    sizeSelect.innerHTML = ""; // Limpiar las opciones anteriores

    tallas.forEach((talla) => {
      const option = document.createElement("option");
      option.value = talla;
      option.textContent = talla;
      sizeSelect.appendChild(option);
    });

    // Actualizar el botón de añadir al carrito para este producto
    document.getElementById("add-to-cart").onclick = function () {
      const tallaSeleccionada = document.getElementById("size").value;
      const cantidadSeleccionada = parseInt(
        document.getElementById("cantidad").value
      );
      carrito.agregarProducto(
        producto,
        tallaSeleccionada,
        cantidadSeleccionada
      );
      alert(
        `${producto.nombre} añadido al carrito. Talla: ${tallaSeleccionada}, Cantidad: ${cantidadSeleccionada}`
      );
    };
  }
}
