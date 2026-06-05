import { Link } from 'react-router-dom';
import { Global } from "./Global";
import defaultImg from "../../assets/images/banners/inner.jpg";
import ColorsLine from "./ColorsLine";

export default function Banner(props) {
  return (
    <>
      <section className={`section banner ${props.isHome ? "homeBanner" : ""}`}>
        <div className="container">
          <div className="row"> 
            <div className="col-md-6">
              <div className="cnt" data-aos="fade-right">
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
            </div>
            <div className="col-md-6">
              <img src={props.otherImg || defaultImg} className="img" data-aos="fade-left" />
            </div>
          </div>
        </div>
      </section>

      <ColorsLine />

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
