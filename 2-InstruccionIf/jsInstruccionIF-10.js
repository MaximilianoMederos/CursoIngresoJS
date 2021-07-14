function mostrar()
{
	var nota;
	nota = Math.floor(Math.random() * 11);

	alert("Su nota es: " + nota);

	if (nota >8)
	{
		alert("Excelente.");
	}
	else
	{
		if (nota >3)
		{
			alert("Aprobó");
		}
		else
		{
			alert("Vamos, la proxima se puede.");
		}
	}
	


}//FIN DE LA FUNCIÓN