import { useState } from "react";

const TsData = [
  {
    year: 2014,
    hd1: "Website",
    hd2: "Design",
    text: "I specialize in delivering high-quality website design services that help establish a strong online presence. My approach combines creativity, usability, and performance to build visually appealing and user-friendly websites. I ensure each design aligns with business goals while maintaining responsiveness, SEO compatibility, and modern UI/UX standards."
  },
  {
    year: 2014,
    hd1: "Website",
    hd2: "Redesign",
    text: "I provide professional website redesign services to enhance your site's look, functionality, and performance using the latest technologies. My goal is to modernize your website while improving user engagement and aligning it with your brand identity."
  },
  {
    year: 2014,
    hd1: "E-commerce",
    hd2: "Website Design",
    text: "I design scalable and visually compelling e-commerce websites that showcase products effectively and enhance user experience. My solutions are tailored to drive conversions and support business growth in the competitive online marketplace."
  },
  {
    year: 2014,
    hd1: "Custom",
    hd2: "Website Design",
    text: "I develop fully customized website designs based on your business requirements and strategic objectives. Each design is uniquely crafted to reflect your brand identity and deliver a personalized user experience."
  },
  {
    year: 2015,
    hd1: "Landing Page",
    hd2: "Design",
    text: "I create high-converting landing pages optimized for marketing campaigns, including PPC ads. Each page is designed to capture attention, communicate value clearly, and drive user actions effectively."
  },
  {
    year: 2014,
    hd1: "Responsive",
    hd2: "Web Design",
    text: "I build fully responsive websites that provide seamless experiences across all devices, including desktops, tablets, and smartphones. My designs adapt flawlessly to different screen sizes and platforms."
  },
  {
    year: 2014,
    hd1: "UI & UX",
    hd2: "Development",
    text: "I focus on delivering intuitive user interfaces and engaging user experiences. By combining design principles with development expertise, I create products that are both functional and visually appealing."
  },
  {
    year: 2015,
    hd1: "Email",
    hd2: "Template Design",
    text: "I design responsive and visually engaging email templates suitable for marketing campaigns and newsletters. These templates are optimized for readability across devices and email clients."
  },
  {
    year: 2015,
    hd1: "Invoice",
    hd2: "Design",
    text: "I create professional and visually appealing invoice designs that reflect your brand identity. A well-designed invoice enhances credibility and leaves a lasting impression on clients."
  },
  {
    year: 2015,
    hd1: "Web",
    hd2: "Implementation",
    text: "I provide end-to-end web implementation services, ensuring that designs are accurately translated into functional and efficient websites while maintaining performance and usability."
  },
  {
    year: 2015,
    hd1: "Website",
    hd2: "Maintenance",
    text: "I offer reliable website maintenance services to keep your site updated, secure, and running smoothly. This includes content updates, bug fixes, and performance optimization."
  },
  {
    year: 2013,
    hd1: "Graphic",
    hd2: "Design",
    text: "I create impactful graphic designs using typography, imagery, and visual storytelling. My designs effectively communicate your message and enhance your brand’s visual identity."
  },
  {
    year: 2013,
    hd1: "UI & UX",
    hd2: "Design",
    text: "I design user-centric interfaces and experiences by focusing on usability, structure, and aesthetics. My process includes planning, prototyping, and refining to deliver intuitive digital products."
  },
  {
    year: 2013,
    hd1: "Logo",
    hd2: "Design",
    text: "I design unique and memorable logos that represent your brand identity. Each logo is crafted to communicate your business values and create a strong visual impact."
  },
  {
    year: 2014,
    hd1: "Web Ads",
    hd2: "Design",
    text: "I design engaging web advertisements and banners that attract attention and drive user engagement across various online platforms."
  },
  {
    year: 2014,
    hd1: "Web Banner",
    hd2: "Design",
    text: "I create high-quality web banners that effectively promote products and services, helping increase website traffic and brand visibility."
  },
  {
    year: 2014,
    hd1: "Web Template",
    hd2: "Design",
    text: "I design modern and reusable web templates that combine visual appeal with functionality, making development faster and more efficient."
  },
  {
    year: 2013,
    hd1: "Image",
    hd2: "Editing",
    text: "I provide professional image editing services, including retouching, enhancement, and manipulation to ensure high-quality visual output."
  },
  {
    year: 2014,
    hd1: "Image",
    hd2: "Optimization",
    text: "I optimize images for web performance by balancing quality and file size, ensuring faster load times and improved user experience."
  },
  {
    year: 2015,
    hd1: "Brochure",
    hd2: "Design",
    text: "I design informative and visually appealing brochures that effectively communicate your brand message and services."
  },
  {
    year: 2015,
    hd1: "Flyer",
    hd2: "Design",
    text: "I create eye-catching flyers for promotions, events, and marketing campaigns, ensuring maximum reach and engagement."
  },
  {
    year: 2015,
    hd1: "Newsletter",
    hd2: "Design",
    text: "I design attractive newsletters that engage audiences and communicate updates effectively, helping improve customer interaction and retention."
  },
  {
    year: 2015,
    hd1: "Social Media",
    hd2: "Design",
    text: "I design creative social media graphics, banners, and advertisements tailored for platforms like Facebook, Instagram, LinkedIn, and Twitter to boost brand presence."
  },
  {
    year: 2018,
    hd1: "AMP",
    hd2: "Development",
    text: "I develop AMP (Accelerated Mobile Pages) solutions to ensure lightning-fast website performance on mobile devices, improving user experience and SEO rankings."
  },
  {
    year: 2015,
    hd1: "Digital",
    hd2: "Marketing",
    text: "I offer professionally designed images and visual assets tailored for digital marketing, helping brands create engaging content and improve their online visibility."
  },
  {
    year: 26,
    hd1: "Data",
    hd2: "Updates",
    text: "I manage and update website data, ensuring all content is current, well-structured, and aligned with business requirements."
  },
  {
    year: 27,
    hd1: "Video",
    hd2: "Editing",
    text: "I provide professional video editing services, enhancing raw footage into polished and engaging content for your brand."
  },
  {
    year: 28,
    hd1: "Coding",
    hd2: "Services",
    text: "I offer reliable coding services to develop high-performance, scalable, and secure websites tailored to your business needs."
  },
  {
    year: 29,
    hd1: "CRM (Customer Relationship Management)",
    hd2: "UI Design",
    text: "I design intuitive and user-friendly CRM interfaces that simplify complex workflows. My focus is on clean layouts, easy navigation, and improved user productivity, ensuring teams can manage customer data efficiently."
  },
  {
    year: 30,
    hd1: "CRM (Customer Relationship Management)",
    hd2: "Mobile Design",
    text: "I design responsive and mobile-friendly CRM interfaces that allow users to manage customer relationships effectively on smartphones and tablets."
  }
];

