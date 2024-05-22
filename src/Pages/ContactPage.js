import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';
import '../Styles/ContactPage.css';

export default function ResumePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
    toast.error("Please enter your name!!", { icon: '👦' });
    
    
    if (name === "") {
      toast.error("Please enter your name!!");
    } 
    else if (!email || (!email.includes('@') && !email.includes('.'))) {
      toast('Here is your toast.')
    } 
    else if (message === "") {
      toast('Here is your toast.')
    } 
    // else {
        // const templateParams = { sender_name: name, sender_mail: email, message: message };
    //     emailjs.send('service_serorsq','template_3fay5kl',templateParams,"GU6Ljxpxou5RbCgWK")
    //     .then((response) => {toast('Here is your toast.')},
    //     (error) => {toast('Here is your toast.')});
    // }
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
            </div>
            <div>
              <p className="contact-input-header">Email</p>
              <input type="mail" placeholder="Email" value={email} onChange={(event) => handleMailChange(event)} />
            </div>
            <div>
              <p className="contact-input-header">Message</p>
              <textarea type="text" placeholder="Message" value={message} onChange={(event) => handleMessageChange(event)} />
            </div>
            <div className="contact-container-button">
              <button onClick={handleSendMail}><b>SEND</b></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
