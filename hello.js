console.log("Hi mate !");


//anonymous I
function run( theFunction , value){
	theFunction(value);
}

run( function(val) {console.log(val); },"Hi" );	



//anonymous II

var db =  require('./dbase.js');
//var result = db.query("select * from table");
db.query("select * from table");
console.log("fin");