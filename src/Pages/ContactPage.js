import { Component } from 'react';
import emailjs from 'emailjs-com';
import '../Styles/ContactPage.css';

class ContactPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          message: '',
          nameerror: '',
          mailerror: '',
          messageerror: '',
          successmessage: '',
          errormessage: '',
        };
      }
    
      handleNameChange = (event) => {
        this.setState({ name: event.target.value });
    };
    handleMailChange = (event) => {
        this.setState({ email: event.target.value });
    };
    handleMessageChange = (event) => {
        this.setState({ message: event.target.value });
    };
    
    handlesendmail = async () => {
        const { name, email, message } = this.state;
        const templateParams = {sender_name: name, sender_mail: email, message: message };

        if(name === ""){this.setState({ nameerror: "Please fill your name!!" })}
        else if(email ==="" || !email.includes("@")  || !email.includes(".")){this.setState({ mailerror: "Please enter a valid mail ID!!" })}
        else if(message === ""){this.setState({ messageerror: "Send me some messages please!!" })}
        else{
            emailjs.send('service_serorsq','template_3fay5kl',templateParams,'kK1aePMlNZ-HLWtJT')
            .then((response) => {this.setState({ successmessage: "Your message has been successfully sent!!" });},
            (error) => {this.setState({ errormessage: "Error in sending the mail. Please try out again!!" });});
        };
        if(name !== ""){this.setState({ nameerror: "" })}
        if(email !== "" && email.includes("@")  && email.includes(".")){this.setState({ mailerror: "" })}
        if(message !== ""){this.setState({ messageerror: "" })}
    }
    
    render() {
        return (
            <div className = "contact-container">
                <h1 className = "contact-header" id = "page-5">CONTACT ME</h1>
                
                <div className = "contact-container-block">
                    <p className = "contact-block-header"><b>Let's get connected🤘</b></p>
                    
                    <div className = "inside-container">
                        <img src={require("../../src/Sources/hello.png")} alt="hello" className = "contact-container-image"></img>

                        <form className = "contact-form" onSubmit={(event) => event.preventDefault()}>
                            <div>
                                <p className = "contact-input-header">Name</p>
                                <input type = "text" placeholder = "Name" value={this.state.name} onChange={this.handleNameChange}/>
                                <p className = "show-error">{this.state.nameerror}</p>
                            </div>
                            <div>
                                <p className = "contact-input-header">Email</p>
                                <input type = "text" placeholder = "Email" value={this.state.email} onChange={this.handleMailChange}/>
                                <p className = "show-error">{this.state.mailerror}</p>
                            </div>
                            <div>
                                <p className = "contact-input-header">Message</p>
                                <textarea type = "text" placeholder = "Message" value={this.state.message} onChange={this.handleMessageChange}/>
                                <p className = "show-error">{this.state.messageerror}</p>
                            </div>
                            <div className = "contact-container-button">
                                <button onClick={() => this.handlesendmail()}><b>SEND</b></button>
                            </div>
                        </form>
                    </div>
                    
                    <p className = "show-success-message">{this.state.successmessage}</p>
                    <p className = "show-error-message">{this.state.errormessage}</p>
                </div>
            </div>
        )
    }
}

export default ContactPage;