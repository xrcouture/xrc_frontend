import React, { useEffect, useState } from "react";
import "./header.css";
// import hl from '../../assets/xrcnew.png'

import { Squeeze as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [size, setSize] = useState("sm");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const headerLogo =
    "https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/XRC_Homepage/homepage_contents/xrcnew.webp";

  const mediaMenuQueries = {
    small: "26",
    large: "32",
  };

  const width = window.innerWidth;

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    if (width < 576) {
      setSize("small");
    } else if (width >= 576) {
      setSize("large");
    }
    else if (width >= 576) {
      setSize("large")
    }
  }, [screenWidth])

  const showMobileMenu = () => {
    var header = document.querySelector('.demo');
    header.classList.toggle('menu-opened');
  }
  

  return (
    <div className="header-container">
      <Link to={"/"} className="xrc-logo-container">
        {/* <img className="xrc-logo" src={headerLogo}></img> */}
        <img className="xrc-logo" src={headerLogo}></img>
        <div className="logo-border"></div>
      </Link>

      <div className="header-options d-none d-md-flex align-items-center">
        {/* <div className='header-options-links d-none d-sm-flex'> */}
        <div className="header-link header-options-item">
          <a
            href="https://web2.xrcouture.com/collections/web2"
            target="_blank"
            style={{ color: "white" }}
          >
            Web2 Collection
          </a>
        </div>
        <div className="header-link header-options-item">
          <a
            href="https://metadrip.xrcouture.com/"
            target="_blank"
            style={{ color: "white" }}
          >
            Web3 Collection
          </a>
        </div>
        {/* </div> */}

        <button className="header-options-button header-options-item">
          <Link to={"/contact"} style={{ color: "white" }}>
            Contact Us
          </Link>
        </button>
      </div>

      <div className='d-md-none' onClick={showMobileMenu} style={{zIndex: "100"}}>
          <Hamburger size={mediaMenuQueries[`${size}`]} color='#ffffff' />
      </div>

        <div class="demo d-md-none" style={{position: "absolute", width: "100%", top: "5rem", backgroundColor: "#000", height: "auto", visibility: "hidden", left: "0"}}>
          <ul class="menu">
            <li class="menu-item">
            <a
            href="https://web2.xrcouture.com/collections/web2"
            target="_blank"
            style={{ color: "white" }}
          >
            Web2 Collection
          </a>
              </li>
            <li class="menu-item">
            <a
            href="https://metadrip.xrcouture.com/"
            target="_blank"
            style={{ color: "white" }}
          >
            Web3 Collection
          </a>
              </li>
            <li class="menu-item">
              <Link to={'/contact'} style={{color:"white"}}>Contact Us</Link>
            </li>
          </ul>
        </div>

    </div>
  );
};

export default Header;
