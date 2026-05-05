import img1 from "../../assets/images/wcu.jpg";
import { Global } from "../common/Global";

const WcuData = [
  {
    hd: "Cost-Effective Solutions",
    text: "Delivering high-quality frontend solutions with transparent and competitive pricing."
  },
  {
    hd: "High-Quality Development",
    text: "Building modern, scalable, and user-focused web interfaces following industry best practices."
  },
  {
    hd: "Proven Experience",
    text: "Experienced in developing responsive and user-friendly web applications across multiple domains."
  },
  {
    hd: "Modern Technologies",
    text: "Using the latest frontend technologies and frameworks to build efficient and future-ready applications."
  },
  {
    hd: "Timely Delivery",
    text: "Ensuring projects are delivered on time without compromising code quality and performance."
  },
  {
    hd: "Reliable Support",
    text: "Providing ongoing support to maintain performance and ensure smooth user experience."
  },
  {
    hd: "Clean User Interfaces",
    text: "Creating clean, intuitive, and user-friendly interfaces for better usability."
  },
  {
    hd: "Responsive Design",
    text: "Developing layouts that adapt seamlessly across all devices and screen sizes."
  },
  {
    hd: "Performance Optimization",
    text: "Optimizing websites for fast loading speed and smooth interactions."
  },
  {
    hd: "SEO-Friendly Structure",
    text: "Implementing SEO best practices in frontend development for better visibility."
  },
  {
    hd: "Diverse Project Experience",
    text: "Worked on various projects including e-commerce, travel, education, and business websites."
  },
  {
    hd: "Enhanced User Experience",
    text: "Improving user engagement through interactive and well-structured interfaces."
  }
];

const WcuTag = (props) => {
  return (
    <>
        <aside>
            <b data-aos="fade-right">{props.hd}</b>
            <p data-aos="fade-left">{props.text}</p>
        </aside>
    </>
  )
}

export default function Wcu(){
    return(
        <>
            <section className="sectionT wcu" id="wcu">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <hgroup>
                                <h4 data-aos="fade-down">Why <span>Choose</span> Me?</h4>
                                <p data-aos="fade-up">Your success is my priority—delivering intuitive, scalable solutions</p>
                            </hgroup>
                        </div>{/* cols */}
                        <div className="col-lg-4 col-xxl-3">
                            <figure>
                                <img src={img1} data-aos="fade-up" />
                                <figcaption>
                                    <p><a href={Global.numTel} target="_blank"><i className="icon">&#xa001;</i>{Global.num}</a></p>
                                    <p><a href={`mailto:${Global.email}`} target="_blank"><i className="icon">&#xa004;</i>{Global.email}</a></p>
                                    <p>
                                        <a href={Global.fb} target="_blank"><i className="icon">&#xa019;</i></a>
                                        <a href={Global.tw} target="_blank"><i className="icon">&#xa020;</i></a>
                                        <a href={Global.lin} target="_blank"><i className="icon">&#xa021;</i></a>
                                        <a href={Global.skp} target="_blank"><i className="icon">&#xa026;</i></a>
                                        <a href={Global.ins} target="_blank"><i className="icon">&#xa023;</i></a>
                                        <a href={Global.pnt} target="_blank"><i className="icon">&#xa024;</i></a>
                                    </p>
                                </figcaption>
                            </figure>
                        </div>{/* cols */}
                        <div className="col-lg-8 col-xxl-9">
                          <div className="row">
                            <div className="col-12">
                              <div className="outlineBox dk" data-aos="fade-up"></div>{/* outlineBox */}
                            </div>{/* cols */}
                            <div className="col-12">
                              <div className="wcuArea">
                                {
                                  // WcuData.slice(0, 4).map((val, ind) => {}
                                  WcuData.map((val, ind) => {
                                    return <WcuTag key={ind} hd={val.hd} text={val.text} />
                                  })
                                }
                              </div>{/* wcuArea */}
                            </div>{/* cols */}
                          </div>{/* row */}
                        </div>{/* cols */}
                    </div>{/* row */}
                </div>{/* container */}
            </section>
        </>
    )
}