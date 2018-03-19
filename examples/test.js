var sncfclient = require('../index.js');
// Public API

var client = new sncfclient("");

//function Search
// client.coverage(function (error, data) {
// 	if(error) console.log("E!",error)
// 	console.dir(data);
// });
// var location="OCE:SA:87391003";
// var date="20180317T153612";
// client.departures(location,date,function (error, data) {
// 	if(error) console.log("E!",error)
// 	console.dir(data);
// });

var location="OCE:SA:87391003";
var date="20180317T153612";
// client.arrivals(location,date,function (error, data) {
// 	if(error) console.log("E!",error)
// 	console.dir(data);
// });
client.route_schedules(location,date,function (error, data) {
	if(error) console.log("E!",error)
	console.dir(data);
});

// var network="sncf";
// client.traffic_reports(network,function (error, data) {
// 	if(error) console.log("E!",error)
// 	console.dir(data[0]);
// });
// client.lines(function (error, data) {
// 	if(error) console.log("E!",error)
// 	console.dir(data);
// });
// var q="paris";
// client.places(q,function (error, data) {
// 	if(error) console.log("E!",error)
// 	console.dir(data);
// });

// type:route_schedules,stop_schedules,arrivals,,departures,places_nearby,calendars,traffic_report
// var idline="line:OCE:584";
// var type="departures";
// client.linesdetail(idline,type,function (error, data) {
// 	if(error) console.log("E!",error)
// 	console.dir(data);
// });


// var from='2.3749036;48.8467927';
// var to='2.2922926;48.8583736';
// var datetime="20180317T164931";
// client.journeys(from,to,datetime,function (error, data) {
// 	// if(error) console.log("E!",error)
// 	console.dir(data);
// });

// var idvehicule="vehicle_journey:OCE:SN852213F01005_dst_1"
// client.vehicle_journeys(idvehicule,function (error, data) {
// 	// if(error) console.log("E!",error)
// 	console.dir(data);
// });

// client.disruptions(function (error, data) {
// 	// if(error) console.log("E!",error)
// 	console.dir(data);
// });

// client.disruptionstream(function (data) {
// 	// if(error) console.log("E!",error)
// 	console.dir(data);
// });

