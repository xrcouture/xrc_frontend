import React from 'react'
import './section1.css'
import img from '../../assets/about-img.png'
import { IoMdRefresh } from 'react-icons/io';
import svg from '../../assets/done.svg'
import AnimatedText from 'react-animated-text-content';

function Section1() {
    // const text = document.querySelector(".text p")
    //  text.innerHTML = text.innerHTML.split("").map((char,i)=>`<span style="transform:rotate(${i*5}deg)">${char}</span>`).join("")
    const text = "Cross Metaverse wearables"

  return (
    <div className='about'>
        <div className='row'>
            <div className='col-sm-6 about-container'>
            <AnimatedText
                    type="chars" // animate words or chars
                    animation={{
                        x: '200px',
                        y: '200px',
                        scale: 1.1,
                        ease: 'ease-in-out',
                    }}
                    animationType="wave"
                    interval={0.6}
                    duration={1}
                    tag="p"
                    className="animated-paragraph about-title"
                    includeWhiteSpaces
                    threshold={0.3}
                    rootMargin="20%"
                    >
                    ABOUT
                    </AnimatedText>
                    <AnimatedText
                    type="words" // animate words or chars
                    animation={{
                        x: '200px',
                        y: '-20px',
                        scale: 1.1,
                        ease: 'ease-in-out',
                    }}
                    animationType="float"
                    interval={0.05}
                    duration={1}
                    tag="p"
                    className="animated-paragraph about-subtitle"
                    includeWhiteSpaces
                    threshold={0.2}
                    rootMargin="20%"
                    >
                    XR Couture is a leading digital wearables platform that creates hyper-realistic 3D digital wearables which can be used on avatars across and online games multiple metaverse platforms
                    </AnimatedText>;

                {/* refresh button for mobile */}

                <div className='refresh-btn-mob d-sm-none'>
                <div className='icon'>
                    <IoMdRefresh size={50}  color="white" style={{color:"white", fontSize:"100px"}}/>
                </div>
                <div className='text'>
                <img src={svg} alt="" />
                </div>
                </div> 
                </div>

                {/* refresh button for desktop */}
                <div className='refresh-btn-des d-none d-sm-flex'>
                <div className='icon'>
                    <IoMdRefresh size={35}  color="white" style={{color:"white", fontSize:"100px"}}/>
                </div>
                <div className='text'>
                <img src={svg} alt="" />
                </div>
                {/* <div className='text'>
                        {text.split("").map((char,i)=>(
                            <span style={{transform:`rotate(${i*14}deg)`}} key={i}>{char}</span>
                        ))} 
                </div> */}
                
                </div>
            <div className='col-sm-6 about-img-contaier'>
                <img src={img} alt="" className='about-img' />
            </div>
        </div>
    </div>
  )
}

export default Section1