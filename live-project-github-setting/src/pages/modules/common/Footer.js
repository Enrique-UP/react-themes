import { Link } from 'react-router-dom';

import Logo from '../../../images/logo.png';

import { Global } from "./Global";

function Footer() {
  return (
    <>
      <footer className="section">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="logo">
                <Link to="/"><img src={Logo} /></Link>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-xl-3">
              <p className="head">About Us</p>
              <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum doloremque neque vel, molestias officiis, laboriosam doloribus architecto quas sed animi itaque dolorem accusantium rerum sit quod inventore eveniet labore quam ad illo delectus voluptatibus ut. Rem numquam modi, quis quas quos sed? Sit explicabo repellat molestias.</p>
              <p className="text mt0"><b>Id nesciunt reiciendis,</b> amet! Quibusdam ab tenetur autem nihil ratione illo. Eum, voluptatum ratione voluptatum ratione voluptatum ratione voluptatum ratione dicta vel accusamus, esse.</p>
            </div>
            <div className="col-sm-6 col-md-6 col-xl-3">
              <p className="head">Main Links</p>
              <ul className="links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/lifestyle">Gallery</Link></li>
                <li><Link to="/reviews">Reviews</Link></li>
                <li><Link to="/poetry">Poetry</Link></li>
                <li><Link to="/inner">Inner Page</Link></li>
                <li><Link to="/contactus">Contact Us</Link></li>
                <li><a href="javascript:;">Lorem Dolor</a></li>
                <li><a href="javascript:;">Lorem</a></li>
                <li><a href="javascript:;">Lorem</a></li>
                <li><a href="javascript:;">Lorem</a></li>
                <li><a href="javascript:;">Lorem</a></li>
                <li><a href="javascript:;">Lorem</a></li>
                <li><a href="javascript:;">Lorem Sit</a></li>
                <li><a href="javascript:;">Lorem</a></li>
                <li><a href="javascript:;">Lorem</a></li>
                <li><a href="javascript:;">Lorem</a></li>
                <li><a href="javascript:;">Lorem Ameet</a></li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-6 col-xl-3">
              <p className="head">Social Posts</p>
              <div className="social">
                <a href="javascript:;" target="_blank">
                  <span>
                    <b>00 Jan</b>
                    <em>0000</em>
                  </span>
                  <em>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit</em>
                </a>
                <a href="javascript:;" target="_blank">
                  <span>
                    <b>00 Jan</b>
                    <em>0000</em>
                  </span>
                  <em>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit</em>
                </a>
                <a href="javascript:;" target="_blank">
                  <span>
                    <b>00 Jan</b>
                    <em>0000</em>
                  </span>
                  <em>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit</em>
                </a>
                <a href="javascript:;" target="_blank">
                  <span>
                    <b>00 Jan</b>
                    <em>0000</em>
                  </span>
                  <em>Lorem ipsum dolor sit amit lorem ipsum dolor sit amit</em>
                </a>
                <a href="javascript:;" target="_blank">
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
                <a className="number" href={Global.numTel} target="_blank">
                  <span>
                    <b className="icon">&#xa001;</b>
                    <em>Phone No.</em>
                  </span>
                  <em className="txt">{Global.num}</em>
                </a>
                <a className="mail" href={`mailto:${Global.email}`} target="_blank">
                  <span>
                    <b className="icon">&#xa004;</b>
                    <em>Email ID.</em>
                  </span>
                  <em className="txt">{Global.email}</em>
                </a>
                <a className="address" href="https://www.google.com/maps/dir///@31.176664,-7.682147,3z?entry=ttu&amp;g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                  <span>
                    <b className="icon">&#xa007;</b>
                    <em>Address</em>
                  </span>
                  <em className="txt">{Global.address}</em>
                </a>
              </div>
              <p className="head">Social Links</p>
              <div className="media">
                <a className="icon" href="javascript:;" target="_blank">&#xa019;</a>
                <a className="icon" href="javascript:;" target="_blank">&#xa020;</a>
                <a className="icon" href="javascript:;" target="_blank">&#xa021;</a>
                <a className="icon" href="javascript:;" target="_blank">&#xa023;</a>
                <a className="icon" href="javascript:;" target="_blank">&#xa026;</a>
                <a className="icon fwt" href={Global.whatsappLink} target="_blank">&#xa025;</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <div className="container">Copyright &copy; {new Date().getFullYear()} with all rights reserved.</div>
      </div>
      <a className="fixNum" href={Global.numTel} target="_blank">
        <i className="icon">&#xa001;</i>
        Call Us {Global.num}
      </a>
    </>
  );
}

export default Footer;
