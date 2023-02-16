import React from 'react'
import './section2.css'

const video1 = 'https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/XRC_Homepage/homepage_contents/CrystalTrench.mp4'
const video2 = 'https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/XRC_Homepage/homepage_contents/Hijikata-preview.mp4'
const video3 = 'https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/XRC_Homepage/homepage_contents/Ryoma-preview.mp4'
const qrnew1 = 'https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/XRC_Homepage/homepage_contents/snapcode.webp'
const qrnew2 = 'https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/XRC_Homepage/homepage_contents/hijikata_snapcode.png'
const qrnew3 = 'https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/XRC_Homepage/homepage_contents/ryoma_snapcode.png'

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
                <a rel="noreferrer" target={'_blank'} href='https://lens.snapchat.com/1257e71f11094ab99530cd5cd635b85d'>
                  <img src={qrnew3} alt="" className="qr" />
                </a>
                <video src={video3} autoPlay loop muted playsInline className="snap-img" />
                <h5 className='card-text about-subtitle'>Sega - Ryoma</h5>
              </div>
            </div>
          </div>
        </div>

        <div className='col-sm-4 d-flex justify-content-center'>
          <div className='card'>
            <div className='ar-card'>
              <div className='img-container'>
                <a rel="noreferrer" target={'_blank'} href='https://lens.snapchat.com/435beccb14744014963d4661abd70fab'>
                  <img src={qrnew1} alt="" className="qr" />
                </a>
                <video src={video1} autoPlay loop muted playsInline className="snap-img" />
                <h5 className='about-subtitle card-text'>Cristal Trench</h5>

              </div>
            </div>
          </div>
        </div>

        <div className='col-sm-4 d-flex justify-content-center'>
          <div className='card'>
            <div className='ar-card'>
              <div className='img-container'>
                <a rel="noreferrer" target={'_blank'} href='https://lens.snapchat.com/b9ec83e802404cc59f1d86c0cc12bc60'>
                  <img src={qrnew2} alt="" className="qr" />
                </a>
                <video src={video2} autoPlay loop muted playsInline className="snap-img" />
                <h5 className='card-text text-bold about-subtitle'>Sega - Hijikata</h5>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Section2