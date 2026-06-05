import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink, NavHashLink } from 'react-router-hash-link';

import Logo from "../../../images/logo.png";
import LogoMob from "../../../images/logo.png";
import LifeStyle from "../../../images/icons/lifeStyle.png";

import { Global } from "./Global";

function Header() {

  function openMenu() {
    document.querySelector("body").classList.add("back");
    document.querySelector("header .headerBottom .navBar").classList.add("active");
  }
  function closeMenu() {
    document.querySelector("body").classList.remove("back");
    document.querySelector("header .headerBottom .navBar").classList.remove("active");
  }

  function addRemoveClass() {
    const header = document.querySelector("header");
    if (window.scrollY > 0) header.classList.add("fixed");
    else header.classList.remove("fixed");
  }
  window.addEventListener("scroll", addRemoveClass);
  window.addEventListener("resize", addRemoveClass);
  window.addEventListener("load", addRemoveClass);


  return (
    <>
      <header>
        <div className="headerTop">
          <div className="container">
            <div className="fw">
              <a className="mail" href={`mailto:${Global.email}`} target="_blank">
                <i className="icon">&#xa004;</i>
                <b>Email Id:-</b>
                <span className="txt">{Global.email}</span>
              </a>
              <a className="number" href={Global.numTel} target="_blank">
                <i className="icon">&#xa001;</i>
                <b>Phone No:-</b>
                <span className="txt">{Global.num}</span>
              </a>
            </div>{/* fw */}
          </div>{/* container */}
        </div>{/* headerTop */}

        <div className="headerMiddle">
          <div className="container">
            <div className="fw">
              <Link className="logo" to="/">
                <img src={Logo} alt="" />
              </Link>

              <div className="follow">
                <b>Follow Us</b>
                <p>
                  <span>
                    <a target="_blank" href="#"><i className="icon">&#xa019;</i></a>
                    <a target="_blank" href="#"><i className="icon">&#xa020;</i></a>
                    <a target="_blank" href="#"><i className="icon">&#xa021;</i></a>
                    <a className="contact" target="_blank" href={Global.numTel}><i className="icon">&#xa001;</i></a>
                  </span>
                  <span>
                    <a target="_blank" href="#"><i className="icon">&#xa023;</i></a>
                    <a target="_blank" href="#"><i className="icon">&#xa026;</i></a>
                    <a target="_blank" href={Global.whatsappLink}><i className="icon fwt">&#xa025;</i></a>
                    <a className="contact" target="_blank" href={Global.emailTag}><i className="icon">&#xa004;</i></a>
                  </span>
                </p>
              </div>

            </div>
          </div>
        </div>

        <div className="headerBottom">
          <div className="container">
            <div className="fw">
              <i className="icon close" onClick={closeMenu}>&#xa018;</i>
              <p className="menu">
                  <b>Menu</b>
                  <span className="icon" onClick={openMenu}>&#xa009;</span>
              </p>
              <ul className="navBar">
                  <li>
                    <Link className="logo" to="/">
                      <img src={LogoMob} alt="" />
                    </Link>
                  </li>
                  <li><NavLink to="/"><i className="icon">&#xa074;</i><b>Home</b></NavLink></li>
                  {/* <li><HashLink to="/#childhood" className="hashLink"><i className="icon">&#xa088;</i><b>Childhood</b></HashLink></li> */}
                  {/* <li><NavLink to="/aboutus"><i className="icon">&#xa043;</i><b>About Us</b></NavLink></li>
                  <li><NavLink to="/projects"><i className="icon">&#xa058;</i><b>Branding Projects</b></NavLink></li>
                  <li><NavLink to="/know"><i className="icon">&#xa078;</i><b>I Know</b></NavLink></li>
                  <li><NavLink to="/portfolio"><i className="icon">&#xa076;</i><b>Portfolio</b></NavLink></li> */}
                  <li><NavLink to="/lifestyle"><i className="icon"><img src={LifeStyle} /></i><b>Gallery</b></NavLink></li>
                  <li><NavLink to="/inner"><i className="icon">&#xa052;</i><b>Inner Page</b></NavLink></li>
                  <li><NavLink to="/contactus"><i className="icon">&#xa007;</i><b>Contact Us</b></NavLink></li>
                  {/* <li className="tabs">
                      <a className="icon">&#xa009;</a>
                      <ul>
                          <li><NavLink to="/childhood"><i className="icon">&#xa088;</i><b>Childhood</b></NavLink></li>
                          <li><NavLink to="/education"><i className="icon">&#xa071;</i><b>Education</b></NavLink></li>
                          <li><NavLink to="/aboutus"><i className="icon">&#xa045;</i><b>Team</b></NavLink></li>
                          <li><NavLink to="/reviews"><i className="icon">&#xa087;</i><b>Customer's Review</b></NavLink></li>
                          <li><NavLink to="/contact"><i className="icon">&#xa007;</i><b>Contact Us</b></NavLink></li>
                      </ul>
                  </li> */}
              </ul>
            </div>{/* fw */}
          </div>{/* container */}
        </div>{/* headerBottom */}
      </header>
    </>
  );
}

export default Header;