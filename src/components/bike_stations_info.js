
function search() {

  function bikePointSearch(type) {
    var answer_promise = new Promise(function (resolve, reject) {
      var oReq = new XMLHttpRequest();
      function cleanUp() {
        oReq.removeEventListener('load', handler);
      }
      function handler() {
        var text = JSON.parse(this.responseText);
        if(text.httpStatus === "NotFound" || text.httpStatus === "BadRequest"){
          alert("Not Found");
        }
        else{
          searchVar.bike_stations=text;
          if(text.length === undefined){
            var array=[text];
            searchVar.bike_stations=array;
          }
          if(searchVar.bike_stations.length === 0){
            alert("Not Found");
          }
          document.getElementById("launch_render_button").click();
        }

        cleanUp();inputCleaner();
        document.getElementById("wait").style.visibility="hidden";
      }

      oReq.addEventListener('load', handler);
      if (type) {//true - by number
        oReq.open('GET', 'https://api.tfl.gov.uk/BikePoint/BikePoints_' + document.getElementById("number_input_id").value);
      }
      else {//false - by name
        var name=document.getElementById("name_input_id").value;
        name=createCorrectNameRequestData(name);
        oReq.open('GET', 'https://api.tfl.gov.uk/BikePoint/Search?query='+name);
      }
      document.getElementById("wait").style.visibility="visible";
      oReq.send();
    })
  }
  function createCorrectNameRequestData(name){
    name=name.replace(new RegExp(" ",'g'),"%20");
    return name;
  }
  function inputCleaner(){
    document.getElementById("number_input_id").value="";
    document.getElementById("name_input_id").value="";
  }
  function searchByNumber() {
    bikePointSearch(true);
  }

  function searchByName() {
    bikePointSearch(false);
  }
  return {
    searchByNumber: searchByNumber,
    searchByName:searchByName,
    bike_stations:undefined
  }
}
var searchVar = search();

export default searchVar
