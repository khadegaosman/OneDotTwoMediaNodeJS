import React, { Component } from 'react';
// import '../../../node_modules/@icon/font-awesome/font-awesome.css';
import ReactDOM from 'react-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../css/service-contact-style.css';
import phone_red from '../../images/phone_red.png';
import threeDots from '../../images/threeDots-red.png';
import ContactUsInfo from './contactUSInfo'

class PhoneBox extends Component {
  render() {
    return (
    	<div className="  phone_box">
    		<img className="img-fluid" src={phone_red} />

    		<div className="row phone_box_child">

	    		<div className="col-sm-6 emptycol">
	    			<div className="row">
	    				<div className="col-sm-3 ">
			  				<img className="img-fluid red_dot" src={threeDots}/>
			  	        </div>
			  	        <div className="col-sm-9">
				  	        <div className="row">
				  				<h1 className="contact_us">Contact us</h1>
				  			</div>
				  			<div className="row">
				  				<ContactUsInfo />


				  			</div>

			  	        </div>
	    			</div>

	    		</div>
    		</div>

    	</div>


    );
  }
}

export default PhoneBox;
