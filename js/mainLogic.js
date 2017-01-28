function idealHiyari(){
  var back
  if(ArrayVehicle["transmissionmode"] = -1){
    back = 1;
  }else{
    back = 0;
  }
  var idealhiyari = 90.32569992-2.056755548*ArrayVehicle["accelerationx"]-0.005740503*SArrayVehicle["steeringWheel"]-0.000105985*ArrayVehicle["vehicleSpeed"]+0.025086402*ArrayVehicle["accelerationPedalPosition"]-0.000478298*ArrayVehicle["gyroyaw"]+back*10;
  var driver = ArrayVital["heartrate"];
  console.log(driver);
  var passenger = idealhiyari;
  console.log(passenger);
  var area = 0;
  update_graph( driver, passenger, area );
  update_illust( Math.floor(Math.random()*3)+1 );
}

addEventListener('DOMContentLoaded', function() {
	setInterval(idealHiyari, 100); // 更新頻度100ms
});