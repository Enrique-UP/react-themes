import Ads from "../../assets/images/ads/ads1.jpg";
import { Global } from "../common/Global";

export default function Ads1() {
  return (
    <>
      <section className="section ads1">
            <div className="container">
                <ul>
                    <li>
                        <p className="subHead" data-aos="fade-down">Seasonal Offers Available</p>
                        <p className="head" data-aos="fade-up">Up to 50% Off</p>
                        <p className="text" data-aos="fade-down">On All Types of Websites</p>
                        <div className="btns center bsn" data-aos="fade-right">
                            <a href={Global.numTel} target="_blank">Contact Us</a>
                        </div>
                    </li>
                    <li><img src={Ads} data-aos="fade-left" /></li>
                </ul>
            </div>{/* container */}
        </section>
    </>
  );
}
