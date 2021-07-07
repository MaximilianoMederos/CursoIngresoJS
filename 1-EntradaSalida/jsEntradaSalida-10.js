/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
 var sueldo;
 var sueldocondescuento;

    sueldo = txtIdImporte.value;
    sueldo = parseInt(sueldo);
    sueldocondescuento = sueldo - (sueldo * 0.25);
	txtIdResultado.value = sueldocondescuento;
 	
}
