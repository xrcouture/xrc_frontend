import React from 'react'
import Brand from '../Components/brands/Brand'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import Section1 from '../Components/Section1/Section1'
import Section2 from '../Components/Section2/Section2'

function Homepage() {
  return (
    <div>
      <Header />
      <Section1 />
      <Brand />
      <Section2 />
      <Brand />
      <Footer />
    </div>
  )
}

export default Homepage