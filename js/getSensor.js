var roomID = "test_teamg";
var msg = {"roomID":roomID, "data":"NOT REQUIRED"};
socket.emit('joinRoom', JSON.stringify(msg));

var ArrayMeme = {};
var ArrayVital ={};
var ArrayVehicle = {};

  var vitalSubId = navigator.vehicle.vital.subscribe(
    function(vital) {
    ArrayVital["heartrate"] = Math.floor(vital.heartrate);
    ArrayVital["emotion"] = Math.floor(vital.emotionCluster);

    }
  );
  var memeSubId = navigator.vehicle.meme.subscribe(function(meme) {
    ArrayMeme["attention"] = meme.attentiveness;
    ArrayMeme["awakeness"] = meme.awakeness;

  });
  var vehicleSpeedSub = navigator.vehicle.vehicleSpeed.subscribe(function(obj) {
    ArrayVehicle["vehicleSpeed"] = Math.floor(obj.speed /1000);
  idealHiyari();
  });
  var engineSpeedSub = navigator.vehicle.engineSpeed.subscribe(function(obj) {
    ArrayVehicle["engineSpeed"]= obj.speed /1000;

  });
  var vpmtSub = navigator.vehicle.vehiclePowerModeType.subscribe(function(obj) {
    ArrayVehicle["vehiclePowerModeType"]= obj.value;

  });
  var accPedalSub = navigator.vehicle.acceleratorPedalPosition.subscribe(function(obj) {
     ArrayVehicle["accelerationPedalPosition"]= obj.value;
 
  });
  var transmissionSub = navigator.vehicle.transmission.subscribe(function(obj) {
     ArrayVehicle["transmissionmode"]= obj.mode;
 
  });
  var lightStatSub = navigator.vehicle.lightStatus.subscribe(function(obj) {
    ArrayVehicle["lightStatushead"]= obj.head;
    ArrayVehicle["lightStatusbrake"]= obj.brake;
    ArrayVehicle["lightStatusparking"]= obj.parking;

  });
  var fuelSub = navigator.vehicle.fuel.subscribe(function(obj) {
     ArrayVehicle["fuellevel"]= obj.level;
     ArrayVehicle["fuelinstantConsumption"]= obj.instantConsumption;
 
  });
  var accelSub = navigator.vehicle.acceleration.subscribe(function(obj) {
     ArrayVehicle["accelerationx"]= obj.x;
     ArrayVehicle["accelerationy"]= obj.y;
     ArrayVehicle["accelerationz"]= obj.z;
 
  });
  var accelSub = navigator.vehicle.gyro.subscribe(function(obj) {
     ArrayVehicle["gyropitch"]= obj.pitchRate;
     ArrayVehicle["gyroroll"]= obj.rollRate;
     ArrayVehicle["gyroyaw"]= obj.yawRate;
 
  });
  var steerSub = navigator.vehicle.steeringWheel.subscribe(function(obj) {
     ArrayVehicle["steeringWheel"]= obj.angle;
 
  });
  var brakeSub = navigator.vehicle.brakeOperation.subscribe(function(obj) {
     ArrayVehicle["brake"]= obj.brakePedalDepressed;
 
  });
  var odometerSub = navigator.vehicle.odometer.subscribe(function(obj) {
     ArrayVehicle["odometer"]= obj.distanceTotal;
 
  });
  var parkingBrakeSub = navigator.vehicle.parkingBrake.subscribe(function(obj) {
     ArrayVehicle["parkingBrake"]= obj.status;
 
  });
  var parkingBrakeSub = navigator.vehicle.location.subscribe(function(obj) {
     ArrayVehicle["gpslatitude"]= Math.floor(obj.latitude*1000)/1000;
     ArrayVehicle["gpslongitude"]= Math.floor(obj.longitude*1000)/1000;
     ArrayVehicle["gpsaltitude"]= Math.floor(obj.altitude*1000)/1000;
     ArrayVehicle["gpsheading"]= Math.floor(obj.heading*1000)/1000;
     ArrayVehicle["gpsspeed"]= Math.floor(obj.speed*1000)/1000;
 
  });
  var zone_fr = new Zone();
    zone_fr.value = [zone_fr.Front, zone_fr.Right];
  var zone_fl = new Zone();
    zone_fl.value = [zone_fr.Front, zone_fr.Left];
  var door_fr = navigator.vehicle.door.subscribe(function(obj) {
     ArrayVehicle["doorstatusfr"]= obj.status;
 
  }, zone_fr);
  var door_fr = navigator.vehicle.door.subscribe(function(obj) {
     ArrayVehicle["doorstatusfl"]= obj.status;
 
  }, zone_fl);
  var seat_fr = navigator.vehicle.seat.subscribe(function(obj) {
     ArrayVehicle["seatbelt_fr"]= obj.seatbelt;
 
  }, zone_fr);


function idealHiyari(){
  var driver = Math.random()*40+ 50;
  var passenger = Math.random()*40+ 50;
  var area = 0;
  update_graph( driver, passenger, area );
  update_illust( Math.floor(Math.random()*3)+1 );
}



