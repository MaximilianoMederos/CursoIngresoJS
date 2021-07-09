/*Mederos Maximiliano Div H
Ejercicio TP ej 1.

1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var precioTotal;

	precioUno = txtIdPrecioUno.value;
	precioUno = parseFloat(precioUno);
	precioDos = txtIdPrecioDos.value;
	precioDos = parseFloat(precioDos);
	precioTres = txtIdPrecioTres.value;
	precioTres = parseFloat(precioTres);
	precioTotal = precioUno + precioDos + precioTres;

	alert("La suma de los precios es: " + precioTotal + ".");

}
function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var precioTotal;
	var promedio;

	precioUno = txtIdPrecioUno.value;
	precioUno = parseFloat(precioUno);
	precioDos = txtIdPrecioDos.value;
	precioDos = parseFloat(precioDos);
	precioTres = txtIdPrecioTres.value;
	precioTres = parseFloat(precioTres);
	precioTotal = precioUno + precioDos + precioTres;
	promedio = precioTotal / 3;

	alert("El promedio de los precios es: " + promedio + ".");
	
}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var precioTotal;
	var valorIva;
	var precioConIva;

	precioUno = txtIdPrecioUno.value;
	precioUno = parseFloat(precioUno);
	precioDos = txtIdPrecioDos.value;
	precioDos = parseFloat(precioDos);
	precioTres = txtIdPrecioTres.value;
	precioTres = parseFloat(precioTres);
	precioTotal = precioUno + precioDos + precioTres;
	valorIva = precioTotal * 0.21;
	precioConIva = precioTotal + valorIva;

	alert("El precio total (+ IVA 21%) es: " + precioConIva + ".");
}