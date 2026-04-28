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

export default function LifestyleHome() {
  return (
    <>
      <section className="section lifeStyle colors">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <hgroup>
                <h2 data-aos="fade-down">Image <span>Gallery</span></h2>
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
                        <img src={img1} />
                        <figcaption><b>Lorem</b><span>Ipsum</span></figcaption>
                      </figure>
                    </article>
                  </div>{/* row */}
                </div>{/* cols */}
                <div className="col-xl-6 setHeight">
                  <div className="row">
                    <article className="col-6 col-md-3 col-xl-6">
                      <figure data-aos="fade-right">
                        <img src={img2} />
                        <figcaption><b>Lorem</b><span>Ipsum</span></figcaption>
                      </figure>
                    </article>
                    <article className="col-6 col-md-3 col-xl-6">
                      <figure data-aos="fade-left">
                        <img src={img3} />
                        <figcaption><b>Lorem</b><span>Ipsum</span></figcaption>
                      </figure>
                    </article>
                    <article className="col-6 col-md-3 col-xl-6">
                      <figure data-aos="fade-right">
                        <img src={img4} />
                        <figcaption><b>Lorem</b><span>Ipsum</span></figcaption>
                      </figure>
                    </article>
                    <article className="col-6 col-md-3 col-xl-6">
                      <figure data-aos="fade-left">
                        <img src={img5} />
                        <figcaption><b>Lorem</b><span>Ipsum</span></figcaption>
                      </figure>
                    </article>
                  </div>{/* row */}
                </div>{/* cols */}
                <article className="col-6 col-md-3">
                  <figure data-aos="fade-left">
                    <img src={img6} />
                    <figcaption><b>Lorem</b><span>Ipsum</span></figcaption>
                  </figure>
                </article>
                <article className="col-6 col-md-3">
                  <figure data-aos="fade-right">
                    <img src={img7} />
                    <figcaption><b>Lorem</b><span>Ipsum</span></figcaption>
                  </figure>
                </article>
                <article className="col-6 col-md-3">
                  <figure data-aos="fade-left">
                    <img src={img8} />
                    <figcaption><b>Lorem</b><span>Ipsum</span></figcaption>
                  </figure>
                </article>
                <article className="col-6 col-md-3">
                  <figure data-aos="fade-right">
                    <img src={img9} />
                    <figcaption><b>Lorem</b><span>Ipsum</span></figcaption>
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
    </>
  );
}
