/*Mederos Maximiliano Div H
Ejercicio E/S 5
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombreIngresado;
	var edadIngresada;
	//nombreIngresado=txtIdNombre.value;
	nombreIngresado = document.getElementById('txtIdNombre').value;
	edadIngresada = document.getElementById('txtIdEdad').value;
	alert("Su nombre es: " + nombreIngresado + " y su edad es: " + edadIngresada);


	
}

