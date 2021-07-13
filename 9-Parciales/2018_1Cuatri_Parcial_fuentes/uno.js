/*Mederos Maximiliano Div H 
Ejercicio Parcial 2018 Ej 1*/
function mostrar()
{
 var ancho;
 var largo;
 var perimetro;

 ancho = prompt("Cual es el ancho del rectangulo: ");
 ancho = parseFloat(ancho);
 largo = prompt("Cual es el largo del rectangulo: ");
 largo = parseFloat(largo);
 perimetro = (ancho * 2) + (largo * 2);
 perimetro = parseFloat(perimetro);


 alert("El perimetro del rectangulo es: " + perimetro +".");


}
