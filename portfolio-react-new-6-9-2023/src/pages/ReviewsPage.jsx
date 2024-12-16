import React from "react";
import CustomScript from "./modules/CustomScript";
import { useEffect } from "react";
import data from './modules/ReviewsData.js';
import "../sass/reviewsPage.scss";

const ReviewsPage = () => {
  useEffect(() => {
    var rvw = "";
    for(var j = 0; j < data.length; j++){
      rvw += data[j].text
    }
    document.querySelector(".allReviews").innerHTML = rvw;
  }, []);
    return(
        <>
          <CustomScript>
          <section className="section reviewsPage">
            <div className="container">
              <h1 className="heading">Customer's <span>Review</span><i>My Satisfy Clients</i></h1>
              <div className="row orders">
                <div className="col-xs-12 col-sm-6 col-lg-3">Left</div>
                <div className="col-xs-12 col-md-6">
                  <div className="outlineBox clred"></div>
                  <div className="allReviews"></div>
                  <p class="btns center">
                    <a href="#" class="btn-1">Hire Me</a>
                  </p>
                </div>
                <div className="col-xs-12 col-sm-6 col-lg-3">Right</div>
              </div>
            </div>
          </section>
          </CustomScript>
        </>
    );
}
export default ReviewsPage;