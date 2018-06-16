import React, { Component } from 'react';
import '../../node_modules/@icon/font-awesome/font-awesome.css';
import ReactDOM from 'react-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/service-contact-style.css';
import PhoneBox from '../Components/contactUsComponents/phone_box';
import ContactForm from '../Components/contactUsComponents/contactForm';
import Map from '../Components/contactUsComponents/map.js'


class ContactUs extends Component {

  render() {
    return (
    	<div>
    	<PhoneBox />
    	<ContactForm/>
    	<Map/>
    	</div>
    	);
  }
}

export default ContactUs;