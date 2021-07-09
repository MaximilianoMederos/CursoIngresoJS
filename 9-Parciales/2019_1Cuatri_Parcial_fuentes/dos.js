/*Mederos Maximiliano Div H
Ejercicio Parcial 2019 dos.js
*/

function mostrar()
{
  var nombreprimerapersona;
  var nombresegundapersona;
  var pesoprimerapersona;
  var pesosegundapersona;
  var sumapesos;
  var promediopesos;

  nombreprimerapersona = prompt ("Nombre Completo de la primera persona: ");
  pesoprimerapersona = prompt ("Peso de primera persona: ");
  pesoprimerapersona = parseInt (pesoprimerapersona)
  nombresegundapersona = prompt ("Nombre Completo de la segunda persona");
  pesosegundapersona = prompt ("Peso de segunda persona: ");
  pesosegundapersona = parseInt (pesosegundapersona);
  sumapesos = pesoprimerapersona + pesosegundapersona;
  promediopesos = (sumapesos / 2);

  alert("Ustedes se llaman " + nombreprimerapersona + " y " + nombresegundapersona + ", pesan " + pesoprimerapersona + " y " + pesosegundapersona + "kilos, que sumados son " + sumapesos + "kilos y el promedio de peso " + promediopesos + ".");







}
