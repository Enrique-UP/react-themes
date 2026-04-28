const ExpData = [
  {
    color: "var(--cb1)",
    ani: "fade-left",
    
    companyName: "Akounto Services Private Limited",
    duration: "23-May-2022 to Present",
    about: "Akounto Services Private Limited offers business help especially for someone with no experience in business accounting before. It helps for solving the majority of the accounting problems.",
    post: "Sr. UI/UX Developer",    
    role: [
      "Communicate with the IT Head regarding project approach and daily status updates.",
      "Develop user interfaces using HTML5, CSS3, SASS, Bootstrap, Responsive Web Design, and jQuery.",
      "Maintain and enhance existing websites.",
      "Implement fixes and updates based on changing requirements."
    ]    
  },
  {
    color: "var(--cb2)",
    ani: "fade-right",
    
    companyName: "SynapseIndia Outsourcing Private Limited",
    duration: "11 Nov 2021 – 12 May 2022",
    about: "SynapseIndia is a technology solutions company known for delivering innovative and scalable solutions, supported by a strong and experienced team, helping clients capitalize on opportunities in a competitive global world.",
    post: "Sr. UI/HTML Developer",    
    role: [
      "Communicate with group head/manager regarding project approach and daily updates.",
      "Develop pixel-perfect, responsive user interfaces.",
      "Build UI using HTML5, CSS3, SASS, Bootstrap, Responsive Web Design, and jQuery.",
      "Maintain and update existing websites.",
      "Implement changes based on evolving requirements.",
      "Resolve UI issues on iPhone and Mac devices."
    ]    
  },
  {
    color: "var(--cb3)",
    ani: "fade-left",
    
    companyName: "SNVA Ventures Private Limited",
    duration: "1-Feb-2017 to 10-Nov-2021",
    about: "SNVA started its operations with education and quickly moved to capitalize on every emerging business opportunity. By far they have invested and embossed in diversified across sectors like IT, Fashion, Education, Media and Travel.",
    post: "Sr. UI Developer",    
    role: [
      "Communicate with IT Head/Manager regarding project planning and execution.",
      "Understand requirements and create wireframes for proposals.",
      "Analyze PSD feasibility and convert designs into responsive UI.",
      "Develop interfaces using HTML5, CSS3, SASS, Bootstrap, Responsive Web Design, jQuery, and AMP.",
      "Maintain and enhance websites.",
      "Implement updates based on requirement changes.",
      "Develop mobile-first, responsive designs for multiple devices.",
      "Perform cross-browser and cross-device testing.",
      "Build SEO-friendly websites.",
      "Optimize website performance (e.g., page speed optimization).",
      "Translate functional requirements into effective user experiences.",
      "Clarify specifications before development.",
      "Provide effort estimations to the IT Manager."
    ]    
  },
  {
    color: "var(--cb4)",
    ani: "fade-right",
    
    companyName: "BLS International Services Limited",
    duration: "9-May-2015 to 9-June-2016",
    about: "BLS International Services Ltd. is a specialist provider for Outsourcing of Visa, Passport and Attestation Services to the Client of Governments across the world.",
    post: "UI Developer",    
    role: [
      "Communicate with senior developers, managers, and IT Head regarding project updates and tasks."
    ]    
  },
];

function ExpTag(props) {
  return (
    <li style={{ "--u": props.color }}>
      <i className="circles"></i>

      <article className="headText" data-aos={props.ani}>
        <p className="duration"><i className="icon">&#xa012;</i><span>{props.duration}</span></p>
        <p className="head"><i className="icon">&#xa043;</i><span>{props.post}</span></p>
        <p className="subHead1">Roles &amp; Responsibilities</p>

        <div className="text mb">
          {Array.isArray(props.role) ? (
            <ul>
              {props.role.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          ) : (
            <p>{props.role}</p>
          )}
        </div>

        <p className="subHead"><i className="icon">&#xa071;</i>{props.companyName}</p>
        <p className="subHead1">About the Company</p>
        <p className="text">{props.about}</p>
      </article>
    </li>
  );
}

export default function Experience() {
  return (
    <section className="section experience back" id="exp">
      <hgroup>
        <h2 data-aos="fade-down">Work <span>Experience</span></h2>
        <p data-aos="fade-up">A summary of my professional journey</p>
      </hgroup>

      <div className="container">
        <ul className="exp">
          {ExpData.map((val, ind) => (
            <ExpTag key={ind} {...val} />
          ))}
        </ul>
      </div>
    </section>
  );
}