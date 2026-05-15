import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../common/Banner";
import LeftSidebar from "../common/LeftSidebar";
import RightSidebar from "../common/RightSidebar";

import LifeStyleData from "./LifeStyleData";

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
  if (folder.images) {
    return {
      category: folder.imgFdr,
      images: [...folder.images]
        .reverse()
        .map((img) => ({
          src: new URL(
            `../../assets/images/lifeStyle/${folder.imgFdr}/${img.img}.jpg`,
            import.meta.url
          ).href,
          title: img.title,
          date: img.date,
        })),
    };
  }

  return {
    category: folder.imgFdr,
    images: Array.from({ length: folder.items || 0 }, (_, i) => ({
      src: new URL(
        `../../assets/images/lifeStyle/${folder.imgFdr}/${i + 1}.jpg`,
        import.meta.url
      ).href,
      title: folder.title,
      date: folder.date,
    })),
  };
}).reverse();

export default function Lifestyle() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = LifeStyleAllData.flatMap((group) =>
    group.images.map((img) => ({
      src: img.src,
      description: `${img.title} - ${img.date}`,
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
        pageText="A collection of moments, experiences, and my personal journey, reflecting creativity, growth, and the stories that shape who I am."
      />

      <section className="section lifeStyle colors">
        <div className="container">
          <hgroup>
            <h2 data-aos="fade-down">Image <span>Gallery</span></h2>
            <p data-aos="fade-up">Capturing moments from my journey, memories, and experiences</p>
          </hgroup>
          <div className="sideMid">
            <LeftSidebar />

            <div className="area-2">
              <div className="partition">
                {LifeStyleAllData.flatMap((group, gIndex) =>
                  group.images.map((img, iIndex) => (
                    <article key={`${gIndex}-${iIndex}`}>
                      <figure>
                        <img
                          data-img={img.src}
                          alt={img.title}
                          onClick={() => {
                            setIndex(getGlobalIndex(gIndex, iIndex));
                            setOpen(true);
                          }}
                        />
                        <figcaption>
                          <b>{img.title}</b>
                          {img.date && <span>{img.date}</span>}
                        </figcaption>
                      </figure>
                    </article>
                  ))
                )}
              </div>
            </div>{/* area-2 */}
            
            <RightSidebar />
          </div>
        </div>
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