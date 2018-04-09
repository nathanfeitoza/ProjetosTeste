// S = P(1+i)^n
var arguments = process.argv.splice(2, process.argv.length -1).join(' ').split(' ');
if(arguments.length >= 3)
{
	var taxa_enviada = parseFloat(arguments[1]),
	taxa = taxa_enviada / 100,
	valor_aplicado = parseFloat(arguments[0]),
	tempo = parseFloat(arguments[2]),
	i =  Math.pow( (1 + taxa), tempo),
	s = valor_aplicado * i,
	lucro_preju = (s - valor_aplicado).toFixed(2);

	if(lucro_preju > 0)
	{
		lucro_preju = "Lucro de R$ "+lucro_preju;
	}
	else if(lucro_preju < 0)
	{
		lucro_preju = "Prejuízo de R$ "+lucro_preju;
	}
	else
	{
		lucro_preju = "Não se alterou R$: "+lucro_preju;
	}

	//console.log(i);
	console.log("O montante de "+taxa_enviada+"% para R$ "+valor_aplicado+" em "+tempo+" meses será de: R$ "+s.toFixed(2));
	console.log(lucro_preju);
}
else
{
	console.log('Faltam o montante, a taxa de juros em porcentagem e o tempo em meses, respectivamente');
}