import "../../sass/experience.scss";
function ExperienceTag(props) {
    return(
        <>
            <li>
                <i className="circles animate"></i>
                <data className="headText ">
                    <p className="duration"><i className="icon">&#xe051;</i>{props.year}</p>
                    <p className="head"><i className="icon">&#xe015;</i>{props.post}</p>
                    <p className="subHead1">Roles &amp; Responsibilities</p>
                    <p className="text mb">{props.roles}</p>
                    <p className="subHead"><i className="icon">&#xe009;</i>{props.cName}</p>
                    <p className="subHead1">{props.about}</p>
                    <p className="text">{props.aboutC}</p>
                </data>
            </li>
        </>
    )
}
const Experience = () => {
    const ExperienceData = [
        {
            year: "23-May-2022 to Present",
            post: "Sr. UI & UX Developer",
            roles: "Worked on developing new websites, website updation and also guide to my juniors.",
            cName: "Akounto Services Private Limited",
            about: "About the company",
            aboutC: "Akounto Services Private Limited offers business help especially for someone with no experience in business accounting before. It helps for solving the majority of the accounting problems."
        },
        {
            year: "11-November-2021 to 13-May-2022",
            post: "Sr. HTML Developer",
            roles: "Developed websites & emailer for world wide client. And also guide to my juniors.",
            cName: "Synapse India Outsourcing Private Limited",
            about: "About the company",
            aboutC: "SynapseIndia is at the forefront of innovation. They have stable & experienced team at SynapseIndia to address the entire breadth of clients’ opportunities in this competitive world."
        },
        {
            year: "1-February-2017 to 10-November-2021",
            post: "Sr. Web Designer",
            roles: "Developed websites for Online courses, Tech Support, Ecommerce, Flight booking, Cruise booking, Hotel booking, updation on websites, speed up websites, developed CRM, invoice, emailer, website on AMP (Accelerated Mobile Pages) technology. And also guide to my juniors.",
            cName: "SNVA Ventures Private Limited",
            about: "About the company",
            aboutC: "SNVA started its operations with education and quickly moved to capitalise on every emerging business opportunity. By far they have invested and embossed in diversified across sectors like IT, Fashion, Education, Media and Travel."
        },
        {
            year: "10-June-2016 to 31-January-2017",
            post: "Web Designer",
            roles: "Learn new things after that designed & developed websites or web pages. And also guide to my juniors.",
            cName: "Freelancing",
            about: "Developed new skills",
            aboutC: "That time i learnt new skills like responsive design & jquery."
        },
        {
            year: "9-May-2015 to 9-June-2016",
            post: "Assistant Web Designer",
            roles: "Designed & developed websites, emailer, invoice, created logos, web ads, brochures, flyers, newsletters & updation on website etc.",
            cName: "BLS International Services Limited",
            about: "About the Company",
            aboutC: "BLS International Services Limited is a specialist provider for Outsourcing of Visa, Passport and Attestation Services to the Client of Governments across the world."
        }
    ];
    return(
        <>
            <section className="sectionT experience" id="experience">
                <div className="container">
                    <h1 className="heading animate bounceInDown">My <span>Experience</span><i>My work History</i></h1>
                </div>
                <div className="container">
                    <ul className="exp colors lrAnimate">
                        {
                            ExperienceData.map((val, KeyName) => {
                                return <ExperienceTag key={KeyName} year={val.year} post={val.post} roles={val.roles} cName={val.cName} about={val.about} aboutC={val.aboutC} />
                            })
                        }
                    </ul>
                </div>
            </section>
        </>
    );
}
export default Experience;