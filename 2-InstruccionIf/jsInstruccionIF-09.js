/*
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
*/

function mostrar()
{
	var numero;

	numero = (Math.random() * 10) + 1;
	numero = parseInt(numero);

	alert("El numero es: " + numero);

}//FIN DE LA FUNCIÓN