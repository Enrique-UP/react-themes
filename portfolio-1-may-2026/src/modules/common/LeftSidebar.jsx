import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Global } from "./Global";
import ScrollOffset from "./ScrollOffset";

import img1 from "../../assets/images/sideBar/home1.jpg";
import camping from "../../assets/images/icons/camping.png";
import fitAth from "../../assets/images/icons/fitAth.png";

import style from "../../assets/images/icons/style.png";
import cricket from "../../assets/images/icons/cricket.png";
import swimming from "../../assets/images/icons/swimming.png";
import hikingTrekking from "../../assets/images/icons/hikingTrekking.png";
import interiorDesign from "../../assets/images/icons/interiorDesign.png";
import socialMedia from "../../assets/images/icons/socialMedia.png";
import socialWork from "../../assets/images/icons/socialWork.png";

const InterestData = [
  { int : "Fashion & Styling", icon : style },
  { int : "Nature Sightseeing", icon : "&#xa051;" },
  { int : "Photography", icon : "&#xa083;" },
  { int : "Food Lover", icon : "&#xa091;" },
  { int : "Road Trips", icon : "&#xa092;" },
  { int : "Traveling", icon : "&#xa090;" },
  { int : "Biking", icon : "&#xa060;" },
  { int : "Car Driving", icon : "&#xa061;" },
  { int : "Camping", icon : camping },
  { int : "Swimming", icon : "&#xa094;" },
  { int : "Hiking/Trekking", icon : hikingTrekking },
  { int : "Games & Sports", icon : cricket }, 
  { int : "Fitness & Athletics", icon : fitAth },
  { int : "Interior Designing", icon : interiorDesign }, 
  { int : "Listening Music", icon : "&#xa066;" },
  { int : "Watching Movies", icon : "&#xa075;" }, 
  { int : "Social Media", icon : socialMedia },
  { int : "Social Work", icon : socialWork }
];
const InterestTag = (props) => {
  const isImage = props.icon && props.icon.includes("/");
  return (
    <li>
      <i className="icon">
        {isImage ? (<img src={props.icon} alt="icon" />) : (<span dangerouslySetInnerHTML={{ __html: props.icon }} />)}
      </i>
      <span>{props.int}</span>
    </li>
  );
};

export default function LeftSidebar() {
  return (
    <>
      <div className="area-1">
        <div className="sideBar">
          <aside className="links" data-aos="fade-right">
            <p className="hd">Menu</p>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><HashLink to="/#about" scroll={ScrollOffset}>About Me</HashLink></li>
              <li><HashLink to="/#tp" scroll={ScrollOffset}>Top Projects</HashLink></li>
              <li><HashLink to="/#exp" scroll={ScrollOffset}>Experience</HashLink></li>
              <li><HashLink to="/#edu" scroll={ScrollOffset}>Education</HashLink></li>
              <li><HashLink to="/#ds" scroll={ScrollOffset}>Design Services</HashLink></li>
              <li><HashLink to="/#team" scroll={ScrollOffset}>Team</HashLink></li>
              <li><HashLink to="/#wcu" scroll={ScrollOffset}>Why Choose Us</HashLink></li>
              <li><HashLink to="/#bp" scroll={ScrollOffset}>Branding Projects</HashLink></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/reviews">Reviews</Link></li>
              <li><Link to="/lifestyle">Life Style</Link></li>
              <li><HashLink to="/#ch" scroll={ScrollOffset}>Childhood</HashLink></li>
              {/* <li><Link to="/poetry">Poetry</Link></li> */}
              <li><Link to="/contact">Contact Me</Link></li>
            </ul>
          </aside>
          <aside className="about" data-aos="fade-right">
            <img data-src={img1} />
            <p>
              <span>My Activities</span>
              <i>I have a strong interest in cricket and politics, and I enjoy staying active through outdoor experiences, travel, and creative pursuits. I like exploring new places, meeting new people, and gaining new experiences. It helps me stay refreshed, focused, and balanced in life.</i>
              <Link to="/#about" scroll={ScrollOffset}>Explore More</Link>
            </p>
          </aside>
          <aside className="interests" data-aos="fade-right">
            <p className="hd">My Interests</p>
            <ul>
              {
                InterestData.map((val, ind) => {
                  return <InterestTag key={ind} int={val.int} icon={val.icon} />
                })
              }
            </ul>
          </aside>
          <aside className="ads" data-aos="fade-right">
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
