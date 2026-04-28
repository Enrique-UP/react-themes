import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { Global } from "./Global";

import calling from "../../assets/images/call.png";

import Ls1 from "../../assets/images/sideBar/home1.jpg";
import Ls2 from "../../assets/images/sideBar/home2.jpg";
import Ls3 from "../../assets/images/sideBar/home3.jpg";
import Ls4 from "../../assets/images/sideBar/home4.jpg";

import T1 from "../../assets/images/team/t1.jpg";
import T2 from "../../assets/images/team/t2.jpg";
import T3 from "../../assets/images/team/t3.jpg";
import T4 from "../../assets/images/team/t4.jpg";

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


const TmData = [
  { txt: "Text1 Lorem ipsum dolor sit amet consectetur adipisicing elit qui necessitatibus ex iste deserunt reprehenderit neque rerum magni velit explicabo tempora.", img: Tm1, hd: "Head1", post:"Post1", stars:"&#xa047;&#xa047;&#xa047;&#xa047;" },
  { txt: "Text2 Lorem ipsum dolor sit amet consectetur adipisicing elit qui necessitatibus ex iste deserunt reprehenderit neque rerum magni velit explicabo tempora.", img: Tm2, hd: "Head2", post:"Post2", stars:"&#xa047;&#xa047;&#xa047;&#xa047;&#xa047;" },
  { txt: "Text3 Lorem ipsum dolor sit amet consectetur adipisicing elit qui necessitatibus ex iste deserunt reprehenderit neque rerum magni velit explicabo tempora.", img: Tm3, hd: "Head3", post:"Post3", stars:"&#xa047;&#xa047;&#xa047;&#xa047;" },
  { txt: "Text4 Lorem ipsum dolor sit amet consectetur adipisicing elit qui necessitatibus ex iste deserunt reprehenderit neque rerum magni velit explicabo tempora.", img: Tm4, hd: "Head4", post:"Post4", stars:"&#xa047;&#xa047;&#xa047;&#xa047;&#xa047;&#xa047;" },
  { txt: "Text5 Lorem ipsum dolor sit amet consectetur adipisicing elit qui necessitatibus ex iste deserunt reprehenderit neque rerum magni velit explicabo tempora.", img: Tm5, hd: "Head5", post:"Post5", stars:"&#xa047;&#xa047;&#xa047;&#xa047;&#xa047;&#xa047;" },
];
const TmTag = ({ txt, img, hd, post, stars }) => {
  return (
    <div className="testi">
      <p>{txt}</p>
      <div className="text">
        <img src={img} />
        <div className="txt">
          <b>{hd}</b>
          <span>{post}</span>
          <i className="icon" dangerouslySetInnerHTML={{ __html: stars }}></i>
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
        <aside className="contact" data-aos="fade-left">
          <img src={calling} alt="" />
          <a target="_blank" href={Global.numTel}>
            <b>Got a questions?</b>
            <span>Don't hesitate to call me</span>
            <i>{Global.num}</i>
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
                <CommonTag {...val} />
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
            {TmData.map((val, ind) => (
              <SwiperSlide key={ind}>
                <TmTag {...val} />
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
            <li><a href="index.html#ads_one">Seasonal Deals</a></li>
            <li><a href="index.html#ads_two">Best Web Design Solutions</a></li>
            <li><a href="index.html#ads_four">Travel Website</a></li>
            <li><a href="#questions">Got a Questions?</a></li>
            <li><a href="contact-me.html#call-support">Call Support Timings</a></li>
          </ul>
        </aside>

      </div>
    </div>
  );
}