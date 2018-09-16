import React, {PureComponent} from 'react'
import ArticleList from './ArticleList'
import 'bootstrap/dist/css/bootstrap.css'
import './app_style.css'
import AirQuality from './AirQuality'
import RequestBlock from './RequestBlock'
import searchVar from './bike_stations_info'

class App extends PureComponent{
  state = {
    toChange: false//if changed - take new data
  }

  render() {
    console.log("ReDraw App");
    return (
      <div>
        <div className="left_column">
          <div className="container">
            <div className="jumbotron" style={{backgroundColor:"snow", left: "20px"}}>
              <h1>
                Bikepoint Search
              </h1>
              <br/>
              <h4>
                Application for bikepoints look
              </h4>
              <button id="launch_render_button" className="btn" style = {{visibility: 'hidden'}} onClick = {this.changeState}>Revert</button>
            </div>
            <div className="list_block">
              <ArticleList articles={searchVar.bike_stations}></ArticleList>
            </div>
          </div>
          <div className="request_block_position">
            <RequestBlock/>
          </div>
        </div>
        <div className="right_column">
          <AirQuality></AirQuality>
        </div>
        <div className="wait_signal" id="wait" style={{visibility: "hidden"}}>
          <img src="https://zippy.gfycat.com/ElegantUnsteadyHornet.gif" alt=""></img>
        </div>
      </div>
    )
  }

  changeState = () => {
    this.setState({
      toChange: !this.state.toChange
    })
  }

}

export default App
