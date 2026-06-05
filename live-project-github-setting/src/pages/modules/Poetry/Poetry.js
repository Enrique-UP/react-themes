import { Fragment } from "react";
import {Helmet} from "react-helmet";
import Banner from "../common/Banner";
import LeftSidebar from "../common/LeftSidebar";
import RightSidebar from "../common/RightSidebar";
import PoetryData from "./PoetryData";

// const PoetryTag = (props) => {
//   return (
//     <article>
//       <span>{props.word}</span>
//       <b>{props.poet}</b>
//     </article>
//   );
// }

const PoetryTag = ({ word, poet }) => {
  const wordsArray = word.split(",");
  return (
    <article>
      <span>
        {wordsArray.map((item, index) => (
          <Fragment key={index}>
            {item.trim()}
            {index < wordsArray.length - 1 && (
              <>
                ,<br />
              </>
            )}
          </Fragment>
        ))}
      </span>
      <b>{poet}</b>
    </article>
  );
};
function Poetry() {
  return (
    <>
      <Helmet>
        <title>Poetry</title>
      </Helmet>
      <Banner
        pageName="Poetry" 
        pageText="Lorem ipsum dolor sit ameet."
      />
      <section className="section innerPage">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <hgroup>
                <h2>Poetry</h2>
                <p>Lorem ipsum dolor sit ameet</p>
              </hgroup>
            </div>
            <LeftSidebar />
            <div className="col-lg-6 order colors poetry">
              {
                PoetryData.map((val, ind) =>
                  val.words.map((word, i) => (
                    <PoetryTag 
                      key={i} 
                      word={word} 
                      poet={val.poet} 
                    />
                  ))
                )
              }
            </div>
            <RightSidebar />
          </div>
        </div>
      </section>
    </>
  );
}

export default Poetry;