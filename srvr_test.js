var http = require('http');


function onRequest(request,response){
	console.log("Request received.");
	response.writeHead(200,{"Content-Type": "text/plain"});
	response.write(" - srvr is working !! -");
	response.end();
};

http.createServer(onRequest).listen(80);


/*
http.createServer(function(request, response){
	console.log("Request received.");
	response.writeHead(200,{"Content-Type": "text/plain"});
	response.write(" - srvr is working too !! -");
	response.end();
}).listen(80);
*/
console.log("Srvr Ready at 80 port ");