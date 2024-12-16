import "../../sass/ads1.scss";
import ads1 from "../../images/ads-1.jpg";
import { Link } from "react-router-dom";
const Ads1 = () => {
    return(
        <>
            <section className="ads1">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 m0">
                            <p className="subHead">Enjoyed on this Summer Season</p>
                            <p className="head">Picnic near Dam</p>
                            <p className="text">Uttrakhand</p>
                            <p className="btns center">
                            <Link className="btn-red number1 rml" to="/lifestyle">View More</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <img data-src={ads1} className="back" />
            </section>
        </>
    )
}
export default Ads1;