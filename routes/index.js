var express = require('express'),
router = express.Router(),
http = require('http').Server(express),
io = require('socket.io')(http);

/* Websocket */
http.listen(1212, function(){
  io.on("connection", function(c){
	  console.log('Alguem conectou', 'ID:', c.id);
	  c.emit('teste','Mensagem de teste');
  })
  /*io.on("connection", function (client) {
	  client.on("join", function(name){
		console.log("Joined: " + name);
		clients[client.id] = name;
		client.emit("update", "You have connected to the server.");
		client.broadcast.emit("update", name + " has joined the server.")
	  });

	  client.on("send", function(msg){
		console.log("Message: " + msg);
		client.broadcast.emit("chat", clients[client.id], msg);
	  });

	  client.on("disconnect", function(){
		console.log("Disconnect");
		io.emit("update", clients[client.id] + " has left the server.");
		delete clients[client.id];
	  });
  });*/
});

/* GET home page. */
const rgex = /app\/[a-zA-z0-9@#]/;
//chave 38036042c461dbb3c7dacdf58072cb27
router.get(rgex, function(req, res, next) {
	var dblite = require('dblite');
	db = dblite('banco/servidor.db');
	const chave_api = '123456';
	var acesso = req.url;
	acesso = acesso.split('/');
	var chave_enviada = acesso[acesso.length-1];
	
	function init(id_aparelho) {
		
		res.send('iniciado');
	}
	
	function erro(msg) {
		res.send(msg);
		return false;
	}
	
	db.query('SELECT * FROM usuarios where chave_api = ?',[chave_enviada], function(err, rows) {
	  if(err) {
		  console.log(err);
		  return erro('Erro no banco de dados: '+JSON.stringify(err));
		  //return false;
	  }
	  if(rows.length == 0) {
		  return erro('Chave de API inválida');
	  }
	  init(rows);
	});
  //res.render('index', { title: 'Express' });
});

module.exports = router;
