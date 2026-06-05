import { Link } from "react-router-dom";
import { Global } from "./Global";
import img1 from "../../../images/lifeStyle/home1.jpg";

function LeftSidebar() {
  return (
    <>
      <div className="col-sm-6 col-lg-3">
        <div className="sideBar">
          <aside className="links">
            <p className="hd">Menu</p>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link>About Me</Link></li>
              <li><Link>My Worked Projects</Link></li>
              <li><Link>I Know</Link></li>
              <li><Link to="/lifestyle">Image Gallery</Link></li>
              <li><Link>My Childhood</Link></li>
              <li><Link>My Education</Link></li>
              <li><Link>My Lifestyle</Link></li>
              <li><Link>My Team</Link></li>
              <li><Link>Customer's Review</Link></li>
              <li><Link>Why Choose Me</Link></li>
              <li><Link to="/contactus">Contact Me</Link></li>
            </ul>
          </aside>
          <aside className="about">
            <img data-src={img1} />
            <p><span>Loremm Ipsu</span> Lorem ipsum dolor sit ameet loremipsum dolor sit ameet loremipsum solor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet. <Link to="/">Explore More</Link></p>
          </aside>
          <aside className="interests">
            <p className="hd">Interests</p>
            <ul>
              <li>
                <i className="icon">&#xa008;</i>
                <span>Listening Music</span>
              </li>
              <li>
                <i className="icon">&#xa008;</i>
                <span>Watching Movies</span>
              </li>
              <li>
                <i className="icon">&#xa008;</i>
                <span>Viewing Nature Scenes</span>
              </li>
              <li>
                <i className="icon">&#xa008;</i>
                <span>Games & Sports</span>
              </li>
              <li>
                <i className="icon">&#xa008;</i>
                <span>Traveling</span>
              </li>
              <li>
                <i className="icon">&#xa008;</i>
                <span>Fond of Food</span>
              </li>
              <li>
                <i className="icon">&#xa008;</i>
                <span>Biking</span>
              </li>
              <li>
                <i className="icon">&#xa008;</i>
                <span>Car Driving</span>
              </li>
            </ul>
          </aside>
          <aside className="ads">
            <a href={Global.numTel} target="_blank">
              <b>
                Get a 50%<br />
                Discount
              </b>
              <span>Online Order Now</span>
            </a>
          </aside>
        </div>
      </div>
    </>
  );
}

export default LeftSidebar;