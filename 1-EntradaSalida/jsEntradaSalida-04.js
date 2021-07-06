/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombreIngresado;

	nombreIngresado = prompt ("Ingrese Su Nombre")

	document.getElementById("txtIdNombre").value = nombreIngresado;
	

}

//txtIdNombre
/*

ENTRADAS
    prompt
    id.value o document.getElementById("").value

PROCESOS

SALIDAS
    alert
    console.log
    document.write


*/

