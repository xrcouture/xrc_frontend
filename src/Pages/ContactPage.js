import React from 'react'
import Contact from '../Components/contact/Contact'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import ScrollToTop from './ScrollToTop'

import {Helmet} from 'react-helmet'

function ContactPage() {
  return (
    <div>
      <Helmet>
        <title>Contact | XR Couture</title>
        <meta
          name="description"
          content="Want to get in touch? We'd love to hear from you. Write to us at hello@xrcouture.com"
        />
      </Helmet>
      <ScrollToTop />
      <Header />
      <Contact />
      <Footer />
    </div>
  )
}

export default ContactPage