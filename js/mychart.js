var drawinterval = 100;
var series_driver = null;
var series_passenger = null;
var series_area = null;
var num_driver = null;
var num_passenger = null;
var audio_cry = null;

/*setInterval(function () {
  var driver = Math.random()*40+ 50;
  var passenger = Math.random()*40+ 50;
  var area = 0;
//  if (Math.random()> 0.5) {
//    area = 100;
//  }
  update_graph( driver, passenger, area );
}, drawinterval);

setInterval(function () {
  update_illust( Math.floor(Math.random()*3)+1 );
}, drawinterval*20);
*/

//  callback function for update
function update_graph( driver, passenger, area )
{
  var x = (new Date()).getTime(); // current time
  
  if (series_driver) {
    //  passenger
    series_passenger.addPoint([x,passenger], false, true);
    num_passenger.innerHTML = Math.floor( passenger ) + "ヒヤリ";
    // driver 
    series_driver.addPoint([x,driver], false, true);
    num_driver.innerHTML = Math.floor( driver ) + "ヒヤリ";

    //  danger area
    series_area.addPoint([x,area], true, true);
  }
}

//  callback for upate passenger
function update_illust( pattern )
{
  $('#passenger_illust_1').trigger('stopRumble');
  $('#passenger_illust_2').trigger('stopRumble');
  $('#passenger_illust_3').trigger('stopRumble');
  audio_cry.pause();

  if (pattern == 1) {
    // normal
    $('#passenger_illust_1').show();
    $('#passenger_illust_2').hide();
    $('#passenger_illust_3').hide();
  } else if (pattern == 2) {
    //  Frightened
    $('#passenger_illust_1').hide();
    $('#passenger_illust_2').show();
    $('#passenger_illust_3').hide();

    $('#passenger_illust_2').trigger('startRumble');
//      setTimeout( function() {
//          $('#passenger_illust').trigger('stopRumble');
//      }, 1000 );

  } else if (pattern == 3) {
    // cry!!
    $('#passenger_illust_1').hide();
    $('#passenger_illust_2').hide();
    $('#passenger_illust_3').show();
    $('#passenger_illust_3').trigger('startRumble');
    audio_cry.load();
    audio_cry.play();
    
//      setTimeout( function() {
//          $('#passenger_illust').trigger('stopRumble');
//      }, 1000 );
  }
}


$(function () {
    $(document).ready(function () {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });
        
        audio_cry = document.getElementById("cry");
        num_driver = document.getElementById('driver_hiyari_num');
        num_passenger = document.getElementById('passenger_hiyari_num');
        $('#passenger_illust_2').jrumble({
            x: 4,
            y: 0,
            rotation: 0
            });
        $('#passenger_illust_3').jrumble({
            x: 10,
            y: 10,
            rotation: 4
            });

        
        Highcharts.chart('graph', {
            chart: {
//                type: 'spline',
//                animation: Highcharts.svg, // don't animate in old IE
//                animation: {
//                   duration: drawinterval/2,
////                },
                animation: false,
                marginRight: 10,
                backgroundColor: "#deffd4",
                events: {
                    load: function () {
                        // set up the updating of the chart each second
                        series_area = this.series[0];
                        series_driver = this.series[2];
                        series_passenger = this.series[1];
                    }
                }
            },
            title: {
//                text: 'Live random data'
                text: ''
            },
            xAxis: {
                type: 'datetime',
                labels: {
                   enabled: false
                }
//                tickPixelInterval: 150
            },
            yAxis: {
                title: {
//                    text: 'ヒヤリ度 (%)'
                    text: ''
                },
                labels: {
                   enabled: false
                },
                gridLineWidth: 0,
                plotLines: [
/*                {
                      value: 0,
                      width: 2,
                      color: '#808080'
                    }
                  ,
                    {
                      value : 80,
                      color : 'green',
                      dashStyle : 'shortdash',
                      width : 2,
                      label : {
                        text : 'ヒヤリ'
                      }
                    }
*/
                ],
                max: 110,
                min: 70
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [
            {
                name: 'area',
               type: 'column', // グラフの形指定
//                type: 'spline', // グラフの形指定
                marker: {
                  enabled: false
                },
//                color: 'rgba(233,120,120,1)',
                color: 'rgba(255,230,230,1)',
                pointWidth: 25, // グラフ幅に依存するので要注意
                pointPadding: 0.0,
                groupPadding: 0.0,
                borderWidth: 0,
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -49; i <= 0; i += 1) {
                        data.push({
                            x: time + i * drawinterval,
                            y: 0
                        });
                    }
                    return data;
                }())
            },
            {
                name: 'passenger',
                type: 'spline', // グラフの形指定
                lineWidth: 50,
                marker: {
                  enabled: false
                },
                color: 'rgba(233,120,120,1)',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -49; i <= 0; i += 1) {
                        data.push({
                            x: time + i * drawinterval,
                            y: 0
                        });
                    }
                    return data;
                }())
            },
            {
                name: 'driver',
                type: 'spline', // グラフの形指定
                lineWidth: 5,
                marker: {
                  enabled: false
                },
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -49; i <= 0; i += 1) {
                        data.push({
                            x: time + i * drawinterval,
                            y: 0
                        });
                    }
                    return data;
                }())
            }
/*          {
                name: 'passenger',
                type: 'spline', // グラフの形指定
                lineWidth: 50,
                marker: {
                  enabled: false
                },
                color: 'rgba(233,120,120,1)',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -49; i <= 0; i += 1) {
                        data.push({
                            x: time + i * drawinterval,
                            y: 0
                        });
                    }
                    return data;
                }())
            }*/
            ]
        });
    });
});