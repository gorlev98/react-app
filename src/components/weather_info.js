

function getWeatherInfo(){
  var answer_promise = new Promise(function(resolve,reject){
    var oReq = new XMLHttpRequest();
    function cleanUp() {
      oReq.removeEventListener('load', handler);
    }
    function handler() {
      var text = JSON.parse(this.responseText);
      setData(text)
      cleanUp();
    }
    oReq.addEventListener('load', handler);
    oReq.open('GET', 'https://api.tfl.gov.uk/AirQuality');
    oReq.send();
  })
}

function setData(text){
  function stringClean(string){
    string=string.replace(new RegExp("&lt;br/&gt;&lt;br/&gt;",'g')," ");
    string=string.replace(new RegExp("&lt;br/&gt;",'g'),"; ");
    string=string.replace(new RegExp("&#39;",'g'),"\"");
    return string;
  }
  var info1 = text.currentForecast[0].forecastText;
  var info2 = text.currentForecast[1].forecastText;
  info1=stringClean(info1);
  info2=stringClean(info2);
  document.getElementById("today_air_situation").innerText=info1;
  document.getElementById("future_air_situation").innerText=info2;
}
var weather_info = getWeatherInfo;
export default weather_info;
