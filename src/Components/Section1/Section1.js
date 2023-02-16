import React, { useState, useEffect, lazy, Suspense } from 'react'
// import { IoMdRefresh } from 'react-icons/io';
import FadeIn from 'react-fade-in';
import './section1.css'

import { ModelData } from '../../Models/ModelData'
import AnimatedText from "react-animated-text-content"

const ModelComponent = lazy(() => import('./ModelComponent'));


function Section1() {

    const svg = "https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/XRC_Homepage/homepage_contents/done.webp"
    const [count, setCount] = useState(0)
    const modelArray = ["Clo3d", "Roblox", "Decentraland", "Sandbox"]
    const [item, setItem] = useState(ModelData[modelArray[count]])

    const [aboutAnimation, setAboutAnimation] = useState(true)

    const [transition, setTransition] = useState(false)


    useEffect(() => {
        setItem(ModelData[modelArray[count]])
    }, [count])



    const changeIMG = () => {

        setAboutAnimation(false)

        if (!transition) {
            // setCount((prev) => ((prev+1)%4))
            document.getElementsByClassName('overlay')[0].style.zIndex = "11"


            document.getElementsByClassName('overlay')[0].classList.toggle("show")

            // document.getElementById("video-class").classList.add("fadeOut")
            // document.getElementById("video-class").classList.remove("fadeIn")

            document.getElementById("video-subtitle").classList.add("fadeOut")
            document.getElementById("video-subtitle").classList.remove("fadeIn")
            document.getElementById("video-subtitle").style.visibility = "hidden"

            document.getElementById("logo-image").classList.add("fadeOut")
            document.getElementById("logo-image").classList.remove("fadeIn")
            document.getElementById("logo-image").style.visibility = "hidden"




            // document.getElementById("model-bg").classList.add("fadeOut")
            // document.getElementById("model-bg").classList.remove("fadeIn")
            // document.getElementById("model-bg").style.visibility = "hidden"

            setTransition((prev) => !prev)
            // console.log("started")
            setTimeout(() => {

                setCount((prev) => ((prev + 1) % 4))

                // document.getElementById("video-class").style.visibility = "hidden"

                setTimeout(() => {

                    document.getElementsByClassName('overlay')[0].classList.toggle("show")




                    //     // setCount((prev) => prev + 1)
                    // let videoClass = document.getElementById("video-class")

                    //     setCount((prev) => prev+1)

                    //     videoClass.style.visibility = "visible"


                    // videoClass.classList.add("fadeIn")
                    // videoClass.classList.remove("fadeOut")


                    // document.getElementById("model-bg").classList.add("fadeIn")
                    // document.getElementById("model-bg").classList.remove("fadeOut")
                    // document.getElementById("model-bg").style.visibility = "visible"

                    setTimeout(() => {
                        document.getElementById("video-subtitle").classList.add("fadeIn")
                        document.getElementById("video-subtitle").classList.remove("fadeOut")
                        document.getElementById("video-subtitle").style.visibility = "visible"

                        document.getElementById("logo-image").classList.add("fadeIn")
                        document.getElementById("logo-image").classList.remove("fadeOut")
                        document.getElementById("logo-image").style.visibility = "visible"

                        document.getElementsByClassName('overlay')[0].style.zIndex = "9"

                        setTransition((prev) => !prev)
                        // console.log("finished")

                    }, 1000)


                }, 500);

            }, 1000);
        }

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

                    <img class='model-bg' id='model-bg' alt='' src={item.Background} style={{ width: "60%", height: "auto", opacity: "1" }} />

                    <Suspense fallback={
                        <div className='spinner-container'>
                            <div class="spinner-border spinner-border-sm text-white" style={{ "width": "2.5rem", "height": "2.5rem" }} role="status"></div>
                        </div>
                    }>
                        <ModelComponent model={item.Component} position={[0, 0, 0]} />
                    </Suspense>




                    {/* model info */}
                    <div id='video-subtitle' className='text-white d-flex flex-column video-subtitle align-items-start' style={{ fontFamily: "Clash Display Light" }}>
                        <div>{item.Platform !== "Sandbox" ? "Polycount:" : ""} {item.Polycount}</div>
                        <div>{item.Platform !== "Sandbox" ? "Texture Size:" : ""} {item.Texture}</div>
                    </div>
                    <div className='position-absolute logo-image' id='logo-image' ><img src={item.logo} alt="" style={{ maxHeight: item.Platform === "Sandbox" ? "2rem" : "1.5rem" }} /></div>
                </div>

                {/* refresh button for desktop */}
                <div onClick={changeIMG} style={{ cursor: "pointer", zIndex: "100" }} className='refresh-btn-des d-none d-sm-flex'>
                    <div className='icon'>
                        <div className='text-white text-center des-click-here'>
                            CLICK <br /> HERE
                        </div>
                        {/* <IoMdRefresh className='d-md-none' size={35} color="white" style={{ color: "white", fontSize: "100px" }} />
                        <IoMdRefresh className='d-none d-md-block d-lg-none' size={40} color="white" style={{ color: "white", fontSize: "100px" }} />
                        <IoMdRefresh className='d-none d-lg-block d-xl-none' size={45} color="white" style={{ color: "white", fontSize: "100px" }} />
                        <IoMdRefresh className='d-none d-xl-block' size={50} color="white" style={{ color: "white", fontSize: "100px" }} /> */}
                    </div>
                    <div className='text'>
                        <img src={svg} alt="" style={{ position: "relative", height: "100%" }} />
                    </div>
                </div>

                {/* TEXT */}
                <div className='col-sm-6 about-container'>
                    {
                        aboutAnimation ?
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
                            </AnimatedText> :
                            <div className='about-title pb-3'>ABOUT</div>
                    }

                    {/* <div className='pb-4 d-flex flex-row about-title-container'>
                            <div className='about-title   bounce-in-bottom-1'>A</div>
                            <div className='about-title   bounce-in-bottom-2'>B</div>
                            <div className='about-title   bounce-in-bottom-3'>O</div>
                            <div className='about-title   bounce-in-bottom-4'>U</div>
                            <div className='about-title   bounce-in-bottom-5'>T</div>
                        </div> */}

                    {/* <div className='about-title pb-4'>ABOUT</div> */}

                    <FadeIn>
                        <div className="about-subtitle">XR Couture is a leading digital wearables platform that creates hyper-realistic 3D digital wearables which can be worn on avatars across multiple metaverse platforms and online games.</div>
                    </FadeIn>

                    {/* refresh button for mobile */}
                    <div onClick={changeIMG} className='refresh-btn-mob d-sm-none'>
                        <div className='icon'>
                            <div className='text-white text-center mob-click-here'>
                                CLICK <br /> HERE
                            </div>
                            {/* <IoMdRefresh size={30} color="white" style={{ color: "white", fontSize: "100px" }} /> */}
                        </div>
                        <div className='text'>
                            <img src={svg} alt="" style={{ position: "relative", height: "100%" }} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Section1