export default function TechinicalSkills() {
  const [activeIndex, setActiveIndex] = useState(null);
  const currentYear = new Date().getFullYear();
  // limit to 20 words
  const limitText = (text, limit = 20) => {
    const words = text.split(" ");
    return {
      short: words.slice(0, limit).join(" "),
      isLong: words.length > limit
    };
  };
  // calculate experience
  const getExperience = (year) => {
    const exp = currentYear - year;
    return exp > 0 ? exp : 0;
  };
  // format label (Year / Years)
  const formatExperience = (exp) => {
    if (exp <= 1) {
      return `${exp} + Year`;
    } else {
      return `${exp} + Years`;
    }
  };
  return (
    <section className="section skills back" id="ts">
      <div className="container">
        <hgroup>
          <h2 data-aos="fade-down">Design <span>Services</span></h2>
          <p data-aos="fade-up">Modern design solutions for websites and brands</p>
        </hgroup>
        <div className="row colors">
          <div className="col-12">
            <div className="outlineBox dk" data-aos="fade-up"></div>{/* outlineBox */}
          </div>{/* cols */}
          {TsData.map((item, index) => {
            const { short, isLong } = limitText(item.text);
            const isActive = activeIndex === index;
            const exp = getExperience(item.year);
            return (
              <div className="col-xs-12 col-lg-6" key={index}>
                <article className={`skill ${isActive ? "active" : ""}`}>                  
                  <div className="back" data-aos="fade-left">
                    <span>
                      <em>{formatExperience(exp)}</em>
                      <i>Experience</i>
                    </span>
                  </div>
                  <div className="cnts" data-aos="fade-right">
                    <p className="head">
                      {item.hd1 && <i>{item.hd1}</i>} {item.hd2 && <span>{item.hd2}</span>}
                    </p>
                    <p className="text">
                      {isActive || !isLong ? item.text : short}
                      {!isActive && isLong && "... "}
                      {isLong && (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveIndex(isActive ? null : index);
                          }}
                        >
                          {isActive ? " View Less" : " View More"}
                        </button>
                      )}
                    </p>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}