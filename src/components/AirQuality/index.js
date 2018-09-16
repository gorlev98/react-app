import React, {Component} from 'react'
import weather_info from '../weather_info'
import 'bootstrap/dist/css/bootstrap.css'

class AirQuality extends Component{
  render() {
    return(
      <div className="card mx-auto">
        <div className="card-header">
          Air Quality
        </div>
        <br/>
        <div className="card-subtitle">
          Today Situation
        </div>
        <div id="today_air_situation">Waiting for server answer</div>
        <br/>
        <div className="card-title">
          Future Situation
        </div>
        <div id="future_air_situation">Waiting for server answer</div>
      </div>
    )
  }
}

weather_info();
export default AirQuality
