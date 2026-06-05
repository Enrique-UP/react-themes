import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Global } from "./Global";
import ScrollOffset from "./ScrollOffset";

const InterestData = [
  { int : "Fashion & Styling", icon : "images/icons/style.png" },
  { int : "Road Trips & Nature Sightseeing", icon : "&#xa051;" },
  { int : "Photography", icon : "&#xa083;" },
  { int : "Food Lover", icon : "&#xa091;" },
  // { int : "Road Trips", icon : "&#xa092;" },
  { int : "Traveling", icon : "&#xa090;" },
  { int : "Biking", icon : "&#xa060;" },
  { int : "Car Driving", icon : "&#xa061;" },
  { int : "Camping", icon : "images/icons/camping.png" },
  { int : "Swimming", icon : "&#xa094;" },
  { int : "Hiking / Trekking", icon : "images/icons/hikingTrekking.png" },

  
  { int : "Boating & Rafting", icon : "images/icons/rafting.png" },
  { int : "Wildlife Exploration (Jungle Safaris)", icon : "images/icons/safari.png" },
  { int : "Exploring New Cities and Local Cultures", icon : "images/icons/city.png" },
  { int : "Exploring Historical and Heritage Sites", icon : "&#xa071;" },
  { int : "River, Lake, and Coastal Exploration", icon : "images/icons/river.png" },


  { int : "Games & Sports", icon : "images/icons/cricket.png" }, 
  { int : "Fitness & Athletics", icon : "images/icons/fitAth.png" },
  { int : "Interior Designing", icon : "images/icons/interiorDesign.png" }, 
  { int : "Listening Music", icon : "&#xa066;" },
  { int : "Watching Movies", icon : "&#xa075;" }, 
  { int : "Social Media", icon : "images/icons/socialMedia.png" },
  { int : "Social Work", icon : "images/icons/socialWork.png" }
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
