class Producto {
  constructor(id, nombre, precio, genero, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.genero = genero;
    this.precio = precio;
    this.imagen = imagen;
  }
}

class Carrito {
  constructor() {
    this.items = []; // Lista de productos en el carrito
  }

  // Agregar un nuevo item al carrito
  agregarProducto(producto, talla, cantidad) {
    const itemExistente = this.items.find(
      (item) => item.producto.id === producto.id && item.talla === talla
    );

    if (itemExistente) {
      itemExistente.cantidad += cantidad; // Incrementar la cantidad del item existente
    } else {
      this.items.push({ producto, talla, cantidad });
    }
  }

  // Calcular el total de la compra
  calcularTotal() {
    return this.items.reduce((total, item) => {
      return total + item.producto.precio * item.cantidad;
    }, 0);
  }

  // Mostrar los detalles del carrito
  mostrarDetalles() {
    if (this.items.length === 0) {
      return "<p>El carrito está vacío.</p>";
    } else {
      let detallesCarrito = "<ul>";
      this.items.forEach((item) => {
        let subtotal = item.producto.precio * item.cantidad;
        detallesCarrito += `<li>${item.producto.nombre} - Talla: ${item.talla}, Cantidad: ${item.cantidad}, Subtotal: $${subtotal}</li>`;
      });

      let totalCarrito = this.calcularTotal();
      detallesCarrito += `</ul><p>Total a pagar: $${totalCarrito}</p>`;
      return detallesCarrito;
    }
  }

  // Vaciar el carrito
  vaciarCarrito() {
    this.items = []; // Limpiar la lista de items
  }
}

// Crear una instancia del carrito
let carrito = new Carrito();

