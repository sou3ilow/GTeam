//var count = 0;
var back = 0;
function idealHiyari(){
  var ArrayMeme = getArrayMeme();
  var ArrayVital = getArrayVital();
  var ArrayVehicle = getArrayVehicle();


  console.log(ArrayVehicle["transmissionmode"]);
  if(ArrayVehicle["transmissionmode"] === "reverse"){
    back = 1;
  }else if(ArrayVehicle["transmissionmode"] === -1){
  }else{
    back = 0;
  }
  console.log(back);
  
  var idealhiyari = (90.32569992-2.056755548*ArrayVehicle["accelerationx"]
  -0.005740503*ArrayVehicle["steeringWheel"]
  -0.000105985*ArrayVehicle["vehicleSpeed"]*1000
  +0.025086402*ArrayVehicle["accelerationPedalPosition"]
  -0.000478298*ArrayVehicle["gyroyaw"]+back*10);

  //var driver = ArrayVital["heartrate"];
  var driver = (ArrayVital["heartrate"]-85)*0.5+85;
  console.log(ArrayVehicle["vehicleSpeed"]);
  var passenger = idealhiyari;
  console.log(passenger);
  var area = 0;
  update_graph( driver, passenger, area );

  //if (count%10 == 0){
  //  update_illust( Math.floor(Math.random()*3)+1 );
  //}
  //count = count + 1;
  if (passenger - driver >= 10){
    update_illust(3);
  }else if (passenger - driver < 10 && passenger - driver > 5){
    update_illust(2);
  }else{
    update_illust(1);
  }
  console.log(passenger - driver);
}

addEventListener('DOMContentLoaded', function() {
	setInterval(idealHiyari, 100); // 更新頻度100ms
});