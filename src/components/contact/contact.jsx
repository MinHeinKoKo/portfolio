// import React from 'react'
import React, { useRef } from 'react';
import './contact.css'
// import React ,{ useRef } from 'react';
import emailjs from 'emailjs-com';

const contact = () => {


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oxgu8jm', 'template_lqp2dr4', e.target , 'l-Fn0jRJY827WzDJ4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <div id='contact' className='contact container'>
      <div className="row">
        <div className="col-xl-6 mt-5">
          <div className="intro">
            <h1>Let's Discuss your project</h1>
          </div>
          <div className="contact-address">
            <div className="email">
              <a href="mailto:kokominhein96@gmail.com">
              <i class="fa-solid fa-envelope"></i>
              <h4>kokominhein96@gmail.com</h4>
              </a>
            </div>
            <div className="email">
              <a href="">
              <i class="fa-solid fa-phone"></i>
              <h4>+959785107219</h4>
              </a>
            </div>
            <div className="email">
              <a href="">
              <i class="fa-solid fa-map-location"></i>
              <h4>Myanmar, Myitkyinar</h4>
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-6 text-center mt-5">
          <div className="get mb-5">
            <h5>Get in Touch</h5>
            <h2>Contact</h2>

          </div>
          <form onSubmit={sendEmail}>
            <input type="text" name='name'  placeholder='Your full Name...' required/>
            <p className='line mb-3'></p>
            <input type="email" placeholder='Enter Your Email...' name='email' required className='mt-3'/>
            <p className='line mb-3'></p>
            {/* <label htmlFor="area">Message</label> */}
            <textarea name="message" id="area" cols="30" rows="10" placeholder='Messages'></textarea>
            <button type='submit' className='btnsend'>Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default contact