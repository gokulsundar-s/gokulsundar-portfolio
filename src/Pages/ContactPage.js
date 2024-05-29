import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';
import '../Styles/ContactPage.css';

export default function ResumePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMailChange = (event) => {
    setEmail(event.target.value);
  };
  
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  
  const sendMail = (templateParams) => {
    return emailjs.send('service_serorsq','template_3fay5kl',templateParams,"GU6Ljxpxou5RbCgWK");
  };

  const handleSendMail = async () => {
    if (name === "") {
      toast.error("Please enter your name");
    } 
    else if (!email || (!email.includes('@') && !email.includes('.'))) {
      toast.error("Please enter a valid email");
    } 
    else if (message === "") {
      toast.error("Please give some message");
    } 
    else {
      const templateParams = { sender_name: name, sender_mail: email, message: message };
      toast.promise(
        sendMail(templateParams),
        {
           loading: 'Sending...',
           success: <b>Message sent</b>,
           error: <b>Could not sent message</b>,
         }
       );
    }
  };

  return (
    <div className="page-container">
      <h1 className="page-header" id="page-6">CONTACT ME</h1>
      <div className = "contact-box-container">
        <img src={require("../../src/Sources/contact.jpg")} alt="Hello" className = "contact-right-profile"></img>
      
        <div className = "contact-left-container">
          <p className = "contact-left-header"><b>LET'S GET CONNECTED!🚀</b></p>
          <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
            <>
              <p>Name</p>
              <input type="text" placeholder="Name" value={name} onChange={(event) => handleNameChange(event)} />
            </>
            
            <>
              <p>Email</p>
              <input type="mail" placeholder="Email" value={email} onChange={(event) => handleMailChange(event)} />
            </>
            
            <>
              <p>Message</p>
              <textarea type="text" placeholder="Message" value={message} onChange={(event) => handleMessageChange(event)} />
            </>
            <div>
              <button onClick={handleSendMail}><b>SEND</b></button>
            </div>
          </form>

        </div>
      </div>
      <Toaster toastOptions={{duration: 5000}}/>
    </div>
  );
};
