import { Helmet } from "react-helmet";
import Banner from "../common/Banner";
import LeftSidebar from "../common/LeftSidebar";
import RightSidebar from "../common/RightSidebar";

import { useState } from "react";

import LifeStyleData from "./LifeStyleData"; // ✅ FIXED NAME

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

const LifeStyleAllData = LifeStyleData.map((folder) => {
  if (folder.imgFn !== "others") {
    return {
      category: folder.imgFn,
      images: Array.from({ length: folder.items }, (_, i) => ({
        src: require(`../../../images/lifeStyle/${folder.imgFn}/${i + 1}.jpg`),
        place: folder.place,
        date: folder.date,
      })),
    };
  }

  return {
    category: folder.imgFn,
    images: folder.images.map((img, i) => ({
      src: require(`../../../images/lifeStyle/home${i + 1}.jpg`),
      place: img.place,
      date: img.date,
    })),
  };
});

function Lifestyle() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = LifeStyleAllData.flatMap((group) =>
    group.images.map((img) => ({
      src: img.src,
      description: `${img.place} - ${img.date}`,
    }))
  );

  const getGlobalIndex = (gIndex, iIndex) => {
    let count = 0;
    for (let i = 0; i < gIndex; i++) {
      count += LifeStyleAllData[i].images.length;
    }
    return count + iIndex;
  };

  return (
    <>
      <Helmet>
        <title>Life Style</title>
      </Helmet>

      <Banner
        pageName="Life Style"
        pageText="Dynamic lifestyle gallery with categories"
      />

      <section className="section lifeStyle colors innerPage">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <hgroup>
                <h2>Lorem</h2>
                <p>Lorem ipsum dolor sit ameet</p>
              </hgroup>
            </div>
            <LeftSidebar />
            <div className="col-lg-6 order partition">
              {LifeStyleAllData.flatMap((group, gIndex) =>
                group.images.map((img, iIndex) => (
                  <article key={`${gIndex}-${iIndex}`}>
                    <figure>
                      <img
                        data-src={img.src}
                        alt={img.place}
                        onClick={() => {
                          setIndex(getGlobalIndex(gIndex, iIndex));
                          setOpen(true);
                        }}
                      />
                      <figcaption>
                        <b>{img.place}</b>
                        <span>{img.date}</span>
                      </figcaption>
                    </figure>
                  </article>
                ))
              ).reverse()}
            </div>
            <RightSidebar />
          </div>
        </div>
      </section>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        plugins={[Zoom, Thumbnails, Fullscreen, Slideshow, Counter, Captions]}
      />
    </>
  );
}

export default Lifestyle;