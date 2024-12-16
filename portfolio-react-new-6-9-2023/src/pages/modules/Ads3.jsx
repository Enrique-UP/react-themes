import "../../sass/ads3.scss";
import img from "../../images/ads-3.jpg";
import { Link } from "react-router-dom";
const Ads3 = () => {
    return(
        <>
            <section className="ads4">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                            <p className="subHead">Adventure</p>
                            <p className="head">Dare to Explore</p>
                            <p className="btns center">
                            <Link className="btn-red" to="/lifestyle">View More</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <img data-src={img} className="back" />
            </section>
        </>
    )
}
export default Ads3;