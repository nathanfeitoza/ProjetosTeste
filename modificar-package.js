const fs = require('fs');
var arguments = process.argv.splice(2, process.argv.length -1).join(' ').split(' ');
let local_arquivo = arguments[0]+'/'+'package.json';
fs.readFile(local_arquivo, "utf-8", (err, data)=>{
	if(err)
	{
		return console.log("Erro ao ler o arquivo", err);
	}

	let jsonDados = JSON.parse(data);
	jsonDados.scripts.start = 'nodemon ./bin/www';

	fs.writeFile(local_arquivo, JSON.stringify( jsonDados , null, 4 ), (erro)=>{
		if(erro)
		{
			return console.log("Erro ao escrever arquivo", erro);
		}
		console.log('Arquivo atualizado com sucesso');
	});
});