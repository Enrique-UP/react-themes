import {Link} from "react-router-dom";
import logo from "../../images/logo-footer.png";
const Footer = () => {
    var year = new Date().getFullYear();

    return (
    <>
      <footer>
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-10 col-lg-8 col-8">
                    <Link to="/" className="logo" data-aos="zoom-in">
                        <img src={logo} />
                    </Link>
                    <ul>
                        <li><Link to="/" exact="true">Home</Link></li>
                        <li><Link to="/aboutus">About Us</Link></li>
                        <li><Link to="/yoga">Yoga</Link></li>
                        <li><Link to="/meditation">Meditation</Link></li>
                        <li><Link to="/pranayam">Pranayam</Link></li>
                        <li><Link to="/yoga-medicine">Yoga &amp;  Medicine</Link></li>
                        <li><Link to="/yoga-workplace">Yoga at Workplace</Link></li>
                        <li><Link to="/evidence-base">Evidence Base</Link></li>
                        <li><Link to="/consultation">Consultation</Link></li>
                        <li><Link to="/testimonials">Testimonials</Link></li>
                        <li><Link to="/disclaimer">Disclaimer</Link></li>
                        <li><Link to="/contactus">Contact Us</Link></li>
                    </ul>
                    <p className="contacts">
                        <a href="mailto:yogaphysician@gmail.com" target="_blank">
                            <i className="icon">&#xf0e0;</i> yogaphysician@gmail.com
                        </a>
                        <a href="https://wa.me/447789711367" target="_blank">
                            <i className="icon">&#xe804;</i> +44-778-971-1367
                        </a>
                        <Link to="/">
                            <i className="icon">&#xe808;</i> www.yogaphysician.com
                        </Link>
                    </p>
                    <p className="contacts">
                        <a href="http://chantingyoga.com/" target="_blank">
                            <i className="icon">&#xe808;</i> www.chantingyoga.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
        <img src={logo} className="footerIcon" />
      </footer>
      <section className="copyright">
          <div className="container">
            <span>Copyright &copy; Yogaphysician.com with all rights reserved <i className="year">{year}</i>.</span>
          </div>
      </section>
    </>
  );
}

export default Footer;
