import { Link } from "react-router-dom";
import Best1 from "../../../images/lifeStyle/home1.jpg";
import Best2 from "../../../images/lifeStyle/home2.jpg";
import Best3 from "../../../images/lifeStyle/home3.jpg";
import Best4 from "../../../images/lifeStyle/home4.jpg";
import Best5 from "../../../images/lifeStyle/home5.jpg";
import Best6 from "../../../images/lifeStyle/home6.jpg";
import Best7 from "../../../images/lifeStyle/home7.jpg";
import Best8 from "../../../images/lifeStyle/home8.jpg";
import Best9 from "../../../images/lifeStyle/home9.jpg";
const ImagePlaceholder = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";


function LifeStyleHome() {
  return (
    <>
      <section className="section lifeStyle colors b1">
        <div className="container">
          <hgroup> 
            <h2>Lorem <span>ipsum</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit et error</p>
          </hgroup>
          <div className="row"> 
            <div className="col-xl-6 setHeight">
              <div className="row">
                <div className="col-sm-6 col-xl-12 df">
                  <div className="outlineBox">
                    <b>Heading</b>
                    <span>Lorem ispum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsumdolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsumdolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsumdolor sit ameet.</span>
                  </div>
                </div>{/* cols */}
                <article className="col-sm-6 col-xl-12">
                  <figure>
                    <img src={ImagePlaceholder} data-src={Best1} />
                    <figcaption>
                      <b>Lorem</b>
                      <span>Ipsum</span>
                    </figcaption>
                  </figure>
                </article>{/* cols */}
              </div>{/* row */}
            </div>{/* cols */}
            <div className="col-xl-6 setHeight">
              <div className="row">
                <article className="col-6 col-md-3 col-xl-6">
                  <figure>
                    <img src={ImagePlaceholder} data-src={Best2} />
                    <figcaption>
                      <b>Lorem</b>
                      <span>Ipsum</span>
                    </figcaption>
                  </figure>
                </article>{/* cols */}
                <article className="col-6 col-md-3 col-xl-6">
                  <figure>
                    <img src={ImagePlaceholder} data-src={Best3} />
                    <figcaption>
                      <b>Lorem</b>
                      <span>Ipsum</span>
                    </figcaption>
                  </figure>
                </article>{/* cols */}
                <article className="col-6 col-md-3 col-xl-6">
                  <figure>
                    <img src={ImagePlaceholder} data-src={Best4} />
                    <figcaption>
                      <b>Lorem</b>
                      <span>Ipsum</span>
                    </figcaption>
                  </figure>
                </article>{/* cols */}
                <article className="col-6 col-md-3 col-xl-6">
                  <figure>
                    <img src={ImagePlaceholder} data-src={Best5} />
                    <figcaption>
                      <b>Lorem</b>
                      <span>Ipsum</span>
                    </figcaption>
                  </figure>
                </article>{/* cols */}
              </div>{/* row */}
            </div>{/* cols */}
            <article className="col-6 col-md-3">
              <figure>
                <img src={ImagePlaceholder} data-src={Best6} />
                <figcaption>
                  <b>Lorem</b>
                  <span>Ipsum</span>
                </figcaption>
              </figure>
            </article>{/* cols */}
            <article className="col-6 col-md-3">
              <figure>
                <img src={ImagePlaceholder} data-src={Best7} />
                <figcaption>
                  <b>Lorem</b>
                  <span>Ipsum</span>
                </figcaption>
              </figure>
            </article>{/* <!--cols--> */}
            <article className="col-6 col-md-3">
              <figure>
                <img src={ImagePlaceholder} data-src={Best8} />
                <figcaption>
                  <b>Lorem</b>
                  <span>Ipsum</span>
                </figcaption>
              </figure>
            </article>{/* cols */}
            <article className="col-6 col-md-3">
              <figure>
                <img src={ImagePlaceholder} data-src={Best9} />
                <figcaption>
                  <b>Lorem</b>
                  <span>Ipsum</span>
                </figcaption>
              </figure>
            </article>{/* cols */}
            <div className="col-12 btns center mb0">
              <Link to="/lifestyle">Explore More</Link>
            </div>{/* cols */}
          </div>{/* row */}
        </div>{/* container */}
      </section>
    </>
  );
}

export default LifeStyleHome;
