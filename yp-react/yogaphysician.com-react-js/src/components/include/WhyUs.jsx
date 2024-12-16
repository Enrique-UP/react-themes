import logosArea1 from "../../images/logosArea1.png";
import logosArea2 from "../../images/logosArea2.png";
import logosArea3 from "../../images/logosArea3.png";
import logosArea4 from "../../images/logosArea4.png";

function WhyUsTag(props) {
    return(
        <>
            <div className="col-xs-12 col-sm-6 col-3">
                <a>
                    <img src={props.logos} data-aos="zoom-in"></img>
                    <p data-aos="fade-up">{props.head}</p>
                    {/* <p data-aos="fade-up">{props.text}</p> */}
                </a>
            </div>{/* cols */}
        </>
    )
}

const WhyUs = () =>{
    const Whyusdata = [
        {
            logos: logosArea1,
            head: "Support & Motivation",
        },
        {
            logos: logosArea2,
            head: "Experience Trainers",
        },
        {
            logos: logosArea3,
            head: "Improves Flexibility",
        },
        {
            logos: logosArea4,
            head: "Supportive Community",
        }
    ];
    return(
        <>
            <section className="logosArea">
                <div className="container">
                    <div className="row">
                        {
                            Whyusdata.map((val, KeyName) => {
                                return <WhyUsTag key={KeyName} logos={val.logos} head={val.head} />
                            })
                        }
                    </div>{/* row */}
                </div>{/* container */}
            </section>
        </>
    );
}
export default WhyUs;