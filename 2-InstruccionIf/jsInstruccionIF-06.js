/*Mederos Maximiliano Div H
Ejercicio IF ej 6*/
function mostrar()
{
	var edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);
	if(edad>17)
	{
		alert("Usted es mayor de edad.");
	}

	else 
		if(edad>12)
	    {
	    	alert("Usted es adolescente.");
	    }
        else
        {
        	alert("Usted es un niño");
        }
	    


}//FIN DE LA FUNCIÓN