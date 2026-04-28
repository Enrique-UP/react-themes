import { useState, useEffect, useRef } from "react";

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

import img1 from "../../assets/images/portfolio/i2a/akounto_com.jpg";
import img2 from "../../assets/images/portfolio/free/rajankapoorchai_com.jpg";
import img3 from "../../assets/images/portfolio/snva/snva_com.jpg";
import img4 from "../../assets/images/portfolio/snva/careerera_com.jpg";
import img5 from "../../assets/images/portfolio/city/ticketstoworld_co_uk.jpg";
import img6 from "../../assets/images/portfolio/city/ticketstoindia_co_uk.jpg";


const BpData = [
    {
        site:"akounto_com",
        img: img1,
        web: "www.akounto.com",
        date: "31-Dec-2024",
        type:"Accounting Software",        
    },
    {
        site:"rajankapoorchai_com",
        img: img2,
        web: "www.rajankapoorchai.com",
        link: "https://www.rajankapoorchai.com",
        date: "31-Oct-2024",
        type:"Portfolio",        
    },
    {
        site:"snva_com",
        img: img3,
        web: "www.snva.com",
        link: "",
        date: "13-Nov-2021",
        type:"Company Website",
    },
    {
        site:"careerera_com",
        img: img4,
        web: "www.careerera.com",
        link: "https://www.careerera.com",
        date: "13-Nov-2021",
        type:"Online Education Courses",
        notes: true,
    },
    {
        site:"ticketstoworld_co_uk",
        img: img5,
        web: "www.ticketstoworld.co.uk",
        link: "https://www.ticketstoworld.co.uk",
        date: "13-Dec-2016",
        type:"Travel",        
    },
    {
        site:"ticketstoindia_co_uk",
        img: img6,
        web: "www.ticketstoindia.co.uk",
        link: "https://www.ticketstoindia.co.uk",
        date: "13-Dec-2016",
        type:"Travel",        
    },
];

function BpTag({ site, img, web, link, date, type, notes, index, setLightboxOpen, setCurrentIndex }) {
  const cntRef = useRef(null);

  useEffect(() => {
    if (cntRef.current) {
      cntRef.current.scrollTop = 0;
    }
  }, []);

  return (
    <div className="col-12">
      <ul className="bpArea" data-site={site}>
        <li className="img">
          <img data-src={img} data-aos="fade-right" />
        </li>

        <li className="txt" data-aos="fade-up">
          <p className="hd" data-web={web}></p>
          <p className="about">
            <b>About the Project</b>
            <span>Website Type: <em>{type}</em></span>
          </p>
          <p className={`cnt text ${notes ? "notes" : ""}`} ref={cntRef}></p>
        </li>

        <li className="btnText" data-aos="fade-left">
          <article>
            <div>
              <span>{date}</span>

              <b
                onClick={() => {
                  setCurrentIndex(index);
                  setLightboxOpen(true);
                }}
              >
                View Template
              </b>

              <a
                onClick={() => {
                  if (link) {
                    window.open(link, "_blank");
                  } else {
                    alert("This website is not available now");
                  }
                }}
              >
                View Live
              </a>
            </div>
          </article>
        </li>
      </ul>
    </div>
  );
}

export default function BrandingProjects() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = BpData.map(item => ({
    src: item.img,
    description: item.web
  }));

  return (
    <>
      <section className="section bp colors b1" id="bp">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <hgroup>
                <h3 data-aos="fade-down">Branding <span>Projects</span></h3>
                <p data-aos="fade-up">Building strong, consistent and impactful brand identities</p>
              </hgroup>
            </div>
            <div className="col-12">
              <div className="outlineBox dk" data-aos="fade-up"></div>{/* outlineBox */}
            </div>

            {BpData.map((item, index) => (
              <BpTag
                key={index}
                index={index}
                setLightboxOpen={setLightboxOpen}
                setCurrentIndex={setCurrentIndex}
                {...item}
              />
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        slides={slides}
        open={lightboxOpen}
        index={currentIndex}
        close={() => setLightboxOpen(false)}
        plugins={[Zoom, Thumbnails, Fullscreen, Slideshow, Counter, Captions]}
        zoom={{ maxZoomPixelRatio: 3 }}
      />
    </>
  );
}