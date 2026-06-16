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

export default function AdventureMoments() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const images = [
    {
      src: "images/AdventureMoments/1.jpg",
      title: "Scuba Diving",
    },
    {
      src: "images/AdventureMoments/2.jpg",
      title: "Zip Lining",
    },
    {
      src: "images/AdventureMoments/3.jpg",
      title: "Quad Biking",
    },
    {
      src: "images/AdventureMoments/4.jpg",
      title: "Snow Tubing",
    },
    {
      src: "images/AdventureMoments/5.jpg",
      title: "Zip Lining",
    },
    {
      src: "images/AdventureMoments/6.jpg",
      title: "Sky Cycling",
    },
  ];

  const slides = images.map((img) => ({
    src: img.src,
    description: img.title,
  }));

  const handleClick = (imageIndex) => {
    setIndex(imageIndex);
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
                {[0, 5].map((index, pos) => (
                  pos === 0 ? (
                    <li key={index}>
                      <span>
                        <img
                          data-src={images[index].src}
                          onClick={() => handleClick(index)}
                        />
                        <em>{images[index].title}</em>
                      </span>
                    </li>
                  ) : null
                ))}

                <li>
                  {images.slice(1, 5).map((img, i) => (
                    <span key={i}>
                      <img
                        data-src={img.src}
                        onClick={() => handleClick(i + 1)}
                      />
                      <em>{img.title}</em>
                    </span>
                  ))}
                </li>

                <li>
                  <span>
                    <img
                      data-src={images[5].src}
                      onClick={() => handleClick(5)}
                    />
                    <em>{images[5].title}</em>
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