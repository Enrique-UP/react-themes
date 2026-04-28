import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../common/Banner";
import LeftSidebar from "../common/LeftSidebar";
import RightSidebar from "../common/RightSidebar";
import PoetryData from "./PoetryData";

const PoetryTag = ({ word, poet }) => {
  const wordsArray = word.split(",");

  return (
    <article data-aos="fade-up">
      <figcaption>
        <ul>
          {wordsArray.map((item, index) => {
            const text = item.trim();
            const isOr = text.toLowerCase() === "or";

            return (
              <li key={index}>
                {isOr ? <span>Or</span> : text}
                {!isOr && index < wordsArray.length - 1 && ","}
              </li>
            );
          })}
        </ul>
        <b>{poet}</b>
      </figcaption>
    </article>
  );
};
export default function Poetry() {
  const [search, setSearch] = useState("");
  const sectionRef = useRef(null);

  /* =========================
     Filter Data
  ========================= */
  const filteredData = PoetryData.flatMap((val) =>
    val.words
      .filter((word) =>
        word.toLowerCase().includes(search.toLowerCase())
      )
      .map((word) => ({
        word,
        poet: val.poet,
      }))
  );

  /* =========================
     Scroll when no result
  ========================= */
  useEffect(() => {
    if (filteredData.length === 0 && search !== "") {
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // offset -100px
      setTimeout(() => {
        window.scrollBy(0, -92);
      }, 300);
    }
  }, [filteredData, search]);

  return (
    <>
      <Helmet>
        <title>Poetry</title>
      </Helmet>

      <Banner
        pageName="Poetry"
        pageText="Lorem ipsum dolor sit ameet."
      />

      <section className="section" ref={sectionRef}>
        <div className="container">
          <hgroup>
            <h2 data-aos="fade-down">Poetry</h2>
            <p data-aos="fade-up">Lorem ipsum dolor sit ameet</p>
          </hgroup>

          <div className="sideMid">
            <LeftSidebar />

            <div className="area-2">
              
              <div className="searchBar">
                <input type="text" placeholder="Please search here..." value={search} onChange={(e) => setSearch(e.target.value)} />
                <i className="icon">&#xa010;</i>
              </div>

              <div className="poetry">
                {filteredData.length > 0 ? (
                  filteredData.map((item, i) => (
                    <PoetryTag
                      key={i}
                      word={item.word}
                      poet={item.poet}
                    />
                  ))
                ) : (
                  search !== "" && <p>No results found</p>
                )}
              </div>

            </div>

            <RightSidebar />
          </div>
        </div>
      </section>
    </>
  );
}