import {Helmet} from "react-helmet";
import Banner from "../common/Banner";
import LeftSidebar from "../common/LeftSidebar";
import RightSidebar from "../common/RightSidebar";
import { Global } from "../common/Global";
import FormArea from "./FormArea";
function ContactUs() {
  return (
    <>
      <Helmet>
          <title>Contact Us</title>
      </Helmet>
      <Banner
        pageName="Contact Us" 
        pageText="Contact Us page content here lorem ipsum dolor sit amet consectetur adipisicing elit et error dolores aliquid eos quas sint voluptatum atque odit eaque nulla tempora provident quod earum id ea eum vero soluta numquam."
      />
      <section className="section contactUs innerPage">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <hgroup className="center">
                <h2>Contact Us</h2>
                <p>Get in touch &mdash; we respond quickly.</p>
              </hgroup>
            </div>
            <LeftSidebar />
            <div className="col-lg-6 order">
              <ul className="contactBox">
                <li>
                  <a href={Global.numTel} target="_blank">
                    <i className="icon">&#xA001;</i>
                    <span><b>Phone Number</b>{Global.num}</span>
                  </a>
                </li>
                <li>
                  <a href={Global.whatsappLink} target="_blank">
                    <i className="icon">&#xA025;</i>
                    <span><b>WhatsApp Number</b>{Global.whatsapp}</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${Global.email}`} target="_blank">
                    <i className="icon">&#xA004;</i>
                    <span><b>Email Address</b>{Global.email}</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.google.com/maps/dir///@31.176664,-7.682147,3z?entry=ttu&amp;g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                    <i className="icon">&#xA007;</i>
                    <span><b>Address</b>{Global.address}</span>
                  </a>
                </li>
              </ul>
              <FormArea />
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d55928250.58785387!2d-7.682147!3d31.176664!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sin!4v1774592467853!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <RightSidebar />
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
