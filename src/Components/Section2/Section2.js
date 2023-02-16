import React from 'react'
import './section2.css'

const video1 = 'https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/XRC_Homepage/homepage_contents/CristalTrench.mp4'
const video2 = 'https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/XRC_Homepage/homepage_contents/8.mp4'
const video3 = 'https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/XRC_Homepage/homepage_contents/31.mp4'
const qrnew = 'https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/XRC_Homepage/homepage_contents/snapcode.webp'

// import AnimatedText from 'react-animated-text-content';

function Section2() {
  return (
    <div className='try-on-ar'>
    
      {/* <AnimatedText
        type="chars" // animate words or chars
        animation={{
            x: '200px',
            y: '200px',
            scale: 1.1,
            ease: 'ease-in-out',
        }}
        animationType="wave"
        interval={0.6}
        duration={.5  }
        tag="p"
        className="animated-paragraph discover-style"
        includeWhiteSpaces
        threshold={0.3}
        rootMargin="20%"
        > */}
      {/* <div className='discover-style text-center'>TRY  ON AR</div> */}
      {/* </AnimatedText> */}

      <div className='w-100 d-flex justify-content-center'>
        <h1 className="discover-style animate__animated animate__fadeInDown">TRY ON AR</h1>
      </div>

      <div className='row cards-overall-container mt-5'>

        <div className='col-sm-4 d-flex justify-content-center mobile-ar-card'>
          <div className='card'>
            <div className='ar-card'>
              <div className='img-container'>
                <video src={video2} autoPlay loop muted className="snap-img" />
                <h5 className='card-text text-bold about-subtitle'>Flora Flamboyance</h5>
              </div>
            </div>
          </div>
        </div>

        <div className='col-sm-4 d-flex justify-content-center'>
          <div className='card'>
            <div className='ar-card'>
              <div className='img-container'>
                <img src={qrnew} alt="" className="qr" />
                <video src={video1} autoPlay loop muted className="snap-img" />
                <h5 className='about-subtitle card-text'>Cristal Trench</h5>

              </div>
            </div>
          </div>
        </div>

        <div className='col-sm-4 d-flex justify-content-center'>
          <div className='card'>
            <div className='ar-card'>
              <div className='img-container'>
                <video src={video3} autoPlay loop muted className="snap-img" />
                <h5 className='card-text about-subtitle'>Vibrance Splash</h5>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Section2