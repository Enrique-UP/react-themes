import {Helmet} from "react-helmet";
import Banner from "./modules/common/Banner";
import LeftSidebar from "./modules/common/LeftSidebar";
import RightSidebar from "./modules/common/RightSidebar";
import { Global } from "./modules/common/Global";

const ReviewData = [
    {
        name : "Name",
        place : "PlaceName",
        icons : "&#xa047;&#xa047;&#xa047;&#xa047;&#xa047;",
        text : "111 Lorem ispum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsumdolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsumdolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsumdolor sit ameet."
    },
    {
        name : "Name",
        place : "PlaceName",
        icons : "&#xa047;&#xa047;&#xa047;&#xa047;",
        text : "222 Lorem ispum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsumdolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsumdolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsumdolor sit ameet."
    },
    {
        name : "Name",
        place : "PlaceName",
        icons : "&#xa047;&#xa047;&#xa047;&#xa047;",
        text : "333 Lorem ispum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsumdolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsumdolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsumdolor sit ameet."
    },
    {
        name : "Name",
        place : "PlaceName",
        icons : "&#xa047;&#xa047;&#xa047;&#xa047;",
        text : "444 Lorem ispum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsumdolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsumdolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsumdolor sit ameet."
    },
    {
        name : "Name",
        place : "PlaceName",
        icons : "&#xa047;&#xa047;&#xa047;&#xa047;",
        text : "555 Lorem ispum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsumdolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsumdolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsumdolor sit ameet."
    },
    {
        name : "Name",
        place : "PlaceName",
        icons : "&#xa047;&#xa047;&#xa047;&#xa047;",
        text : "666 Lorem ispum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsumdolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsumdolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsumdolor sit ameet."
    },
    {
        name : "Name",
        place : "PlaceName",
        icons : "&#xa047;&#xa047;&#xa047;&#xa047;",
        text : "777 Lorem ispum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsumdolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsumdolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsumdolor sit ameet."
    },
    {
        name : "Name",
        place : "PlaceName",
        icons : "&#xa047;&#xa047;&#xa047;&#xa047;",
        text : "888 Lorem ispum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsumdolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsumdolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsumdolor sit ameet."
    },
    {
        name : "Name",
        place : "PlaceName",
        icons : "&#xa047;&#xa047;&#xa047;&#xa047;",
        text : "999 Lorem ispum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsumdolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsumdolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsumdolor sit ameet."
    },
    {
        name : "Name",
        place : "PlaceName",
        icons : "&#xa047;&#xa047;&#xa047;&#xa047;",
        text : "10 Lorem ispum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsumdolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsumdolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsumdolor sit ameet."
    },
    {
        name : "Name",
        place : "PlaceName",
        icons : "&#xa047;&#xa047;&#xa047;&#xa047;",
        text : "11 Lorem ispum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsumdolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsumdolor sit ameet lorem ipsum dolor sit ameet lorem ipsum dolor sit ameet lorem ipsumdolor sit ameet."
    },
];

const ReviewTag =(props) => {
  return ( <>
    <div className="reviewsArea">
      <div className="iconArea">
        <i className="icon">&#xa043;</i>
      </div>
      <div class="outlineBox">
        <ul>
          <li>
            <b>{props.name}</b>
            <i>{props.place}</i>
          </li>
          <li><i className="icon" dangerouslySetInnerHTML={{ __html: props.icons }}></i></li>
        </ul>
        <span>{props.text}</span>
      </div>{/* outlineBox */}
    </div>{/* reviewsArea */}
  </>)
}

function Reviews() {
  return (
    <>
      <Helmet>
        <title>Reviews</title>
      </Helmet>
      <Banner
        pageName="Reviews" 
        pageText="Lorem ipsum dolor sit ameet."
      />
      <section className="section innerPage">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <hgroup>
                <h2>Reviews</h2>
                <p>Lorem ipsum dolor sit ameet</p>
              </hgroup>
            </div>
            <LeftSidebar />
            <div className="col-lg-6 order">
              <div className="fw box1">
                <p className="texts">Lorem ipsum dolor sit amet consectetur adipisicing elit aspernatur officiis eaque quod earum et ex quasi doloribus.</p>
              </div>{/* fw */}
              <div className="reviews">
                {
                  ReviewData.map((val, ind) => {
                    return <ReviewTag key={ind} name={val.name} place={val.place} text={val.text} icons={val.icons} />
                  })
                }
              </div>{/* reviews */}
              <div className="btns center">
                <a href={Global.numTel} target="_blank">Hire Us</a>
              </div>
            </div>
            <RightSidebar />
          </div>
        </div>
      </section>
    </>
  );
}

export default Reviews;