// Listado de productos en la tienda
const listadoProductos = [
  new Producto(
    1,
    "Jordan Retro 4 Red Thunder",
    1200,
    "Hombre",
    "https://images.stockx.com/360/Air-Jordan-4-Retro-Red-Thunder/Images/Air-Jordan-4-Retro-Red-Thunder/Lv2/img01.jpg?w=576&q=57&dpr=2&updated_at=1641395120&h=384"
  ),
  new Producto(
    2,
    "Nike Air Force 1 Low Off-White",
    1500,
    "Unisex",
    "https://images.stockx.com/360/Nike-Air-Force-1-07-Virgil-x-MoMA-NS/Images/Nike-Air-Force-1-07-Virgil-x-MoMA-NS/Lv2/img01.jpg?w=576&q=57&dpr=2&updated_at=1635282420&h=384"
  ),
  new Producto(
    3,
    "Bape Superstar",
    1800,
    "Mujer",
    "https://images.stockx.com/360/A-Bathing-Ape-Bapesta-Low-Color-Block-Shark-Blue/Images/A-Bathing-Ape-Bapesta-Low-Color-Block-Shark-Blue/Lv2/img01.jpg?w=576&q=41&dpr=3&updated_at=1677245052&h=384"
  ),
  new Producto(
    4,
    "Vans Old Skool",
    800,
    "Unisex",
    "https://images.stockx.com/360/Vans-Old-Skool-Black-White/Images/Vans-Old-Skool-Black-White/Lv2/img01.jpg?w=576&q=57&dpr=2&updated_at=1635254461&h=384"
  ),
  new Producto(
    5,
    "Air Jordan 1 High",
    1300,
    "Hombre",
    "https://images.stockx.com/360/Air-Jordan-1-Retro-High-OG-Chicago-Reimagined/Images/Air-Jordan-1-Retro-High-OG-Chicago-Reimagined/Lv2/img01.jpg?w=576&q=57&dpr=2&updated_at=1665692308&h=384"
  ),
  new Producto(
    6,
    "Adidas Yeezy Boost 350 V2",
    2000,
    "Hombre",
    "https://images.stockx.com/360/adidas-Yeezy-Boost-350-V2-Zebra/Images/adidas-Yeezy-Boost-350-V2-Zebra/Lv2/img01.jpg?w=576&q=57&dpr=2&updated_at=1703165447&h=384"
  ),
  new Producto(
    7,
    "Crocs Classic Clog",
    700,
    "Unisex",
    "https://images.stockx.com/360/Crocs-Classic-Clog-Lightning-McQueen/Images/Crocs-Classic-Clog-Lightning-McQueen/Lv2/img01.jpg?w=576&q=57&dpr=2&updated_at=1635308105&h=384"
  ),
  new Producto(
    8,
    "DC Shoes Lynx",
    900,
    "Hombre",
    "https://images.stockx.com/images/DC-Lynx-OG-Brian-Wenning.png?fit=fill&bg=FFFFFF&w=576&h=384&q=57&dpr=2&trim=color&updated_at=1626900155"
  ),
  new Producto(
    9,
    "Nike SB Dunk Low Pro ISO",
    1100,
    "Unisex",
    "https://images.stockx.com/360/Nike-SB-Dunk-Low-Pro-Why-So-Sad/Images/Nike-SB-Dunk-Low-Pro-Why-So-Sad/Lv2/img01.jpg?w=576&q=57&dpr=2&updated_at=1667895818&h=384"
  ),
  new Producto(
    10,
    "Adidas Yung-1",
    1600,
    "Hombre",
    "https://images.stockx.com/360/adidas-Yung-1-Dragon-Ball-Z-Frieza/Images/adidas-Yung-1-Dragon-Ball-Z-Frieza/Lv2/img01.jpg?w=576&q=41&dpr=3&updated_at=1635344554&h=384"
  ),
  new Producto(
    11,
    "Bape x Adidas Ultraboost",
    1900,
    "Mujer",
    "https://images.stockx.com/360/adidas-Ultra-Boost-4-BAPE-Camo/Images/adidas-Ultra-Boost-4-BAPE-Camo/Lv2/img01.jpg?w=576&q=57&dpr=2&updated_at=1634931242&h=384"
  ),
  new Producto(
    12,
    "Vans Sk8-Hi",
    1100,
    "Unisex",
    "https://images.stockx.com/360/Vans-Sk8-Hi-WTAPS-Bones-Orange/Images/Vans-Sk8-Hi-WTAPS-Bones-Orange/Lv2/img01.jpg?w=576&q=60&dpr=1&updated_at=1635320332&h=384"
  ),
  new Producto(
    13,
    "ASICS Gel-Cumulus 23",
    1400,
    "Hombre",
    "https://images.stockx.com/images/ASICS-Gel-Cumulus-23-Black-White-2E.jpg?fit=fill&bg=FFFFFF&w=576&h=384&q=57&dpr=2&trim=color&updated_at=1645206868"
  ),
  new Producto(
    14,
    "Adidas Yeezy 750 Boost",
    2200,
    "Hombre",
    "https://images.stockx.com/360/adidas-Yeezy-Boost-750-Triple-Black/Images/adidas-Yeezy-Boost-750-Triple-Black/Lv2/img01.jpg?w=576&q=41&dpr=3&updated_at=1635283027&h=384"
  ),
  new Producto(
    15,
    "Saucony Grid 9000",
    1200,
    "Unisex",
    "https://images.stockx.com/360/Saucony-Grid-9000-Extra-Butter-ACES/Images/Saucony-Grid-9000-Extra-Butter-ACES/Lv2/img01.jpg?w=576&q=57&dpr=2&updated_at=1627414577&h=384"
  ),
  new Producto(
    16,
    "Reebok Club C",
    1000,
    "Mujer",
    "https://images.stockx.com/360/Reebok-Club-C-Revenge-Vintage-White-Green/Images/Reebok-Club-C-Revenge-Vintage-White-Green/Lv2/img01.jpg?w=576&q=57&dpr=2&updated_at=1659366970&h=384"
  ),
  new Producto(
    17,
    "Jordan 1 Retro Low OG",
    1500,
    "Unisex",
    "https://images.stockx.com/360/Air-Jordan-1-Retro-Low-OG-Mocha/Images/Air-Jordan-1-Retro-Low-OG-Mocha/Lv2/img01.jpg?w=576&q=60&dpr=1&updated_at=1724418899&h=384"
  ),
  new Producto(
    18,
    "Air Jordan 4 Black Cat",
    1800,
    "Hombre",
    "https://images.stockx.com/360/Air-Jordan-4-Retro-Black-Cat-2020/Images/Air-Jordan-4-Retro-Black-Cat-2020/Lv2/img01.jpg?w=576&q=57&dpr=2&updated_at=1635341304&h=384"
  ),
  new Producto(
    19,
    "Bape Superstar Rocket Raccoon",
    1900,
    "Unisex",
    "https://images.stockx.com/360/A-Bathing-Ape-Bape-Sta-Marvel-Comics-Rocket-Raccoon-2022/Images/A-Bathing-Ape-Bape-Sta-Marvel-Comics-Rocket-Raccoon-2022/Lv2/img01.jpg?w=576&q=57&dpr=2&updated_at=1683303503&h=384"
  ),
  new Producto(
    20,
    "Adidas Ultraboost 20",
    2100,
    "Unisex",
    "https://images.stockx.com/360/adidas-Ultra-Boost-20-Core-Black-Night-Metallic/Images/adidas-Ultra-Boost-20-Core-Black-Night-Metallic/Lv2/img01.jpg?w=576&q=41&dpr=3&updated_at=1634916557&h=384"
  ),
];

