import React from 'react'
import './section1.css'
import img from '../../assets/about-img.png'
function Section1() {
  return (
    <div className='about'>
        <div className='row'>
            <div className='col-md-6 about-container'>
                <p className="about-title">ABOUT US</p>
                <p className='about-subtitle'>
                XR Couture is a leading digital wearables platform that creates hyper-realistic 3D digital wearables which can be used on avatars across and online games multiple metaverse platforms
                </p>
                <div className='refresh-btn'>

                </div>
            </div>
            <div className='col-md-6 about-img-contaier'>
                <img src={img} alt="" className='about-img' />
            </div>
        </div>
    </div>
  )
}

export default Section1