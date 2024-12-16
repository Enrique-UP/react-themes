import "../../sass/lifeStyle.scss";
import img1 from "../../images/lifeStyle-1.jpg";
import img2 from "../../images/lifeStyle-2.jpg";
import img3 from "../../images/lifeStyle-3.jpg";
import img4 from "../../images/lifeStyle-4.jpg";
import img5 from "../../images/lifeStyle-5.jpg";
import img6 from "../../images/lifeStyle-6.jpg";
import img7 from "../../images/lifeStyle-4.jpg";
import img8 from "../../images/lifeStyle-5.jpg";
import img9 from "../../images/lifeStyle-6.jpg";
import { Link } from "react-router-dom";
const LifeStyle = () => {
    return (
        <>
            <section className="section lifeStyle">
                <div className="container">
                    <h1 className="heading">My <span>Lifestyle</span><i>Living Life</i></h1>
                </div>
                <div className="container colors">
                    <div className="row">
                        <div className="col-md-12 col-lg-6">
                            <div className="row">
                                <div className="col-sm-6 col-lg-12">
                                    <div className="outlineBox"><span>My Hobbies</span>I have couple of hobbies but I like to travel & playing cricket. I have already played school, club & state level. I am fond of food.</div>
                                </div>
                                <div className="col-sm-6 col-lg-12">
                                    <data>
                                        <a href="#" className="figure one">
                                            <img data-src={img1} className="heightAuto"></img>
                                            <figcaption>Enjoyed<span>In Resort & Hotel</span></figcaption>
                                        </a>
                                    </data>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <div className="row">
                                <div className="col-6 col-lg-6">
                                    <data>
                                        <a href="#" className="figure">
                                            <img data-src={img2}></img>
                                            <figcaption>Enjoying<span>Weekend</span></figcaption>
                                        </a>
                                    </data>
                                </div>
                                <div className="col-6 col-lg-6">
                                    <data>
                                        <a href="#" className="figure">
                                            <img data-src={img3}></img>
                                            <figcaption>Shoping<span>In Mall</span></figcaption>
                                        </a>
                                    </data>
                                </div>
                                <div className="col-6 col-lg-6">
                                    <data>
                                        <a href="#" className="figure">
                                            <img data-src={img4}></img>
                                            <figcaption>Relaxing<span>After Work</span></figcaption>
                                        </a>
                                    </data>
                                </div>
                                <div className="col-6 col-lg-6">
                                    <data>
                                        <a href="#" className="figure">
                                            <img data-src={img5}></img>
                                            <figcaption>Sports<span>After Play Cricket</span></figcaption>
                                        </a>
                                    </data>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <data>
                                <a href="#" className="figure">
                                    <img data-src={img6}></img>
                                    <figcaption>Adventuring<span>Nature Lover</span></figcaption>
                                </a>
                            </data>
                        </div>
                        <div className="col-6 col-lg-3">
                            <data>
                                <a href="#" className="figure">
                                    <img data-src={img7}></img>
                                    <figcaption>Lorem<span>Ipsum</span></figcaption>
                                </a>
                            </data>
                        </div>
                        <div className="col-6 col-lg-3">
                            <data>
                                <a href="#" className="figure">
                                    <img data-src={img8}></img>
                                    <figcaption>Lorem<span>Ipsum</span></figcaption>
                                </a>
                            </data>
                        </div>
                        <div className="col-6 col-lg-3">
                            <data>
                                <a href="#" className="figure">
                                    <img data-src={img9}></img>
                                    <figcaption>Lorem<span>Ipsum</span></figcaption>
                                </a>
                            </data>
                        </div>
                        <div className="col-xs-12">
                            <p className="btns center">
                            <Link to="/lifestyle" className="btn-1">Explore More</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default LifeStyle;