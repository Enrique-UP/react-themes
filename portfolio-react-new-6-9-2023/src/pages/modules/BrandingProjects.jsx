import { useEffect } from "react";
import "../../sass/brandingProjects.scss";
import img1 from "../../images/portfolio/osmosalt_com.jpg";
import img2 from "../../images/portfolio/alefmeem_store.jpg";
import img3 from "../../images/portfolio/snva_com.jpg";
import img4 from "../../images/portfolio/ticketstoworld_co_uk.jpg";
import img5 from "../../images/portfolio/stemcityusa_com.jpg";

const BrandingProjects = () => {
    useEffect(() => {
        document.querySelectorAll(".brandingProjects .brandingProjectsArea > li.buttons .btn.one").forEach(function(e) {
            e.addEventListener("click", function(){
                if (e.closest(".brandingProjectsArea").querySelector(".image").classList.contains('active')) {
                    e.closest(".brandingProjectsArea").querySelector(".image").classList.remove('active');
                } else {
                    document.querySelectorAll('.brandingProjects .brandingProjectsArea > li.image.active').forEach(function(f) {
                        f.classList.remove('active');  
                    });
                    e.closest(".brandingProjectsArea").querySelector(".image").classList.add('active');
                }
            });
        });
    }, []);
    const BrandingProjectsData = [
        {            
            template : img1,
            duration : "2021-2022",
            name : "osmosalt_com",
            type : "Salt",
            text : "osmosalt_com_text",
            link : () => window.open('https://www.osmosalt.com/')
        },
        {            
            template : img2,
            duration : "2021-2022",
            name : "alefmeem_store",
            type : "E-Commerce",
            text : "alefmeem_store_text",
            link : () => window.open('https://www.alefmeem_store/')
        },
        {            
            template : img3,
            duration : "2017-2021",
            name : "snva_com",
            type : "IT Software",
            text : "snva_com_text",
            link : () => window.open('https://www.snva.com/')
        },
        {            
            template : img4,
            duration : "2016",
            name : "ticketstoworld_co_uk",
            type : "Travel",
            text : "ticketstoworld_co_uk_text",
            link : () => window.open('https://www.ticketstoworld.co.uk/')
        },
        {            
            template : img5,
            duration : "2021-2022",
            name : "stemcityusa_com",
            type : "Society of Complex",
            text : "stemcityusa_com_text",
            link : () => window.open('https://www.stemcityusa.com/')
        }
    ];
    function BrandingProjectsDataTag(props){
        return(
            <>
                <ul className="brandingProjectsArea animate rotate_x">
                    <li className="image" data-style={props.template}></li>
                    <li className="text">
                        <p className={"head " + props.name}></p>
                        <p className="category">Website Type:- {props.type}</p>
                        <p className="aboutHead">About The Project</p>
                        <div className={"content " + props.text}></div>
                    </li>
                    <li className="buttons">
                        <label className="year">{props.duration}</label>
                        <a href="#template" className="btn one">View Template</a>
                        <label className="btn two" onClick={props.link}>View Live Project</label>
                    </li>
                </ul>
            </>
        )
    }
    return(
        <>
            <section className="brandingProjects back section" id="branding-projects">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="heading">My <span>Branding</span> Projects<i>View This</i></h1>
                        </div>
                        <div className="col-12 colors">
                            {
                                BrandingProjectsData.map((val, KeyName) => {
                                    return <BrandingProjectsDataTag key={KeyName} template={val.template} duration={val.duration} type={val.type} name={val.name} text={val.text} link={val.link} />
                                })
                            }
                        </div>
                        <div className="col-xs-12">
                            <p class="btns center"><a class="btn-1" href="#">Explore More</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default BrandingProjects;