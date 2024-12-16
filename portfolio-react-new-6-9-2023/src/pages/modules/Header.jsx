import React from "react";
import { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import logo from "../../images/logo.png";
import logoMob from "../../images/logoMob.png";
import "../../sass/header.scss";

const Header = () => {
    useEffect(() => {
        document.querySelector("header .headerBottom .menu label").addEventListener("click", function () {
            document.querySelector("header .headerBottom .navBar").classList.add("active");
            document.querySelector(".fw.background").classList.add("active");
        });
        document.querySelector(".fw.background > .icon").addEventListener("click", function () {
            document.querySelector("header .headerBottom .navBar").classList.remove("active");
            document.querySelector(".fw.background").classList.remove("active");
        });
    }, []);

    return (
        <>
            <header>
                <div className="headerTop">
                    <div className="container">
                        <div className="fw">
                            <a className="mail">
                                <i className="icon">&#xe002;</i>
                                <b>Email Id:-</b>
                                <span className="txt"></span>
                            </a>
                            <a className="number">
                                <i className="icon">&#xe001;</i>
                                <b>Phone No:-</b>
                                <span className="txt"></span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="headerMiddle">
                    <div className="container">
                        <div className="fw">
                            <Link className="logo pageTop" to="/">
                                <img src={logo} />
                            </Link>
                            <div className="follow">
                                <b>Follow Us</b>
                                <p>
                                    <span>
                                        <a className="fb"><i className="icon">&#xe021;</i></a>
                                        <a className="tw"><i className="icon">&#xe022;</i></a>
                                        <a className="lin"><i className="icon">&#xe023;</i></a>
                                    </span>
                                    <span>
                                        <a className="ins"><i className="icon">&#xe024;</i></a>
                                        <a className="skype"><i className="icon">&#xe026;</i></a>
                                        <a className="wapp"><i className="icon fwt">&#xe025;</i></a>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="headerBottom">
                    <div className="container">
                        <div className="fw">
                            <p className="menu">
                                <b>Menu</b>
                                <label className="icon">&#xe003;</label>
                            </p>
                            <ul className="navBar">
                                <li>
                                    <a className="logo" href="#">
                                        <img src={logoMob} />
                                    </a>
                                </li>
                                <li>
                                    <NavLink to="/" exact="true" className="pageTop">
                                        <i className="icon">&#xe042;</i>
                                        <b>Home</b>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavHashLink className="notActive" to="/#about">
                                        <i className="icon">&#xe015;</i>
                                        <b>About Me</b>
                                    </NavHashLink>
                                </li>
                                <li>
                                    <NavHashLink className="notActive" to="/#main-projects">
                                    <i className="icon">&#xe043;</i>
                                        <b>My Main Projects</b>
                                    </NavHashLink>
                                </li>
                                <li className="hide">
                                    <NavHashLink className="notActive" to="/#branding-projects">
                                    <i className="icon">&#xe049;</i>
                                        <b>Branding Projects</b>
                                    </NavHashLink>
                                </li>
                                <li>
                                    <NavHashLink className="notActive" to="/#knowledge">
                                        <i className="icon fwt">&#xe054;</i>
                                        <b>I Know</b>
                                    </NavHashLink>
                                </li>
                                <li>
                                    <NavLink to="/portfolio" exact="true">
                                        <i className="icon">&#xe056;</i>
                                        <b>My Portfolio</b>
                                    </NavLink>
                                </li>
                                <li className="tabs">
                                    <a className="icon">&#xe003;</a>
                                    <ul>
                                        <li>
                                            <NavLink to="/portfolio" exact="true">
                                                <i className="icon">&#xe056;</i>
                                                <b>My Portfolio</b>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavHashLink className="notActive" to="/#experience">
                                                <i className="icon fwt">&#xe061;</i>
                                                <b>My Experience</b>
                                            </NavHashLink>
                                        </li>
                                        <li>
                                            <NavHashLink className="notActive" to="/#education">
                                                <i className="icon">&#xe009;</i>
                                                <b>My Education</b>
                                            </NavHashLink>
                                        </li>
                                        <li>
                                            <NavHashLink className="notActive" to="/#helpers">
                                                <i className="icon">&#xe047;</i>
                                                <b>My Helpers</b>
                                            </NavHashLink>
                                        </li>
                                        <li>
                                            <NavHashLink className="notActive" to="/#why-choose-me">
                                                <i className="icon fwt">&#xe050;</i>
                                                <b>Why Choose Me</b>
                                            </NavHashLink>
                                        </li>
                                        <li>
                                            <NavLink to="/lifestyle" exact="true">
                                                <i className="icon fwt">&#xe046;</i>
                                                <b>My LifeStyle</b>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavHashLink className="notActive" to="/#childhood">
                                                <i className="icon">&#xe016;</i>
                                                <b>My Childhood</b>
                                            </NavHashLink>
                                        </li>
                                        <li>
                                            <Link to="/reviews">
                                                <i className="icon">&#xe048;</i>
                                                <b>My Customer's Review</b></Link>
                                        </li>
                                        <li>
                                            <NavLink to="/contact" exact="true">
                                                <i className="icon">&#xe027;</i>
                                                <b>Contact Me</b>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;