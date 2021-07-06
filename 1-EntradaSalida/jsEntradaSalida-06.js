/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var NumeroUno;
	var NumeroDos;
	//nombreIngresado=txtIdNombre.value;
	NumeroUno = document.getElementById('txtIdNumeroUno').value;
	NumeroDos = document.getElementById('txtIdNumeroDos').value;

	total = parseInt("NumeroUno + NumeroDos")
	alert("La suma da: " + total);
}

