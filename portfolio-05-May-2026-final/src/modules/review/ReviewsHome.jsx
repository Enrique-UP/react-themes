import { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../../assets/images/testi/t1.jpg";
import img2 from "../../assets/images/testi/t2.jpg";
import img3 from "../../assets/images/testi/t3.jpg";
import img4 from "../../assets/images/testi/t4.jpg";
import img5 from "../../assets/images/testi/t5.jpg";
const images = [img1, img2, img3, img4, img5];

import ReviewData from "./ReviewData";

function ReviewsTag({ img, name, place, icons, text }) {
  return (
    <div className="reviewArea">
      <figure>
        <img src={img} />
        <figcaption>
          <b data-name={name}></b>
          <span data-place={place}></span>
          <i className="icon" dangerouslySetInnerHTML={{ __html: icons }}></i>
        </figcaption>
      </figure>
      <p data-text={text}></p>
    </div>
  );
}

export default function ReviewsHome() {
  const swiperRef = useRef(null);

  return (
    <section className="section reviewsSec">
      <div className="container">
        <div className="row">

          <div className="col-12">
            <hgroup>
              <h3 data-aos="fade-down">Customer <span>Reviews</span></h3>
              <p data-aos="fade-up">What my clients say about my work</p>
            </hgroup>
          </div>

          <div className="col-12">
            <div className="reviewsTitle outlineBox dk" data-aos="fade-up"></div>
          </div>

          <div className="col-12">
            <div className="back">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={12}
                  autoHeight={false}

                  breakpoints={{
                      0: { slidesPerView: 1, spaceBetween: 4 },
                      576: { spaceBetween: 12 },
                      992: { slidesPerView: 2 },
                  }}

                  navigation={true}
                  //   pagination={{ clickable: true }}

                  autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                  }}

                  loop={true}
                  speed={800}
                  grabCursor={true}

                  onSwiper={(swiper) => {
                      swiperRef.current = swiper;
                  }}

                  onSlideChange={(swiper) => {
                      if (swiper.autoplay && !swiper.autoplay.running) {
                      swiper.autoplay.start();
                      }
                  }}
                  >
                  {ReviewData.slice(0, 5).map((val, ind) => (
                    <SwiperSlide key={ind}>
                      <ReviewsTag {...val} img={images[ind]} />
                    </SwiperSlide>
                  ))}
                </Swiper>
            </div>{/* back */}

          </div>
          <div className="col-12">
            <div className="btns center">
              <Link to="/reviews" data-aos="fade-right">View More</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}