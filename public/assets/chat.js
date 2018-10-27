var socket = io.connect('http://localhost:3000');

var message = document.getElementById('message') , 
handle = document.getElementById('handle') , 
send = document.getElementById('send') , 
feedback = document.getElementById('feedback');
output = document.getElementById('output');



// Emit events 


send.addEventListener('click', function (argument) {
	/* body... */

socket.emit('chat'  , {message : message.value , handle : handle.value});
message.value = "";

});

message.addEventListener('keypress' , function () {
	/* body... */

socket.emit('typing' , {handle : handle.value});
});

message.addEventListener('blur', function () {
	/* body... */
	socket.emit('blur' , {blur : 'blur'});
});

socket.on('blur' , function (data) {
	/* body... */

    feedback.innerHTML = "";
});

//Listen for events


socket.on('chat' ,function (data) {
	/* body... */

	output.innerHTML += '<p><strong>' + data.handle + ':</strong>' + data.message + '</p>';
});

socket.on('typing' , function (data) {
	/* body... */

	feedback.innerHTML = '<p><em>' + data.handle + '</em> is typing a message</p>';
})