import { useState } from "react";
import { Helmet } from "react-helmet-async";

import Banner from "../common/Banner";
import LeftSidebar from "../common/LeftSidebar";
import RightSidebar from "../common/RightSidebar";

import PortfolioData from "./PortfolioData";

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

/* ================= IMAGE IMPORT ================= */

const images = import.meta.glob(
  "/src/assets/images/portfolio/*/*.jpg",
  { eager: true, import: "default" }
);

const imageMap = {};

Object.entries(images).forEach(([path, value]) => {
  const parts = path.split("/");
  const folder = parts[parts.length - 2];
  const file = parts[parts.length - 1].replace(".jpg", "");

  imageMap[`${folder}-${file}`] = value;
});

/* ================= HELPERS ================= */

// ✅ UPDATED → replace "-" AND "." with "_"
// normalize both name AND domain
const normalizeName = (name) => name.replace(/[-.]/g, "_");

const getImage = (folder, name, domain) =>
  imageMap[
    `${folder}-${normalizeName(name)}_${normalizeName(domain)}`
  ] || null;

const getFallbackImage = (folder, name, domain) => {
  return `/port/src/assets/images/portfolio/${folder}/${normalizeName(
    name
  )}_${normalizeName(domain)}.jpg`;
};

/* ================= TEMPLATE ================= */

const Temp = ({
  date,
  site,
  link,
  note,
  img,
  onClick,
  status,
}) => {
  const displaySite = `www.${site}`;

  return (
    <article data-site={normalizeName(site).replaceAll(".", "_")}>
      <figcaption data-aos="fade-right">
        <span>{date}</span>

        <a
          className="site"
          {...(status && {
            href: link,
            target: "_blank",
            rel: "noreferrer",
          })}
          data-site={displaySite}
        ></a>

        <p className="text"></p>

        {note && <p className="notes">{note}</p>}

        <div className="links">
          {status && (
            <a href={link} target="_blank" rel="noreferrer">
              Live Demo
            </a>
          )}

          {img && <span onClick={onClick}>View Template</span>}
        </div>
      </figcaption>

      <figure data-aos="fade-up">
        {img && <img data-src={img} onClick={onClick} />}
      </figure>
    </article>
  );
};

/* ================= MAIN ================= */

export default function Portfolio() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  /* ================= LIGHTBOX IMAGES ================= */

  const allImages = PortfolioData.flatMap((section) =>
    section.items
      .map((item) => {
        const local = getImage(
          section.folderName,
          item.name,
          item.domain
        );

        const src =
          local ||
          getFallbackImage(
            section.folderName,
            item.name,
            item.domain
          );

        return src ? { src } : null;
      })
      .filter(Boolean)
  );

  return (
    <>
      <Helmet>
        <title>Portfolio</title>
      </Helmet>

      <Banner
        pageName="My Portfolio"
        pageText="Explore selected works that reflect my skills in design thinking, frontend development, and user experience."
      />

      <section className="section">
        <div className="container">
          <hgroup>
            <h2 data-aos="fade-down">Explore <span>My Work</span></h2>
            <p data-aos="fade-up">A showcase of my UI/UX and web development work</p>
          </hgroup>

          <div className="sideMid">
            <LeftSidebar />

            <div className="area-2">
              <div className="fw">
                <div className="portTitle outlineBox dk"></div>{/* outlineBox */}
                <div className="port">
                  {PortfolioData.map((section, i) => (
                    <div className="portArea" key={i}>
                      <p className="hd" data-aos="fade-down">
                        <span data-hd={`${section.hd} (${section.date})`}></span>
                      </p>

                      {section.items.map((item, j) => {
                        const { date, name, domain, link, note, status } =
                          item;

                        const site = `${name}.${domain}`;

                        const fullLink = link?.startsWith("http")
                          ? link
                          : `https://${site}`;

                        const index =
                          PortfolioData.slice(0, i)
                            .flatMap((s) => s.items).length + j;

                        const localImg = getImage(
                          section.folderName,
                          name,
                          domain
                        );

                        const img =
                          localImg ||
                          getFallbackImage(
                            section.folderName,
                            name,
                            domain
                          );

                        return (
                          <Temp
                            key={j}
                            date={section.date}
                            site={site}
                            link={fullLink}
                            note={note}
                            status={status}
                            img={img}
                            onClick={() => {
                              if (!img) return;
                              setCurrentIndex(index);
                              setLightboxOpen(true);
                            }}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>{/* fw */}
            </div>

            <RightSidebar />
          </div>
        </div>
      </section>

      {/* ================= LIGHTBOX ================= */}

      {lightboxOpen && allImages.length > 0 && (
        <Lightbox
          slides={allImages}
          open={lightboxOpen}
          index={currentIndex}
          close={() => setLightboxOpen(false)}
          plugins={[
            Zoom,
            Thumbnails,
            Fullscreen,
            Slideshow,
            Counter,
            Captions,
          ]}
        />
      )}
    </>
  );
}