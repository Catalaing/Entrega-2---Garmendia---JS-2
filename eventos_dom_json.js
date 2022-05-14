let carrito = new Array();
const clave_local_storage = "agregar_carrito";


let boton = document.getElementsByClassName("btnCrear");
boton.addEventListener("click",() => { 


if(validar_formulario()) {
        generar_carrito();
    }
    else{
        alert("Ingrese toda la información necesaria");
    }

})

function validar_formulario() {
    let input_talle = document.getElementsByClassName("talle").value;
    let input_unidades = document.getElementsByClassName("unidades").value;

if (!input_talle){
    alert("Ingrese el talle por favor");
    return false;
}

if (!input_unidades){
    alert("Ingrese la cantidad de unidades por favor");
    return false;
}

return true

}


function generar_carrito(){
    let talle = document.getElementsByClassName("talle").value;
    let unidades = document.getElementsByClassName("unidades").value;

let compra = new compra (talle, unidades);

carrito.push(compra);

localStorage.setItem (clave_local_storage,JSON.stringify(carrito));

confirmacion();

}

function confirmacion(){
    let new_div = document.createElement ("div");
    let new_h3 = document.createElement("h3");
    new_h3.textContent = ("Has agregado este producto exitosamente!");

    new_div.appendChild (new_h3); 

let contenedor = document.getElementsByClassName ("contenedorRemera");

contenedor.appendChild(new_div);



}