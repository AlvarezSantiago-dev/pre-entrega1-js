alert(`
        Bienvenido al curso de JavaScript.

        Mi nombre es Santiago Alvarez. 

        Estas en mi primer entrega camino al proyecto final, te invito
        a que pruebes mi primer simulador basico en js`);

let nombre = prompt(`En primer lugar me gustaria conocer tu nombre 📝:`);
if (nombre != "") {
    alert(` 
    Genial ${nombre}.

    Bienvenido/a a un pequeno simulador donde podras elegir que peliculas ver, cuantas entradas sacar y muchas cosas mas. 📝.`);
}
else {
    alert("Tu nombre es necesario. 📝");
    nombre = prompt(`Introducir su Nombre 📝:`);
}
alert(`
        Iniciemos... 😊🤍`);

let pelicula = prompt(` Elija desde nuestra cartelera que pelicula desea ver... 🎞🎫
💎 Barbie
💎 Flash
💎 Elementos                 
💎 Avatar
💎 Oppenheimer`);
switch (pelicula) {
    case "barbie":
        alert(`Su pelicula es Barbie 💗🎬.`);
        break;
    case "Barbie":
        alert(`Su pelicula es Barbie 💗🎬.`);
        break;
    //Flash
    case "flash":
        alert(`Su pelicula es Flash 🎬.`);
        break;
    case "Flash":
        alert(`Su pelicula es Flash 🎬.`);
        break;
    //Elementos
    case "elementos":
        alert(`Su pelicula es Elementos 🎬.`);
        break;
    case "Elementos":
        alert(`Su pelicula es Elementos 🎬.`);
        break;
    //Avatar
    case "avatar":
        alert(`Su pelicula es Avatar 🎬.`);
        break;
    case "Avatar":
        alert(`Su pelicula es Avatar 🎬.`);
        break;
    //Oppenheimer       
    case "oppenheimer":
        alert(`Su pelicula es Oppenheimer 🎬`);
        break;
    case "Oppenheimer":
        alert(`Su pelicula es Oppenheimer 🎬`);
        break;
    default:
        //Me surgio una duda aca, PARA que vuelva a suceder todo lo que esta en el switch en vez de usar un siwtch se podria solucionar utilizando un else if?
        alert(`La pelicula que eligio ver no se encuentra disponible por el momento. 💔❗`)
};

const suma = (a, b, c) => a + b + c;
const resta = (a, b) => a - b;
const iva = (x) => x * 0.21;
const multiplica = (a, b) => a * b;
const porcent = (x) => x * 0.3;
let valorEntrada = 1000;
let combo1 = 800;
let combo2 = 400;
let combo3 = 200;
let valorExtra1 = 800;
let valorExtra2 = 400;
let valorExtra3 = 200;



let cantidadEntradas = parseInt(prompt(`¿Cuántos tickets desea comprar? 🎫
El valor de cada entrada es de $1000💰
(Le recordamos que al valor original se le suma el imp pais.)`)); {
    if (cantidadEntradas >= 1 && cantidadEntradas < 6) {
        alert(`Ha agregado correctamente ${cantidadEntradas} artículos al carrito 🛒`);
    } else {
        alert(`❌Mínimo debe elegir retirar un ticket y como valor maximo solo puede retirar 6 tickets❌`)
        cantidadEntradas = parseInt(prompt(`¿Cuántos artículos deseas agregar ✍🏻`))
    }
}
let valorTotal1 = multiplica(suma(valorEntrada, iva(valorEntrada), valorExtra1), cantidadEntradas);
let valorTotal2 = multiplica(suma(valorEntrada, iva(valorEntrada), valorExtra2), cantidadEntradas);
let valorTotal3 = multiplica(suma(valorEntrada, iva(valorEntrada), valorExtra3), cantidadEntradas);

let combo = prompt(` Elija un combo ... 🎞🎫
Importante que recuerdes el combo que seleccionaste.
💎 Combo1: Hamburguesa + Gaseosa + Chocolate valor $800
💎 Combo2: Hamburguesa + Gaseosa + $400
💎 Combo3: Gaseosa + Chocolate $200`);
switch (combo) {
    case "combo1":
        alert(`Se ha agregado un combo al carrito para disfrutar su pelicula, el valor actual es de $${valorTotal1} 💗🎬.`);
        break;
    case "Combo1":
        alert(`Se ha agregado un combo al carrito para disfrutar su pelicula, el valor actual es de $${valorTotal1} 💗🎬.`);
        break;
    //Flash
    case "combo2":
        alert(`Se ha agregado un combo al carrito para disfrutar su pelicula, el valor actual es de $${valorTotal2} 💗🎬.`);
        break;
    case "Combo2":
        alert(`Se ha agregado un combo al carrito para disfrutar su pelicula, el valor actual es de $${valorTotal2} 💗🎬.`);
        break;
    //Elementos
    case "combo3":
        alert(`Se ha agregado un combo al carrito para disfrutar su pelicula, el valor actual es de $${valorTotal3} 💗🎬`);
        break;
    case "Combo3":
        alert(`Se ha agregado un combo al carrito para disfrutar su pelicula, el valor actual es de $${valorTotal3} 💗🎬`);
        break;
    default:
}

// Función para calcular el descuento del 30%
function calcularDescuento(valor) {
    return valor * 0.3;
}

// Solicitar el código de usuario mediante un prompt
const codigoDescuento = prompt("Por favor, ingrese su código de descuento como:test1");

// Verificar si el código de usuario es válido (aquí puedes agregar tu lógica de validación)
const esCodigoValido = codigoDescuento === "test1"; // Cambiar "miCodigoSecreto" por el código válido que desees

if (esCodigoValido) {
    let descuento1 = calcularDescuento(valorTotal1);
    let descuento2 = calcularDescuento(valorTotal2);
    let descuento3 = calcularDescuento(valorTotal3);

    let valorConDescuento1 = valorTotal1 - descuento1;
    let valorConDescuento2 = valorTotal2 - descuento2;
    let valorConDescuento3 = valorTotal3 - descuento3;

    const opcion = prompt("Para imprimir el total, con su descuento aplicado debe decirnos que combo fue el que solicito. Seleccione (1, 2 o 3)");

    if (opcion === "1") {
        alert(`Dejamos su ticket de la compra realizada, disfrute de su pelicula.
        
        Nombre: ${nombre} ✨
        Pelicula: ${pelicula} 🎬
        Combo obtenido: ${combo} 💎
        Valor final con descuento: $${valorConDescuento1}💰
        `);
    } else if (opcion === "2") {
        alert(`Dejamos su ticket de la compra realizada, disfrute de su pelicula.
        
        Nombre: ${nombre} ✨
        Pelicula: ${pelicula} 🎬
        Combo obtenido: ${combo} 💎
        Valor final con descuento: $${valorConDescuento2}💰
        `);
    } else if (opcion === "3") {
        alert(`Dejamos su ticket de la compra realizada, disfrute de su pelicula.
        
        Nombre: ${nombre} ✨
        Pelicula: ${pelicula} 🎬
        Combo obtenido: ${combo} 💎
        Valor final con descuento: $${valorConDescuento3}💰
        `);
    } else {
        alert("Opción inválida. No se mostró ningún valor con descuento.");
    }
} else {
    alert("Código de usuario inválido. No se aplicará el descuento.");
}