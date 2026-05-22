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

import img1 from "../../assets/images/cricMoments/1.jpg";
import img2 from "../../assets/images/cricMoments/2.jpg";
import img3 from "../../assets/images/cricMoments/3.jpg";
import img4 from "../../assets/images/cricMoments/4.jpg";
import img5 from "../../assets/images/cricMoments/5.jpg";
import img6 from "../../assets/images/cricMoments/6.jpg";

const CricData = [
  { img: "images/cricMoments/1.jpg", name: "Corporate Night Tournament,", place: "Gurgaon" },
  { img: "images/cricMoments/2.jpg", name: "Corporate Night Tournament,", place: "Gurgaon" },
  { img: "images/cricMoments/3.jpg", name: "Corporate Tournament,", place: "Gurgaon" },
  { img: "images/cricMoments/5.jpg", name: "Corporate Tournament,", place: "Gurgaon" },
  { img: "images/cricMoments/7.jpg", name: "Corporate Night Tournament,", place: "Gurgaon" },
  { img: "images/cricMoments/8.jpg", name: "Corporate Tournament,", place: "Gurgaon" },
];

// Child component
function CricTag({ img, name, place, index, onClick }) {
  return (
    <article>
      <img
        data-src={img}
        onClick={() => onClick(index)}
      />
      <span>
        <i>{name}</i>
        <em>{place}</em>
      </span>
    </article>
  );
}

export default function CricketMoments() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = CricData.map((item) => ({
    src: item.img,
    // title: item.name,
    // description: item.place
  }));

  return (
    <>
      <section className="section b1 cricMoments">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <hgroup>
                <h3>My <span>Cricket</span> Moments</h3>
                <p>Captured emotions of my cricket journey</p>
              </hgroup>
            </div>{/* cols */}
            <div className="col-12">
              <div className="colors">
                {
                  CricData.map((val, ind) => (
                    <CricTag
                      key={ind}
                      index={ind}
                      {...val}
                      onClick={(i) => {
                        setIndex(i);
                        setOpen(true);
                      }}
                    />
                  ))
                }
              </div>{/* colors */}
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