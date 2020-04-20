var ipapi = require("ipapi.co");
var request = require("request");
var express = require("express");
var app = express();



app.set("view engine", "ejs");

app.get("/", function(req, res){
	ipapi.location(function(loc){
 request('http://api.openweathermap.org/data/2.5/weather?lat=' + loc.latitude + '&lon=' + loc.longitude + '&appid=2e20c9c75300d417a5b24ed83b529927', function(err, reponse, weather){
    		

    	console.log(weather);
    	var latlong = weather.split(/["\s"]+/);
    	console.log(latlong);
    	console.log(loc.latitude);
		console.log(loc.longitude);
		res.render("index", {loc: loc, weather: latlong});
    	   
  	});
	
		
	});

});


// var callback = function(loc){
//     console.log(loc);
// };



app.listen(process.env.PORT || 3000, 
	() => console.log("Server Connected!!!"));