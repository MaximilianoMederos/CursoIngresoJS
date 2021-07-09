/*Mederos Maximiliano Div H
Ejercicio Parcial 2012 tres.js*/

function mostrar()
{
 var precio;
 var descuento;
 var preciofinal;

 precio = prompt("Precio original (sin descuento): ");
 precio = parseInt(precio);
 descuento = prompt("Descuento a asignar: ");
 descuento = parseInt(descuento);
 preciofinal = precio - (precio * descuento / 100);

 elPrecioFinal.value = preciofinal;

}
