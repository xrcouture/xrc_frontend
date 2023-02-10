import React from 'react'
import logo1 from '../../assets/xrc-logo/1.png'
import logo2 from '../../assets/xrc-logo/2.png'
import logo3 from '../../assets/xrc-logo/3.png'
import logo4 from '../../assets/xrc-logo/4.png'
import logo5 from '../../assets/xrc-logo/5.png'

import './brand.css'

function Brand() {
	return (
		<div style={{ borderBottom: ".5px solid #fff", borderTop: ".5px solid #fff" }}>
			<section className="logoMarqueeSection">
				<div className="" id="logoMarqueeSection">
					<div className="default-content-container flex items-center">
						<div className="default-content-container-inner marquee-wrapper relative overflow-hidden inline-block">
							<div className="marquee" style={{ animationDuration: "30s" }}>
								<a target="_blank"><img src={logo1} title="" className="marqueelogo" style={{ width: "auto", maxWidth: "none" }} /></a>
								<a target="_blank"><img src={logo2} title="" className="marqueelogo" style={{ width: "auto", maxWidth: "none" }} /></a>
								{/* <a target="_blank"><img src={logo3} title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a> */}
								<a target="_blank"><img src={logo4} title="" className="marqueelogo" style={{ width: "auto", maxWidth: "none" }} /></a>
								<a target="_blank"><img src={logo5} title="" className="marqueelogo" style={{ width: "auto", maxWidth: "none" }} /></a>
							</div>
							<div className="marquee" style={{ animationDuration: "30s" }}>
								<a target="_blank"><img src={logo1} title="" className="marqueelogo" style={{ width: "auto", maxWidth: "none" }} /></a>
								<a target="_blank"><img src={logo2} title="" className="marqueelogo" style={{ width: "auto", maxWidth: "none" }} /></a>
								{/* <a target="_blank"><img src={logo3} title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a> */}
								<a target="_blank"><img src={logo4} title="" className="marqueelogo" style={{ width: "auto", maxWidth: "none" }} /></a>
								<a target="_blank"><img src={logo5} title="" className="marqueelogo" style={{ width: "auto", maxWidth: "none" }} /></a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Brand