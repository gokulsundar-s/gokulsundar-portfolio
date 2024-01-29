import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../Styles/ContactPage.css';

export default function ResumePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameerror, setNameError] = useState("");
  const [mailerror, setMailError] = useState("");
  const [messageerror, setMessageError] = useState("");
  const [successmessage, setSuccessMessage] = useState("");
  const [errormessage, setErrorMessage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMail = async () => {
    
    const templateParams = { sender_name: name, sender_mail: email, message: message };

    if (name === "") {
      setNameError("Please fill your name!!");
    } 
    else if (!email || (!email.includes('@') && !email.includes('.'))) {
      setMailError("Please enter a valid mail ID!!");
    } 
    else if (message === "") {
      setMessageError("Send me some messages please!!");
    } 
    else {
        emailjs.send('service_serorsq','template_3fay5kl',templateParams,"GU6Ljxpxou5RbCgWK")
        .then((response) => {setSuccessMessage("Your message has been successfully sent!!")},
        (error) => {setErrorMessage("Error in sending the mail. Please try out again!!");});
    }

    if (name !== "") {
      setNameError("");
    }
    if (email && email.includes("@") && email.includes(".")) {
      setMailError("");
    }
    if (message !== "") {
      setMessageError("");
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-header" id="page-5">CONTACT ME</h1>

      <div className="contact-container-block">
        <p className="contact-block-header"><b>Let's get connected🤘</b></p>

        <div className="inside-container">
          <img src={require("../../src/Sources/hello.png")} alt="hello" className="contact-container-image"></img>

          <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
            <div>
              <p className="contact-input-header">Name</p>
              <input type="text" placeholder="Name" value={name} onChange={(event) => handleNameChange(event)} />
              <p className="show-error">{nameerror}</p>
            </div>
            <div>
              <p className="contact-input-header">Email</p>
              <input type="text" placeholder="Email" value={email} onChange={(event) => handleMailChange(event)} />
              <p className="show-error">{mailerror}</p>
            </div>
            <div>
              <p className="contact-input-header">Message</p>
              <textarea type="text" placeholder="Message" value={message} onChange={(event) => handleMessageChange(event)} />
              <p className="show-error">{messageerror}</p>
            </div>
            <div className="contact-container-button">
              <button onClick={handleSendMail}><b>SEND</b></button>
            </div>
          </form>
        </div>

        <p className="show-success-message">{successmessage}</p>
        <p className="show-error-message">{errormessage}</p>
      </div>
    </div>
  );
};
