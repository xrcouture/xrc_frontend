import React, { useState } from 'react'
import './section1.css'
import img from '../../assets/about-img.png'
import { IoMdRefresh } from 'react-icons/io';
import svg from '../../assets/done.svg'
import AnimatedText from 'react-animated-text-content';
import FadeIn from 'react-fade-in';
// import vid from '../../assets/high2.mp4'

function Section1() {
    // const text = document.querySelector(".text p")
    //  text.innerHTML = text.innerHTML.split("").map((char,i)=>`<span style="transform:rotate(${i*5}deg)">${char}</span>`).join("")
    const text = "Cross Metaverse wearables"
    // const [animating, setAnimating] = useState(false)

    const changeIMG = () => {
        console.log("first")
        // setAnimating((prev)=>!prev)
        console.log("called")
        document.getElementsByClassName('overlay')[0].classList.toggle("show")
        document.getElementById("video-class").classList.add("fadeOut")
        document.getElementById("video-class").classList.remove("fadeIn")

        setTimeout(() => {
            document.getElementsByClassName('overlay')[0].classList.toggle("show")

            document.getElementById("video-class").style.visibility = "hidden"
            setTimeout(() => {
                document.getElementById("video-class").style.visibility = "visible"
                document.getElementById("video-class").classList.add("fadeIn")
                document.getElementById("video-class").classList.remove("fadeOut")
                const video = document.getElementById("video-class")
                video.defaultPlaybackRate = 0.5
                video.load()
                video.play()
            }, 500);
            // setAnimating((prev)=>!prev)
        }, 1000);
    }

    return (
        <div className='about'>
            <div className='row about-section-container' style={{height: "100%"}}>
            
            <div className='col-sm-6 about-img-container d-flex justify-content-center align-items-center' style={{height: "100%", position: "relative", overflow: "hidden"}}>
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
                    {/* <img src={img} alt="" className='about-img' /> */}
                    <video  autoPlay id='video-class' muted src='\src\assets\high2.mp4' style={{width: "90%", marginTop: "-10%", height: "100%"}}></video>
                </div>

                {/* refresh button for desktop */}
                <div onClick={changeIMG} style={{cursor: "pointer", zIndex: "10000000"}} className='refresh-btn-des d-none d-sm-flex'>
                    <div className='icon'>
                        <IoMdRefresh size={45} color="white" style={{ color: "white", fontSize: "100px" }} />
                    </div>
                    <div className='text'>
                        <img src={svg} alt="" />
                    </div>
                </div>


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
                        interval={0}
                        duration={0.5}
                        tag="p"
                        className="animated-paragraph about-title"
                        includeWhiteSpaces
                        threshold={0.5}
                        rootMargin="20%"
                    >
                        ABOUT
                    </AnimatedText>

                    {/* <AnimatedText
                        type="words" // animate words or chars
                        animation={{
                            x: '200px',
                            y: '-20px',
                            scale: 1.1,
                            ease: 'ease-in-out',
                        }}
                        animationType="lights"
                        interval={0.01}
                        duration={0.5}
                        tag="p"
                        className="animated-paragraph about-subtitle"
                        includeWhiteSpaces
                        threshold={0.2}
                        rootMargin="20%"
                    >
                        XR Couture is a leading digital wearables platform that creates hyper-realistic 3D digital wearables which can be used on avatars across and online games multiple metaverse platforms
                    </AnimatedText>; */}

                    <FadeIn>
                        <div className="about-subtitle">XR Couture is a leading digital wearables platform that creates hyper-realistic 3D digital wearables which can be used on avatars across and online games multiple metaverse platforms</div>
                    </FadeIn>
                    {/* refresh button for mobile */}

                    <div onClick={changeIMG} className='refresh-btn-mob d-sm-none'>
                        <div className='icon'>
                            <IoMdRefresh size={50} color="white" style={{ color: "white", fontSize: "100px" }} />
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