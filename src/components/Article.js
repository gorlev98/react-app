import React, {Component} from 'react'

class Article extends Component {

  render(){
    function request(){
      function createTextBlock(text, time){
        var bikes = text[0].bikesCount;
        var total = text[0].totalDocks;
        var newText = "Bikes count: "+bikes.toString()+", Total places:"+total+",\nTime of request:\n"+time;
        console.log("newText"+newText);
        return newText;
      }
      if(!isOpen) {
        var answer_promise = new Promise(function (resolve, reject) {
          var oReq = new XMLHttpRequest();

          function cleanUp() {
            oReq.removeEventListener('load', handler);
          }

          function handler() {
            var text = JSON.parse(this.responseText);
            text = createTextBlock(text, time);
            onButtonClick();
            while(document.getElementById(id)===undefined){
              setTimeout(100);
            }
            document.getElementById(id).innerText = text;
            cleanUp();
            document.getElementById("wait").style.visibility="hidden";
          }

          oReq.addEventListener('load', handler);
          oReq.open('GET', 'https://api.tfl.gov.uk/Occupancy/BikePoints/' + id);
          document.getElementById("wait").style.visibility="visible";
          oReq.send();
          var time = new Date();
        })
      }
      else{
        onButtonClick();
      }
    }
    function getTrueNumber(name){
      name=name.replace(new RegExp("BikePoints_",'g'),"");
      return name;
    }
    const {article, isOpen, onButtonClick}=this.props
    const number=getTrueNumber(article.id);
    const id=article.id;
    const body=isOpen &&
      <h4>
        <section className="card-text" id={id}>{article.commonName}</section>
      </h4>
    return (
      <div className = "card mx-auto" style = {{width: '90%'}}>
        <div className="card-header">
          <h3>
            {article.commonName + "; number: "+number}
          </h3>
          <button onClick={request} className="btn btn-primary btn-lg float-right">
            {isOpen ? 'close' : 'open'}
          </button>
        </div>
        <div className="card-body">
          {body}
        </div>
      </div>
    )
  }

}

export default Article
