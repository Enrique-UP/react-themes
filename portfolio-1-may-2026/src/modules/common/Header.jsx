import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Global, ScrollTopPage } from "./Global";
import ScrollOffset from "./ScrollOffset";
import logo from "../../assets/images/logo.png";
import lifestyle from "../../assets/images/icons/lifeStyle.png";
import contact from "../../assets/images/icons/contact.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef(null);
  const menuListRef = useRef(null);

  const resetScroll = () => {
    menuListRef.current?.scrollTo({ top: 0, behavior: "auto" });
  };

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
    resetScroll();
  }, [location]);

  useEffect(() => {
    const updateHeight = () => {
      const height = headerRef.current?.offsetHeight || 0;
      document.documentElement.style.setProperty("--headerHeight", `${height}px`);
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
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
                <Link to="/" onClick={ScrollTopPage}><img src={logo} /></Link>
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
              <i className="icon close" onClick={() => {setMenuOpen(false); resetScroll();}}>&#xa018;</i>
              <nav onClick={(e) => {e.stopPropagation();}}>
                <div className="logo">
                  <Link to="/" onClick={ScrollTopPage}><img src={logo} /></Link>
                </div>{/* logo */}
                <ul ref={menuListRef} onClick={resetScroll}>
                  <li>
                    <NavLink to="/" onClick={ScrollTopPage}>
                      <i className="icon">&#xa074;</i>
                      <span>Home</span>
                    </NavLink>
                  </li>

                  <li>
                    <HashLink to="/#about" scroll={ScrollOffset}>
                      <i className="icon">&#xa043;</i>
                      <span>About Me</span>
                    </HashLink>
                  </li>

                  <li>
                    <Link to="/lifestyle">
                      <img src={lifestyle} />
                      <span>My Life Style</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/portfolio">
                      <i className="icon">&#xa075;</i>
                      <span>My Portfolio</span>
                    </Link>
                  </li>

                  <li className="mob">
                    <HashLink to="/#tp" scroll={ScrollOffset}>
                      <i className="icon">&#xa097;</i>
                      <span>My Top Projects</span>
                    </HashLink>
                  </li>
                  <li className="mob">
                    <HashLink to="/#bp" scroll={ScrollOffset}>
                      <i className="icon">&#xa058;</i>
                      <span>My Branding Projects</span>
                    </HashLink>
                  </li>

                  <li className="mob">
                    <HashLink to="/#exp" scroll={ScrollOffset}>
                      <i className="icon">&#xa001;</i>
                      <span>My Experience</span>
                    </HashLink>
                  </li>

                  <li className="mob">
                    <HashLink to="/#edu" scroll={ScrollOffset}>
                      <i className="icon">&#xa079;</i>
                      <span>My Education</span>
                    </HashLink>
                  </li>

                  <li>
                    <HashLink to="/#ds" scroll={ScrollOffset}>
                      <i className="icon">&#xa078;</i>
                      <span>My Design Services</span>
                    </HashLink>
                  </li>

                  <li className="mob">
                    <HashLink to="/#team" scroll={ScrollOffset}>
                      <i className="icon">&#xa045;</i>
                      <span>My Team</span>
                    </HashLink>
                  </li>

                  <li className="mob">
                    <HashLink to="/#wcu" scroll={ScrollOffset}>
                      <i className="icon">&#xa001;</i>
                      <span>Why Choose Me</span>
                    </HashLink>
                  </li>

                  <li className="mob">
                    <Link to="/reviews">
                      <i className="icon">&#xa087;</i>
                      <span>My Customer Reviews</span>
                    </Link>
                  </li>

                  <li className="mob">
                    <HashLink to="/#ch" scroll={ScrollOffset}>
                      <i className="icon">&#xa088;</i>
                      <span>My Childhood</span>
                    </HashLink>
                  </li>

                  <li>
                    <NavLink to="/contact">
                      <img src={contact} />
                      <span>Contact Me</span>
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