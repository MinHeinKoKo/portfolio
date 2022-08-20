import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='container-fluid footer'>
      <div className="row">
        <div className='text-center mt-3'>
          <h3>Have a great Day..</h3>
        </div>
        <div className="col-8 foot mt-5">
          <div className="link">
            <a href="#header">Header</a>
            <a href="#about">About</a>
            <a href="#service">Services</a>
            <a href="#experience">Experience</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#testimonial">Testimonial</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="col-12 mt-5">
          <div className="text-center con">
            <a href="https://github.com/MinHeinKoKo" target="_blank">
              <i class="fa-brands fa-github"></i>
            </a>
            
            <a href='https://www.facebook.com/minhein.koko.908' target="_blank">
              <i class="fa-brands fa-square-facebook"></i>
            </a>
            <a href='https://www.linkedin.com/in/min-hein-ko-ko-b243b4249/' target="_blank">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer