import React, { Component } from 'react';

import logo from './logo.svg';

import Phonebox from './component/contactUsComponents/phone_box'
import Map from './component/contactUsComponents/map'
import Form from './component/contactUsComponents/contactForm'
class App extends Component {
   

  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/form');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };


  render() {
    return (
     <div>
     
     <Form/>
     </div>
    );
  }
}

export default App;