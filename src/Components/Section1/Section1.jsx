import React, { useState, useEffect } from 'react'
import { IoMdRefresh } from 'react-icons/io';
import svg from '../../assets/done.svg'
import FadeIn from 'react-fade-in';
import './section1.css'

import { ModelData } from '../../Models/ModelData'

import ModelComponent from './ModelComponent'

function Section1() {

    const [count, setCount] = useState(0)
    const modelArray = ["Clo3d", "Roblox" , "Decentraland" , "Sandbox" ]
    const [item, setItem] = useState(ModelData[modelArray[count]])

    const [transition, setTransition] = useState(false)


    useEffect(() => {
        setItem(ModelData[modelArray[count]])
    }, [count])
    


    const changeIMG = () => {

        if (!transition) {
                    // setCount((prev) => ((prev+1)%4))
        document.getElementsByClassName('overlay')[0].style.zIndex = "11"


        document.getElementsByClassName('overlay')[0].classList.toggle("show")

        // document.getElementById("video-class").classList.add("fadeOut")
        // document.getElementById("video-class").classList.remove("fadeIn")

        document.getElementById("video-subtitle").classList.add("fadeOut")
        document.getElementById("video-subtitle").classList.remove("fadeIn")
        document.getElementById("video-subtitle").style.visibility = "hidden"



        // document.getElementById("model-bg").classList.add("fadeOut")
        // document.getElementById("model-bg").classList.remove("fadeIn")
        // document.getElementById("model-bg").style.visibility = "hidden"

        setTransition((prev) => !prev)
        // console.log("started")
        setTimeout(() => {

            setCount((prev) => ((prev+1)%4))
            
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

                    <img class='model-bg' id='model-bg' src={item.Background} style={{width: "60%", height: "auto", opacity: item.Platform === "Clo3d" ? "0.1" : item.Platform === "Roblox" ? "0.03" : item.Platform === "Decentraland" ? "0.05" : "0.07" }}/>
                    
                    <ModelComponent model={item.Component} position={[0, 0, 0]} />
                    
                    {/* model info */}
                    <div id='video-subtitle' className='text-white d-flex flex-column video-subtitle align-items-end' style={{ fontFamily: "Clash Display Light" }}>
                        <div>Platform: {item.Platform}</div>
                        <div>{item.Platform !== "Sandbox" ? "Polycount:" : ""} {item.Polycount}</div>
                        <div>{item.Platform !== "Sandbox" ? "Texture Size:" : ""} {item.Texture}</div>
                    </div>
                
                </div>

                {/* refresh button for desktop */}
                <div onClick={changeIMG} style={{cursor: "pointer", zIndex: "100"}} className='refresh-btn-des d-none d-sm-flex'>
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

                {/* TEXT */}
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
                    {/* ABOUT */}
                    {/* </AnimatedText> */}
                    <div className='about-title pb-4'>ABOUT</div>

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