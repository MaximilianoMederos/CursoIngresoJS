/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var Numero1
	var Numero2
	var SacarResto

	Numero1 = txtIdNumeroDividendo.value;
	Numero2 = txtIdNumeroDivisor.value;
	Numero1 = parseFloat(Numero1);
	Numero2 = parseFloat(Numero2);
	SacarResto = Numero1 % Numero2

	alert("El resto es: " + SacarResto);
}
