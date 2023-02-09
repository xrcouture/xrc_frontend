import React from 'react'
import './section2.css'
import snap from '../../assets/snap.png'
import qr from '../../assets/snap-qr.png'
function Section2() {
  return (
    <div className='try-on-ar'>
      <h1 className="discover-style">TRY ON AR</h1>
      <div className='row cards-overall-container'>
        <div className='col-sm-4 d-flex justify-content-center'>
          <div className='card'>
        <div className='ar-card'>
          <div className='img-container'>
            <img src={qr} alt="" className="qr" />
            <img src={snap} alt="" className='snap-img' />
            <h5 className='card-text about-subtitle'>CryptoPunks</h5>
          </div>
        </div>
          </div>
      </div>
        <div className='col-sm-4 d-flex justify-content-center'>
          <div className='card'>
        <div className='ar-card'>
          <div className='img-container'>
            <img src={qr} alt="" className="qr" />
            <img src={snap} alt="" className='snap-img' />
            <h5 className='about-subtitle card-text'>CryptoPunks</h5>
          </div>
        </div>
          </div>
      </div>
        <div className='col-sm-4 d-flex justify-content-center'>
          <div className='card'>
        <div className='ar-card'>
          <div className='img-container'>
            <img src={qr} alt="" className="qr" />
            <img src={snap} alt="" className='snap-img' />
            <h5 className='card-text about-subtitle'>CryptoPunks</h5>
          </div>
        </div>
          </div>
      </div>

      </div>

    </div>
  )
}

export default Section2