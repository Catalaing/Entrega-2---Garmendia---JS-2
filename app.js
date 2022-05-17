const productos = [
    { id: 1, producto: "remeraVerona", precio: 2500, title: "Remera Verona" },
    { id: 2, producto: "remeraRoma", precio: 3000, title: "Remera Roma" },
    { id: 3, producto: "remeraSicilia", precio: 3400, title: "Remera Sicilia" },
    { id: 4, producto: "remeraToscana", precio: 1950, title: "Remera Toscana" },
    { id: 5, producto: "remeraBologna", precio: 1950, title: "Remera Bologna" },
    { id: 6, producto: "remeraPisa", precio: 2500, title: "Remera Pisa" },
    { id: 7, producto: "remeraVenecia", precio: 2500, title: "Remera Venecia" },
    { id: 8, producto: "remeraGenova", precio: 1950, title: "Remera Genova" },
    { id: 9, producto: "remeraSavona", precio: 1950, title: "Remera Savona" },
    { id: 10, producto: "remeraFlorencia", precio: 3000, title: "Remera Florencia" },
    { id: 11, producto: "remeraPerugia", precio: 3000, title: "Remera Perugia" },
    { id: 12, producto: "remeraMilan", precio: 2500, title: "Remera Milan" },
    { id: 13, producto: "remeraBergamo", precio: 1950, title: "Remera Bergamo" },
    { id: 14, producto: "remeraCremona", precio: 1950, title: "Remera Cremona" },
    { id: 15, producto: "remeraBrescia", precio: 3400, title: "Remera Brescia" },
    { id: 16, producto: "remeraPavia", precio: 3400, title: "Remera Pavia" },
    { id: 17, producto: "remeraGarda", precio: 200, title: "Remera Garda" },
    { id: 18, producto: "remeraRemo", precio: 2000, title: "Remera Remo" },
    { id: 19, producto: "remeraSpezia", precio: 1950, title: "Remera Spezia" },
    { id: 20, producto: "remeraTurin", precio: 2000, title: "Remera Turin" },
    { id: 21, producto: "remeraAlba", precio: 2500, title: "Remera Alba" },
    { id: 22, producto: "remeraAlessandria", precio: 3400, title: "Remera Alessandria" },
    { id: 23, producto: "remeraParadiso", precio: 3400, title: "Remera Paradiso" },
    { id: 24, producto: "remeraTrento", precio: 3400, title: "Remera Trento" },
]

let carrito = new Array();

const clave_local_storage = "agregar_carrito";

const setearLocalStorage = () => {
    localStorage.setItem(clave_local_storage, JSON.stringify(carrito));
}

const productosHtml = productos.map(producto => {
    return (`
    <div class="card" style="width: 16rem;">
        <div class="card-img" style="background-image: url('./Multimedia/${producto.id}.png')"></div>
        <div class="card-body">
            <h5 class="card-title">${producto.title}</h5>
            <div class="input-group mb-3">
                <label class="input-group-text" for="input-talle-${producto.id}">Talle</label>
                <select class="form-select" id="input-talle-${producto.id}">
                    <option selected>Elegir talle...</option>
                    <option value="xs">XS</option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                </select>
            </div>
            <div class="input-group mb-3">
                <span class="input-group-text">Unidades</span>
                <input type="text" id="input-unidades-${producto.id}" class="form-control" aria-describedby="inputGroup-sizing-sm">
            </div>
            <div class="d-flex justify-content-end">
                <button id="btnCrear-${producto.id}" type="button" class="btnCrear" onclick="agregarProducto(${producto.id})">Comprar</button>
            </div>
        </div>
    </div>
    `)
});

const actualizarCarrito = () => {
    const productosCarrito = carrito.map(producto => {
        return (`
        <div class="card mb-3" style="width: 360px">
          <div class="row g-0">
            <div class="col-md-4 d-flex align-items-center">
              <img src="./Multimedia/${producto.id}.png" class="img-fluid rounded-start" alt="${producto.title}" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${producto.title}</h5>
                <p class="card-text">Talle: ${producto.talle}</p>
                <p class="card-text">Unidades: ${producto.unidades}</p>
              </div>
              <div
                class="card-btn-container d-flex justify-content-end mr-2 mb-2"
              >
                <button type="button" class="btn btn-danger" onclick="quitarProducto('${producto.idProducto}')">Quitar</button>
              </div>
            </div>
          </div>
        </div>
        `)
    })
    if (carrito.length > 0) {
        const precios = carrito.map(producto => producto.precio);
        const total = precios.reduce((a, b) => a + b);
        document.getElementById("total-carrito").textContent = `Total: $${total}`;
        document.getElementById("productos-carrito").innerHTML = productosCarrito.join("");
    } else {
        document.getElementById("total-carrito").textContent = 'Total: $0';
        document.getElementById("productos-carrito").innerHTML = '<p class="text-center carrito-vacio">Carrito vacio</p>';
    }
}

const quitarProducto = (productoId) => {
    const carritoActualizado = carrito.filter(producto => producto.idProducto !== productoId);
    carrito = carritoActualizado;
    setearLocalStorage();
    if (carrito.length > 0) {
        actualizarCarrito();
    } else {
        iniciarCarrito();
    }
}

const agregarProducto = (id) => {
    const productoAgregado = productos.find(producto => producto.id === id);
    const talleSeleccionado = document.getElementById(`input-talle-${id}`).value;
    if (talleSeleccionado === "Elegir talle...") {
        alert("Por favor ingrese talle");
        return
    }
    const unidadesSeleccionadas = document.getElementById(`input-unidades-${id}`).value;
    if (unidadesSeleccionadas === "") {
        alert("Por favor ingrese unidades");
        return
    }
    const precio = productos.find(producto => producto.id === id).precio;
    carrito.push({ title: productoAgregado.title, id: id, idProducto: `${id}-${talleSeleccionado}-${unidadesSeleccionadas}`, talle: talleSeleccionado, unidades: unidadesSeleccionadas, precio: precio * unidadesSeleccionadas });
    setearLocalStorage();
    actualizarCarrito();
}

const vaciarCarrito = () => {
    carrito = new Array();
    setearLocalStorage();
    iniciarCarrito();
}

const iniciarCarrito = () => {
    const carritoGuardado = localStorage.getItem(clave_local_storage);
    carrito = JSON.parse(carritoGuardado);
    actualizarCarrito();

}

const abrirCarrito = () => {
    document.getElementById("carrito").style.display = 'block';
}

const cerrarCarrito = () => {
    document.getElementById("carrito").style.display = 'none';
}

const comprar = () => {
    let compra = JSON.parse(localStorage.getItem(clave_local_storage));
    compra = compra.map(producto => producto.title);
    alert(`Compraste:\n${compra.join("\n")}`);
    carrito = new Array();
    setearLocalStorage();
    actualizarCarrito();
}

let catalogo = document.getElementById("catalogo-remeras");
catalogo.innerHTML = productosHtml.join("");

iniciarCarrito();