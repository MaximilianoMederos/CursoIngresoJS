/* Mederos Maximiliano Div H
Ej IF ej07

Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
*/

function mostrar()
{
	var edad;
	var estado;
	edad = txtIdEdad.value;
	edad = parseInt(edad);
	estado = estadoCivil.value;

	if(edad<18 && estado!="Soltero")
	{
		alert("Usted es muy pequeño para NO ser soltero.")
	}
	


}//FIN DE LA FUNCIÓN