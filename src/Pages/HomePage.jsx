import React from 'react'
import Brand from '../Components/brands/Brand'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import Brand1 from '../Components/news/Brand'
import Section1 from '../Components/Section1/Section1'
import Section2 from '../Components/Section2/Section2'
import ScrollToTop from './ScrollToTop'

function Homepage() {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Section1 />
      <Brand />
      <Section2 />
      <Brand1 />
      <Footer />
    </div>
  )
}

export default Homepage