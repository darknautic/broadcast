var server =  require("./server.js");
var router =  require("./router.js");
var requestHandlers =  require('./requestHandlers.js');


// ---------------------
console.log("\nWelcome !!!");
console.log(Date());


var handle =  {};

handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;



server.start(router.route, handle);

