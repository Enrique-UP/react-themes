import { useState } from "react";
import { Link } from "react-router-dom";

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

import img1 from "../../assets/images/AdventureMoments/1.jpg";
import img2 from "../../assets/images/AdventureMoments/2.jpg";
import img3 from "../../assets/images/AdventureMoments/3.jpg";
import img4 from "../../assets/images/AdventureMoments/4.jpg";
import img5 from "../../assets/images/AdventureMoments/5.jpg";
import img6 from "../../assets/images/AdventureMoments/6.jpg";

export default function AdventureMoments() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const images = [img1, img2, img3, img4, img5, img6];

  const slides = images.map((img) => ({
    src: img,
  }));

  const handleClick = (img) => {
    setIndex(images.indexOf(img));
    setOpen(true);
  };

  return (
    <>
      <section className="section advenMoments">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <hgroup>
                <h3>My <span>Adventures</span></h3>
                <p>Every adventure tells a different story</p>
              </hgroup>
            </div>{/* cols */}
            <div className="col-12">
              <ul>
                <li>
                  <span>
                    <img data-src={img1} onClick={() => handleClick(img1)} />
                    <em>Scuba Diving</em>
                  </span>
                </li>
                <li>
                  <span>
                    <img data-src={img2} onClick={() => handleClick(img2)} />
                    <em>Zip Lining</em>
                  </span>
                  <span>
                    <img data-src={img3} onClick={() => handleClick(img3)} />
                    <em>Quad Biking</em>
                  </span>
                  <span>
                    <img data-src={img4} onClick={() => handleClick(img4)} />
                    <em>Snow Tubing</em>
                  </span>
                  <span>
                    <img data-src={img5} onClick={() => handleClick(img5)} />
                    <em>Zip Lining</em>
                  </span>
                </li>
                <li>
                  <span>
                    <img data-src={img6} onClick={() => handleClick(img6)} />
                    <em>Sky Cycling</em>
                  </span>
                </li>
              </ul>
            </div>{/* cols */}
            <div className="col-12 btns center mb0">
              <Link to="/lifestyle" data-aos="fade-right">Explore More</Link>
            </div>{/* cols */}
          </div>{/* row */}
        </div>{/* container */}
      </section>

      {/* LIGHTBOX */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        plugins={[Zoom, Thumbnails, Fullscreen, Slideshow, Captions, Counter]}
      />
    </>
  );
}