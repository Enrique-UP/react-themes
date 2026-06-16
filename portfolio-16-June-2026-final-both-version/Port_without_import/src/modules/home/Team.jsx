import { TeamName } from "../common/Global";

const TeamData = [
  { img: "images/team/t1.jpg", ani:"fade-left" },
  { img: "images/team/t2.jpg", ani:"fade-right" },
  { img: "images/team/t3.jpg", ani:"fade-left" },
  { img: "images/team/t4.jpg", ani:"fade-right" },
];
function TeamTag(props){
    return(
        <div className="teamArea" data-aos={props.ani}>
            <img data-src={props.img} />
            <i className="leftArrow"></i>
            <i className="rightArrow"></i>
            <i className="bottomArrow"></i>
            <span className="name">
                <b>{props.fName}</b>
                <em>{props.lName}</em>
            </span>
            <span className="post">{props.post}</span>
        </div>// teamArea
    )
}
export default function Team() {
    return (
        <>
            <section className="section team" id="team">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <hgroup>
                                <h3 data-aos="fade-down">My <span>Fantastic</span> Team</h3>
                                <p data-aos="fade-up">Dedicated, skilled, and passionate professionals working together</p>
                            </hgroup>
                        </div>{/* cols */}
                        <div className="col-12">
                            <div className="part">
                                {TeamData.map((val, ind) => (
                                    <TeamTag
                                        key={ind}
                                        post={TeamName[ind]?.post}
                                        img={val.img}
                                        ani={val.ani}
                                        fName={TeamName[ind]?.fName}
                                        lName={TeamName[ind]?.lName}
                                    />
                                ))}
                            </div>{/* part */}
                        </div>{/* cols */}
                    </div>{/* row */}
                </div>{/* container */}
            </section>
        </>
    );
}