// Función para mostrar los productos
function mostrarProductos() {
  const productList = document.getElementById("product-list");

  listadoProductos.forEach((producto) => {
    const productHTML = `
        <div class="col-md-3">
            <div class="card product-card">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body">
                    <h6 class="card-title">${producto.nombre}</h5>
                    <p class="card-text text-muted">Zapatillas para: ${producto.genero}</p>
                    <p class="card-text">Precio: $${producto.precio}</p>
                    <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#productModal" onclick="mostrarDetalles(${producto.id})"> Ver detalles <i class="ri-list-check-2"></i></button>
                </div>
            </div>
        </div>
    `;
    productList.innerHTML += productHTML;
  });
}

// Función para mostrar los productos al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  mostrarProductos();
});

// Función para generar las tallas según el genero
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

// Función para mostrar los detalles del producto en modal
function mostrarDetalles(idProducto) {
  const producto = listadoProductos.find((p) => p.id === idProducto);

  if (producto) {
    document.getElementById("modal-name").textContent = producto.nombre;
    document.getElementById(
      "modal-price"
    ).textContent = `Precio: $${producto.precio}`;
    document.getElementById("modal-img").src = producto.imagen;

    const tallas = generarTallas(producto.genero);
    const sizeSelect = document.getElementById("size");
    sizeSelect.innerHTML = ""; // Limpiar las opciones anteriores

    tallas.forEach((talla) => {
      const option = document.createElement("option");
      option.value = talla;
      option.textContent = talla;
      sizeSelect.appendChild(option);
    });

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

      // Cerrar el modal de producto
      var productModal = bootstrap.Modal.getInstance(
        document.getElementById("productModal")
      );
      productModal.hide();

      // Mostrar la notificación con PNotify
      mostrarNotificacion(producto, tallaSeleccionada, cantidadSeleccionada);
    };
  }
}

// Función para mostrar la notificación con PNotify
function mostrarNotificacion(producto, talla, cantidad) {
  PNotify.success({
    title: "Producto añadido al carrito",
    text: `<strong>${producto.nombre}</strong> (Talla: ${talla}) - Cantidad: ${cantidad}`,
    icon: "ri-shopping-cart-fill",
    delay: 5000,
    textTrusted: true,
    modules: new Map([
      ...PNotify.defaultModules,
      [
        PNotifyCountdown,
        {
          countdown: 5, // Duración de la cuenta regresiva (en segundos)
        },
      ],
    ]),
    addClass: "stack-modal pnotify-custom",
  });
}

// Función para mostrar el modal del carrito
function mostrarCarritoModal() {
  const carritoDetalles = carrito.mostrarDetalles();
  document.getElementById("carrito-detalles").innerHTML = carritoDetalles;

  // Verificar si hay productos en el carrito y habilitar/deshabilitar el botón de pago
  const irAPagarBtn = document.getElementById("ir-a-pagar-btn");
  if (carrito.items.length === 0) {
    irAPagarBtn.disabled = true; // Deshabilitar el botón si el carrito está vacío
  } else {
    irAPagarBtn.disabled = false; // Habilitar el botón si hay productos en el carrito
  }

  var carritoModal = new bootstrap.Modal(
    document.getElementById("carritoModal")
  );
  carritoModal.show();
}

// Función para mostrar el modal de pago
function mostrarPagoModal() {
  // Cerrar el modal del carrito
  var carritoModal = bootstrap.Modal.getInstance(
    document.getElementById("carritoModal")
  );
  carritoModal.hide();

  // Mostrar el modal de pago
  var paymentModal = new bootstrap.Modal(
    document.getElementById("paymentModal")
  );
  paymentModal.show();
}

// Funcion para procesar el pago
function procesarPago() {
  const metodoPago = document.getElementById("payment-method").value;

  // Ocultar el formulario y mostrar el spinner
  document.getElementById("payment-form").style.display = "none";
  document.getElementById("payment-spinner").style.display = "block";
  document.getElementById(
    "spinner-message"
  ).textContent = `Procesando el pago con tarjeta de ${metodoPago}...`;

  // Cerrar el modal después de 5 segundos y mostrar el de éxito
  setTimeout(() => {
    var paymentModal = bootstrap.Modal.getInstance(
      document.getElementById("paymentModal")
    );
    paymentModal.hide();

    var successModal = new bootstrap.Modal(
      document.getElementById("successModal")
    );
    successModal.show();

    carrito.vaciarCarrito(); // Vaciar el carrito después del pago

    // Restaurar el formulario para futuros pagos
    document.getElementById("payment-form").style.display = "block";
    document.getElementById("payment-spinner").style.display = "none";
  }, 5000);
}
