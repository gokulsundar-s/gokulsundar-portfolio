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
          response_message: '',
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

        if(name === ""){this.setState({ response_message: "⚠️Please fill your name!!" })}
        else if(email === ""){this.setState({ response_message: "⚠️Please fill your mail ID!!" })}
        else if(!email.includes("@")  || !email.includes(".")){this.setState({ response_message: "⚠️Please enter a valid mail ID!!" })}
        else if(message === ""){this.setState({ response_message: "Send me some messages please🥹!!" })}
        else{
            emailjs.send('service_serorsq','template_3fay5kl',templateParams,'kK1aePMlNZ-HLWtJT')
            .then((response) => {this.setState({ response_message: "✅Your message has been successfully sent!!" });},
            (error) => {this.setState({ response_message: "❌Error in sending the mail. Please try out again!!" });});
          };
        }
    
    render() {
        return (
            <div className = "contact-container" id = "page-5">
                <h1>CONTACT ME</h1>
                
                <div className = "contact-box">
                    <p className = "box-header"><b>Let's get connected🤘</b></p>
                    
                    <div className = "inside-container">
                        <img src={require("../../src/Sources/hello.png")} alt="hello" className = "contact-robot"></img>

                        <form className = "contact-forms" onSubmit={(event) => event.preventDefault()}>
                            <div>
                                <p className = "input-header">Name</p>
                                <input type = "text" placeholder = "Name" value={this.state.name} onChange={this.handleNameChange}/>
                            </div>
                            <div>
                                <p className = "input-header">Email</p>
                                <input type = "text" placeholder = "Email" value={this.state.email} onChange={this.handleMailChange}/>
                            </div>
                            <div>
                                <p className = "input-header">Message</p>
                                <textarea type = "text" placeholder = "Message" value={this.state.message} onChange={this.handleMessageChange}/>
                            </div>
                            <div className = "container-button">
                                <button onClick={() => this.handlesendmail()}><b>SEND</b></button>
                            </div>
                            <p className = "show-error">{this.state.response_message}</p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactPage;