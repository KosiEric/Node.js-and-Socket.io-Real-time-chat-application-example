var express = require('express');
var app = express();
var socket = require('socket.io');


app.use(express.static("./public/assets"));

var server = app.listen(3000 , function () {
	/* body... */

	console.log("Listening on requests on port 3000");
});

var io = socket(server);

io.on('connection' , function (socket) {
	/* body... */

	console.log('Made socket connection\n' + socket.id);
	socket.on('chat' , function (data) {
		/* body... */

      io.sockets.emit('chat' , data);

	});

	socket.on('typing' , function (data) {
		/* body... */

		socket.broadcast.emit('typing' , data);
	});


	socket.on('blur' , function (data) {
		/* body... */

          socket.broadcast.emit('blur' , data);
	});
});