import "../../sass/skills.scss";
import {useEffect} from "react";

const Skills = () => {
    let currentYear = new Date().getFullYear();
    const SkillData = [
        {
            totalYear : currentYear - 2016,
            name : `Website <span>Design</span>`,
            text : "I am quite an expert in offering a variety of web design services easily. I also assist you in building your online presence and profound observation. I can help you with having a website that will not only look great but meet the needs of both you and your customers as well. This is an art that comes from many skills and disciplines in the production of the maintenance of websites. It is widely available, in search engine optimization, web graphic design, interface design, authoring, including standardized code and proprietary software, the user experienced design and so on. I pay a lot of attention to web design of my client?s projects to make their startups successful. I provide clean designs and easy-to-use interfaces, making your website look fresh and attractive."
        },
        {   
            totalYear : currentYear - 2020,
            name : `Website <span>Redesign</span>`,
            text : "I am expert in redesigning the website along with the new look, feel, and latest technology. I add some innovative creativity in building the websites according to the requirement of the customers."            
        },
        {   
            totalYear : currentYear - 2022,
            name : `Ecommerce <span>Website Design</span>`,
            text : "For the Ecommerce website design always matters that's because in online business it is imperative to show the products openly. This is why to bear this in my mind I learnt very well in how to build e-commerce websites that help your business grow online."            
        },
        {   
            totalYear : currentYear - 2014,
            name : `Custom <span>Website Design</span>`,
            text : "Custom web design always comes under the template based program like drag, cut, and paste functionality. I know how to go for the custom web design, based on the client's requirements and their strategic analysis specifically for their organizational goals."            
        },
        {   
            totalYear : currentYear - 2014,
            name : `Landing <span>Page Design</span>`,
            text : "A landing page a web page that generally appears when a visitor clicks on a PPC add and on the other link that shows the result. So for that design always come like a miracle. Therefore, I design landing pages which are valuable marketing channels that benefits any type of business. This type of design has been observed as the best resources for building the website. So this is considerably responsible for all about the showcasing awesome landing pages. With this help, i am offering perspective on what makes each page special or interesting every time."            
        },
        {
            totalYear : currentYear - 2014,
            name : `Responsive <span>Website Design</span>`,
            text : "This is one of the amazing web design that helps in creating the web pages on the several devices like iPhone, Android, Mac, and Windows devices. And I am expert in responsive web design that helps to serve a variety of uses with their needs and requirements. This is true that almost every client wants a responsive version of his/her website each time. All my designed templates are fully responsive and can be displayed on any device, from PC to smartphone or tablet."            
        },
        {   
            totalYear : currentYear - 2014,
            name : `UI & UX <span>Developing</span>`,
            text : "While User Experience is a conglomeration of tasks focused on optimization of a product for effective and enjoyable use; User Interface Design is its complement, the look, and feel, the presentation and interactivity of a product. This is a design that always helps the users usually refers to the main non-design aspects of building websites like writing markup and coding among then web professionals."            
        },
        {   
            totalYear : currentYear - 2014,
            name : `EMailer <span>Design</span>`,
            text : "I know that how to design email and believe me I am drastically fit for the Emailer design service. It is strange in responsive, in order to offer email marketing Templates such as email design inspiration, Champaign monitor, email news latter, newsletters design, email Template and much more. I know how it helps the users for a media-related query that acts like conditional statements or Dynamics rules. This is all implies that when I will use this design, it will help you to read the email more readable on different screen sizes."            
        },
        {   
            totalYear : currentYear - 2014,
            name : `Invoice <span>Design</span>`,
            text : "If you really want to send a graphic design to the clients, invoice design will help you to complete the work for a client easily. So see here I am a good invoice designer. A good last impression is as important as the first one. In the design/creative business, every single item of stationery you present to a client speaks volumes about your capabilities and attention to detail. Most designers, agencies and studios put a lot of thought into designing creative business cards, letterheads and envelopes. But when it comes to invoices, few of them stand out from the crowd."            
        },
        {   
            totalYear : currentYear - 2014,
            name : `Web <span>Implementation</span>`,
            text : "I know the task of web implementation with the help of designing and developing resources. It is especially available for the help in the designing and fixing the issue by showing the hints. To tell the truth, it is a crucial part of the feature in the web design."            
        },
        {   
            totalYear : currentYear - 2014,
            name : `Website <span>Updation</span>`,
            text : "Website maintenance is sometimes needed once your website is up and running. As needed, i can take care of the maintenance for you. I can make changes and ensure that running, and fully functional."            
        },
        {   
            totalYear : currentYear - 2014,
            name : `AMP <span>(Accelerated Mobile Pages)</span>`,
            text : "I have designed many projects on AMP. AMP stands for Accelerated Mobile Pages. The AMP (Accelerated Mobile Pages Project) is a website publishing technology developed by Google as a competitor to Facebook's Instant Articles. AMP is an open-source library that provides a straightforward way to create web pages that are compelling, smooth, and load near instantaneously for users."            
        },
        {   
            totalYear : currentYear - 2014,
            name : `Logo <span>Designing</span>`,
            text : "A logo design helps you for having marvelous design in the mode of the logo. It helps in symbolizing ones organization logotype comes in the graphic representation of a company name, trademark, adds aviation, and much more."            
        },
        {   
            totalYear : currentYear - 2014,
            name : `Web Ads <span>Designing</span>`,
            text : "I know how to design all type of web banners for tourism, education and tech support etc. Banner ads are one of the most prolific forms of marketing used in today's online world. Hopefully, you know this fact that Banner ads are one of the principal forms of advertising on the web at the present time and it is available for many sites works for the fundamental source of revenue."            
        },
        {   
            totalYear : currentYear - 2014,
            name : `Web Banner <span>Designing</span>`,
            text : "I am expert to design all type of web banners for tourism, education and tech support etc. Web banner or banner ad is a form of advertising on the World Wide Web delivered by an ad server. This form of online advertising entails embedding an advertisement into a web page. It is intended to attract traffic to a website by linking to the website of the advertiser. The concept of this design is very simple and the same as this is available for the sites of which owners offer up space in their designing for an advertisement in order till up the banner add perfectly. It is generally intended to attract traffic to a website by linking to the website of the advertiser."            
        },
        {   
            totalYear : currentYear - 2014,
            name : `Web Template <span>Designing</span>`,
            text : "I am a pretty good web template designer. First and foremost, I design the template in the graphic software. After passed this template from the client, I work with the code. A website template is a pre-designed webpage, which is the set of the graphics, images and other necessary things."            
        },
        {   
            totalYear : currentYear - 2014,
            name : `Image <span>Editing</span>`,
            text : "There is an alternatively referred to as graphics software or photo software that called an image editor. And for this kind of task, I am quite good. I can edit digital photographs, traditional photo-chemical photographs or illustrations etc. An image editor is a software program used to edit or otherwise manipulate an image, picture or other graphic."            
        },
        {   
            totalYear : currentYear - 2014,
            name : `Image <span>Optimization</span>`,
            text : "Look at any webpage, and you will see that most of its load time comes from images. Optimizing your images for the web means saving or compiling your images in a web friendly format. Optimising images for the web is a tricky business. You have to get the right balance between filesize and picture quality. It is an essential step though. I know well how to optimize the image to decrease the loading time of a webpage."            
        },
        {   
            totalYear : currentYear - 2014,
            name : `Brochure <span>Designing</span>`,
            text : "It is typically called an informative paper document that can be folded into a Template, pamphlets'. Brochures come in the promotional document, primarily used to introduce a company, organization, Products, as well as a variety of services and inform prospective for the customer."            
        },
        {   
            totalYear : currentYear - 2014,
            name : `Flyers <span>Designing</span>`,
            text : "A flyer is a form of paper advertisement intended for wide distribution and typically posted or distributed in a public place, handed out to individuals or sent through the mail. In the 2010s, flyers range from inexpensively photocopied leaflets to expensive, glossy, full-colour circulars. I design the flyers, specially to travel and tourism."            
        },
        {   
            totalYear : currentYear - 2014,
            name : `Newsletter <span>Designing</span>`,
            text : "I design newsletter for the different organisations. Newsletters are print or online publications that contain news, features and images about a single topic. They are distributed by organizations/companies to their subscribers to encourage participation and increase sales. Choosing a right newsletter design is not an easy process as to complete this tasks it is mandatory to understand an infinite number of designs accordingly. In order to decorate Newsletter, it would be a good idea to choose the right color, shapes, texts formats and image placement that can take up a huge amount of time but Newsletter will be looking like attractive things."            
        }
    ];
    function SkillTag(props) {
        return(
            <>
                <div className="col-12 col-lg-6">
                    <data className="skill">
                        <div className="back">
                            <span className="animate">{props.totalYear} Years Exp</span>
                        </div>
                        <div className="content animate">
                            <p className="head" dangerouslySetInnerHTML={{ __html: props.name}}></p>
                            <p className="text">{props.text}</p>
                        </div>
                    </data>
                </div>
            </>
        )
    }
    useEffect(() => {
        var number = 100;
        var span = document.querySelectorAll(".skill .content .text");
        for(var i = 0; i < span.length; i++){
            var allText = span[i].innerHTML;
            if(number < allText.length){
                span[i].innerHTML = "<span>"+allText.slice(0, number)+"</span><i>"+allText.slice(number, allText.length)+"</i> <b>i... </b><a>View More</a>";
            }
        }    
        const link = document.querySelectorAll("[class*='col-'] .skill .content .text a");
        for (var i = 0; i < link.length; i++){
            link[i].addEventListener("click", function () {
                if (this.closest("[class*='col-']").classList.contains("active")){
                    this.closest("[class*='col-']").classList.remove("active");
                    this.innerText = "View More";
                }
                else{
                    const active = document.querySelectorAll("[class*='col-'].active");
                    for (var j = 0; j < active.length; j++){
                        active[j].classList.remove("active");
                        active[j].querySelectorAll("a").forEach(function(e){
                            e.innerText = "View More";
                        });
                    }
                    this.closest("[class*='col-']").classList.add("active");
                    this.innerText = "View Less";
                }
            });
        }

        document.querySelectorAll(".skills").forEach(function(f){
            f.addEventListener("click", function(e){
                e.stopPropagation();
            });
        });
        document.addEventListener("click", function(){
            document.querySelectorAll(".skills .skillCol [class*=col-]").forEach(function(e){
                e.classList.remove("active");
                e.querySelectorAll("a").forEach(function(a){
                    a.innerText = "View More";
                });
            });
        });
    }, []);
    return (
        <>
            <section className="section skills back" id="knowledge">
                <div className="container">
                    <h1 className="heading animate bounceInDown">
                        My <span>Knowledge</span>
                        <i>MY WIDE AREA OF EXPERTISE</i>
                    </h1>
                    <div className="outlineBox"></div>
                    <div className="row skillCol colors">
                    {
                        SkillData.map((val, KeyName) => {
                            return <SkillTag key={KeyName} totalYear={val.totalYear} name={val.name} text={val.text} />
                        })
                    }
                    </div>
                </div>
            </section>
        </>
    );
}
export default Skills;