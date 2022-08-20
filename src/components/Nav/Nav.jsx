import React from 'react'
import './Nav.css'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav className='Nav-bot'>
      <a href="#header" onClick={()=>setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}><i class="fa-solid fa-house-chimney"></i></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><i class="fa-solid fa-user"></i></a>
      <a href="#service" onClick={()=>setActiveNav('#service')} className={activeNav === '#service' ? 'active' : ''}><i class="fa-brands fa-servicestack"></i></a>
      <a href="#testimonial" onClick={()=>setActiveNav('#testimonial')} className={activeNav === '#testimonial' ? 'active' : ''}><i class="fa-solid fa-book"></i></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><i class="fa-solid fa-address-book"></i></a>
    </nav>
  )
}

export default Nav