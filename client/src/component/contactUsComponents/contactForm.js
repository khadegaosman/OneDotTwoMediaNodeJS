import React, { Component } from 'react';
//import '../../../node_modules/@icon/font-awesome/font-awesome.css';
import ReactDOM from 'react-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../css/service-contact-style.css';
import axios from 'axios';

class ContactForm extends Component {
  state = {
  	name : "",
  	mail : "",
  	messeage : "",
  	phoneNumber : "",
  	messeageContent : "",

  }
  change = e => {
  		this.setState({
  			[e.target.name] : e.target.value
  		});
  };
  onSubmit = e =>{
  	e.preventDefault();

 //    const { name, mail, message, phoneNumber, messageContent} = this.state;
 //     console.log('here in submit',name,' ',mail,' ',message,' ',phoneNumber,' ',messageContent);
 //    axios.post('/form', {  name, mail, message, phoneNumber, messageContent} )
 //      .then(response => { 
	// console.log(response)
// })
// .catch(error => {
//     console.log(error.response)
// });
//   };
var data={
	name : this.state.name,
  	mail : this.state.mail,
  	messeage : this.state.message,
  	phoneNumber : this.state.phoneNumber,
  	messeageContent : this.state.messageContent
}
  fetch("/form", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(function(response) {
            if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            console.log(data)    
            if(data == "success"){
               this.setState({msg: "Thanks for registering"});  
            }
        }).catch(function(err) {
            console.log(err)
        });
    }
  render() {
  	    const { name, mail, message, phoneNumber, messageContent } = this.state;
  console.log(name,' ',mail,' ',message,' ',phoneNumber,' ',messageContent);
    return (
    	<form action ="/form" method="POST">
    	<div className=" contact_form_row">
		<div className="container">
			<div className="contact_form">
				<div className="row ">
					<h1 className="contact_form_header">Contact form</h1>
				</div>
				<div className="row">
					<div className="row contact_form_input_row form-group">
						<div className="col-lg-4 ">
							<input name = "name" type="text" className="contact_text_field" placeholder="Name" value={name} onChange = {e => this.change(e)}/>
						</div>
							
          
						<div className="col-lg-4 ">
							<input name = "mail" type="text" className="contact_text_field" placeholder="Mail" value={mail} onChange = {e => this.change(e)}/>
						</div>
						<div className="col-lg-4 ">
							<input name = "messeage" type="text" className="contact_text_field" placeholder="Messeage" value={message} onChange = {e => this.change(e)} />
						</div>

					</div>
					<div className="row contact_form_input_row">
						<div className="col-lg-4 col-sm-5 ">
							<input name= "phoneNumber" type="text" className=" contact_text_field" placeholder="Phone number" value={phoneNumber} onChange = {e => this.change(e) }/>

						</div>
						<div className="col-lg-8 col-sm-7">

							  <label id="label" htmlFor="Messeage">Write your message:</label>
							  <textarea name= "messeageContent" className="" rows="5" id="messeage" value={messageContent} onChange = {e => this.change(e)} ></textarea>


						</div>

					</div>

					<div className="row contact_form_input_row ">

						<div className="col-sm-2 offset-sm-10">
							<button onClick ={e =>this.onSubmit(e)} className="send-btn " type="button">send</button>
						</div>
					</div>

				</div>
			</div>
		</div>
		</div>
		</form>
    );
  }
}

export default ContactForm;
