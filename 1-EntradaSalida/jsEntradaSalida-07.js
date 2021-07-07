/*Mederos Maximiliano Div H
Ejercicio E/S 7
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var Numero1
	var Numero2
	var suma

	Numero1 = txtIdNumeroUno.value;
	Numero2 = txtIdNumeroDos.value;
	Numero1 = parseInt(Numero1);
	Numero2 = parseInt(Numero2);
	suma = Numero1 + Numero2;
	
	alert("La suma es: " + suma);	
}

function restar()
{
	var Numero1
	var Numero2
	var resta

	Numero1 = txtIdNumeroUno.value;
	Numero2 = txtIdNumeroDos.value;
	Numero1 = parseInt(Numero1);
	Numero2 = parseInt(Numero2);
	resta = Numero1 - Numero2;
	
	alert("La resta es: " + resta);
}

function multiplicar()
{ 
	var Numero1
	var Numero2
	var multiplicacion 

	Numero1 = txtIdNumeroUno.value;
	Numero2 = txtIdNumeroDos.value;
	Numero1 = parseInt(Numero1);
	Numero2 = parseInt(Numero2);
	multiplicacion = Numero1 * Numero2;
	
	alert("La Multiplicacion es: " + multiplicacion);
}

function dividir()
{
	var Numero1
	var Numero2
	var division

	Numero1 = txtIdNumeroUno.value;
	Numero2 = txtIdNumeroDos.value;
	Numero1 = parseInt(Numero1);
	Numero2 = parseInt(Numero2);
	division = Numero1 / Numero2;
	
	alert("La Multiplicacion es: " + division);
}

