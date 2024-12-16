import { useEffect } from "react";
import "../../sass/whyChooseMe.scss";
import img from "../../images/why_choose_me.png";
const WhyChooseMe = () => {
    const WcuPropsdata = [
        {
            head: "Website Design",
            text: "I am quite an expert in offering a variety of web design services easily. I also assist you in building your online presence and profound observation. I can help you with having a website that will not only look great but meet the needs of both you and your customers as well. This is an art that comes from many skills and disciplines in the production of the maintenance of websites. It is widely available, in search engine optimization, web graphic design, interface design, authoring, including standardized code and proprietary software, the user experienced design and so on. I pay a lot of attention to web design of my client?s projects to make their startups successful. I provide clean designs and easy-to-use interfaces, making your website look fresh and attractive."
        },
        {
            head: "Website Redesign",
            text: "I am expert in redesigning the website along with the new look, feel, and latest technology. I add some innovative creativity in building the websites according to the requirement of the customers."
        },
        {
            head: "Ecommerce Website Design",
            text: "For the Ecommerce website design always matters that's because in online business it is imperative to show the products openly. This is why to bear this in my mind I learnt very well in how to build e-commerce websites that help your business grow online."
        },
        {
            head: "Custom Website Design",
            text: "Custom web design always comes under the template based program like drag, cut, and paste functionality. I know how to go for the custom web design, based on the client's requirements and their strategic analysis specifically for their organizational goals."
        },
        {
            head: "Landing Page Design",
            text: "A landing page a web page that generally appears when a visitor clicks on a PPC add and on the other link that shows the result. So for that design always come like a miracle. Therefore, I design landing pages which are valuable marketing channels that benefits any type of business. This type of design has been observed as the best resources for building the website. So this is considerably responsible for all about the showcasing awesome landing pages. With this help, i am offering perspective on what makes each page special or interesting every time."
        },
        {
            head: "Responsive Website Design",
            text: "This is one of the amazing web design that helps in creating the web pages on the several devices like iPhone, Android, Mac, and Windows devices. And I am expert in responsive web design that helps to serve a variety of uses with their needs and requirements. This is true that almost every client wants a responsive version of his/her website each time. All my designed templates are fully responsive and can be displayed on any device, from PC to smartphone or tablet."
        },
        {
            head: "UI & UX Developing",
            text: "While User Experience is a conglomeration of tasks focused on optimization of a product for effective and enjoyable use; User Interface Design is its complement, the look, and feel, the presentation and interactivity of a product. This is a design that always helps the users usually refers to the main non-design aspects of building websites like writing markup and coding among then web professionals."
        },
        {
            head: "EMailer Design",
            text: "I know that how to design email and believe me I am drastically fit for the Emailer design service. It is strange in responsive, in order to offer email marketing Templates such as email design inspiration, Champaign monitor, email news latter, newsletters design, email Template and much more. I know how it helps the users for a media-related query that acts like conditional statements or Dynamics rules. This is all implies that when I will use this design, it will help you to read the email more readable on different screen sizes."
        },
        {
            head: "Invoice Design",
            text: "If you really want to send a graphic design to the clients, invoice design will help you to complete the work for a client easily. So see here I am a good invoice designer. A good last impression is as important as the first one. In the design/creative business, every single item of stationery you present to a client speaks volumes about your capabilities and attention to detail. Most designers, agencies and studios put a lot of thought into designing creative business cards, letterheads and envelopes. But when it comes to invoices, few of them stand out from the crowd."
        },
        {
            head: "Web Implementation",
            text: "I know the task of web implementation with the help of designing and developing resources. It is especially available for the help in the designing and fixing the issue by showing the hints. To tell the truth, it is a crucial part of the feature in the web design."
        },
        {
            head: "Website Updation",
            text: "Website maintenance is sometimes needed once your website is up and running. As needed, i can take care of the maintenance for you. I can make changes and ensure that running, and fully functional."
        },
        {
            head: "Graphic Designing",
            text: "With the help of this feature, you can start with the process of visual communication and be resolving the issue by using this one or more of typography, photography, and much more. It creates and combines the symbols, images, and text to form a visual representation of the idea and simple messages. With my product you can easily create impressive graphic designs for presenting your startup to investors in a good light."
        },
        {
            head: "UI & UX Designing",
            text: "UI design stands for user interface design, while UX design refers to user experience design. Both of these are crucial to an IT product and need to work closely together. Unlike UX designers, who are concerned with the overall feel of the product, user interface designers are particular about how the product is laid out. They are in charge of designing each screen or page with which a user interacts and ensuring that the UI visually communicates the path that a UX designer has laid out. UI/UX involves planning and iterating a site's skeleton and Blue Print. Once the proper information tectonics is in place, I design the visual layer to create a beautiful user experience. There are most of the developers who deem the versatile designing of UX & UI. These two designs always come under the category of iPhone and Android device."
        },
        {
            head: "Logo Designing",
            text: "A logo design helps you for having marvelous design in the mode of the logo. It helps in symbolizing ones organization logotype comes in the graphic representation of a company name, trademark, adds aviation, and much more."
        },
        {
            head: "Web Ads Designing",
            text: "I know how to design all type of web banners for tourism, education and tech support etc. Banner ads are one of the most prolific forms of marketing used in today's online world. Hopefully, you know this fact that Banner ads are one of the principal forms of advertising on the web at the present time and it is available for many sites works for the fundamental source of revenue."
        },
        {
            head: "Web Banner Designing",
            text: "I am expert to design all type of web banners for tourism, education and tech support etc. Web banner or banner ad is a form of advertising on the World Wide Web delivered by an ad server. This form of online advertising entails embedding an advertisement into a web page. It is intended to attract traffic to a website by linking to the website of the advertiser. The concept of this design is very simple and the same as this is available for the sites of which owners offer up space in their designing for an advertisement in order till up the banner add perfectly. It is generally intended to attract traffic to a website by linking to the website of the advertiser."
        },
        {
            head: "Web Template Designing",
            text: "I am a pretty good web template designer. First and foremost, I design the template in the graphic software. After passed this template from the client, I work with the code. A website template is a pre-designed webpage, which is the set of the graphics, images and other necessary things."
        },
        {
            head: "Image Editing",
            text: "There is an alternatively referred to as graphics software or photo software that called an image editor. And for this kind of task, I am quite good. I can edit digital photographs, traditional photo-chemical photographs or illustrations etc. An image editor is a software program used to edit or otherwise manipulate an image, picture or other graphic."
        },
        {
            head: "Image Optimization",
            text: "Look at any webpage, and you will see that most of its load time comes from images. Optimizing your images for the web means saving or compiling your images in a web friendly format. Optimising images for the web is a tricky business. You have to get the right balance between filesize and picture quality. It is an essential step though. I know well how to optimize the image to decrease the loading time of a webpage."
        },
        {
            head: "Brochure Designing",
            text: "It is typically called an informative paper document that can be folded into a Template, pamphlets'. Brochures come in the promotional document, primarily used to introduce a company, organization, Products, as well as a variety of services and inform prospective for the customer."
        },
        {
            head: "Flyers Designing",
            text: "A flyer is a form of paper advertisement intended for wide distribution and typically posted or distributed in a public place, handed out to individuals or sent through the mail. In the 2010s, flyers range from inexpensively photocopied leaflets to expensive, glossy, full-colour circulars. I design the flyers, specially to travel and tourism."
        },
        {
            head: "Newsletter Designing",
            text: "I design newsletter for the different organisations. Newsletters are print or online publications that contain news, features and images about a single topic. They are distributed by organizations/companies to their subscribers to encourage participation and increase sales. Choosing a right newsletter design is not an easy process as to complete this tasks it is mandatory to understand an infinite number of designs accordingly. In order to decorate Newsletter, it would be a good idea to choose the right color, shapes, texts formats and image placement that can take up a huge amount of time but Newsletter will be looking like attractive things."
        },
        {
            head: "Social Media",
            text: "Social media refers to the means of interactions among people in which they create, share, and/or exchange information and ideas in virtual communities and networks. I design banners, web ads, cover banner etc for all social media websites according. When we discuss the social media, it comes under the category of computer-mediated technologies that facilitate the definite and sharing the best information and ideas, career interests and another form of expression with the help of the virtual communities and networking systems. It is a great source of circulating any business and job among the employees in rapid position. Apart from that, it is used on different kind of the platforms which cause its designing is most important in all respects. I am integrated with such popular social networks as Facebook, Twitter, Linkedin and Google Plus."
        },
        {
            head: "AMP (Accelerated Mobile Pages)",
            text: "I have designed many projects on AMP. AMP stands for Accelerated Mobile Pages. The AMP (Accelerated Mobile Pages Project) is a website publishing technology developed by Google as a competitor to Facebook's Instant Articles. AMP is an open-source library that provides a straightforward way to create web pages that are compelling, smooth, and load near instantaneously for users."
        },
        {
            head: "Internet Marketing",
            text: "I provide a vast variety of internet marketing tools for your business to achieve great success."
        },
        {
            head: "Advanced Statistics",
            text: "I supply your every project with extensive statistics on startups you are managing."
        },
        {
            head: "Videography",
            text: "Attractive video presentation can make more impact on your business partners, and that's why this feature is a part of my work."
        },
        {
            head: "Coding Services",
            text: "I offer my customers a variety of coding services, which help them create perfectly working websites."
        }
    ];
    function WcuPropsTag(props) {
        return(
            <>
                <div className="col col-lg-6">
                    <a href="javascript:;" className="wcuArea">
                        <span>{props.head}</span>
                        <b className="Typewriter"><i>More Details</i></b>
                    </a>
                </div>
            </>
        )
    }
    useEffect(() => {
        document.querySelector(".whyChooseMe .outlineBox ~ .fw").innerHTML += `
            <div class="popupElement">
                <i class="icon">&#xe039;</i>
                <strong>Details</strong>
                <p></p>
            </div>
        `;

        var link = document.querySelectorAll(".whyChooseMe .wcuArea");
        var popupElement = document.querySelector(".whyChooseMe .popupElement");
        var popupElementP = document.querySelector(".whyChooseMe .popupElement > p");
        var icon = popupElement.querySelector(".icon");

        var a = 0;
        function topVal(){
            link.forEach(function(e, index){
                e.addEventListener("click", function(){
                    document.querySelector(".whyChooseMe .popupElement strong").innerHTML = "Details of " + WcuPropsdata[index].head;
                    popupElementP.innerText = WcuPropsdata[index].text;
                    popupElement.style.display = "flex";
                    popupElement.style.top = e.offsetTop + e.offsetHeight + "px";
                    a = index;
                });
                popupElement.style.top = link[a].offsetTop + link[a].offsetHeight + "px";
            });
        }
        window.addEventListener("resize", topVal());
        window.addEventListener("resize", topVal);        

        icon.addEventListener("click", function(){
            this.closest(".popupElement").style.display = "none";
        });

        document.querySelector(".whyChooseMe").addEventListener("click", function(e){
            e.stopPropagation();
        });
        document.addEventListener("click", function(){
            popupElement.style.display = "none";
        });
    }, []);
    return (
        <>
            <section className="section whyChooseMe" id="why-choose-me">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-4 justify">
                            <h1 className="heading">Why <span>Choose</span> Me?<i>Your Advantages</i></h1>
                            <div className="imageArea">
                                <img data-src={img} />
                                <div className="contacts">
                                    <a className="number"><i className="icon">&#xe001;</i><span className="txt"></span></a>
                                    <a className="mail"><i className="icon">&#xe002;</i><span className="txt"></span></a>
                                    <span>
                                        <a className="fb"><i className="icon">&#xe021;</i></a>
                                        <a className="tw"><i className="icon">&#xe022;</i></a>
                                        <a className="lin"><i className="icon">&#xe023;</i></a>
                                        <a className="ins"><i className="icon">&#xe024;</i></a>
                                        <a className="skype"><i className="icon">&#xe026;</i></a>
                                        <a className="wapp"><i className="icon fwt">&#xe025;</i></a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-8">
                            <div className="outlineBox clred"></div>
                            <div className="fw">
                                <div className="row">
                                    {
                                        WcuPropsdata.map((val, KeyName) => {
                                            return <WcuPropsTag key={KeyName} head={val.head} />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default WhyChooseMe;