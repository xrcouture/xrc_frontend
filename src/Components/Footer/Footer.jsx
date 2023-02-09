import React from 'react'
import './footer.css'

const Footer = () => {

  const footerLogo = 'https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/xr_logo.png'

  return (
    <div className='footer-container d-md-flex'>

      <div className='footer-options-container col-md-8'>

        <div className='footer-options-container-one'>

          <h1 className='footer-options-title'>WEAR CLOTHES THAT DON'T EXIST.</h1>

          <div className='footer-subscribe-form'>

              {/* <input className='footer-subscribe-text' type="text">Subscribe for newsletter</input> */}
              <input className='footer-subscribe-text' type="text" name="name" placeholder='Subscribe for newsletter'/>
              <button className='footer-subscribe-button'>Sign up</button>

          </div>

        </div>

        <div className='footer-options-container-two d-none d-md-block'>
        <div className='d-flex mt-4'>
            <i className="social-icons lab la-facebook-f"></i>
            <i className="social-icons lab la-instagram"></i>
            <i className="social-icons lab la-twitter"></i>
            <i className="social-icons lab la-linkedin-in"></i>
            <i className="social-icons lab la-discord"></i>
          </div>

          <div className='footer-links d-flex mt-5'>
            <div>Web2 Collection</div>
            <div>Web3 Collection</div>
            <div>Contact Us</div>
          </div>

        </div>

      </div>

      <div className='footer-logo-container col-md-4 mt-5 mt-md-0'>
        <img className='footer-logo mt-3 mt-md-0' src={footerLogo} alt=""></img>
        <div className='footer-logo-subtitle d-flex flex-column justify-contents-center align-items-center'>
          {/* <div>XR COUTURE 2023</div> */}
          <div className='mt-2'>All Right Reserved&#8482; 2023</div>
        </div>
      </div>

      <div className='footer-options-container-two d-md-none'>
          <div className='d-flex justify-content-center mt-5'>
            <i className="social-icons lab la-facebook-f"></i>
            <i className="social-icons lab la-instagram"></i>
            <i className="social-icons lab la-twitter"></i>
            <i className="social-icons lab la-linkedin-in"></i>
            <i className="social-icons lab la-discord"></i>
          </div>

          <div className='footer-links text-center mt-5 d-sm-flex justify-content-center'>
            <div className='m-3'>Web2 Collection</div>
            <div className='m-3'>Web3 Collection</div>
            <div className='m-3'>Contact Us</div>
          </div>

      </div>

    </div>
  )
}

export default Footer