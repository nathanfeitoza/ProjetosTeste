var express = require('express');
var router = express.Router();

/* GET home page. */
const rgex = /conectar\/[a-zA-z0-9@#]/;
router.get(rgex, function(req, res, next) {
	//const sqlite3 = require('sqlite3').verbose();
	const chave_api = '123456';
	var acesso = req.url;
	acesso = acesso.split('/');
	var chave_enviada = acesso[acesso.length-1];
	if(chave_enviada == chave_api) {
		res.send('Iguais');
	} else {
		res.send('NO');
	}
	res.send('a');
  //res.render('index', { title: 'Express' });
});

module.exports = router;
