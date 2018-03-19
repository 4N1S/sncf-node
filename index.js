
var _ = require('underscore');
var https = require('https');
var crypto = require('crypto');
var url = require('url');
var urlencode = require('urlencode');

var sncfnode = function(key,secret,verbose) {
	this.verbose = verbose || false;
	this.version = "0.0.1";
	this.key = key;
	this.secret = secret;
	this.host = "api.sncf.com";
	this.uri = "/v1/coverage/sncf";
	this.userAgent = "sncfnode-node";
	this.request_options = {
		method: 'GET',
		headers: {
			"User-Agent": "sncfnode-node",
			"Content-Type": "application/x-www-form-urlencoded",
			"Authorization": this.key
		}
	}
};
sncfnode.prototype.departures = function(location,date,callback) {
	this.pubRequest("/stop_areas/stop_area:"+location+"/departures?from_datetime="+date, {}, function(err, data) {
		return callback(err, data.departures);
	});
}

sncfnode.prototype.arrivals = function(location,date,callback) {
	this.pubRequest("/stop_areas/stop_area:"+location+"/arrivals?from_datetime="+date, {}, function(err, data) {
		return callback(err, data.arrivals);
	});
}
sncfnode.prototype.route_schedules = function(location,date,callback) {
	this.pubRequest("/stop_areas/stop_area:"+location+"/route_schedules?from_datetime="+date, {}, function(err, data) {
		return callback(err, data.route_schedules);
	});
}

sncfnode.prototype.traffic_reports = function(network,callback) {
	this.pubRequest("/networks/network:"+network+"/traffic_reports", {}, function(err, data) {
		return callback(err, data.traffic_reports);
	});
}

sncfnode.prototype.lines = function(callback) {
	this.pubRequest("/lines", {}, function(err, data) {
		return callback(err, data.lines);
	});
}


sncfnode.prototype.places = function(q,callback) {
	this.pubRequest("/places?q="+q, {}, function(err, data) {
		return callback(err, data.places);
	});
}
sncfnode.prototype.linesdetail = function(id,type,callback) {
	this.pubRequest("/lines/"+id+"/"+type, {}, function(err, data) {
		return callback(err, data);
	});
}

sncfnode.prototype.journeys = function(from,to,date,callback) {
	this.pubRequest("/journeys?from="+from+"&to="+to+"&datetime="+date, {}, function(err, data) {
		return callback(err, data.journeys);
	});
}
sncfnode.prototype.vehicle_journeys = function(id,callback) {
	this.pubRequest("/vehicle_journeys/?id="+id, {}, function(err, data) {
		return callback(err, data.vehicle_journeys);
	});
}


sncfnode.prototype.disruptions = function(callback) {
	this.pubRequest("/disruptions", {}, function(err, data) {
		disruptions=data.disruptions;
		disruptions.length=10;
		return callback(err, disruptions);
	});
}

sncfnode.prototype.disruptionstream = function(callback) {
	var duration=this.duration;

	if(duration>10000){
		duration=duration;

	}else{
		duration=10000;
	}

    var self = this; // this creates a closure

	setInterval(function(){
		self.pubRequest("/disruptions", {}, function(err,data) {

			return callback(data);
		});
	
	}, duration);

}

sncfnode.prototype.pubRequest = function(method, params, callback) {
	var options = {
	  hostname: this.host,
	  path: this.uri + method,
	  port: 443,
	  method: 'GET',
	  verbose: this.verbose,
	  headers: {
	  	"User-Agent": "sncfnode-node",
	  	"Content-Type": "application/x-www-form-urlencoded",
	  	"Authorization":this.key
	  }
	};
	console.log(options.path);
	cb = function(response) {
		if (response.statusCode < 200 || response.statusCode > 299) {
		   callback(response.statusCode);
		 }
		if(response.statusCode==200){
		var str = '';
		response.on('data', function (chunk) {
			str += chunk;
			if (options.verbose) console.log(str);
		});


		response.on('end', function () {
			var objFromJSON;
			try {
				objFromJSON = JSON.parse(str);
				return callback(null, objFromJSON);
			}
			catch (err) {
				return callback(err, null);
			}
		});
		}
	}
	var req = https.request(options, cb);
	req.on('error', function(err) {
		callback(err.status, null);
	});

	req.end();

};

module.exports = sncfnode;
