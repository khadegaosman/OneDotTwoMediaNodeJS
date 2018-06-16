import React, { Component } from 'react';
// import '../../../node_modules/@icon/font-awesome/font-awesome.css';
import ReactDOM from 'react-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../css/service-contact-style.css';
import axios from 'axios';

class ContactusInfo extends Component {
   constructor(props) {
    super(props);
    this.state = {
      datastate:{}
    };
  }
  

  
   componentDidMount() {
        axios.get('/contactInfo')
      .then(res => {
        this.setState({ datastate: res.data[0]}); 
             
      });
    }
   // componentDidMount() {
   //  let self = this;
   //      fetch('/contactInfo', {
   //          method: 'GET'
   //      }).then(function(response) {
   //          if (response.status >= 400) {
   //              throw new Error("Bad response from server");
   //          }
   //          return response.json();
   //      }).then(function(data) {
   //          self.setState({datastate: data});
   //      }).catch(err => {
   //      console.log('caught it!',err);
   //      })
   //    }
   

  render() {
     console.log('insiderender' +this.state.datastate.addres);
    return (
    	<div className="row">
    	<div className="col-sm-6 contact_block " id="background_red">
        <h1 className="get_in " id="white">Get in touch</h1>
        <p className="get_in_details" id="white"> {this.state.datastate.miniAddress} <br/> {this.state.datastate.phoneNumber} <br/>{this.state.datastate.email} <br/>{this.state.datastate.website}</p>
      </div>
      <div className="col-sm-6 contact_block " id="background_white">
          <div className="get_in_block">
             <h1 className="get_in " id="red">Address</h1>
             <p id="abu_zabi">{this.state.datastate.addres}</p>
             <a className=" social_hover fa fa-facebook" href={this.state.datastate.facebook}></a>
             <a className="social_hover fa fa-twitter" href={this.state.datastate.twitter}></a>
             <a className=" social_hover fa fa-instagram" href={this.state.datastate.twitter}></a>
             <a className="social_hover fa fa-google" href={this.state.datastate.twitter}></a>
             <a className="social_hover fa fa-youtube" href={this.state.datastate.twitter}></a>
           </div>
       </div>
			 </div>
      

    );
  }
}

export default ContactusInfo;
