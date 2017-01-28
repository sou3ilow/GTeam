//20170112-1438-yamakoshi_full.json
//20161128-1614-tsukuba-up_full.json
//20161128-1632-tsukuba-down_full.json

var fs = require('fs');

var KEY = true;
var VALUE = false;
var SKIPTIME = true

//var keys = {}

function showHeader(x) {
	var str = '#'
	for (var key in x) {
		if ( ignores.indexOf(key) != -1 ) continue;
		str += key + ','
	}
	return str;
}

function showData(x) {
	var str = ''
	for (var key in x) {
		if ( ignores.indexOf(key) != -1 ) continue;
		str += x[key] + ','
	}
	return str;
}

function dump(x, pref) {
	var ret = '';

	pref = pref || '';
	for ( var key in x ) {
		var path = pref +'.' + key;
		if ( typeof x[key] === 'object' )  {
			ret += dump(x[key], path);
		} else {

			if ( key == 'timeStamp' && SKIPTIME ) {
				keys.timeStamp = x[key];
				continue;
			}

			if ( ignores.indexOf(path) != -1 ) continue;
			
			//console.log(path);
			keys[path] = x[key];
			console.log(showData(keys));


			//console.log(keys);

			if ( KEY && VALUE ) {
				ret += path + "," + x[key];
			} else if ( KEY  ) {
				ret += path
			} else if ( VALUE ) {
				ret += value;
			}

			ret += ","




			//console.log(path + "=" + x[key] );
		}
	}
	return ret;
}



var name = process.argv[2];

if ( !name ) {
	console.log('usage: parse.js <targetfile>');
	process.exit();
}

console.log('nameis ' + name);
//process.exit();

fs.readFile(name, 'utf-8',function(err, data) {

	console.log(showHeader(keys));

	//var x = JSON.parse('['+ data + ']');
	var x = JSON.parse(data);
	//console.log(x.length);

	for ( var i=0; i<x.length; i++ ) {
		//console.log('hey');
		var ret = dump(x[i]);
		//if ( i == 4 ) { break; }
	}

	//console.log("var keys = ", keys)
});

var ignores = [
	'.Vehicle.VisionAndParking.ParkingBrake.status',
	'.Vehicle.RunningStatus.LightStatus.brake',
	'.Vehicle.RunningStatus.LightStatus.parking',
	'.Vehicle.RunningStatus.VehiclePowerModeType.value',
	'.Vehicle.DrivingSafety.Door.status',
	'.Vehicle.DrivingSafety.Door.zone.driver.0',
	'.Vehicle.DrivingSafety.Door.zone.driver.1',
	'.Vehicle.DrivingSafety.Door.zone.value.1',
	'.Vehicle.DrivingSafety.Seat.seatbelt',
	'.Vehicle.DrivingSafety.Seat.zone.driver.0',
	'.Vehicle.DrivingSafety.Seat.zone.driver.1',
	'.Vehicle.DrivingSafety.Seat.zone.value.0',
	'.Vehicle.RunningStatus.LightStatus.highBeam'
]


var keys =  {
	'timeStamp': 0,
	'.CarAdapter.SensorData.Acceleration.y': 0,
  '.CarAdapter.SensorData.Acceleration.z': 0,
  '.CarAdapter.SensorData.Acceleration.x': 0,
  '.CarAdapter.SensorData.Gyro.y': 0,
  '.CarAdapter.SensorData.Gyro.z': 0,
  '.CarAdapter.SensorData.Gyro.x': 0,
  '.Vehicle.VisionAndParking.ParkingBrake.status': 0,
  '.Vehicle.RunningStatus.Acceleration.y': 0,
  '.Vehicle.RunningStatus.Acceleration.z': 0,
  '.Vehicle.RunningStatus.Acceleration.x': 0,
  '.Vehicle.RunningStatus.LightStatus.brake': 0,
  '.Vehicle.RunningStatus.LightStatus.parking': 0,
  '.Vehicle.RunningStatus.VehicleSpeed.speed': 0,
  '.Vehicle.RunningStatus.Transmission.mode': 0,
  '.Vehicle.RunningStatus.AcceleratorPedalPosition.value': 0,
  '.Vehicle.RunningStatus.BrakeOperation.brakePedalDepressed': 0,
  '.Vehicle.RunningStatus.SteeringWheel.angle': 0,
  '.Vehicle.RunningStatus.VehiclePowerModeType.value': 0,
  '.Vehicle.RunningStatus.EngineSpeed.speed': 0,
  '.Smartphone.Gps.LocationInf.altitude': 0,
  '.Smartphone.Gps.LocationInf.longitude': 0,
  '.Smartphone.Gps.LocationInf.latitude': 0,
  '.Smartphone.Gps.LocationInf.speed': 0,
  '.Smartphone.Gps.LocationInf.heading': 0,
  '.Vehicle.RunningStatus.Fuel.instantConsumption': 0,
  '.Vehicle.RunningStatus.Fuel.level': 0,
  '.Vehicle.RunningStatus.EngineCoolant.temperature': 0,
  '.Vehicle.Climate.Temperature.interiorTemperature': 0,
  '.Vehicle.DrivingSafety.Door.status': 0,
  '.Vehicle.DrivingSafety.Door.zone.driver.0': 0,
  '.Vehicle.DrivingSafety.Door.zone.driver.1': 0,
  '.Vehicle.DrivingSafety.Door.zone.value.0': 0,
  '.Vehicle.DrivingSafety.Door.zone.value.1': 0,
  '.Vehicle.DrivingSafety.Seat.seatbelt': 0,
  '.Vehicle.DrivingSafety.Seat.zone.driver.0': 0,
  '.Vehicle.DrivingSafety.Seat.zone.driver.1': 0,
  '.Vehicle.DrivingSafety.Seat.zone.value.0': 0,
  '.Vehicle.DrivingSafety.Seat.zone.value.1': 0,
  '.Vehicle.Maintenance.Odometer.distanceTotal': 0,
  '.Vehicle.RunningStatus.LightStatus.head': 0,
  '.Sensor.Meme.Proc.att': 0,
  '.Sensor.Meme.Proc.awk': 0,
  '.Sensor.Meme.Proc.tilt': 0,
  '.Sensor.Vital.Data.beat': 0,
  '.Sensor.Vital.Data.cluster': 0,
  '.Sensor.Meme.Raw.eMvU': 0,
  '.Sensor.Meme.Raw.rol': 0,
  '.Sensor.Meme.Raw.eMvR': 0,
  '.Sensor.Meme.Raw.yaw': 0,
  '.Sensor.Meme.Raw.eMvD': 0,
  '.Sensor.Meme.Raw.blkSp': 0,
  '.Sensor.Meme.Raw.pch': 0,
  '.Sensor.Meme.Raw.blkSt': 0,
  '.Sensor.Meme.Raw.eMvL': 0,
  '.Sensor.Meme.Raw.acZ': 0,
  '.Sensor.Meme.Raw.acY': 0,
  '.Sensor.Meme.Raw.acX': 0,
  '.Vehicle.RunningStatus.LightStatus.highBeam': 0 }



