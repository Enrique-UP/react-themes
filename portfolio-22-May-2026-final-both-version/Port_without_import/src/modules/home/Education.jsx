const EduData = [
  {
    year: "2015",
    sr: "01",
    courseName: "Diploma in UI/UX Design",
    place: "Noida",
    about:
      "Completed a Diploma in UI/UX Design from a reputed institute in Noida (Nov 2014 – Mar 2015). Gained hands-on experience in user interface design, user experience principles, and modern design tools. Successfully secured placement in a multinational company after completion."
  },
  {
    year: "2014",
    sr: "02",
    courseName: "Diploma in Multimedia & Design",
    place: "Lucknow",
    about:
      "Completed a Diploma in Multimedia & Design from a reputed institute in Lucknow (Aug 2013 – Jan 2014). Developed skills in graphic design, visual communication, and multimedia tools."
  },
  {
    year: "2013",
    sr: "03",
    courseName: "Bachelor’s Degree (BCA)",
    place: "Chhatrapati Shahu Ji Maharaj University, Kanpur",
    about:
      "Earned a Bachelor’s Degree in Computer Applications (BCA) from Chhatrapati Shahu Ji Maharaj University, Kanpur (2010 – 2013). Built a strong foundation in programming, computer fundamentals, and software development."
  },
  {
    year: "2010",
    sr: "04",
    courseName: "Intermediate",
    place: "Uttar Pradesh Board, Allahabad",
    about:
      "Completed Intermediate education from the Uttar Pradesh Board, Allahabad in 2010."
  },
  {
    year: "2008",
    sr: "05",
    courseName: "High School",
    place: "Central Board of Secondary Education (CBSE)",
    about:
      "Completed High School from the Central Board of Secondary Education (CBSE) in 2008."
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
