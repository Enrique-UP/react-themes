import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { Global, TeamName } from "./Global";
import ReviewData from "../review/ReviewData";

import { HashLink } from "react-router-hash-link";
import ScrollOffset from "./ScrollOffset";

import LifeStyleMoments from "../lifeStyle/LifeStyleMoments";

const LifeStyleData = [
  { hd: LifeStyleMoments[1].hd, txt: LifeStyleMoments[1].shd, img: "images/lifeStyleHome/2.jpg" },
  { hd: LifeStyleMoments[2].hd, txt: LifeStyleMoments[2].shd, img: "images/lifeStyleHome/3.jpg" },
  { hd: LifeStyleMoments[3].hd, txt: LifeStyleMoments[3].shd, img: "images/lifeStyleHome/4.jpg" },
  { hd: LifeStyleMoments[4].hd, txt: LifeStyleMoments[4].shd, img: "images/lifeStyleHome/5.jpg" },
  { hd: LifeStyleMoments[5].hd, txt: LifeStyleMoments[5].shd, img: "images/lifeStyleHome/6.jpg" },
  { hd: LifeStyleMoments[6].hd, txt: LifeStyleMoments[6].shd, img: "images/lifeStyleHome/7.jpg" },
  { hd: LifeStyleMoments[7].hd, txt: LifeStyleMoments[7].shd, img: "images/lifeStyleHome/8.jpg" },
  { hd: LifeStyleMoments[8].hd, txt: LifeStyleMoments[8].shd, img: "images/lifeStyleHome/9.jpg" },
];

const TeamData = [
  { hd: "Head1", txt: "Txt1", img: "images/team/t1-sb.jpg" },
  { hd: "Head2", txt: "Txt2", img: "images/team/t2-sb.jpg" },
  { hd: "Head3", txt: "Txt3", img: "images/team/t3-sb.jpg" },
  { hd: "Head4", txt: "Txt4", img: "images/team/t4-sb.jpg" }
];

const ChildhoodData = [
  { hd: "Head1", txt: "Txt1", img: "images/childhood/1.jpg" },
  { hd: "Head2", txt: "Txt2", img: "images/childhood/2.jpg" },
  { hd: "Head3", txt: "Txt3", img: "images/childhood/3.jpg" },
  { hd: "Head4", txt: "Txt4", img: "images/childhood/4.jpg" }
];

const CommonTag = ({ img, hd, txt }) => {
  return (
    <div className="sliderArea">
      <img data-src={img} />
      <div className="text">
        <b>{hd}</b>
        <span>{txt}</span>
      </div>
    </div>
  );
};

const images = ["images/testi/t1.jpg", "images/testi/t2.jpg", "images/testi/t3.jpg", "images/testi/t4.jpg", "images/testi/t5.jpg"];
const TmTag = ({ name, place, text, icons, img }) => {
  return (
    <div className="testi">
      <p data-review={text}></p>
      <div className="text">
        <img data-src={img} />
        <div className="txt">
          <b data-name={name}></b>
          <span data-place={place}></span>
          <i className="icon" dangerouslySetInnerHTML={{ __html: icons }}></i>
        </div>
      </div>
    </div>
  );
};

export default function RightSidebar() {
  return (
    <div className="area-3">
      <div className="sideBar">

        {/* Contact */}
        <aside className="contact" data-aos="fade-left" id="question">
          <img data-src="images/sideBar/calling.png" alt="" />
          <a target="_blank" href={Global.numTel}>
            <b>Got a questions?</b>
            <span>Don't hesitate to call me</span>
            <i data-num={Global.num}></i>
          </a>
        </aside>

        {/* Lifestyle */}
        <aside className="slider" data-aos="fade-left">
          <p className="hd">My Lifestyle</p>
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            navigation={{
              prevEl: ".prev-lifestyle",
              nextEl: ".next-lifestyle",
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
          >
            {LifeStyleData.map((val, ind) => (
              <SwiperSlide key={ind}>
                <CommonTag {...val} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="nav-wrapper">
            <div className="swiper-button-prev prev-lifestyle"><i className="icon">&#xa029;</i></div>
            <div className="swiper-button-next next-lifestyle"><i className="icon">&#xa030;</i></div>
          </div>
        </aside>

        {/* Childhood */}
        <aside className="slider" data-aos="fade-left">
          <p className="hd">My Childhood</p>
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            navigation={{
              prevEl: ".prev-childhood",
              nextEl: ".next-childhood",
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
          >
            {ChildhoodData.map((val, ind) => (
              <SwiperSlide key={ind}>
                <CommonTag {...val} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="nav-wrapper">
            <div className="swiper-button-prev prev-childhood"><i className="icon">&#xa029;</i></div>
            <div className="swiper-button-next next-childhood"><i className="icon">&#xa030;</i></div>
          </div>
        </aside>

        {/* Team */}
        <aside className="slider" data-aos="fade-left">
          <p className="hd">My Team</p>
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            navigation={{
              prevEl: ".prev-team",
              nextEl: ".next-team",
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
          >
            {TeamData.map((val, ind) => (
              <SwiperSlide key={ind}>
                <CommonTag 
                  post={TeamName[ind]?.post}
                  img={val.img}
                  ani={val.ani}
                  hd={TeamName[ind]?.fName}
                  txt={TeamName[ind]?.lName}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="nav-wrapper">
            <div className="swiper-button-prev prev-team"><i className="icon">&#xa029;</i></div>
            <div className="swiper-button-next next-team"><i className="icon">&#xa030;</i></div>
          </div>
        </aside>

        {/* Testimonials */}
        <aside className="slider" data-aos="fade-left">
          <p className="hd">Testimonials</p>
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            navigation={{
              prevEl: ".prev-tes",
              nextEl: ".next-tes",
            }}
            autoplay={{ delay: 10000, disableOnInteraction: false }}
            loop
          >
            {ReviewData.slice(0, 5).map((val, ind) => (
              <SwiperSlide key={ind}>
                <TmTag {...val} img={images[ind]} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="nav-wrapper">
            <div className="swiper-button-prev prev-tes"><i className="icon">&#xa029;</i></div>
            <div className="swiper-button-next next-tes"><i className="icon">&#xa030;</i></div>
          </div>
        </aside>

        {/* Tags */}
        <aside className="tags" data-aos="fade-left">
          <p className="hd">Tags</p>
          <ul>
            <li><HashLink to="/#ads1" scroll={ScrollOffset}>Seasonal Offers Available</HashLink></li>
            <li><HashLink to="/#ads2" scroll={ScrollOffset}>Modern Web Solutions</HashLink></li>
            <li><HashLink to="/#ads3" scroll={ScrollOffset}>All Website Services</HashLink></li>
            <li><HashLink to="#question" scroll={ScrollOffset}>Got a Questions?</HashLink></li>
            <li><HashLink to="/contact#timing" scroll={ScrollOffset}>Call Support Timings</HashLink></li>
          </ul>
        </aside>

      </div>
    </div>
  );
}