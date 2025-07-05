import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import ContactOne from './ContactOne'
import ContactTwo from './ContactTwo'
import ContactThree from './ContactThree'
const ContactMain = () => {
  return (
    <div>
        <Navbar />
        <ContactOne />
        <ContactTwo />
        <ContactThree />    
        <Footer />
    </div>
  )
}

export default ContactMain