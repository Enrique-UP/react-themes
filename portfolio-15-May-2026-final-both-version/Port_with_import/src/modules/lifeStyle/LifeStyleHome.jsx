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

export default function LifestyleHome() {

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = [
    { src: img1 },
    { src: img2 },
    { src: img3 },
    { src: img4 },
    { src: img5 },
    { src: img6 },
    { src: img7 },
    { src: img8 },
    { src: img9 },
  ];

  return (
    <>
      <section className="section lifeStyle colors b1">
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

                        <b>My Hobbies</b>
                        <span>I enjoy traveling and playing cricket, with experience representing school, club, and corporate teams. I am also passionate about food.</span>
                      </div>
                    </div>

                    <article className="col-sm-6 col-xl-12">
                      <figure data-aos="fade-up">

                        <img
                          src={img1}
                          alt=""
                          onClick={() => {
                            setIndex(0);
                            setOpen(true);
                          }}
                        />

                        <figcaption><b>{LifeStyleMoments[0].hd}</b><span>{LifeStyleMoments[0].shd}</span></figcaption>

                      </figure>
                    </article>
                  </div>{/* row */}
                </div>{/* cols */}
                <div className="col-xl-6 setHeight">

                  <div className="row">

                    <article className="col-sm-6 col-md-3 col-xl-6">
                      <figure data-aos="fade-right">

                        <img
                          src={img2}
                          alt=""
                          onClick={() => {
                            setIndex(1);
                            setOpen(true);
                          }}
                        />

                        <figcaption><b>{LifeStyleMoments[1].hd}</b><span>{LifeStyleMoments[1].shd}</span></figcaption>

                      </figure>
                    </article>

                    <article className="col-sm-6 col-md-3 col-xl-6">
                      <figure data-aos="fade-left">

                        <img
                          src={img3}
                          alt=""
                          onClick={() => {
                            setIndex(2);
                            setOpen(true);
                          }}
                        />

                        <figcaption><b>{LifeStyleMoments[2].hd}</b><span>{LifeStyleMoments[2].shd}</span></figcaption>

                      </figure>
                    </article>

                    <article className="col-sm-6 col-md-3 col-xl-6">
                      <figure data-aos="fade-right">

                        <img
                          src={img4}
                          alt=""
                          onClick={() => {
                            setIndex(3);
                            setOpen(true);
                          }}
                        />

                        <figcaption><b>{LifeStyleMoments[3].hd}</b><span>{LifeStyleMoments[3].shd}</span></figcaption>

                      </figure>
                    </article>

                    <article className="col-sm-6 col-md-3 col-xl-6">
                      <figure data-aos="fade-left">

                        <img
                          src={img5}
                          alt=""
                          onClick={() => {
                            setIndex(4);
                            setOpen(true);
                          }}
                        />

                        <figcaption><b>{LifeStyleMoments[4].hd}</b><span>{LifeStyleMoments[4].shd}</span></figcaption>

                      </figure>
                    </article>
                  </div>{/* row */}
                </div>{/* cols */}
                <article className="col-sm-6 col-md-3">
                  <figure data-aos="fade-left">

                    <img
                      src={img6}
                      alt=""
                      onClick={() => {
                        setIndex(5);
                        setOpen(true);
                      }}
                    />

                    <figcaption><b>{LifeStyleMoments[5].hd}</b><span>{LifeStyleMoments[5].shd}</span></figcaption>

                  </figure>
                </article>

                <article className="col-sm-6 col-md-3">
                  <figure data-aos="fade-right">

                    <img
                      src={img7}
                      alt=""
                      onClick={() => {
                        setIndex(6);
                        setOpen(true);
                      }}
                    />

                    <figcaption><b>{LifeStyleMoments[6].hd}</b><span>{LifeStyleMoments[6].shd}</span></figcaption>

                  </figure>
                </article>

                <article className="col-sm-6 col-md-3">
                  <figure data-aos="fade-left">

                    <img
                      src={img8}
                      alt=""
                      onClick={() => {
                        setIndex(7);
                        setOpen(true);
                      }}
                    />

                    <figcaption><b>{LifeStyleMoments[7].hd}</b><span>{LifeStyleMoments[7].shd}</span></figcaption>

                  </figure>
                </article>

                <article className="col-sm-6 col-md-3">
                  <figure data-aos="fade-right">

                    <img
                      src={img9}
                      onClick={() => {
                        setIndex(8);
                        setOpen(true);
                      }}
                    />

                    <figcaption><b>{LifeStyleMoments[8].hd}</b><span>{LifeStyleMoments[8].shd}</span></figcaption>

                  </figure>
                </article>
              </div>{/* row */}
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