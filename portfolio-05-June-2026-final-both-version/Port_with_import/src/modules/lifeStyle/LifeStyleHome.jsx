import { useState } from "react";
import { Link } from "react-router-dom";

import img1 from "../../assets/images/lifeStyleHome/1.jpg";
import img2 from "../../assets/images/lifeStyleHome/2.jpg";
import img3 from "../../assets/images/lifeStyleHome/3.jpg";
import img4 from "../../assets/images/lifeStyleHome/4.jpg";
import img5 from "../../assets/images/lifeStyleHome/5.jpg";
import img6 from "../../assets/images/lifeStyleHome/6.jpg";
import img7 from "../../assets/images/lifeStyleHome/7.jpg";
import img8 from "../../assets/images/lifeStyleHome/8.jpg";
import img9 from "../../assets/images/lifeStyleHome/9.jpg";

import LifeStyleMoments from "./LifeStyleMoments";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Captions from "yet-another-react-lightbox/plugins/captions";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/captions.css";

const lifeStyleData = {
  left: {
    text: {
      title: "My Hobbies",
      desc:
        "I enjoy traveling and playing cricket, with experience representing school, club, and corporate teams. I am also passionate about food."
    },
    card: {
      img: img1,
      hd: LifeStyleMoments[0].hd,
      shd: LifeStyleMoments[0].shd
    }
  },

  rightTop: [
    {
      img: img2,
      hd: LifeStyleMoments[1].hd,
      shd: LifeStyleMoments[1].shd,
      aos: "fade-right"
    },
    {
      img: img3,
      hd: LifeStyleMoments[2].hd,
      shd: LifeStyleMoments[2].shd,
      aos: "fade-left"
    },
    {
      img: img4,
      hd: LifeStyleMoments[3].hd,
      shd: LifeStyleMoments[3].shd,
      aos: "fade-right"
    },
    {
      img: img5,
      hd: LifeStyleMoments[4].hd,
      shd: LifeStyleMoments[4].shd,
      aos: "fade-left"
    }
  ],

  bottom: [
    {
      img: img6,
      hd: LifeStyleMoments[5].hd,
      shd: LifeStyleMoments[5].shd,
      aos: "fade-left"
    },
    {
      img: img7,
      hd: LifeStyleMoments[6].hd,
      shd: LifeStyleMoments[6].shd,
      aos: "fade-right"
    },
    {
      img: img8,
      hd: LifeStyleMoments[7].hd,
      shd: LifeStyleMoments[7].shd,
      aos: "fade-left"
    },
    {
      img: img9,
      hd: LifeStyleMoments[8].hd,
      shd: LifeStyleMoments[8].shd,
      aos: "fade-right"
    }
  ]
};

export default function LifestyleHome() {

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const allImages = [
    lifeStyleData.left.card.img,
    ...lifeStyleData.rightTop.map(i => i.img),
    ...lifeStyleData.bottom.map(i => i.img),
  ];
  const slides = allImages.map((img) => ({ src: img }));

  return (
    <>
      <section className="section lifeStyle colors">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <hgroup>
                <h2 data-aos="fade-down">My <span>Life</span> Style</h2>
                <p data-aos="fade-up">Capturing moments that reflect my journey and experiences</p>
              </hgroup>
            </div>{/* cols */}
            <div className="col-12 space">
              <div className="row">
                <div className="col-xl-6 setHeight">
                  <div className="row">
                    <div className="col-sm-6 col-xl-12 df">
                      <div className="outlineBox" data-aos="fade-up">
                        <b>{lifeStyleData.left.text.title}</b>
                        <span>{lifeStyleData.left.text.desc}</span>
                      </div>
                    </div>
                    <article className="col-sm-6 col-xl-12">
                      <figure data-aos="fade-up">
                        <img
                          data-src={lifeStyleData.left.card.img}
                          onClick={() => {
                            setIndex(0);
                            setOpen(true);
                          }}
                        />
                        <figcaption>
                          <b>{lifeStyleData.left.card.hd}</b>
                          <span>{lifeStyleData.left.card.shd}</span>
                        </figcaption>
                      </figure>
                    </article>
                  </div>{/* row */}
                </div>{/* cols */}
                <div className="col-xl-6 setHeight">
                  <div className="row">
                    {lifeStyleData.rightTop.map((item, i) => {
                      const realIndex = i + 1;
                      return (
                        <article key={i} className="col-sm-6 col-md-3 col-xl-6">
                          <figure data-aos={item.aos}>
                            <img
                              data-src={item.img}
                              onClick={() => {
                                setIndex(realIndex);
                                setOpen(true);
                              }}
                            />
                            <figcaption>
                              <b>{item.hd}</b>
                              <span>{item.shd}</span>
                            </figcaption>
                          </figure>
                        </article>
                      );
                    })}
                  </div>
                </div>{/* cols */}
                {lifeStyleData.bottom.map((item, i) => {
                  const realIndex = i + 5;
                  return (
                    <article key={i} className="col-sm-6 col-md-3">
                      <figure data-aos={item.aos}>
                        <img
                          data-src={item.img}
                          onClick={() => {
                            setIndex(realIndex);
                            setOpen(true);
                          }}
                        />
                        <figcaption>
                          <b>{item.hd}</b>
                          <span>{item.shd}</span>
                        </figcaption>
                      </figure>
                    </article>
                  );
                })}
              </div>
            </div>{/* cols */}            
            <div className="col-12 btns center mb0">
              <Link to="/lifestyle" data-aos="fade-right">Explore More</Link>
            </div>{/* cols */}
          </div>{/* row */}          
        </div>{/* container */}
      </section>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        plugins={[
          Zoom,
          Thumbnails,
          Fullscreen,
          Slideshow,
          Captions,
          Counter,
        ]}
      />
    </>
  );
}