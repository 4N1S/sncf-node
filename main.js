var opendataclient = require('opendata-node');

// Public API
// var location="bruxelles";
// var domaine="be";
// var host="opendata."+location+"."+domaine;//#or our host data.iledefrance.fr
var host="public.opendatasoft.com";
var client = new OPDBXL(host,"1.0");//#or 2.0

//Params
var lang="fr";
var q="car";
var rows="5";

//Function Search

client.search(q,lang,rows,"","",function (error, data) {
	if(error) console.log("E!",error)
	console.dir(data);
});