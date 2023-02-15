import React from "react";
// import bmw from "../../assets/brands-img/2.webp";
// import polygon from "../../assets/brands-img/3.png";
// import ldc from "../../assets/brands-img/4.png";
// import snapchat from "../../assets/brands-img/6.png";
// import decenteraland from "../../assets/brands-img/8.png";
// import sega from "../../assets/brands-img/9.webp";
// import crown from "../../assets/brands-img/11.png";

const bmw = "https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/XRC_Homepage/homepage_contents/2.webp";
const polygon = "https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/XRC_Homepage/homepage_contents/3.webp";
const ldc = "https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/XRC_Homepage/homepage_contents/4.webp";
const snapchat = "https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/XRC_Homepage/homepage_contents/6.webp";
const decenteraland = "https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/XRC_Homepage/homepage_contents/8.webp";
const sega = "https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/XRC_Homepage/homepage_contents/9.webp";
const crown = "https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/XRC_Homepage/homepage_contents/11.webp";

import "./brand.css";

function Brand() {
  return (
    <>
    <div className="d-flex flex-row overflow-hidden">
    <div className="brand-heading" style={{fontFamily:"Clash Display Bold"}}>
     Who we work with  
    </div>    
    <div
      style={{ borderBottom: ".5px solid #fff", borderTop: ".5px solid #fff" }}
    >
      <section className="logoMarqueeSection">
        <div className="" id="logoMarqueeSection">
          <div className="default-content-container flex items-center">
            <div className="default-content-container-inner marquee-wrapper relative overflow-hidden inline-block">
              <div className="marquee" style={{ animationDuration: "60s" }}>
              <a>
                  <img
                    src={sega}
                    title=""
                    className="marqueelogo bmw"
                    style={{ width: "auto", maxWidth: "none" }}
                  />
                </a>
                <a>
                  <img
                    src={snapchat}
                    title=""
                    className="marqueelogo bmw"
                    style={{ width: "auto", maxWidth: "none" }}
                  />
                </a>
                <a>
                  <img
                    src={bmw}
                    title=""
                    className="marqueelogo bmw"
                    style={{ width: "auto", maxWidth: "none" }}
                  />
                </a>
                <a>
                  <img
                    src={decenteraland}
                    title=""
                    className="marqueelogo bmw"
                    style={{ width: "auto", maxWidth: "none" }}
                  />
                </a>
                <a>
                  <img
                    src={polygon}
                    title=""
                    className="marqueelogo"
                    style={{ width: "auto", maxWidth: "none" }}
                  />
                </a>
                <a>
                  <img
                    src={crown}
                    title=""
                    className="marqueelogo bmw"
                    style={{ width: "auto", maxWidth: "none" }}
                  />
                </a>
                <a>
                  <img
                    src={ldc}
                    title=""
                    className="marqueelogo ldc"
                    style={{ width: "auto", maxWidth: "none" }}
                  />
                </a>



                {/* <a>
                  <img
                    src={bazaar}
                    title=""
                    className="marqueelogo bmw"
                    style={{ width: "auto", maxWidth: "none" }}
                  />
                </a>
                <a>
                  <img
                    src={forbes}
                    title=""
                    className="marqueelogo forbes"
                    style={{ width: "auto", maxWidth: "none" }}
                  />
                </a>
                <a>
                  <img
                    src={vogue}
                    title=""
                    className="marqueelogo"
                    style={{ width: "auto", maxWidth: "none" }}
                  />
                </a>
                <a>
                  <img
                    src={wsj}
                    title=""
                    className="marqueelogo bmw"
                    style={{ width: "auto", maxWidth: "none" }}
                  />
                </a>

                <a>
                  <img
                    src={theweek}
                    title=""
                    className="marqueelogo bmw"
                    style={{ width: "auto", maxWidth: "none" }}
                  />
                </a>
                
                
                <a>
                  <img
                    src={elle}
                    title=""
                    className="marqueelogo bmw"
                    style={{ width: "auto", maxWidth: "none" }}
                  />
                </a>
                <a>
                  <img
                    src={tn}
                    title=""
                    className="marqueelogo bmw"
                    style={{ width: "auto", maxWidth: "none" }}
                  />
                </a>
                <a>
                  <img
                    src={bi}
                    title=""
                    className="marqueelogo bmw"
                    style={{ width: "auto", maxWidth: "none" }}
                  />
                </a> */}
              </div>


              <div className="marquee" style={{ animationDuration: "60s" }}>
              <a>
                  <img
                    src={sega}
                    title=""
                    className="marqueelogo bmw"
                    style={{ width: "auto", maxWidth: "none" }}
                  />
                </a>
                <a>
                  <img
                    src={snapchat}
                    title=""
                    className="marqueelogo bmw"
                    style={{ width: "auto", maxWidth: "none" }}
                  />
                </a>
                <a>
                  <img
                    src={bmw}
                    title=""
                    className="marqueelogo bmw"
                    style={{ width: "auto", maxWidth: "none" }}
                  />
                </a>
                <a>
                  <img
                    src={decenteraland}
                    title=""
                    className="marqueelogo bmw"
                    style={{ width: "auto", maxWidth: "none" }}
                  />
                </a>
                <a>
                  <img
                    src={polygon}
                    title=""
                    className="marqueelogo"
                    style={{ width: "auto", maxWidth: "none" }}
                  />
                </a>
                <a>
                  <img
                    src={crown}
                    title=""
                    className="marqueelogo bmw"
                    style={{ width: "auto", maxWidth: "none" }}
                  />
                </a>
                <a>
                  <img
                    src={ldc}
                    title=""
                    className="marqueelogo ldc"
                    style={{ width: "auto", maxWidth: "none" }}
                  />
                </a>



                {/* <a>
                  <img
                    src={bazaar}
                    title=""
                    className="marqueelogo bmw"
                    style={{ width: "auto", maxWidth: "none" }}
                  />
                </a>
                <a>
                  <img
                    src={forbes}
                    title=""
                    className="marqueelogo forbes"
                    style={{ width: "auto", maxWidth: "none" }}
                  />
                </a>
                <a>
                  <img
                    src={vogue}
                    title=""
                    className="marqueelogo"
                    style={{ width: "auto", maxWidth: "none" }}
                  />
                </a>
                <a>
                  <img
                    src={wsj}
                    title=""
                    className="marqueelogo bmw"
                    style={{ width: "auto", maxWidth: "none" }}
                  />
                </a>

                <a>
                  <img
                    src={theweek}
                    title=""
                    className="marqueelogo bmw"
                    style={{ width: "auto", maxWidth: "none" }}
                  />
                </a>
                
                
                <a>
                  <img
                    src={elle}
                    title=""
                    className="marqueelogo bmw"
                    style={{ width: "auto", maxWidth: "none" }}
                  />
                </a>
                <a>
                  <img
                    src={tn}
                    title=""
                    className="marqueelogo bmw"
                    style={{ width: "auto", maxWidth: "none" }}
                  />
                </a>
                <a>
                  <img
                    src={bi}
                    title=""
                    className="marqueelogo bmw"
                    style={{ width: "auto", maxWidth: "none" }}
                  />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>


    </>
  );
}

export default Brand;
