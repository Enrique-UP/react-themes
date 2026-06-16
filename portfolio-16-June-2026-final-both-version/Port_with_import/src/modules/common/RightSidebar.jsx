import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { Global, TeamName } from "./Global";
import ReviewData from "../review/ReviewData";

import { HashLink } from "react-router-hash-link";
import ScrollOffset from "./ScrollOffset";

import calling from "../../assets/images/sideBar/calling.png";

import Ls1 from "../../assets/images/lifeStyleHome/2.jpg";
import Ls2 from "../../assets/images/lifeStyleHome/3.jpg";
import Ls3 from "../../assets/images/lifeStyleHome/4.jpg";
import Ls4 from "../../assets/images/lifeStyleHome/5.jpg";
import Ls5 from "../../assets/images/lifeStyleHome/6.jpg";
import Ls6 from "../../assets/images/lifeStyleHome/7.jpg";
import Ls7 from "../../assets/images/lifeStyleHome/8.jpg";
import Ls8 from "../../assets/images/lifeStyleHome/9.jpg";

import T1 from "../../assets/images/team/t1-sb.jpg";
import T2 from "../../assets/images/team/t2-sb.jpg";
import T3 from "../../assets/images/team/t3-sb.jpg";
import T4 from "../../assets/images/team/t4-sb.jpg";

import C1 from "../../assets/images/childhood/1.jpg";
import C2 from "../../assets/images/childhood/2.jpg";
import C3 from "../../assets/images/childhood/3.jpg";
import C4 from "../../assets/images/childhood/4.jpg";

import Tm1 from "../../assets/images/testi/t1.jpg";
import Tm2 from "../../assets/images/testi/t2.jpg";
import Tm3 from "../../assets/images/testi/t3.jpg";
import Tm4 from "../../assets/images/testi/t4.jpg";
import Tm5 from "../../assets/images/testi/t5.jpg";

import LifeStyleMoments from "../lifeStyle/LifeStyleMoments";

const LifeStyleData = [
  { hd: LifeStyleMoments[1].hd, txt: LifeStyleMoments[1].shd, img: Ls1 },
  { hd: LifeStyleMoments[2].hd, txt: LifeStyleMoments[2].shd, img: Ls2 },
  { hd: LifeStyleMoments[3].hd, txt: LifeStyleMoments[3].shd, img: Ls3 },
  { hd: LifeStyleMoments[4].hd, txt: LifeStyleMoments[4].shd, img: Ls4 },
  { hd: LifeStyleMoments[5].hd, txt: LifeStyleMoments[5].shd, img: Ls5 },
  { hd: LifeStyleMoments[6].hd, txt: LifeStyleMoments[6].shd, img: Ls6 },
  { hd: LifeStyleMoments[7].hd, txt: LifeStyleMoments[7].shd, img: Ls7 },
  { hd: LifeStyleMoments[8].hd, txt: LifeStyleMoments[8].shd, img: Ls8 },
];

const TeamData = [
  { hd: "Head1", txt: "Txt1", img: T1 },
  { hd: "Head2", txt: "Txt2", img: T2 },
  { hd: "Head3", txt: "Txt3", img: T3 },
  { hd: "Head4", txt: "Txt4", img: T4 }
];

const ChildhoodData = [
  { hd: "Head1", txt: "Txt1", img: C1 },
  { hd: "Head2", txt: "Txt2", img: C2 },
  { hd: "Head3", txt: "Txt3", img: C3 },
  { hd: "Head4", txt: "Txt4", img: C4 }
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

const images = [Tm1, Tm2, Tm3, Tm4, Tm5];
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
          <img data-src={calling} alt="" />
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