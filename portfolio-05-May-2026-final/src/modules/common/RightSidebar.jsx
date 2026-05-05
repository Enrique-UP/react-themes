import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { Global, TeamName } from "./Global";
import ReviewData from "../review/ReviewData";

import { HashLink } from "react-router-hash-link";
import ScrollOffset from "./ScrollOffset";

import calling from "../../assets/images/call.png";

import Ls1 from "../../assets/images/sideBar/home1.jpg";
import Ls2 from "../../assets/images/sideBar/home2.jpg";
import Ls3 from "../../assets/images/sideBar/home3.jpg";
import Ls4 from "../../assets/images/sideBar/home4.jpg";

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

const LifeStyleData = [
  { hd: "Head1", txt: "Txt1", img: Ls1 },
  { hd: "Head2", txt: "Txt2", img: Ls2 },
  { hd: "Head3", txt: "Txt3", img: Ls3 },
  { hd: "Head4", txt: "Txt4", img: Ls4 }
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
      <img src={img} />
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
        <img src={img} />
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
          <img src={calling} alt="" />
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