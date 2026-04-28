import img1 from "../../assets/images/wcu.jpg";
import { Global } from "../common/Global";

const WcuData = [
  {
    hd: "Cost-Effective Solutions",
    text: "I offer high-quality services at competitive and transparent pricing, with no hidden charges."
  },
  {
    hd: "High-Quality Standards",
    text: "I deliver modern, scalable, and user-focused websites and applications that align with international design and development standards."
  },
  {
    hd: "Proven Experience",
    text: "With over 10+ years of experience in UI/UX design and development, I have successfully delivered 500+ projects across diverse industries."
  },
  {
    hd: "Modern Technologies",
    text: "I leverage the latest tools, frameworks, and design trends to build efficient and future-ready digital solutions."
  },
  {
    hd: "Time Efficiency",
    text: "I value deadlines and ensure timely delivery without compromising quality."
  },
  {
    hd: "Reliable Support",
    text: "I provide continuous support and assistance to ensure smooth performance and long-term success of your project."
  },
  {
    hd: "Clean & Intuitive Design",
    text: "I focus on creating clean, user-friendly interfaces that enhance user experience and engagement."
  },
  {
    hd: "Flexible Layout Systems",
    text: "I build responsive and flexible layouts that work seamlessly across all devices and screen sizes."
  },
  {
    hd: "Performance Optimized",
    text: "I optimize every project for fast loading speed and smooth performance."
  },
  {
    hd: "SEO-Friendly Development",
    text: "All projects are built with SEO best practices to improve visibility and search engine ranking."
  },
  {
    hd: "Extensive Project Portfolio",
    text: "I have worked on 500+ projects including e-commerce, travel, education, IT solutions, and more."
  },
  {
    hd: "Engaging User Experience",
    text: "I incorporate modern UI/UX strategies and subtle animations to create engaging digital experiences."
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
                                <h4 data-aos="fade-down">Why <span>Choose</span> Us?</h4>
                                <p data-aos="fade-up">Your success is my priority—delivering intuitive, scalable solutions.</p>
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