import Banner from "../components/include/Banner";
import AudioIcon from "../components/include/AudioIcon";
import VideoIcon from "../components/include/VideoIcon";
import Vsee from "../images/vsee.png";
import {Helmet} from "react-helmet";
import Breadcrumbs from "./include/breadcrumbs";
const Contactus = () => {
    return (
      <>
        <Helmet>
            <title>Contact Us</title>
            <meta name="description" content="" />
            <meta name="keywords" content="" />
        </Helmet>
        <Banner pageName="Contact Us" />
        <Breadcrumbs pageName="Contact Us" />
        <section className="sectionTB contactUs">
          <div className="container">
              <div className="row">
                  <div className="col-xl-6 col-xxl-6">
                      <div className="mainHead">
                          <p className="subHead" data-aos="fade-right">Lorem</p>
                          <h1 className="head" data-aos="fade-left">Contact Us</h1>
                          <p className="detailsHead" data-aos="fade-up">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti eum inventore adipisci, quis magnam provident voluptate doloremque.</p>
                      </div>{/* mainHead */}
                  </div>{/* cols */}
                  <div className="col-12">
                    <div className="row mb">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-4">
                            <a href="javascript:;" target="_blank" className="contact" data-aos="fade-up">
                                <p>Press</p>
                                <p>Are you interested in our latest news & updates.</p>
                                <p><span>Visit Now</span></p>
                            </a>
                        </div>{/* cols */}
                        <div className="col-xs-12 col-sm-6 col-md-6 col-4">
                            <a href="mailto:yogaphysician@gmail.com" target="_blank" className="contact" data-aos="fade-up">
                                <p>Help & Support</p>
                                <p>Our support team is spread across the globe to give you answers fast.</p>
                                <p><span>Send us mail Now</span></p>
                            </a>
                        </div>{/* cols */}
                        <div className="col-xs-12 col-sm-12 col-md-12 col-4">
                            <div className="contact" data-aos="fade-up">
                                <p>Meet Us</p>
                                <a href="mailto:yogaphysician@gmail.com" target="_blank" title="Online Support">
                                    <i className="icon">&#xf0e0;</i>
                                    <span>
                                        <b>Online Support</b>
                                        <i>yogaphysician@gmail.com</i>
                                    </span>
                                </a>
                                <a href="https://wa.me/447789711367" target="_blank" title="Contact Us">
                                    <i className="icon">&#xe804;</i>
                                    <span>
                                        <b>Whatsapp Number</b>
                                        <i>+44-778-971-1367</i>
                                    </span>
                                </a>
                                <a href="https://vsee.com/s/5d1a65ed5994f" target="_blank" title="More Information">
                                    <i className="icon">&#xf1c8;</i>
                                    <span>
                                        <b>Video Call</b>
                                        {/* <img src={Vsee} /> */}
                                        <i>VSee</i>
                                    </span>
                                </a>
                                <a href="http://chantingyoga.com/" target="_blank" title="More Information">
                                    <i className="icon">&#xe808;</i>
                                    <span>
                                        <b>More Information</b>
                                        <i>www.chantingyoga.com</i>
                                    </span>
                                </a>
                            </div>{/* details */}
                        </div>{/* cols */}
                    </div>{/* row */}
                </div>{/* cols */}
              </div>{/* row */}
          </div>{/* container */}
        </section>
        <AudioIcon />
        <VideoIcon />
      </>
    );
  }
  
  export default Contactus;
  