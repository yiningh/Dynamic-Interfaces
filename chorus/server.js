var http = require("http");
var fs = require("fs");
var path = require("path");
var url = require("url");
var io = require("socket.io");

var mimeTypes = {
	"html":"text/html",
	"jpg":"image/jpg",
	"png":"image/png",
	"jpeg":"image/jpeg",
	"js":"text/javascript",
	"css":"text/css"
};

var webroot = "./www";
var server = http.createServer(function(req,res){
	var fileToLoad;
	fileToLoad = webroot + url.parse(req.url).pathname;

	stats = fs.lstatSync(fileToLoad);
	if(stats.isDirectory()){
		fileToLoad = fileToLoad + "index.html";
	}

	var fileBytes;
	var httpStatusCode = 200;

	fs.exists(fileToLoad, function(doesItExist){
		if(!doesItExist){
			httpStatusCode = 404;
			fileToLoad = webroot + "404.html";
		}

		fileBytes = fs.readFileSync(fileToLoad);
		var mimeType = mimeTypes[path.extname(fileToLoad).split(".")[1]];

		res.writeHead(httpStatusCode, {'contentType': mimeType});
		res.end(fileBytes);
	});
});
server.listen(8080, '127.0.0.1');

var socketServer = io.listen(server);
socketServer.sockets.on('connection',function(socket){

	socket.on('someone joined',function(data) {
		if( data.username == 'joojoo'){
			socket.broadcast.emit('joojoo joined');
		}
		if( data.username == 'maxie'){
			socket.broadcast.emit('maxie joined');
		}
		if( data.username == 'yiyi'){
			socket.broadcast.emit('yiyi joined');
		}
		socket.broadcast.emit('new member joined');

	});
	socket.on('someone is about to join', function(){
		console.log('recieved someone is about to join')
		socket.broadcast.emit('tell whos in here');
	});
	socket.on('joo voice', function(data){
		socket.broadcast.emit('joo voice', data);
	});
	socket.on('maxie voice', function(data){
		socket.broadcast.emit('maxie voice', data);
	});
	socket.on('yiyi voice', function(data){
		socket.broadcast.emit('yiyi voice', data);
	});
	socket.on('I am already in use', function(data){
		if (data.username != ''){
			if (data.username == 'joojoo'){
				socket.broadcast.emit('joojoo joined');
			}
			if (data.username == 'maxie'){
				socket.broadcast.emit('maxie joined');
			}
			if (data.username == 'yiyi'){
				socket.broadcast.emit('yiyi joined');
			}
		}
	});
	socket.on('current state', function(data){
		socket.broadcast.emit('current state', data);
		socket.emit('current state', data);
	});
	socket.on('someone left', function(data){
		socket.broadcast.emit('someone left', data);
	});
	
});