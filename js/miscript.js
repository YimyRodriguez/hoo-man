//alert("Bienveenido a JS");
//document.write("Hola JS");
//console.log("estoy en la consola");

/* let x=parseInt(prompt("ingrese un primer numero"));
let y=parseInt(prompt("ingrese un segundo numero"));

alert("la suma es: " + (x+y)); */


let radio=parseFloat(prompt("ingrese radio del circulo"));
const pi=3.1416;

let areaCir=pi*(radio**2);

let respuesta='El area del circulo es ${areaCir} , gracias por su visita a la pagina';

document.write(respuesta);