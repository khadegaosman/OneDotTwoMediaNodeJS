import React, { Component } from 'react';
//import '../../../node_modules/@icon/font-awesome/font-awesome.css';
import ReactDOM from 'react-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../css/service-contact-style.css';
import map from '../../images/map.png'
import Location from './location'



class Map extends Component {

 
  render() {
    return (
    	<div className="map_row">
			<img className="img-fluid map_img" src={map}/>
			<Location />
				
		</div>
    );
  }
}

export default Map;