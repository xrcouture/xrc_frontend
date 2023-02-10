import React from 'react'
import './brand.css'
import logo1 from '../../assets/xrc-logo/1.png'
import logo2 from '../../assets/xrc-logo/2.png'
import logo3 from '../../assets/xrc-logo/3.png'
import logo4 from '../../assets/xrc-logo/4.png'
import logo5 from '../../assets/xrc-logo/5.png'
function Brand() {
  return (
    <div>
      <section class="logoMarqueeSection">
	<div class="" id="logoMarqueeSection">
		<div class="default-content-container flex items-center">
			<div class="default-content-container-inner marquee-wrapper relative overflow-hidden inline-block">
				<div class="marquee" style={{animationDuration: "30s"}}>
					<a target="_blank"><img src={logo1} title="" class="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={logo2} title="" class="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					{/* <a target="_blank"><img src={logo3} title="" class="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a> */}
					<a target="_blank"><img src={logo4} title="" class="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={logo5} title="" class="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
				</div>
        <div class="marquee" style={{animationDuration: "30s"}}>
        <a target="_blank"><img src={logo1} title="" class="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={logo2} title="" class="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					{/* <a target="_blank"><img src={logo3} title="" class="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a> */}
					<a target="_blank"><img src={logo4} title="" class="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={logo5} title="" class="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
				</div>
			</div>
		</div>
	</div>
</section>
    </div>
  )
}

export default Brand