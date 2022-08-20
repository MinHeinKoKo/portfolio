import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Experience from './components/Experience/Expericence'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/contact/contact'
import Footer from './components/Footer/Footer'
import Services from './components/Services/Services'
import Portfolio from './components/portfolio/Portfolio'

const App = () => {
  return (
    <>
    <Header />
    <Nav/>
    <About/>
    <Services/>
    <Experience/>
    <Portfolio/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App