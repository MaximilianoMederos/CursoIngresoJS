 Mederos Maximiliano Div H
Ejercicio E/S 6

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"
function sumar()
{
	var NumeroUno;
	var NumeroDos;
	var total;

	//nombreIngresado=txtIdNombre.value;
	NumeroUno = document.getElementById('txtIdNumeroUno').value;
	NumeroDos = document.getElementById('txtIdNumeroDos').value;
	NumeroUno = parseInt(NumeroUno) 
	NumeroDos = parseInt(NumeroDos)

	total = NumeroUno + NumeroDos;

	alert("La suma da: " + total);


}