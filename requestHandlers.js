var exec = require("child_process").exec;

var i = 0 ;
function start(response){

	console.log("Request handler 'start' was called");
	//sleep(10000);
	exec("dir /s /b C:\\Users\\esajaus\\0", 
		{ timeout: 10000, maxBuffer: 20000*1024 },
		function(error, stdout, stderr ){		
			console.log(error);
			console.log(stderr);
			response.writeHead(200, {"Content-Type": "text/plain"});
			response.write(stdout);
			response.end();
	});
	
};


function upload(response){
	console.log("Request handler 'upload' was called");
	i++;
	//return "This is \"upload\" content ";
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello Upload "+ i );
	response.end();

};

exports.start = start ;
exports.upload = upload ;


function sleep(milliSeconds){
	var startTime = new Date().getTime();
	while(new Date().getTime() < startTime + milliSeconds);
};

