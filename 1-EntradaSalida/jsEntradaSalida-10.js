/* Mederos Maximiliano Div H
Ejercicio E/S 10 Bis
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
 var sueldo;
 var sueldocondescuento;
 var descuento;

   sueldo = txtIdImporte.value;
   sueldo = parseFloat(sueldo);
   descuento = prompt ("descuento");
   descuento = parseInt(descuento);
   sueldocondescuento = sueldo - (sueldo * descuento / 100);
	txtIdResultado.value = sueldocondescuento;

 	
}
