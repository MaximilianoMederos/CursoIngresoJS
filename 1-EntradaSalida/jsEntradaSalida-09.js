/* Mederos Maximiliano Div H
Ejercicio E/S 9
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
 var sueldo;
 var sueldoconaumento;

    sueldo = txtIdSueldo.value;
    sueldo = parseInt(sueldo);
    sueldoaumentado = (sueldo * 0.1) + sueldo;
	txtIdResultado.value = sueldoaumentado;
 	
}
