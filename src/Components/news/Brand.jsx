import React from "react";
// vogue business - news
import vogue from "../../assets/brands-img/1.png";
//bwm - brands - 3
import bmw from "../../assets/brands-img/2.png";
//polygon - brands - 4
import polygon from "../../assets/brands-img/3.png";
//ldc - brands - 6
import ldc from "../../assets/brands-img/4.png";
//forbes - news - 2
import forbes from "../../assets/brands-img/5.png";
//snapchat - brand - 2
import snapchat from "../../assets/brands-img/6.png";
//the week - news - 5
import theweek from "../../assets/brands-img/7.png";
//decenteraland - brand - 4
import decenteraland from "../../assets/brands-img/8.png";
//sega - brand - 1
import sega from "../../assets/brands-img/9.webp";
//bazaar - news - 1
import bazaar from "../../assets/brands-img/10.png";
// the crown - brand - 6
import crown from "../../assets/brands-img/11.png";
//wsj - news - 4
import wsj from "../../assets/brands-img/12.png";
// elle girl - news - 6
import elle from "../../assets/brands-img/13.png";
//business insider
import bi from "../../assets/brands-img/14.png";
//the national
import tn from "../../assets/brands-img/15.png";
import "./brand.css";

function Brand1() {
  return (
    <>
    <div className="d-flex flex-row overflow-hidden">
    <div className="brand-heading">
     As seen in
    </div>    
    <div
      style={{ borderBottom: ".5px solid #fff", borderTop: ".5px solid #fff" }}
    >
      <section className="logoMarqueeSection">
        <div className="" id="logoMarqueeSection">
          <div className="default-content-container flex items-center">
            <div className="default-content-container-inner marquee-wrapper relative overflow-hidden inline-block">
              <div className="marquee" style={{ animationDuration: "60s" }}>
              {/* <a>
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
                </a> */}



                <a>
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
                </a>
              </div>


              <div className="marquee" style={{ animationDuration: "60s" }}>
              {/* <a>
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
                </a> */}



                <a>
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
                </a>
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

export default Brand1;
