import React, { Component } from 'react';
// import '../../../node_modules/@icon/font-awesome/font-awesome.css';
import ReactDOM from 'react-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../css/service-contact-style.css';
import axios from 'axios';
 
 class Location extends Component{
 	constructor(props) {
    super(props);
    this.state = {
      address:{}
    };
  }
  

  
   componentDidMount() {
        axios.get('/contactInfo')
      .then(res => {
        this.setState({ address: res.data[0]}); 
             
      });
    }
     render(){
     	return ( <div className="location">
				<div className="location-with-margin">
					<h2 id="white" className=" get_in"> Our location</h2>
					<p id="white" className=" location_details ">{this.state.address.addres}</p>
				</div>
			</div>);
     }
 }
 export default Location;