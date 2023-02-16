import React from 'react'
import Contact from '../Components/contact/Contact'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import ScrollToTop from './ScrollToTop'

function ContactPage() {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Contact />
      <Footer />
    </div>
  )
}

export default ContactPage