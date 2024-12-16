import "../../sass/education.scss";
function EducationTag(props) {
    return(
        <>
            <data>
                <i className="circles"></i>
                <aside className="year">
                    <span className="animate bounceInRight active">{props.year}</span>
                </aside>
                <aside className="headText">
                    <div className="shadow  active">
                        <p className="head">
                            <span>{props.sr}</span>
                            <b>{props.head}</b>
                        </p>
                        <p className="text">
                            <b>{props.subHead}</b>
                            <span dangerouslySetInnerHTML={{ __html: props.text}}></span>
                        </p>
                    </div>
                </aside>
            </data>
        </>
    )
}
const Education = () => {
    const EducationData = [
        {
            year: "2015",
            sr: "01",
            head: "Diploma In UI/UX Design",
            subHead: "Noida (U.P.)",
            text: "I learnt UI/UX designing from reputed Institute of Noida from November 2014 to March 2015. After that, My placement has been done in <i className='blsisl'></i>.",
        },
        {
            year: "2014",
            sr: "02",
            head: "Diploma In Web Design",
            subHead: "Lucknow (U.P.)",
            text: "I learnt web designing from reputed Institute of Lucknow from August 2013 to January 2014."
        },
        {
            year: "2013",
            sr: "03",
            head: "Bachelor's Degree",
            subHead: "Chhatrapati Shahu Ji Maharaj University, Kanpur (U.P.)",
            text: "I completed my bachelor's degree (BCA) from Chhatrapati Shahu Ji Maharaj University, Kanpur from 2010 to 2013."
        },
        {
            year: "2010",
            sr: "04",
            head: "Intermediate",
            subHead: "Uttar Pradesh Board, Allahabad",
            text: "I completed my Intermediate from Uttar Pradesh Board, Allahabad in 2010."
        },
        {
            year: "2008",
            sr: "05",
            head: "High School",
            subHead: "CBSE Board",
            text: "I completed my High School from Central Board of Secondary Education in 2008."
        }
    ];
    return (
        <>
            <section className="sectionT education" id="education">
                <div className="container">
                    <h1 className="heading">My <span>Education</span><i>Learning</i></h1>
                </div>
                <div className="container">
                    <div className="edu colors">
                        {
                            EducationData.map((val, KeyName) => {
                                return <EducationTag key={KeyName} year={val.year} sr={val.sr} head={val.head} subHead={val.subHead} text={val.text} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
}
export default Education;