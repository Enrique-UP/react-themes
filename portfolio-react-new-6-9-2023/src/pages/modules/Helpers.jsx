import "../../sass/helpers.scss";
import helper1 from "../../images/helper-1.jpg";
import helper2 from "../../images/helper-2.jpg";
import helper3 from "../../images/helper-3.jpg";
import helper4 from "../../images/helper-4.jpg";
const Helpers = () => {
    const HelpersPropsdata = [
        {
            img : helper1,
            name : `<em>Nomaan</em><b>Arif</b>`,
            post : "UI & UX Developer"
        },
        {
            img : helper2,
            name : `<em>Sandeep</em><b>Kumar</b>`,
            post : "Web Developer"
        },
        {
            img : helper3,
            name : `<em>Anubhav</em><b>Singh</b>`,
            post : "SEO"
        },
        {
            img : helper4,
            name : `<em>Kamal</em><b>Kant</b>`,
            post : "Content Developer"
        }
    ];
    function HelpersPropsTag(props) {
        return(
            <>
                <div className="col-6 col-lg-3">
                    <div className="helpersArea">
                        <img data-src={props.img} />
                        <i className="leftArrow"></i>
                        <i className="rightArrow"></i>
                        <i className="bottomArrow"></i>
                        <span className="name" dangerouslySetInnerHTML={{ __html: props.name}}></span>
                        <span className="post">{props.post}</span>
                    </div>
                </div>
            </>
        )
    }
    return(
        <>
            <section className="section helpers back" id="helpers">
                <div className="container">
                    <h1 className="heading animate bounceInDown">
                        My <span>Fantastic</span> Helpers
                        <i>HARD WORKER & TALENTED</i>
                    </h1>
                </div>
                <div className="container">
                    <div className="row">
                        {
                            HelpersPropsdata.map((val, KeyName) => {
                                return <HelpersPropsTag key={KeyName} img={val.img} name={val.name} post={val.post} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
export default Helpers;