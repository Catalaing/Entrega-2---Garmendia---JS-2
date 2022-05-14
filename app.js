
// let cantDePrendas = Number(prompt("Hola! gracias por tu compra! Ingresá la cantidad de prendas compradas para calcular tu envío"))

// if ((cantDePrendas >= 1) && (cantDePrendas <= 3))  {
//   alert ("Tenés un 10% de descuento en el envío")
// } 
// else if ((cantDePrendas >= 4) && (cantDePrendas <= 7)){
//     alert ("Tenés un 20% de descuento en el envío")
// }
// else if ((cantDePrendas >= 8) && (cantDePrendas <= 10)){
//     alert ("Tenés un 30% de descuento en el envío")
// }
// else if ((cantDePrendas >= 11) && (cantDePrendas <= 9999999999999)){
//     alert ("Tenés envío gratis")
// }
// else {
//     alert ("Gracias por visitarnos! Esperamos verte pronto!")
// }



// let diaDeEntrega = prompt( "Decinos qué día preferís recibir tu paquete")

// switch (diaDeEntrega) {
//     case "lunes":
//         confirm( "Bien! el próximo lunes entre las 9 y 18 hs. estaremos en la dirección solicitada.")
//         break;
//     case "martes":
//         confirm( "Bien! el próximo martes entre las 9 y 18 hs. estaremos en la dirección solicitada.")
//         break;
//     case "miércoles":
//         confirm( "Bien! el próximo martes entre las 9 y 18 hs. estaremos en la dirección solicitada.")
//         break;
//     case "jueves":
//         confirm( "Bien! el próximo martes entre las 9 y 18 hs. estaremos en la dirección solicitada.")
//         break;    
//     case "viernes":
//         confirm( "Bien! el próximo martes entre las 9 y 18 hs. estaremos en la dirección solicitada")
//         break;
//     case "sabado":
//         confirm( "Atención! los sábados, el horario de entrega es de 10 a 13 hs. Disculpá las molestias.")
//         break;
//     case "domingo":
//         confirm( "Lo sentimos, los domingos no realizamos entregas.")
//         break;

//     default:
//         alert( "Por favor, ingresá un día de la semana")
//         break;
// }



const productos = [{ id: 1,  producto: "remeraVerona", precio: 2500 },
                  {  id: 2,  producto: "remeraRoma", precio: 3000 },
                  {  id: 3,  producto: "remeraSicilia"  , precio: 3400},
                  {  id: 4,  producto: "remeraToscana" , precio: 1950},
                  {  id: 5,  producto: "remeraBologna" , precio: 1950},
                  {  id: 6,  producto: "remeraPisa" , precio: 2500},
                  {  id: 7,  producto: "remeraVenecia" , precio: 2500},
                  {  id: 8,  producto: "remeraGenova" , precio: 1950},
                  {  id: 9,  producto: "remeraSavona" , precio: 1950},
                  {  id: 10,  producto: "remeraFlorencia" , precio: 3000},
                  {  id: 11,  producto: "remeraPerugia" , precio: 3000},
                  {  id: 12,  producto: "remeraMilan" , precio: 2500},
                  {  id: 13,  producto: "remeraBergamo" , precio: 1950},
                  {  id: 14,  producto: "remeraCremona" , precio: 1950},
                  {  id: 15,  producto: "remeraBrescia" , precio: 3400},
                  {  id: 16,  producto: "remeraPavia" , precio: 3400},
                  {  id: 17,  producto: "remeraGarda" , precio: 200},
                  {  id: 18,  producto: "remeraRemo" , precio: 2000},
                  {  id: 19,  producto: "remeraSpezia" , precio: 1950},
                  {  id: 20,  producto: "remeraTurin" , precio: 2000},
                  {  id: 21,  producto: "remeraAlba" , precio: 2500},
                  {  id: 22,  producto: "remeraAlessandria" , precio: 3400},
                  {  id: 23,  producto: "remeraParadiso" , precio: 3400},
                  {  id: 24,  producto: "remeraTrento" , precio: 3400},
                ]

const buscado = productos.find(producto => producto.id === 3)
console.log(buscado) 

const existe = productos.some(producto => producto.nombre === "remeraToscana")
console.log(existe )

const baratos = productos.filter(producto => producto.precio < 3000)
console.log(baratos)


const listaNombres = productos.map(producto => producto.producto)
console.log(listaNombres)



class Remera {
    constructor(tipo, color, nombre, precio){
        this.nombre = nombre.toUpperCase();
        this.color = color;
        this.tipo = tipo;
        this.precio = (precio);
    }
    // advertencia1(){
    //     alert("Esta prenda es talle único")
    // }
    // advertencia2(){
    //     alert("Esta prenda no tiene devolución")
    // }
}

const remeraAlba = new Remera ("Alba", "blanca","top", 2500);
const remeraRoma = new Remera ("Roma", "rosa", "remerón", 3000);
const remeraToscana = new Remera ("Toscana", "blanca", "básica", 1950);
const remeraMilan = new Remera ("Bologna","blanca","top", 1950);
const remeraPavia = new Remera ("Pavia", "negra", "básica",3400);

for (
    const propiedad in remeraAlba) {
        document.write(remeraAlba[propiedad])
    }


// console.log (remeraAlba.advertencia1());
// console.log (remeraRoma.advertencia1());
// console.log (remeraMilan.advertencia1());
// console.log (remeraToscana.advertencia2());
// console.log (remeraPavia.advertencia2());


