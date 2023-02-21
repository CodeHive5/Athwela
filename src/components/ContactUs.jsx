import React, { useState } from "react";
import "../Styles/ContactUs.css";

const ContactUs = () => {
    const [status, setStatus] = useState("Send");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending");
        const { name, email, message } = e.target.elements;
        let details = {
        name: name.value,
        email: email.value,
        message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
    });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
  };
   
  const handleReset = (e) => {
    e.preventDefault();
    const { name, email, message } = e.target.form;
    name.value = "";
    email.value = "";
    message.value = "";
  };

    return (
        <div className="contact-us">
        <div className='paragraph1'>
          <div className='header1'>Get in touch..<br/></div>
          <div className='para1'>
          Fill out this form and we will get back to you shortly<br/><br/>
          Address:<br/>
          Students’ Union,<br/>
          Faculty of Information Technology,<br/>
          University of Moratuwa<br/><br/>
          Telephone:<br/>
          +94775467896<br/><br/>
          Email:<br/>
          abd@gmail.com<br/>
          </div>
        </div>
          <div className='form'>
              <form onSubmit={handleSubmit}>
                  <div>
                  <div>
                      <input 
                          className='input'  
                          type="text" 
                          id="name" 
                          required 
                          placeholder='Name'
                      />
                  </div>
                  <div>
                      <input 
                          className='input' 
                          type="email" 
                          id="email" 
                          required 
                          placeholder='Email'
                      />
                  </div>
                  <div>
                      <textarea 
                          className='message' 
                          id="message" 
                          required 
                          placeholder='Message'
                      />
                  </div>
                  <div>
                      <button type="reset"  className='CUform-button' onClick={handleReset}>Reset</button>
                      <button type="submit"  className='CUform-button1' >{status}</button>
                  </div>
              </div>
              </form>
          </div>
      </div>
    );
  };
  export default ContactUs;
  