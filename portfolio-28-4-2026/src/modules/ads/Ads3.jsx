import img1 from "../../assets/images/ads/ads3.jpg";
import { Global } from "../common/Global";

export default function Ads3() {
    return (
        <>
            <section className="section ads3">
                <div className="container">
                    <div className="fw">
                        <figure className="head">
                            <figcaption>
                                <b data-aos="fade-down">All Types</b>
                                <span data-aos="fade-up">of Website</span>
                            </figcaption>
                            <img src={img1} />
                        </figure>
                        <figure className="text">
                            <figcaption>
                                <p data-aos="zoom-in">
                                    <span>Up To</span>
                                    <b>Half</b>
                                    <b>Price</b>
                                </p>
                                <a href={Global.numTel} target="_blank">Order Now!</a>
                            </figcaption>
                        </figure>
                    </div>{/* fw */}
                </div>{/* container */}
            </section>
        </>
    );
}