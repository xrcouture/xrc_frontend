import React from 'react'
import logo1 from '../../assets/xrc-logo/1.png'
import logo2 from '../../assets/xrc-logo/2.png'
import logo3 from '../../assets/xrc-logo/3.png'
import logo4 from '../../assets/xrc-logo/4.png'
import logo5 from '../../assets/xrc-logo/5.png'
import l1 from '../../assets/brands-img/1.png'
import l2 from '../../assets/brands-img/2.png'
import l3 from '../../assets/brands-img/3.png'
import l4 from '../../assets/brands-img/4.png'
import l5 from '../../assets/brands-img/5.png'
import l6 from '../../assets/brands-img/6.png'
import l7 from '../../assets/brands-img/7.png'
import l8 from '../../assets/brands-img/8.png'
import l9 from '../../assets/brands-img/9.png'
import l10 from '../../assets/brands-img/10.png'
import l11 from '../../assets/brands-img/11.png'
import l12 from '../../assets/brands-img/12.png'
import l13 from '../../assets/brands-img/13.png'

import './brand.css'

function Brand() {
	return (
		<div style={{ borderBottom: ".5px solid #fff", borderTop: ".5px solid #fff" }}>
			<section className="logoMarqueeSection">
				<div className="" id="logoMarqueeSection">
					<div className="default-content-container flex items-center">
						<div className="default-content-container-inner marquee-wrapper relative overflow-hidden inline-block">
							<div className="marquee" style={{ animationDuration: "57s" }}>
							<a target="_blank"><img src={l1} title="" className="marqueelogo" style={{ width: "auto", maxWidth: "none" }} /></a>
								<a><img src={l2} title="" className="marqueelogo" style={{ width: "auto", maxWidth: "none" }} /></a>
								<a><img src={l3} title="" className="marqueelogo" style={{ width: "auto", maxWidth: "none" }} /></a>
								<a><img src={l4} title="" className="marqueelogo" style={{ width: "auto", maxWidth: "none" }} /></a>
								<a><img src={l5} title="" className="marqueelogo" style={{ width: "auto", maxWidth: "none" }} /></a>
								<a><img src={l6} title="" className="marqueelogo" style={{ width: "auto", maxWidth: "none" }} /></a>
								<a><img src={l7} title="" className="marqueelogo" style={{ width: "auto", maxWidth: "none" }} /></a>
								<a><img src={l8} title="" className="marqueelogo" style={{ width: "auto", maxWidth: "none" }} /></a>
								<a><img src={l9} title="" className="marqueelogo" style={{ width: "auto", maxWidth: "none" }} /></a>
								<a><img src={l10} title="" className="marqueelogo" style={{ width: "auto", maxWidth: "none" }} /></a>
								<a><img src={l11} title="" className="marqueelogo" style={{ width: "auto", maxWidth: "none" }} /></a>
								<a><img src={l12} title="" className="marqueelogo" style={{ width: "auto", maxWidth: "none" }} /></a>
								<a><img src={l13} title="" className="marqueelogo" style={{ width: "auto", maxWidth: "none" }} /></a>
							</div>
							<div className="marquee" style={{ animationDuration: "57s" }}>
								<a><img src={l1} title="" className="marqueelogo" style={{ width: "auto", maxWidth: "none" }} /></a>
								<a><img src={l2} title="" className="marqueelogo" style={{ width: "auto", maxWidth: "none" }} /></a>
								<a><img src={l3} title="" className="marqueelogo" style={{ width: "auto", maxWidth: "none" }} /></a>
								<a><img src={l4} title="" className="marqueelogo" style={{ width: "auto", maxWidth: "none" }} /></a>
								<a><img src={l5} title="" className="marqueelogo" style={{ width: "auto", maxWidth: "none" }} /></a>
								<a><img src={l6} title="" className="marqueelogo" style={{ width: "auto", maxWidth: "none" }} /></a>
								<a><img src={l7} title="" className="marqueelogo" style={{ width: "auto", maxWidth: "none" }} /></a>
								<a><img src={l8} title="" className="marqueelogo" style={{ width: "auto", maxWidth: "none" }} /></a>
								<a><img src={l9} title="" className="marqueelogo" style={{ width: "auto", maxWidth: "none" }} /></a>
								<a><img src={l10} title="" className="marqueelogo" style={{ width: "auto", maxWidth: "none" }} /></a>
								<a><img src={l11} title="" className="marqueelogo" style={{ width: "auto", maxWidth: "none" }} /></a>
								<a><img src={l12} title="" className="marqueelogo" style={{ width: "auto", maxWidth: "none" }} /></a>
								<a><img src={l13} title="" className="marqueelogo" style={{ width: "auto", maxWidth: "none" }} /></a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Brand