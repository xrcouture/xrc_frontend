import React, { useEffect, useState } from 'react'
import './header.css'

import { Squeeze as Hamburger } from 'hamburger-react'
import {Link} from 'react-router-dom'

const Header = () => {

  const [size, setSize] = useState("sm")
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const headerLogo = 'https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/xrc.png'

  const mediaMenuQueries = {
    small : "26",
    large : "32",
  }

  const width = window.innerWidth

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
  })
  
  useEffect(() => {
    if (width < 576) {
      setSize("small")
    }
    else if (width >= 576) {
      setSize("large")
    }
  }, [screenWidth])
  

  return (
    <div className='header-container'>
      <Link to={'/'} className='xrc-logo-container'>
        <img className='xrc-logo' src={headerLogo}></img>
        <div className='logo-border'></div>
      </Link>

      <div className='header-options d-none d-md-flex align-items-center'>

        {/* <div className='header-options-links d-none d-sm-flex'> */}
          <div className='header-link header-options-item'>Web2 Collection</div>
          <div className='header-link header-options-item'>Web3 Collection</div>
        {/* </div> */}

        <button className='header-options-button header-options-item'>
          <Link to={'/contact'} style={{color:"white"}}>Contact Us</Link>
          
          </button>
        
      </div>

      <div className='d-md-none'>
          <Hamburger size={mediaMenuQueries[`${size}`]} color='#ffffff' />
      </div>

    </div>
  )
}

export default Header