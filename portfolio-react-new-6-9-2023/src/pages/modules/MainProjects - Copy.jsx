import { useEffect } from "react";

import img1 from "../../images/portfolio/india_blsattestation_com.jpg";
import img2 from "../../images/portfolio/akountobooks_com.jpg";
import img3 from "../../images/portfolio/snva_com.jpg";
import img4 from "../../images/portfolio/thelabelbar_com.jpg";
import img5 from "../../images/portfolio/ticketstoworld_co_uk.jpg";
import img6 from "../../images/portfolio/visasoftheworld_in.jpg";

import "../../sass/mainProjects.scss";
const MainProjects = () => {
    useEffect(() => {
        var mainProjectsArea = document.querySelectorAll(".mainProjects .mainProjectsArea");
        var detailBtn = document.querySelectorAll(".mainProjects .mainProjectsArea .image .detail");
        var closeDetailsBtn = document.querySelectorAll(".mainProjects .mainProjectsArea .image .details .icon");
        var viewBtn = document.querySelectorAll(".mainProjects .mainProjectsArea .more .icon.view");
        var stopBtn = document.querySelectorAll(".mainProjects .mainProjectsArea .more .icon.stop");
        var image = document.querySelectorAll(".mainProjects .mainProjectsArea .image");
        
        detailBtn.forEach(function(e){
            e.addEventListener("click", function(){
                mainProjectsArea.forEach(function(f){
                    f.classList.remove("active");
                });
                image.forEach(function(f){
                    f.classList.remove("active");
                });
                e.closest(".mainProjectsArea").classList.add("active");
            });
        });

        closeDetailsBtn.forEach(function(e){
            e.addEventListener("click", function(){
                e.closest(".mainProjectsArea").classList.remove("active");
            });
        });

        viewBtn.forEach(function(e){
            e.addEventListener("click", function(){
                image.forEach(function(f){
                    f.classList.remove("active");
                });
                mainProjectsArea.forEach(function(f){
                    f.classList.remove("active");
                });
                e.closest(".mainProjectsArea").querySelector(".image").classList.add("active");
            });
        });
        stopBtn.forEach(function(e){
            e.addEventListener("click", function(){
                image.forEach(function(f){
                    f.classList.remove("active");
                });
            });
        });
        document.querySelectorAll(".mainProjects .mainProjectsArea .image .text").forEach(function(e){
            if (e.classList.length == 1) {
                e.remove();
            }
        });
        document.querySelector(".section.mainProjects").addEventListener("click", function(e){
            e.stopPropagation();
        });
        document.addEventListener("click", function(){
            mainProjectsArea.forEach(function(e){
                e.classList.remove("active");
            });
            image.forEach(function(e){
                e.classList.remove("active");
            });
        });
    }, []);
    const MainProjectsData = [
        {            
            template : img1,
            duration : "2015-2016",
            link : () => window.open('http://india.blsattestation.com/'),
            title:"india_blsattestation_com_title",
            text : "india_blsattestation_com_text",
            category : "Attestation Process",
            name : "india_blsattestation_com"
        },
        {            
            template : img2,
            duration : "2023",
            link : () => window.open('http://india.blsattestation.com/'),
            title : "",
            text : "akountobooks_com_text",
            category : "Fintec",
            name : "akountobooks_com"
        },
        {            
            template : img3,
            duration : "2017-2021",
            link : () => window.open('http://india.blsattestation.com/'),
            title : "",
            text : "snva_com_text",
            category : "IT Software",
            name : "snva_com"
        },
        {            
            template : img4,
            duration : "2020-2021",
            link : () => window.open('http://india.blsattestation.com/'),
            title : "",
            text : "thelabelbar_com_text",
            category : "E-Commerce",
            name : "thelabelbar_com"
        },
        {            
            template : img5,
            duration : "2016",
            link : () => window.open('http://india.blsattestation.com/'),
            title : "",
            text : "ticketstoworld_co_uk_text",
            category : "Travel",
            name : "ticketstoworld_co_uk"
        },
        {            
            template : img6,
            duration : "2015-2016",
            link : () => window.open('http://india.blsattestation.com/'),
            title : "",
            text : "visasoftheworld_in_text",
            category : "Visa",
            name : "visasoftheworld_in"
        }
    ];
    function MainProjectsDataTag(props) {
        return(
            <>
            <div className="col-xs-12 col-sm-6 col-lg-4 col-xl-4">
                <div className="mainProjectsArea">
                    <div className="image" data-style={props.template}>
                        <span className="date">{props.duration}</span>
                        <span className="detail">View Detail</span>
                        <span className="category">{props.category}</span>
                        <span className={"text " + props.title}></span>
                        <span className="details">
                            <i className="icon">&#xe039;</i>
                            <span className="head">Details</span>
                            <span className={"about " + props.text}><i></i></span>
                        </span>
                    </div>
                    <div className="more">
                        <span className="icon view">&#xe028;</span>
                        <span className="icon stop">&#xe029;</span>
                        <span className={"name " + props.name}></span>
                        <span className="icon" onClick={props.link}>&#xe004;</span>
                    </div>
                </div>
            </div>
            </>
        )
    }
  return (
    <>
		<section className="section mainProjects" id="main-projects">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h1 className="heading">My <span>Main / </span>Projects<i>My Main WORKED Projects</i></h1>
                        <div className="outlineBox"></div>
                    </div>
                    {
                        MainProjectsData.map((val, KeyName) => {
                            return <MainProjectsDataTag key={KeyName}
                                template={val.template}
                                duration={val.duration}
                                link={val.link}
                                title={val.title}
                                text={val.text}
                                category={val.category}
                                name={val.name}
                            />
                        })
                    }
                </div>
            </div>
        </section>
    </>
  );
};

export default MainProjects;