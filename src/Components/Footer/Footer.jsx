import React from 'react'
import './footer.css'
// import AnimatedText from 'react-animated-text-content';

const Footer = () => {

  const footerLogo = 'https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/xr_logo.png'

  return (
    <>
    <div className='footer-container d-md-flex d-none'>

      <div className='footer-border' style={{width: "66.66666667%", height: "100%"}}></div>

      <div className='footer-options-container col-md-8'>

        <div className='footer-options-container-one'>

          <AnimatedText
            type="words" // animate words or chars
            animation={{
              x: '200px',
              y: '200px',
              scale: 1.1,
              ease: 'ease-in-out',
            }}
            animationType="wave"
            interval={0.05}
            duration={0.5}
            tag="p"
            className="animated-paragraph footer-options-title pt-5"
            includeWhiteSpaces
            threshold={0.5}
            rootMargin="20%"
          >
            WEAR CLOTHES THAT DON'T EXIST.
          </AnimatedText>


          <div className='footer-subscribe-form'>

            {/* <input className='footer-subscribe-text' type="text">Subscribe for newsletter</input> */}
            <input className='footer-subscribe-text' type="text" name="name" placeholder='Subscribe for newsletter' />
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
            <div className='mb-4'>
            <a href='https://xrcouture.com/' target='_blank' className='text-white text-decoration-none'>
                  Web2 Collection
            </a>
            </div>
            <div className='mb-4'>
            <a href='https://metadrip.xrcouture.com/' target='_blank' className='text-white text-decoration-none'>
                  Web3 Collection
                    </a>
            </div>
            <div className='mb-4'>
            <a href='/contact' className='text-white text-decoration-none'>
                  Contact Us
            </a>
            </div>
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
          <div className='m-3'>
          <a href='https://xrcouture.com/' target='_blank' className='text-white text-decoration-none'>
                  Web2 Collection
            </a>
            </div>
          <div className='m-3'>
          <a href='https://metadrip.xrcouture.com/' target='_blank' className='text-white text-decoration-none'>
                  Web3 Collection
            </a>
          </div>
          <div className='m-3'>
          <a href='/contact' className='text-white text-decoration-none'>
                  Contact Us
            </a>
          </div>
        </div>

      </div>

    </div>
    <div className='footer-container d-md-flex d-md-none'>

      <div className='footer-border' style={{width: "66.66666667%", height: "100%"}}></div>

      <div className='footer-options-container col-md-8'>

        <div className='footer-options-container-one'>

          {/* <AnimatedText
            type="words" // animate words or chars
            animation={{
              x: '200px',
              y: '200px',
              scale: 1.1,
              ease: 'ease-in-out',
            }}
            animationType="wave"
            interval={0.05}
            duration={0.5}
            tag="p"
            className="animated-paragraph footer-options-title pt-5"
            includeWhiteSpaces
            threshold={0.5}
            rootMargin="20%"
          > */}
            <div className='footer-options-title pt-5'>WEAR CLOTHES THAT DON'T EXIST.</div>
          {/* </AnimatedText> */}


          <div className='footer-subscribe-form'>

            {/* <input className='footer-subscribe-text' type="text">Subscribe for newsletter</input> */}
            <input className='footer-subscribe-text' type="text" name="name" placeholder='Subscribe for newsletter' />
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
            <div className='mb-4'>Web2 Collection</div>
            <div className='mb-4'>Web3 Collection</div>
            <div className='mb-4'>Contact Us</div>
          </div>

        </div>

      </div>
      <div className='d-flex justify-content-start mt-5'>
                  <i className="social-icons lab la-facebook-f"></i>
                  <i className="social-icons lab la-instagram"></i>
                  <i className="social-icons lab la-twitter"></i>
                  <i className="social-icons lab la-linkedin-in"></i>
                  <i className="social-icons lab la-discord"></i>
                </div>

      <div className='footer-logo-container col-md-4 mt-5 mt-md-0'>
        <div className='row m-0 p-0 w-100'>
            <div className='col-xs-6 col-sm-6 w-50'>
            <div className='footer-options-container-two d-md-none flex-column'>
                <div className='footer-links mt-5 d-sm-flex justify-content-start flex-column'>
                  <div className='mb-3'>
                  <a href='https://xrcouture.com/' target='_blank' className='text-white text-decoration-none'>
                  Web2 Collection
                    </a>
                    </div>
                  <div className='mb-3'>
                  <a href='https://metadrip.xrcouture.com/' target='_blank' className='text-white text-decoration-none'>
                  Web3 Collection
                    </a>
                    </div>
                  <div className='mb-3'>
                  <a href='/contact' className='text-white text-decoration-none'>
                  Contact Us
            </a>
                    </div>
                </div>

      </div>
            </div>
            <div className='col-xs-6 col-sm-6 w-50'>
            <img className='footer-logo mt-3 mb-3 mt-md-0' src={footerLogo} alt=""></img>
            </div>
            <div className='footer-logo-subtitle d-flex flex-column justify-contents-center align-items-center'>
              {/* <div>XR COUTURE 2023</div> */}
              <div className='mt-2 mb-4'>All Right Reserved&#8482; 2023</div>z
            </div>
        </div>

      </div>



    </div>

    </>
  )
}

export default Footer