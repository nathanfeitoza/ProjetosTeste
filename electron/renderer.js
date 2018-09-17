// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var electron = require('electron')
console.log(electron);
document.querySelector("#teste").addEventListener('click',function(){
	console.log('Clicou-me');
	electron.remote.dialog.showMessageBox({title: 'Algo', message: 'Hello'})
	/*var dblite = electron.remote.require('dblite');
	db = dblite('banco/servidor.db');
	//electron.remote.dialog.showMessageBox({title: 'Algo', message: 'Hello'})
	db.query('select * from alunos limit 100', function(err, rows) {
		  if(err) {
			  console.log(err);
			  //return erro('Erro no banco de dados: '+JSON.stringify(err));
			  //return false;
		  }
		  if(rows.length == 0) {
			  console.log('Nada encontrado')
			  //return erro('Chave de API inválida');
		  }
		  console.log(rows);
	});*/
})