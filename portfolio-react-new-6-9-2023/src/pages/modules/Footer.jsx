import {Link} from "react-router-dom";
import logo from "../../images/logoWhite.png";
import "../../sass/footer.scss";
const Footer = () => {
    const year = new Date().getFullYear();
    return(
        <>
            <footer className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="logo">
                                <Link to="/" className="pageTop"><img data-src={logo} /></Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-xl-3">
                            <p className="head">About Us</p>
                            <p className="text">Hello, I am Nomaan Arif from India (UI & UX Developer). I design/develop all types of projects like Travel, E-Commerce, Charity, Education, Tech Support, Visa, Passport, Consular, Attestation, Flights Ticket, IT-Solutions, Online Payment, Digitization and Tree Plantation etc. <span><b>Outside of work,</b> I am good former Cricketer (School, Club and State Level), Political Critic, Consultant, Social Rural Activist and Adventurer.</span></p>
                        </div>
                        <div className="col-sm-6 col-md-6 col-xl-3">
                            <p className="head">Main Links</p>
                            <ul className="links">
                                <li><a href="#">Lorem Ipsum</a></li>
                                <li><a href="#">Lorem</a></li>
                                <li><a href="#">Lorem</a></li>
                                <li><a href="#">Lorem</a></li>
                                <li><a href="#">Lorem</a></li>
                                <li><a href="#">Lorem Dolor</a></li>
                                <li><a href="#">Lorem</a></li>
                                <li><a href="#">Lorem</a></li>
                                <li><a href="#">Lorem</a></li>
                                <li><a href="#">Lorem</a></li>
                                <li><a href="#">Lorem</a></li>
                                <li><a href="#">Lorem Sit</a></li>
                                <li><a href="#">Lorem</a></li>
                                <li><a href="#">Lorem</a></li>
                                <li><a href="#">Lorem</a></li>
                                <li><a href="#">Lorem Amit</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-6 col-xl-3">
                            <p className="head">Social Posts</p>
                            <div className="social">
                                <a href="#" target="_blank">
                                    <span>
                                        <b>00 Jan</b>
                                        <em>0000</em>
                                    </span>
                                    <em>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit</em>
                                </a>
                                <a href="#" target="_blank">
                                    <span>
                                        <b>00 Jan</b>
                                        <em>0000</em>
                                    </span>
                                    <em>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit</em>
                                </a>
                                <a href="#" target="_blank">
                                    <span>
                                        <b>00 Jan</b>
                                        <em>0000</em>
                                    </span>
                                    <em>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit</em>
                                </a>
                                <a href="#" target="_blank">
                                    <span>
                                        <b>00 Jan</b>
                                        <em>0000</em>
                                    </span>
                                    <em>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit</em>
                                </a>
                                <a href="#" target="_blank">
                                    <span>
                                        <b>00 Jan</b>
                                        <em>0000</em>
                                    </span>
                                    <em>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit</em>
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-xl-3">
                            <p className="head">Contact Us</p>
                            <div className="contact">
                                <a className="number">
                                    <span>
                                        <b className="icon">&#xe001;</b>
                                        <em>Phone No.</em>
                                    </span>
                                    <em className="txt"></em>
                                </a>
                                <a className="mail">
                                    <span>
                                        <b className="icon">&#xe002;</b>
                                        <em>Email ID.</em>
                                    </span>
                                    <em className="txt"></em>
                                </a>
                                <a className="address">
                                    <span>
                                        <b className="icon">&#xe027;</b>
                                        <em>Address</em>
                                    </span>
                                    <em className="txt"></em>
                                </a>
                            </div>
                            <p className="head">Social Links</p>
                            <div className="media">
                                <a className="icon fb">&#xe021;</a>
                                <a className="icon tw">&#xe022;</a>
                                <a className="icon lin">&#xe023;</a>
                                <a className="icon ins">&#xe024;</a>
                                <a className="icon skype">&#xe026;</a>
                                <a className="icon wapp fwt">&#xe025;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copyright">
                <div className="container">
                    Copyright &copy; Nomaan Arif with all rights reserved 2016-<span>{year}</span>.
                </div>
            </div>
        </>
    )
}
export default Footer;