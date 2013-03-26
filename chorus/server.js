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
			fileToLoad = webroot + "index.html";//404 swap
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

	socket.on('play',function() {
		socket.emit('play');
		socket.broadcast.emit('play');
		console.log("received:  " + "play");
	});
	socket.on('stop',function() {
		socket.emit('stop');
		socket.broadcast.emit('stop');
		console.log("received:  " + "stop");
	});
	socket.on('change',function() {
		socket.emit('change');
		socket.broadcast.emit('change');
		console.log("received:  " + "change");
	});
	
});