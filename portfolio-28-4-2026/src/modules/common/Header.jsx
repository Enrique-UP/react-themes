import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Global } from "./Global";
import ScrollOffset from "./ScrollOffset";
import logo from "../../assets/images/logo.png";
import contact from "../../assets/images/icons/contact.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef(null);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("back");
    } else {
      document.body.classList.remove("back");
    }

    return () => document.body.classList.remove("back");
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const height = headerRef.current?.offsetHeight;
    document.documentElement.style.setProperty("--headerHeight", `${height}px`);
  }, [menuOpen, location]);  

  return (
    <>
      <header ref={headerRef} className={menuOpen ? "active" : ""}>
        <div className="top">
          <div className="container">
            <div className="fw">
              <a href={Global.emailTag} target="_blank" data-aos="fade-right">
                <span>
                  <i className="icon">&#xa004;</i>
                  <b>Email Id.:</b>
                </span>
                <em data-email></em>
              </a>
              <a href={Global.numTel} target="_blank" data-aos="fade-left">
                <span>
                  <i className="icon">&#xa001;</i>
                  <b>Phone No.:</b>
                </span>
                <em data-num></em>
              </a>
            </div>{/* fw */}
          </div>{/* container */}
        </div>{/* top */}
        <div className="middle">
          <div className="container">
            <div className="fw">
              <div className="logo" data-aos="fade-down">
                <Link to="/"><img src={logo} /></Link>
              </div>{/* logo */}
              <div className="follow" data-aos="fade-up">
                <b>Follow Us</b>
                <p>
                  <span>
                    <a href={Global.fb} target="_blank"><i className="icon">&#xa019;</i></a>
                    <a href={Global.tw} target="_blank"><i className="icon">&#xa020;</i></a>
                    <a href={Global.lin} target="_blank"><i className="icon">&#xa021;</i></a>
                  </span>
                  <span>
                    <a href={Global.ins} target="_blank"><i className="icon">&#xa023;</i></a>
                    <a href={Global.pnt} target="_blank"><i className="icon">&#xa024;</i></a>
                    <a href={Global.skp} target="_blank"><i className="icon">&#xa026;</i></a>
                  </span>
                </p>
              </div>{/* follow */}
            </div>{/* fw */}
          </div>{/* container */}
        </div>{/* middle */}
        <div className="bottom">
          <div className="container">
            <div className="fw">
              <p className="menu" onClick={() => setMenuOpen(true)}>
                <b>Menu</b>
                <i className="icon">&#xa009;</i>
              </p>
              <div className="navBar">
                <i className="icon close" onClick={() => setMenuOpen(false)}>&#xa018;</i>
                <nav onClick={(e) => e.stopPropagation()}>
                  <div className="logo">
                    <Link to="/"><img src={logo} /></Link>
                  </div>{/* logo */}
                  <ul>
                    <li>
                      <NavLink to="/">
                        <i className="icon">&#xa074;</i>
                        <span>Home</span>
                      </NavLink>
                    </li>
                    <li>
                      <HashLink to="/#about" scroll={ScrollOffset}>
                        <i className="icon">&#xa043;</i>
                        <span>About Us</span>
                      </HashLink>
                    </li>
                    <li>
                      <NavLink to="/portfolio">
                        <i className="icon">&#xa076;</i>
                        <span>Portfolio</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/lifestyle">
                        <i className="icon">&#xa051;</i>
                        <span>Gallery</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/contactus">
                        <img src={contact} />
                        <span>Contact Us</span>
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>{/* navBar */}
            </div>{/* fw */}
          </div>{/* container */}
        </div>{/* bottom */}
      </header>
    </>
  );
}
