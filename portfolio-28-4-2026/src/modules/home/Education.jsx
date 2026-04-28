const EduData = [
    {
        year: "2015", 
        sr: "01", 
        courseName: "Diploma in UI/UX Design", 
        place: "Noida", 
        about: "I completed a diploma in UI/UX Design from a reputed institute in Noida from November 2014 to March 2015. After completing the course, I secured a placement opportunity in a multinational company."
    },
    {
        year: "2014", 
        sr: "02", 
        courseName: "Diploma in Graphics Design", 
        place: "Lucknow", 
        about: "I completed a diploma in Multimedia & Design from a reputed institute in Lucknow from August 2013 to January 2014."
    },
    {
        year: "2013", 
        sr: "03", 
        courseName: "Bachelor’s Degree (BCA)", 
        place: "Chhatrapati Shahu Ji Maharaj University, Kanpur", 
        about: "I completed my Bachelor’s degree (BCA) from Chhatrapati Shahu Ji Maharaj University, Kanpur between 2010 and 2013."
    },
    {
        year: "2010", 
        sr: "04", 
        courseName: "Intermediate", 
        place: "Uttar Pradesh Board, Allahabad", 
        about: "I completed my Intermediate from the Uttar Pradesh Board, Allahabad in 2010."
    },
    {
        year: "2008", 
        sr: "05", 
        courseName: "High School", 
        place: "CBSE Board", 
        about: "I completed my High School from the Central Board of Secondary Education (CBSE) in 2008."
    }
];
function EduTag(props){
    return(
        <article>
            <i className="circles"></i>
            <aside className="year" data-aos="fade-left">
                <span>{props.year}</span>
            </aside>
            <aside className="headText" data-aos="fade-right">
                <div className="shadow">
                    <p className="head">
                        <span>{props.sr}</span>
                        <b>{props.courseName}</b>
                    </p>
                    <p className="text">
                        <b>{props.place}</b>
                        <span>{props.about}</span>
                    </p>
                </div>{/* shadow */}
            </aside>{/* headText */}
        </article>
    )
}

export default function Education() {
  return (
    <>
      <section className="section education colors b1" id="edu">
            <div className="container">
                <hgroup>
                  <h2 data-aos="fade-down">My <span>Education</span></h2>
                  <p data-aos="fade-up">An overview of my education and qualifications</p>
                </hgroup>
                <ul className="edu">
                    {
                        EduData.map((val, ind) => (
                            <EduTag key={ind} {...val} />
                        ))
                    }
                </ul>
            </div>{/* container */}
        </section>
    </>
  );
}
