import React, { useState } from 'react'
import './section1.css'
import { IoMdRefresh } from 'react-icons/io';
import svg from '../../assets/done.svg'
import FadeIn from 'react-fade-in';

import image1 from '../../assets/2.png'
import image2 from '../../assets/3.png'
import image3 from '../../assets/4.png'

import { SANDBOX } from '../../Models/SANDBOX'
import { DCL } from '../../Models/DCL'
import { OG } from '../../Models/OG'
import { ROBLOX } from '../../Models/ROBLOX'

import ModelComponent from './ModelComponent';

function Section1() {

    // const [currModel, setCurrModel] = useState(<ROBLOX />)
    const [count, setCount] = useState(0)
    const modelArray = [<DCL />, <SANDBOX />, <OG />, <ROBLOX />]

    // const imgArray = [image1, image2, image3]

    // const text = "Cross Metaverse wearables"

    const changeIMG = () => {
        document.getElementsByClassName('overlay')[0].classList.toggle("show")

        document.getElementById("video-class").classList.add("fadeOut")
        document.getElementById("video-class").classList.remove("fadeIn")

        document.getElementById("video-subtitle").classList.add("fadeOut")
        document.getElementById("video-subtitle").classList.remove("fadeIn")

        setTimeout(() => {
            document.getElementsByClassName('overlay')[0].classList.toggle("show")
            document.getElementById("video-class").style.visibility = "hidden"
            document.getElementById("video-subtitle").style.visibility = "hidden"

            setTimeout(() => {
                // setCount((prev) => prev + 1)
                let videoClass = document.getElementById("video-class")

                setCount((prev) => prev+1)

                videoClass.style.visibility = "visible"
                document.getElementById("video-subtitle").style.visibility = "visible"

                videoClass.classList.add("fadeIn")
                videoClass.classList.remove("fadeOut")

                setTimeout(() => {
                    document.getElementById("video-subtitle").classList.add("fadeIn")
                    document.getElementById("video-subtitle").classList.remove("fadeOut")
                }, 200)

            }, 500);

        }, 1000);

    }


    return (
        <div className='about'>
            <div className='row about-section-container' style={{ height: "100%" }}>

                <div className='col-sm-6 about-img-container d-flex justify-content-center align-items-center' style={{ height: "100%", position: "relative", overflow: "hidden" }}>
                    
                    {/* animation */}
                    <div class="overlay">
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                    </div>

                    {/* <img id='video-class' src={imgArray[(count % 3)]} style={{ width: "80%", height: "auto" }} /> */}
                    <ModelComponent model={modelArray[count%4]} position={[-200, 0, 0]} />
                    
                    {/* model info */}
                    <div id='video-subtitle' className='text-white d-flex flex-column video-subtitle' style={{ fontFamily: "Clash Display Light" }}>
                        <div className='d-flex justify-space-between'>
                            <div>POLYCOUNT:</div>
                            <div> &nbsp; 20000</div>
                        </div>
                        <div className='d-flex justify-space-between'>
                            <div>TEXTURE SIZE:</div>
                            <div> 5000</div>
                        </div>
                    </div>
                
                </div>

                {/* refresh button for desktop */}
                <div onClick={changeIMG} style={{ cursor: "pointer", zIndex: "10000000" }} className='refresh-btn-des d-none d-sm-flex'>
                    <div className='icon'>
                        <IoMdRefresh className='d-md-none' size={35} color="white" style={{ color: "white", fontSize: "100px" }} />
                        <IoMdRefresh className='d-none d-md-block d-lg-none' size={40} color="white" style={{ color: "white", fontSize: "100px" }} />
                        <IoMdRefresh className='d-none d-lg-block d-xl-none' size={45} color="white" style={{ color: "white", fontSize: "100px" }} />
                        <IoMdRefresh className='d-none d-xl-block' size={50} color="white" style={{ color: "white", fontSize: "100px" }} />
                    </div>
                    <div className='text'>
                        <img src={svg} alt="" />
                    </div>
                </div>


                <div className='col-sm-6 about-container'>
                    {/* <AnimatedText
                        type="chars" // animate words or chars
                        animation={{
                            x: '200px',
                            y: '200px',
                            scale: 1.1,
                            ease: 'ease-in-out',
                        }}
                        animationType="wave"
                        interval={0}
                        duration={0.5}
                        tag="p"
                        className="animated-paragraph about-title"
                        includeWhiteSpaces
                        threshold={0.5}
                        rootMargin="20%"
                    > */}
                    <div className='about-title pb-4'>ABOUT</div>
                    {/* ABOUT */}
                    {/* </AnimatedText> */}

                    <FadeIn>
                        <div className="about-subtitle">XR Couture is a leading digital wearables platform which creates hyper-realistic 3D digital wearables which can be worn on avatars across multiple metaverse platforms and online games.</div>
                    </FadeIn>
                    {/* refresh button for mobile */}

                    <div onClick={changeIMG} className='refresh-btn-mob d-sm-none'>
                        <div className='icon'>
                            <IoMdRefresh size={30} color="white" style={{ color: "white", fontSize: "100px" }} />
                        </div>
                        <div className='text'>
                            <img src={svg} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Section1