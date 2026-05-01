import { useState, useEffect, useRef } from "react";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Captions from "yet-another-react-lightbox/plugins/captions";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/captions.css";

import img1 from "../../assets/images/portfolio/bls/india_blsattestation_com.jpg";
import img2 from "../../assets/images/portfolio/i2a/9cents_com.jpg";
import img3 from "../../assets/images/portfolio/snva/travomint_com.jpg";
import img4 from "../../assets/images/portfolio/i2a/akountobooks_com.jpg";
import img5 from "../../assets/images/portfolio/si/alefmeem_store.jpg";
import img6 from "../../assets/images/portfolio/i2a/zippyconvert_com.jpg";

const TpData = [
    {
        ani: "fade-left",
        website:"india_blsattestation_com",
        img: img1,
        web: "www.india.blsattestation.com",
        link: "https://india.blsattestation.com/",
        date: "09-Jun-2016",
        type:"Attestation Services",
        note:" ",
        details:""
    },
    {
        ani: "fade-right",
        website:"9cents_com",
        img: img2,
        web: "www.9cents.com",
        link: "https://www.9cents.com/",
        date: "Present",
        type:"Accounting Software",
        details:""
    },
    {
        ani: "fade-left",
        website:"travomint_com",
        img: img3,
        web: "www.travomint.com",
        link: "https://www.travomint.com",
        date: "12-Nov-2021",
        type:"Travel",
        note:" ",
        details:""
    },
    {
        ani: "fade-right",
        website:"akountobooks_com",
        img: img4,
        web: "www.akountobooks.com",
        link: null,
        date: "31-Dec-2025",
        type:"Accounting Software",
        details:""
    },
    {
        ani: "fade-left",
        website:"alefmeem_store",
        img: img5,
        web: "www.alefmeem.store",
        link: null,
        date: "13-May-2022",
        type:"E-Commerce",
        details:""
    },
    {
        ani: "fade-right",
        website:"zippyconvert_com",
        img: img6,
        web: "www.zippyconvert.com",
        link: "https://www.zippyconvert.com",
        date: "Present",
        type:"Accounting Software",
        details:""
    },
];

function TpTag(props) {
    const isActive = props.activeIndex === props.index;

    const detailsRef = useRef(null);

    useEffect(() => {
        if (isActive && detailsRef.current) {
            detailsRef.current.scrollTop = 0;
        }
    }, [isActive]);

    return (
        <div className="col-sm-6 col-lg-4" data-aos={props.ani}>
            <div className={`tpArea ${isActive ? "active" : ""}`} data-site={props.website}>
                <div className="top">
                    <img data-src={props.img} />
                    <span className="date">{props.date}</span>
                    {props.note && <div className="notes">{props.note}</div>}
                    <span
                        className="detail"
                        onClick={() =>
                            props.setActiveIndex(
                                props.activeIndex === props.index
                                    ? null
                                    : props.index
                            )
                        }
                    >View Details</span>
                    <span className="type" data-type={props.type}></span>
                    <div className="details">
                        <div className="headClose">
                            <b>About the Website</b>
                            <i
                                className="icon"
                                onClick={() => props.setActiveIndex(null)}
                            >&#xa018;</i>
                        </div>

                        <p className="text" ref={detailsRef}>{props.details}</p>
                    </div>
                </div>

                <div className="bottom">
                    <i
                        className="icon"
                        onClick={() => {
                            props.setCurrentIndex(props.index);
                            props.setLightboxOpen(true);
                        }}
                    >&#xa095;</i>
                    <a href={`https://${props.web}`} target="_blank" rel="noreferrer" data-web={props.web}></a>
                    <i
                        className="icon"
                        onClick={() => {
                            if (props.link) {
                                window.open(props.link, "_blank");
                            } else {
                                alert("This website is not available now");
                            }
                        }}
                    >&#xa038;</i>
                </div>
            </div>
        </div>
    );
}

export default function TopProjects() {
    const [activeIndex, setActiveIndex] = useState(null);

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const allImages = TpData.map(item => ({
        src: item.img,
        // title: item.web,
        description: item.web
    }));

    useEffect(() => {
        function handleClickOutside(e) {
            if (!e.target.closest(".tpArea")) {
                setActiveIndex(null);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <>
            <section className="section tp" id="tp">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <hgroup>
                                <h3 data-aos="fade-down">Top <span>Projects</span></h3>
                                <p data-aos="fade-up">Some of my best work</p>
                            </hgroup>
                        </div>
                        {TpData.map((val, ind) => (
                            <TpTag
                                key={ind}
                                index={ind}
                                activeIndex={activeIndex}
                                setActiveIndex={setActiveIndex}
                                setLightboxOpen={setLightboxOpen}
                                setCurrentIndex={setCurrentIndex}
                                {...val}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <Lightbox
                slides={allImages}
                open={lightboxOpen}
                index={currentIndex}
                close={() => setLightboxOpen(false)}
                plugins={[
                    Zoom,
                    Thumbnails,
                    Fullscreen,
                    Slideshow,
                    Counter,
                    Captions
                ]}
                zoom={{ maxZoomPixelRatio: 3 }}
            />
        </>
    );
}