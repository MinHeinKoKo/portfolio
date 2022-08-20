import React from 'react'
import './Header.css'
import Scrol from './scrol'
import Social from'./social'
import me from '../../assets/assets/Layer 1.png'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className="container header" id='header'>
        <Navbar/>
        <div className="row justify-content-center">
            <div className="col-12 col-md-12">
                <div className="intro text-center justify-content-center">
                    <h4>Hello , I'm </h4>
                    <h2>Min Hein Ko Ko</h2>
                    <h6>I'm Web Developer</h6>
                </div>
                <div className="contact text-center justify-content-center butt">
                    <button className="btn btn-danger mx-2"><a href="#about" className="text-decoration-none text-white">About Me</a></button>
                    <button className="btn btn-warning mx-2"><a href="#contact" className="text-decoration-none text-white">Contact</a></button>
                </div>
            </div>
            <Social/>
            <div className="me">
                <img src={me} alt="me" className="w-100"/>
            </div>
        </div>
        <Scrol/>
    </div>
    
  )
}

export default Header
