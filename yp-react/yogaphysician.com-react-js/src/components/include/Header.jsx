import React from "react";
import { useEffect } from "react";
import {NavLink, Link} from "react-router-dom";
import logo from "../../images/logo.png";
const Header = () => {
    useEffect(() => {
        document.querySelector("#menu").addEventListener("click", function(){
            document.getElementById("headerBottom").classList.add("active");
        });
        document.querySelector("#close").addEventListener("click", function(){
            document.getElementById("headerBottom").classList.remove("active");
        });

        function scrollFunc(){
            var scroll = document.documentElement.scrollTop;
            var headerHeight = document.querySelector("header").offsetHeight;
            if(scroll >= headerHeight){
                document.querySelector("header").classList.add("active");
            }else{
                document.querySelector("header").classList.remove("active");
            }
        }
        window.addEventListener("load", scrollFunc);
        window.addEventListener("scroll", scrollFunc());
    }, []);
    return (
    <>
      <header>
        <div className="headerTop">
            <div className="container">
                <span data-aos="fade-right">Welcome to my website</span>
                <a data-aos="fade-left" href="http://chantingyoga.com/" target="_blank">For more details visit now www.chantingyoga.com</a>
            </div>
        </div>
        <div className="headerMiddle">
            <div className="container">
                <Link exact="true" to="/" className="logo" data-aos="fade-right">
                    <img src={logo} />
                </Link>
                <div className="details" data-aos="fade-left">
                    <a href="mailto:yogaphysician@gmail.com" target="_blank" title="Online Support" className="email">
                        <i className="icon">&#xf0e0;</i>
                        <span>
                            <b>Online Support</b>
                            <i>yogaphysician@gmail.com</i>
                        </span>
                    </a>
                    <a href="https://wa.me/447789711367" target="_blank" title="Contact Us">
                        <i className="icon">&#xe804;</i>
                        <span>
                            <b>Whatsapp</b>
                            <i>+44-778-971-1367</i>
                        </span>
                    </a>
                    <a href="www.demo.com" target="_blank" title="More Information" className="website">
                        <i className="icon">&#xe808;</i>
                        <span>
                            <b>More Information</b>
                            <i>www.demo.com</i>
                        </span>
                    </a>
                </div>
                <i className="icon menu" id="menu">&#xf0c9;</i>
            </div>
        </div>
        <div className="headerBottom" id="headerBottom">
            <div className="container">
                <span className="logoClose">
                    <Link to="/">
                        <img src={logo} />
                    </Link>
                    <i className="icon" id="close">&#xe803;</i>
                </span>
                <ul>
                    <li><NavLink to="/" exact="true">Home</NavLink></li>
                    <li><NavLink to="/aboutus">About Us</NavLink></li>
                    <li><NavLink to="/yoga">Yoga</NavLink></li>
                    <li><NavLink to="/meditation">Meditation</NavLink></li>
                    <li><NavLink to="/pranayam">Pranayam</NavLink></li>
                    <li><NavLink to="/consultation">Consultation</NavLink></li>
                    <li><NavLink to="/testimonials">Testimonials</NavLink></li>
                    <li><NavLink to="/contactus">Contact Us</NavLink></li>
                </ul>
            </div>
        </div>
      </header>
    </>
  );
}

export default Header;
