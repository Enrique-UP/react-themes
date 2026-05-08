import { Link } from "react-router-dom";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// DESKTOP IMAGES
import img1 from "../../assets/images/slider/slide1.jpg";
import img2 from "../../assets/images/slider/slide2.jpg";
import img3 from "../../assets/images/slider/slide3.jpg";

// TABLET IMAGES
import img1Tab from "../../assets/images/slider/slide1-991.jpg";
import img2Tab from "../../assets/images/slider/slide2-991.jpg";
import img3Tab from "../../assets/images/slider/slide3-991.jpg";

// MOBILE IMAGES
import img1Mob from "../../assets/images/slider/slide1-575.jpg";
import img2Mob from "../../assets/images/slider/slide2-575.jpg";
import img3Mob from "../../assets/images/slider/slide3-575.jpg";
import ColorsLine from "../common/ColorsLine";

const images = [
  {
    desktop: img1,
    tab: img1Tab,
    mobile: img1Mob,
    title: "One",
    desc: "First",
    link: "/contactus",
  },
  {
    desktop: img2,
    tab: img2Tab,
    mobile: img2Mob,
    title: "Two",
    desc: "Second",
    link: "/contactus",
  },
  {
    desktop: img3,
    tab: img3Tab,
    mobile: img3Mob,
    title: "Three",
    desc: "Third",
    link: "/contactus",
  },
];

export default function Slider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className="homeSlider">

        {/* MAIN SWIPER */}
        <Swiper
          modules={[Navigation, Thumbs, Autoplay, Pagination]}
          navigation={{
            prevEl: ".prevBtn",
            nextEl: ".nextBtn",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          watchSlidesProgress={true}
          pagination={{
            el: ".customPagination",
            clickable: true,
          }}
          className="mainSwiper"
          thumbs={{
            swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="slideWrapper">

                {/* DYNAMIC CONTENT */}
                <div className="head">
                  <div className="container">
                    <div className="text">
                      <p className="hd">Lorema</p>
                      <p className="shd">Ipsum/Lorem</p>
                      <p className="desc">Lorem ipsum dolor sit</p>
                      <div className="btns">
                        <Link to={img.link}>Contact Me</Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* IMAGE */}
                <picture>
                  <source media="(max-width:575px)" srcSet={img.mobile} />
                  <source media="(min-width:576px) and (max-width:767px)" srcSet={img.tab} />
                  <img src={img.desktop} className="mainImg" />
                </picture>                

              </div>{/* slideWrapper */}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* THUMBS */}
        <div className="thumbsImg">
          <Swiper
            modules={[FreeMode, Thumbs]}
            onSwiper={setThumbsSwiper}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            className="thumbSwiper"
          >
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <img src={img.desktop} className="thumbImg" />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="arrowsArea">
            <div className="aaw">
              <div className="arrows">
                <i className="prevBtn icon">&#xa037;</i>
                <i className="nextBtn icon">&#xa038;</i>
              </div>
            </div>
          </div>{/* arrowArea */}
        </div>{/* thumbsImg */}

        {/* PAGINATION */}
        <div className="paginationArea">
          <div className="paginations">
            <div className="customPagination"></div>
          </div>
        </div>

      </div>

      <ColorsLine />
    </>
  );
}