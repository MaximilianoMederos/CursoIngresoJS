/*Mederos Maximiliano Div H
Ejercicio TP ej2

2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
 var largoterreno;
 var anchoterreno;
 var perimetro;
 var alambreNecesario;

	largoterreno = document.getElementById('txtIdLargo').value;
	largoterreno = parseFloat(largoterreno);
	anchoterreno = document.getElementById("txtIdAncho").value;
	anchoterreno = parseFloat(anchoterreno);
	perimetro = (largoterreno * 2) + (anchoterreno * 2);
	alambreNecesario = perimetro * 3;

alert("Se necesitan " + alambreNecesario + " metros de alambre para cubrir el terreno con tres hilos de alambre.");

}
function Circulo () 
{

 var radio;
 var diametro;
 var perimetro;
 var alambreNecesario;
 
	radio = document.getElementById("txtIdRadio").value;
	radio = parseFloat(radio);
	diametro = radio * 2;
	perimetro = Math.PI * diametro;
	perimetro = parseFloat(perimetro);
	alambreNecesario = perimetro * 3;
	alambreNecesario = parseFloat(alambreNecesario);
	alambreNecesario = alambreNecesario.toFixed(2);

	alert("Se necesitan " + alambreNecesario + " metros de alambre para cubrir el terreno con tres hilos de alambre.");



}
function Materiales () 
{
	
 var largoterreno;
 var anchoterreno;
 var area;
 var cemento;
 var cal;
 var totalBolsas;

	largoterreno = document.getElementById('txtIdLargo').value;
	largoterreno = parseFloat(largoterreno);
	anchoterreno = document.getElementById("txtIdAncho").value;
	anchoterreno = parseFloat(anchoterreno);
	area = largoterreno * anchoterreno;
	cemento = area * 2;
	cal = area * 3;
	

alert("Se necesitan " + cemento + " bolsas de cemento y " + cal + " bolsas de cal.");


}