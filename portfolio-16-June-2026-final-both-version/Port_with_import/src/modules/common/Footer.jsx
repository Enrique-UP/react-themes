import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../../assets/images/logoFooter.png";
import { Global, ScrollTopPage } from "./Global";
import ScrollOffset from "./ScrollOffset";

const PostData = [
  {link:"https://www.facebook.com/share/p/1BCq6Ngwjo/", date:"02 Aug", year:"2021", txt:"Inauguration of my maternal aunt’s music studio in Mumbai"},
  {link:"https://www.facebook.com/share/p/1EFRfvfdqK/", date:"20 Nov", year:"2019", txt:"Enjoyed Weekend"},
  {link:"https://www.facebook.com/share/p/18gT9RgXsc/", date:"14 Sep", year:"2019", txt:"Office Time"},
  {link:"https://www.facebook.com/share/p/1UZ9wVhLWp/", date:"19 Jul", year:"2019", txt:"Enjoyed at Phoenix United Mall."},
];
function PostTag(props){
  return(
    <>
      <li>
        <a href={props.link} target="_blank">
          <span className="date">
            <b>{props.date}</b>
            <i>{props.year}</i>
          </span>
          <span className="abt">{props.txt}</span>
        </a>
      </li>
    </>
  )
}

const ContactData = [
  {link: Global.numTel, icon: "&#xa001;", cnt: Global.num, contact:"num", txt:"Phone No." },
  {link: Global.whatsappLink, icon: "&#xa025;", cnt: Global.num, contact:"num", txt:"WhatsApp No." },
  {link: `mailto:${Global.email}`, icon: "&#xa004;", cnt: Global.email, contact:"email", txt:"Email ID." },
  {icon: "&#xa007;", cnt: Global.address, contact:"address", txt:"Address" }
];
function ContactTag(props){
  return(
    <>
      <li>
        <a href={props.link} target="_blank">
          <b>
            <i className="icon" dangerouslySetInnerHTML={{ __html: props.icon }}></i>
            <em>{props.txt}</em>
          </b>
          <span className="abt" {...{ [`data-${props.contact}`]: props.cnt }}></span>
        </a>
      </li>
    </>
  )
}

export default function Footer() {
  const fixNumRef = useRef(null);
  useEffect(() => {
    const setHeight = () => {
      if (fixNumRef.current) {
        const height = fixNumRef.current.offsetHeight;
        document.documentElement.style.setProperty("--fixNumHeight", `${height}px`);
      }
    };
    setHeight();
    window.addEventListener("resize", setHeight);
    return () => window.removeEventListener("resize", setHeight);
  }, []);

  return (
    <>
      <footer className="section">
        <div className="container">
          <div className="row">
            <div className="col-12 logo">
              <div className="fw">
                <Link to="/" data-aos="zoom-in" onClick={ScrollTopPage}><img data-src={logo} /></Link>
              </div>{/* fw */}
            </div>{/* cols */}
            <div className="col-md-12 col-xxl-3">
              <div className="fw" data-aos="fade-down">
                  <p className="hd">About Me</p>
                  <p className="text about">
                    <span></span>
                    <span><strong>Outside of work,</strong></span>
                  </p>
              </div>{/* fw */}
            </div>{/* cols */}
            <div className="col-lg-4 col-xxl-3">
              <div className="fw" data-aos="fade-down">
                  <p className="hd">Main Links</p>
                  <ul className="links">
                    <li><Link to="/" onClick={ScrollTopPage}>Home</Link></li>
                    <li><HashLink to="/#about" scroll={ScrollOffset}>About Me</HashLink></li>
                    <li><Link to="/lifestyle">My Life Style</Link></li>
                    <li><Link to="/portfolio">My Portfolio</Link></li>
                    <li><HashLink to="/#tp" scroll={ScrollOffset}>My Top Projects</HashLink></li>
                    <li><HashLink to="/#bp" scroll={ScrollOffset}>My Branding Projects</HashLink></li>
                    <li><HashLink to="/#exp" scroll={ScrollOffset}>My Experience</HashLink></li>
                    <li><HashLink to="/#edu" scroll={ScrollOffset}>My Education</HashLink></li>
                    <li><HashLink to="/#ds" scroll={ScrollOffset}>My Design Services</HashLink></li>
                    <li><HashLink to="/#team" scroll={ScrollOffset}>My Team</HashLink></li>
                    <li><HashLink to="/#wcu" scroll={ScrollOffset}>Why Choose Me</HashLink></li>
                    <li><Link to="/reviews">My Customer Reviews</Link></li>
                    <li><HashLink to="/#ch" scroll={ScrollOffset}>My Childhood</HashLink></li>
                    <li><Link to="/contact">Contact Me</Link></li>
                    {/* <li><Link to="/poetry">Poetry</Link></li> */}
                    {/* <li><Link to="/inner">Inner Page</Link></li>
                    <li><Link to="/thankyou">Thank You</Link></li> */}
                  </ul>
              </div>{/* fw */}
            </div>{/* cols */}
            <div className="col-sm-6 col-lg-4 col-xxl-3">
              <div className="fw" data-aos="fade-down">
                  <p className="hd">Top Posts</p>
                  <ul className="posts">
                    {
                      PostData.map((val, ind) => {
                        return <PostTag key={ind} {...val} />
                      })
                    }
                  </ul>
              </div>{/* fw */}
            </div>{/* cols */}
            <div className="col-sm-6 col-lg-4 col-xxl-3">
              <div className="fw" data-aos="fade-down">
                  <p className="hd">Contact Me</p>
                  <ul className="posts">
                    {
                      ContactData.map((val, ind) => {
                        return <ContactTag key={ind} {...val} />
                      })
                    }
                  </ul>
                  <div className="follow">
                    <a href={Global.fb} target="_blank"><i className="icon">&#xa019;</i></a>
                    <a href={Global.tw} target="_blank"><i className="icon">&#xa020;</i></a>
                    <a href={Global.lin} target="_blank"><i className="icon">&#xa021;</i></a>
                    <a href={Global.ins} target="_blank"><i className="icon">&#xa023;</i></a>
                    <a href={Global.pnt} target="_blank"><i className="icon">&#xa024;</i></a>
                    <a href={Global.skp} target="_blank"><i className="icon">&#xa026;</i></a>
                  </div>{/* follow */}
              </div>{/* fw */}
            </div>{/* cols */}
            <div className="col-12">
              <div className="fw" data-aos="fade-down">
                  <p className="text disclaimer">
                    <span><strong>Disclaimer,</strong></span>
                  </p>
              </div>{/* fw */}
            </div>{/* cols */}
          </div>{/* row */}
        </div>{/* container */}
      </footer>
      <section className="copy">
        <div className="container">
          <div className="fw">Copyright &copy; <span>{new Date().getFullYear()}</span>. All Rights Reserved.</div>{/* fw */}
        </div>{/* container */}
      </section>
      <a ref={fixNumRef} className="fixNum" href={Global.numTel} target="_blank"><i className="icon">&#xa001;</i>Call Us {Global.num}</a>
      <a className="icon callRight" href="tel:<?php echo $numberTel; ?>" target="_blank">&#xa041;</a>
      <i className="icon scrollTop">&#xa022;</i>
    </>
  );
}