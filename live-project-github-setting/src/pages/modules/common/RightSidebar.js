import { Global } from "./Global";
import img1 from "../../../images/lifeStyle/home1.jpg";
import t1 from "../../../images/testi/t1.jpg";
import call from "../../../images/call.png";

function RightSidebar() {
  return (
    <>
      <div className="col-sm-6 col-lg-3">
        <div className="sideBar">
          <aside className="contact">
            <a target="_blank" href={Global.numTel}>
              <b>Got a questions?</b>
              <span>Don't hesitate to call me</span>
              <i>{Global.num}</i>
            </a>
            <img src={call} />
          </aside>
          <aside className="slider">
            <p className="hd">My Lifestyle</p>
            <div className="sliderArea">
              <img src={img1} />
              <div className="text">
                <b>Lorem</b>
                <span>Ipsum</span>
              </div>
            </div>
          </aside>
          <aside className="slider">
            <p className="hd">My Childhood</p>
            <div className="sliderArea">
              <img src={img1} />
              <div className="text">
                <b>Lorem</b>
                <span>Ipsum</span>
              </div>
            </div>
          </aside>
          <aside className="slider">
            <p className="hd">My Team</p>
            <div className="sliderArea">
              <img src={img1} />
              <div className="text">
                <b>Lorem</b>
                <span>Ipsum</span>
              </div>
            </div>
          </aside>
          <aside className="slider">
            <p className="hd">Testimonials</p>
            <div className="testi">
              <p>Lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet loremipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipdum solor sit ameet lorem ipsum dolor sit ameet.</p>
              <div className="text">
                <img src={t1} />
                <div className="txt">
                  <b>Lorem</b>
                  <span>Ipsum</span>
                  <i className="icon">&#xa047;&#xa047;&#xa047;&#xa047;&#xa047;</i>
                </div>
              </div>
            </div>
          </aside>
          <aside className="tags">
            <p className="hd">Tags</p>
            <ul>
              <li><a href="index.html#ads_one">Seasonal Deals</a></li>
              <li><a href="index.html#ads_two">Best Web Design Solutions</a></li>
              <li><a href="index.html#ads_four">Travel Website</a></li>
              <li><a href="#questions">Got a Questions?</a></li>
              <li><a href="contact-me.html#call-support">Call Support Timings</a></li>
            </ul>
          </aside>
        </div>
      </div>
    </>
  );
}

export default RightSidebar;