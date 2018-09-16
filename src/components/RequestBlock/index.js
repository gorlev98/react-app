import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import searchVar from '../bike_stations_info'


class RequestBlock extends Component{

  render(){
    const button_style = {position:"absolute",top:"49px",left:"50%",height:"40px",width:"50%"};
    const input_style = {top:"50px",height:"40px",width:"50%"};
    return(
      <div className="card mx-auto">
        <div className="card-header">Search</div>
        <div className="card">
          <p className="card-header">Input the bikepoint NUMBER you are intrested in </p>
          <input style={input_style} id="number_input_id"></input>
          <button className="btn btn-success" style={button_style} onClick={searchVar.searchByNumber}>Try!</button>
        </div>
        <div className="card">
          <p className="card-header">Input the bikepoint COMMON NAME you are intrested in </p>
          <input style={input_style} id="name_input_id"></input>
          <button className="btn btn-success" style={button_style} onClick={searchVar.searchByName}>Try!</button>
        </div>
      </div>
    )
  }
}
export default RequestBlock
