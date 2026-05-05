import { Helmet } from "react-helmet-async";
import Banner from "../common/Banner";
import LeftSidebar from "../common/LeftSidebar";
import RightSidebar from "../common/RightSidebar";
import { Global } from "../common/Global";

import ReviewData from "./ReviewData";

const ReviewTag =(props) => {
  return ( <>
    <div className="reviewsArea">
      <div className="iconArea">
        <i className="icon">&#xa043;</i>
      </div>
      <div className="outlineBox" data-aos="fade-up">
        <ul>
          <li>
            <b data-name={props.name}></b>
            <i data-place={props.place}></i>
          </li>
          <li><i className="icon" dangerouslySetInnerHTML={{ __html: props.icons }}></i></li>
        </ul>
        <span data-text={props.text}></span>
      </div>{/* outlineBox */}
    </div>{/* reviewsArea */}
  </>)
}

export default function Reviews() {
  return (
    <>
      <Helmet>
        <title>Reviews</title>
      </Helmet>
      <Banner
        pageName="Reviews" 
        pageText="Lorem ipsum dolor sit ameet."
      />
      <section className="section">
        <div className="container">
          <hgroup>
            <h2 data-aos="fade-down">Customer <span>Reviews</span></h2>
            <p data-aos="fade-up">What my clients say about my work</p>
          </hgroup>
          <div className="sideMid">
            <LeftSidebar />

            <div className="area-2">
              <div className="fw">
                <div className="reviewsTitle outlineBox dk"  data-aos="fade-down"></div>{/* fw */}
                <div className="reviews">
                  {
                    ReviewData.map((val, ind) => {
                      return <ReviewTag key={ind} {...val} />
                    })
                  }
                </div>{/* reviews */}
                <div className="btns center">
                  <a href={Global.numTel} target="_blank" data-aos="fade-right">Hire Us</a>
                </div>
              </div>
            </div>{/* area-2 */}

            <RightSidebar />
          </div>
        </div>
      </section>
    </>
  );
}
