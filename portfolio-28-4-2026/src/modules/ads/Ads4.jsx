import { Link } from "react-router-dom";
import Ads from "../../assets/images/ads/ads4.jpg";
import { Global } from "../common/Global";

export default function Ads4() {
  return (
    <>
      <section className="ads4">
            <div className="container">
                <ul>
                    <li>
                        <p className="subHead" data-aos="fade-down">Adventure</p>
                        <p className="head" data-aos="fade-up">Dare to Explore</p>
                        <p className="text" data-aos="fade-down">Take some time for yourself</p>
                        <div className="btns bsn" data-aos="fade-right">
                            <Link to="/lifestyle">View More</Link>
                        </div>
                    </li>
                    <li><img src={Ads} data-aos="fade-left" /></li>
                </ul>
            </div>{/* container */}
        </section>
    </>
  );
}
