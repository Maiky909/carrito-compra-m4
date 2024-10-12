// Clase Producto con ID
class Producto {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}

// Clase Carrito
class Carrito {
  constructor() {
    this.productos = []; // Lista para almacenar productos seleccionados
  }

  // Agregar producto al carrito
  agregarProducto(producto, cantidad = 1) {
    let productoExistente = this.productos.find(
      (p) => p.producto.id === producto.id
    );
    if (productoExistente) {
      // Si el producto ya existe en el carrito, actualizamos la cantidad
      productoExistente.cantidad += cantidad;
    } else {
      // Si no existe, lo agregamos con su cantidad inicial
      this.productos.push({ producto: producto, cantidad: cantidad });
    }
  }

  // Eliminar producto del carrito
  eliminarProducto(idProducto) {
    this.productos = this.productos.filter((p) => p.producto.id !== idProducto);
  }

  // Actualizar cantidad de un producto
  actualizarCantidad(idProducto, nuevaCantidad) {
    let productoExistente = this.productos.find(
      (p) => p.producto.id === idProducto
    );
    if (productoExistente) {
      productoExistente.cantidad = nuevaCantidad;
    }
  }

  // Buscar producto por ID
  buscarProducto(idProducto) {
    return this.productos.find((p) => p.producto.id === idProducto);
  }

  // Calcular el total del carrito
  calcularTotal() {
    return this.productos.reduce(
      (total, p) => total + p.producto.precio * p.cantidad,
      0
    );
  }

  // Mostrar detalles del carrito
  mostrarDetalles() {
    if (this.productos.length === 0) {
      console.log("El carrito está vacío.");
    } else {
      this.productos.forEach((p) => {
        console.log(
          `Producto: ${p.producto.nombre}, Precio: ${p.producto.precio}, Cantidad: ${p.cantidad}`
        );
      });
      console.log(`Total: $${this.calcularTotal()}`);
    }
  }

  // Finalizar la compra
  finalizarCompra() {
    if (this.productos.length === 0) {
      console.log("No hay productos en el carrito para finalizar la compra.");
    } else {
      this.mostrarDetalles();
      console.log("Compra finalizada. ¡Gracias por su compra!");
      this.productos = []; // Vaciar el carrito
    }
  }
}

// Crear productos
const listadoProductos = [
  new Producto(1, "Jordan Retro 4 Red Thunder", 1200),
  new Producto(2, "Nike Air Force 1 Off-White", 1500),
  new Producto(3, "Bape x Adidas Superstar", 1800),
  new Producto(4, "Vans Old Skool", 800),
  new Producto(5, "Air Jordan 1 High", 1300),
  new Producto(6, "Adidas Yeezy Boost 350 V2", 2000),
  new Producto(7, "Reebok Classic Leather", 700),
  new Producto(8, "DC Shoes Lynx", 900),
  new Producto(9, "Nike SB Dunk Low Pro ISO", 1100),
  new Producto(10, "Adidas Yung-1", 1600),
  new Producto(11, "Bape x Adidas Ultraboost", 1900),
  new Producto(12, "Vans Sk8-Hi", 1100),
  new Producto(13, "ASICS Gel-Cumulus 23", 1400),
  new Producto(14, "Adidas Yeezy 750 Boost", 2200),
  new Producto(15, "Saucony Grid 9000", 1200),
  new Producto(16, "Reebok Club C", 1000),
  new Producto(17, "Skechers Relaxed Fit: Ultra", 1500),
  new Producto(18, "Air Jordan 4 Black Cat", 1800),
  new Producto(19, "Bape x Adidas Superstar Rocket Raccoon", 1900),
  new Producto(20, "Adidas Ultraboost 20", 2100),
];

function mostrarProductos() {
  const productList = document.getElementById("product-list");

  listadoProductos.forEach((producto) => {
    const productHTML = `
            <div class="col-md-3">
                <div class="card product-card">
                    <img src="https://via.placeholder.com/150x150" class="card-img-top" alt="${producto.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">Precio: $${producto.precio}</p>
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
