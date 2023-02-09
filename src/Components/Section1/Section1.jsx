import React from 'react'
import './section1.css'
import img from '../../assets/about-img.png'
import { IoMdRefresh } from 'react-icons/io';

function Section1() {
    // const text = document.querySelector(".text p")
    //  text.innerHTML = text.innerHTML.split("").map((char,i)=>`<span style="transform:rotate(${i*5}deg)">${char}</span>`).join("")
    const text = "Cross Metaverse wearables"

  return (
    <div className='about'>
        <div className='row'>
            <div className='col-sm-6 about-container'>
                <p className="about-title">ABOUT</p>
                <p className='about-subtitle'>
                XR Couture is a leading digital wearables platform that creates hyper-realistic 3D digital wearables which can be used on avatars across and online games multiple metaverse platforms
                </p>
                {/* refresh button for mobile */}

                <div className='refresh-btn-mob d-sm-none'>
                <div className='icon'>
                    <IoMdRefresh size={50}  color="white" style={{color:"white", fontSize:"100px"}}/>
                </div>
                <div className='text'>
                        {text.split("").map((char,i)=>(
                            <span style={{transform:`rotate(${i*15}deg)`}} key={i}>{char}</span>
                        ))} 
                </div>
                
                </div>

                
                </div>

                {/* refresh button for desktop */}
                <div className='refresh-btn-des d-none d-sm-flex'>
                <div className='icon'>
                    <IoMdRefresh size={30}  color="white" style={{color:"white", fontSize:"100px"}}/>
                </div>
                <div className='text'>
                        {text.split("").map((char,i)=>(
                            <span style={{transform:`rotate(${i*14}deg)`}} key={i}>{char}</span>
                        ))} 
                </div>
                
                </div>
            <div className='col-sm-6 about-img-contaier'>
                <img src={img} alt="" className='about-img' />
            </div>
        </div>
    </div>
  )
}

export default Section1