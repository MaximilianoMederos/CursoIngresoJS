/*Mederos Maximiliano Div H
Ejercicio Parcial 2018 Ej 3 */

function mostrar()
{
 var precioIncial;
 var descuento;
 var precioFinal;

 precioIncial = prompt("Ingrese precio sin descuentos: ");
 precioIncial = parseFloat(precioIncial);
 descuento = prompt("Ingrese descuento a aplicar: ");
 descuento = parseFloat(descuento);
 preciofinal = precioIncial - (precioIncial * descuento / 100);
 preciofinal = preciofinal.toFixed(2);
 elPrecioFinal.value = preciofinal;


}
