
// Clase para los elementos del menú
// Clase base para productos
class Producto {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

// Clase para comida, hereda de Producto
class Comida extends Producto {
    constructor(name, price, tiempoEstimadoSeg) {
        super(name, price);
        this.tiempoEstimadoSegundos = tiempoEstimadoSeg;
    }
}

// Clase para bebidas, hereda de Producto
class Bebida extends Producto { }

// Clase para gestionar los pedidos
class Pedido {
    constructor(producto, cantidad, apellido) {
        this.producto = producto;
        this.cantidad = cantidad;
        this.apellido = apellido;
        this.estado = "En cocina";
    }

    getTotal() {
        return this.producto.price * this.cantidad;
    }

    setEstado(estado) {
        this.estado = estado;
    }
}

// Clase para gestionar la cocina
class Cocina {
    constructor() {
        this.pedidos = [];
    }

    agregarPedido(pedido) {
        this.pedidos.push(pedido);
    }

    actualizarEstado() {
        const orderStatus = document.getElementById("orderStatus");
        orderStatus.innerHTML = "";
        this.pedidos.forEach(pedido => {
            const row = orderStatus.insertRow();
            let productName;
            if (pedido.producto instanceof Comida) {
                productName = pedido.producto.name;
            } else if (pedido.producto instanceof Bebida) {
                productName = pedido.producto.name;
            }
            row.insertCell(0).innerHTML = productName;
            row.insertCell(1).innerHTML = pedido.cantidad;
            row.insertCell(2).innerHTML = pedido.estado;
            if (pedido.estado === "En cocina" && pedido.producto instanceof Comida) {
                //Intervalo de tiempo para que preparar la comida
                setTimeout(() => {
                    pedido.setEstado("Listo");
                    this.actualizarEstado();
                }, pedido.producto.tiempoEstimadoSegundos * 1000);
            }
        });
        console.log("dentro de actualizar estado");
    }
    
}

// Inicializar la cocina
const cocina = new Cocina();

// Crear instancias de los elementos del menú
const menuItems = [
    new Comida("Tacos de Birria", 8, 10),
    new Comida("Hamburguesas con Papas", 10, 12),
    new Comida("Nachos", 5, 8),
    new Bebida("Coca-cola", 2),
    new Bebida("Pepsi", 2),
    new Bebida("Fanta", 2),
    new Bebida("7up", 2)
];

// Calcular el total del pedido
function calcularTotal() {
    const productName = document.getElementById("productName").value;
    const quantity = parseInt(document.getElementById("quantity").value);
    const drinkName = document.getElementById("drinkName").value;
    const drinkQuantity = parseInt(document.getElementById("drinkQuantity").value);

    let total = 0;

    // Buscar el producto seleccionado y sumar su precio al total
    const selectedMenuItem = menuItems.find(item => item.name === productName);
    if (selectedMenuItem) {
        total += selectedMenuItem.price * quantity;
    }

    // Sumar el precio de la bebida al total
    const selectedDrink = menuItems.find(item => item.name === drinkName);
    if (selectedDrink) {
        total += selectedDrink.price * drinkQuantity;
    }

    // Mostrar el total en la interfaz
    document.getElementById("productTotal").textContent = total;
}

// Realizar pedido desde la interfaz de usuario
function realizarPedido() {
    const productName = document.getElementById("productName").value;
    const quantity = parseInt(document.getElementById("quantity").value);
    const selectedMenuItem = menuItems.find(item => item.name === productName);

    if (!selectedMenuItem) {
        console.error("Producto no encontrado en el menú");
        return;
    }

    const apellido = document.getElementById("apellido").value;
    const pedido = new Pedido(selectedMenuItem, quantity, apellido);
    const $apellidoOrden = document.getElementById("apellidoOrden");

    cocina.agregarPedido(pedido);
    $apellidoOrden.textContent = `Orden para: ${apellido}`;
    cocina.actualizarEstado();
}


