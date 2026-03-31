import { Link } from 'react-router-dom';
import { Global } from "./Global";
import defaultBannerImg from "../../../images/banners/inner.jpg";

function Banner(props) {
  return (
    <>
      <section className={`section banner ${props.isHome ? "homeBanner" : ""}`}>
        <div className="container">
          <div className="row"> 
            <div className="col-lg-6">
              <h1 className="hd">{props.pageName}</h1>
              <p className="txt">{props.pageText}</p>

              <div className="btns">
                {
                  props.pageName === "Thank You!" ? (
                  // props.pageName !== "" ? (
                    <Link to="/" data-icon="&#xa074;">
                      <span>Go to Home</span>
                    </Link>
                  ) : (
                    <a href={Global.numTel} target="_blank" data-icon="&#xa001;">
                      <span>{Global.num}</span>
                    </a>
                  )
                }
              </div>

            </div>

            <div className="col-lg-6">
              <img src={props.otherImg || defaultBannerImg} className="banner img" />
            </div>
          </div>
        </div>
      </section>

      <ul className="colorsLine">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      {props.showBreadcrumbs !== false && (
        <section className="breadcrumbs">
          <div className="container">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li>{props.pageName}</li>
            </ul>
          </div>
        </section>
      )}

      
    </>
  );
}

export default Banner;