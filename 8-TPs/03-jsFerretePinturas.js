/*Mederos Maximiliano Div H
Ejercicio TP ej3

3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var gradosfar;
	var gradoscent;

	gradosfar = txtIdTemperatura.value;
	gradosfar = parseFloat(gradosfar);
    gradoscent = (gradosfar - 32) / 1.8000;
    gradoscent = parseFloat(gradoscent);
    gradoscent = gradoscent.toFixed(2);

    alert( gradosfar + " Fahrenheit equivale a: " + gradoscent + " centigrados.");


}

function CentigradosFahrenheit () 
{
	var gradosfar;
	var gradoscent;

	gradoscent = txtIdTemperatura.value;
	gradoscent = parseFloat(gradoscent);
	gradosfar = (gradoscent *1.8000) + 32;
    gradosfar = parseFloat(gradosfar);
    gradosfar = gradosfar.toFixed(2);

    alert(gradoscent + " Centigrados equivale a: " + gradosfar + " Fahrenheit.");



}

