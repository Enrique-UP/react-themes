import Chanting from "../../images/audios/chanting.mp3";
import Meditation from "../../images/audios/meditation.mp3";
import Hypertension from "../../images/audios/hypertension.mp3";
import Stress from "../../images/audios/stress.mp3";
import AnxietyDepression from "../../images/audios/anxietydepression.mp3";
import Backache from "../../images/audios/backache.mp3";
import Cancer from "../../images/audios/cancer.mp3";
import Obesity from "../../images/audios/obesity.mp3";
import Headache from "../../images/audios/headache.mp3";
import Sleep from "../../images/audios/sleep.mp3";

function AudioTag(props) {
    return(
        <>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-3">
                <a href={props.link} target="_blank" className="audioArea">
                    <i className="icon">&#xf1c7;</i>
                    <p className="heads">{props.head}</p>
                    <i className="icon">&#xf178;</i>
                </a>
            </div>{/* col */}
        </>
    )
}

const AudioIcon = () => {
    const Audiodata = [
        {
            link: Chanting,
            head: "Chanting"
        },
        {
            link: Meditation,
            head: "Meditation"
        },
        {
            link: Hypertension,
            head: "Hypertension"
        },
        {
            link: Stress,
            head: "Stress"
        },
        {
            link: AnxietyDepression,
            head: "Anxiety Depression"
        },
        {
            link: Backache,
            head: "Backache"
        },
        {
            link: Cancer,
            head: "Cancer"
        },
        {
            link: Obesity,
            head: "Obesity"
        },
        {
            link: Headache,
            head: "Headache"
        },
        {
            link: Sleep,
            head: "Sleep"
        }
    ];

    return (
      <>
        <section className="sectionTB audio">
            <div className="container">
                <div className="row Lorem ipsum dolor">
                    <div className="col-12">
                        <div className="mainHead">
                            <p className="subHead" data-aos="fade-left">Lorem</p>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-6">
                                    <h1 className="head" data-aos="fade-right">Audios</h1>
                                </div>{/* col */}
                                <div className="col-xs-12 col-sm-12 col-6">
                                    <p className="detailsHead" data-aos="fade-up">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti eum inventore adipisci, quis magnam provident voluptate doloremque.</p>
                                </div>{/* col */}
                            </div>{/* row */}
                        </div>{/* mainHead */}
                    </div>{/* col */}
                </div>{/* row */}
            </div>{/* container */}
            <div className="container mb">
                <div className="row">
                    {
                        Audiodata.map((val, KeyName) => {
                            return <AudioTag key={KeyName} head={val.head} text={val.text} link={val.link} />
                        })
                    }
                </div>{/* row */}
            </div>{/* container */}
        </section>
      </>
    );
}

export default AudioIcon;

