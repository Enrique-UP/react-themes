import 'swiper/scss';
import { useEffect } from "react";
import {NavLink, Link} from "react-router-dom";
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import data from './ReviewsData.js';
import "../../sass/reviews.scss";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Reviews = () => {
    useEffect(() => {
        for(var j = 0; j < 5; j++){
          var elementSwiperSlide = document.createElement("div");
          elementSwiperSlide.classList = "swiper-slide";
          document.querySelector(".swiper .swiper-wrapper").append(elementSwiperSlide);
          elementSwiperSlide.innerHTML = data[j].text;
        }
    
        var slide = document.querySelectorAll(".swiper .swiper-wrapper .swiper-slide");
        for(var i = data.length; i < slide.length; i++){
          slide[i].remove();
        }
      }, []);
    return(
        <>
            <section className="section reviews">
                <div className="container">
                    <h1 className="heading">Customer's <span>Review</span><i>My Satisfy Clients</i></h1>
                    <div className="outlineBox clred"></div>
                    <Swiper modules={[Navigation, Autoplay]} autoplay={true} spaceBetween={30} slidesPerView={3} navigation breakpoints={
                        {
                            0: {
                                slidesPerView: 1
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween:30
                            }
                        }
                    }></Swiper>
                    <p class="btns center"><Link class="btn-red" to="/reviews">View More</Link></p>
                </div>
            </section>
        </>
    );
}
export default Reviews;