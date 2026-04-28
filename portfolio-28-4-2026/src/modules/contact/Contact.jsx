import { Helmet } from "react-helmet-async";
import Banner from "../common/Banner";
import LeftSidebar from "../common/LeftSidebar";
import RightSidebar from "../common/RightSidebar";
import { Global } from "../common/Global";
import FormArea from "./FormArea.jsx";

const ContactData = [
  { link: Global.numTel, icon: "&#xa001;", text: "Phone Number", contact: "num", ani: "fade-left" },
  { link: Global.whatsappLink, icon: "&#xa025;", text: "WhatsApp Number", contact: "num", ani: "fade-right" },
  { link: `mailto:${Global.email}`, icon: "&#xa004;", text: "Email Address", contact: "email", ani: "fade-left" },
  { link: "https://www.google.com/maps/dir///@31.176664,-7.682147,3z?entry=ttu&amp;g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D", icon: "&#xa007;", text: "Address", contact: "address", ani: "fade-right" }
];
const ContactTag = (props) => {
  return (
    <li data-aos={props.ani}>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <i className="icon" dangerouslySetInnerHTML={{ __html: props.icon }}></i>
        <span>
          <b>{props.text}</b>
          <em {...{ [`data-${props.contact}`]: props.contact }}></em>
        </span>
      </a>
    </li>
  );
};

const FollowData = [
  { link: Global.fb, icon: "&#xa019;", name: "Facebook", ani: "fade-left" },
  { link: Global.tw, icon: "&#xa020;", name: "Twitter", ani: "fade-right" },
  { link: Global.lin, icon: "&#xa021;", name: "Linkedin", ani: "fade-left" },
  { link: Global.skp, icon: "&#xa026;", name: "Skype", ani: "fade-right" },
  { link: Global.ins, icon: "&#xa023;", name: "Instagram", ani: "fade-left" },
  { link: Global.pnt, icon: "&#xa024;", name: "Pinterest", ani: "fade-right" }
];
const FollowTag = (props) => {
  return (
    <li data-aos={props.ani}>
      <a href={props.link} target="_blank">
        <i className="icon" dangerouslySetInnerHTML={{ __html: props.icon }}></i>
        <b>Follow us on</b>
        <span>{props.name}</span>
      </a>
    </li>
  );
};

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us</title>
        <meta name="description" content="This is Inner page" />
      </Helmet>
      <Banner
        pageName="Contact Us"
        pageText="We’re here to help you with any queries, project discussions, or collaboration opportunities. Let’s connect and build something great together."
      />
      <section className="section">
        <div className="container">
          <hgroup>
            <h2 data-aos="fade-down">Get in <span>Touch</span></h2>
            <p data-aos="fade-up">Let’s build something great together</p>
          </hgroup>
          <div className="sideMid">
            <LeftSidebar />

            <div className="area-2">
              <div className="contactUs">
                <div className="contactArea">
                  <p className="hd" data-aos="fade-down">Send us a Message</p>
                  <div className="ca">
                    <FormArea data-aos="fade-left" />
                  </div>{/* ca */}
                </div>{/* contactArea */}

                <div className="contactArea">
                  <p className="hd" data-aos="fade-down">Contact Details</p>
                  <div className="ca">
                    <ul className="contactBox">
                      {ContactData.map((val, ind) => (
                        <ContactTag key={ind} {...val} />
                      ))}
                    </ul>
                  </div>{/* ca */}
                </div>{/* contactArea */}

                <div className="contactArea">
                  <p className="hd" data-aos="fade-down">Opening Timings</p>
                  <div className="ca">
                    <ul className="time">
                      <li><b><i className="icon">&#xA011;</i><span>Sunday</span></b><span>09:00 - 24:00</span></li>
                      <li><b><i className="icon">&#xA011;</i><span>Monday</span></b><span>20:30 - 24:00</span></li>
                      <li><b><i className="icon">&#xA011;</i><span>Tuesday</span></b><span>20:30 - 24:00</span></li>
                      <li><b><i className="icon">&#xA011;</i><span>Wednesday</span></b><span>20:30 - 24:00</span></li>
                      <li><b><i className="icon">&#xA011;</i><span>Thursday</span></b><span>20:30 - 24:00</span></li>
                      <li><b><i className="icon">&#xA011;</i><span>Friday</span></b><span>20:30 - 24:00</span></li>
                      <li><b><i className="icon">&#xA011;</i><span>Saturday</span></b><span>09:00 - 24:00</span></li>
                    </ul>
                  </div>{/* ca */}
                </div>{/* contactArea */}

                <div className="contactArea">
                  <p className="hd" data-aos="fade-down">Search Location</p>
                  <div className="ca">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d55928250.58785387!2d-7.682147!3d31.176664!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sin!4v1774592467853!5m2!1sen!2sin" loading="lazy"></iframe>
                  </div>{/* ca */}
                </div>{/* contactArea */}

                <div className="contactArea">
                  <p className="hd" data-aos="fade-down">Follow Us</p>
                  <div className="ca">
                    <ul className="follow">
                      {FollowData.map((val, ind) => (
                        <FollowTag key={ind} {...val} />
                      ))}
                    </ul>  
                  </div>{/* ca */}
                </div>{/* contactArea */}
              </div>
            </div>{/* area-2 */}

            <RightSidebar />
          </div>
        </div>
      </section>
    </>
  );
}
