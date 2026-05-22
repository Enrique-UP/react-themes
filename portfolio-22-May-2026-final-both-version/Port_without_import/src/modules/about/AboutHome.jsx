import { useState, useEffect } from "react";
import { TypeWriter } from "../typeWriter/TypeWriter";

import { Global } from "../common/Global";
import { Link } from "react-router-dom";
import CounterNum from "./CounterNum";

const words1 = [
  { text: "(Frontend Developer).", className: "one" },
  { text: "(Frontend Developer).", className: "two" },
  { text: "(Frontend Developer).", className: "three" }
];

function getExperienceYears(startYear = 2015, startMonth = 5) {
  const now = new Date();
  let years = now.getFullYear() - startYear;
  // adjust if current month is before joining month
  if (now.getMonth() + 1 < startMonth) {
    years--;
  }
  return years;
}

export default function AboutHome() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 0)");
    const handleChange = (e) => setIsMobile(e.matches);
    setIsMobile(media.matches);
    if (media.addEventListener) {
      media.addEventListener("change", handleChange);
    } else {
      media.addListener(handleChange);
    }
    return () => {
      if (media.removeEventListener) {
        media.removeEventListener("change", handleChange);
      } else {
        media.removeListener(handleChange);
      }
    };
  }, []);

  const TextBlock = (
    <div className="cnt">
      <p className="hd">International Projects & Government Collaborations</p>
      <p className="shd">Contributed as a Frontend Developer to global digital platforms.</p>
      <ul className="lists projects">
        {Array.from({ length: 8 }).map((_, index) => (
          <li key={index}></li>
        ))}
      </ul>
    </div> // {/* cnt */}
  );

  return (
    <section className="section about" id="about">
      <div className="container">
        <hgroup>
          <h2 data-aos="fade-down">About <span>Me</span></h2>
          <p data-aos="fade-up">Get to know more about me and my professional journey</p>
        </hgroup>
        <div className="fw">
          <div className="cols1">
            <div className="images">
              <div className="imgArea1">
                <picture data-aos="fade-right">
                  <source media="(max-width: 575px)" srcset="images/about/about1_575.jpg" />
                  <img data-src="images/about/about1.jpg" />
                </picture>
                <picture data-aos="fade-left">
                  <source media="(max-width: 575px)" srcset="images/about/about2_575.jpg" />
                  <img data-src="images/about/about2.jpg" />
                </picture>
              </div>{/* imgArea */}
              <div className="imgArea2">
                <picture data-aos="fade-down">
                  <source media="(min-width: 576px) and (max-width: 1199px)" srcset="images/about/img3_1199.jpg" />
                  <source media="(max-width: 575px)" srcset="images/about/about3_575.jpg" />
                  <img data-src="images/about/about3.jpg" />
                </picture>
              </div>{/* imgArea */}
            </div>{/* images */}
          </div>{/* cols1 */}

          <div className="cols2">
            <div className="cnt">
              <p className="int">Hello!</p>
              <p className="int">I am Nomaan Arif</p>
              <p className="post"><TypeWriter words={words1} /></p>
              <p>Specializing in designing and developing user-friendly and visually appealing digital experiences.</p>
              <p>My expertise includes Frontend Development, UI/UX design, website redesign, responsive design, software interfaces, landing pages, emailers, CRM systems, and branding materials, along with other digital design solutions.</p>
              <p>Currently based in Delhi, India, I focus on delivering high-quality digital experiences that align with user needs and business goals.</p>
            </div>{/* cnt */}
            <div className="cnt">
              <p className="hd">My Work Experience</p>
              <p>With over {getExperienceYears()} years of professional experience, I specialize in creating innovative and efficient digital solutions that deliver strong user engagement and business value.</p>
              <p>I have delivered more than 500 projects globally, working with clients across various industries including travel, e-commerce, education, visa and passport services, consular platforms, attestation services, IT solutions, online payments, and enterprise systems.</p>
              <p>I am currently working with a leading IT software company where I contribute to the development of high-quality digital platforms and scalable solutions.</p>
              <p>I collaborate closely with clients and business teams to understand requirements and transform them into effective and user-centric digital products.</p>
            </div>{/* cnt */}
            {/* Desktop only */}
            {/* {!isMobile && TextBlock} */}
          </div>{/* cols2 */}
          <div className="cols3">
            {/* Mobile only */}
            {isMobile && TextBlock}
            <div className="cnt">
              <p className="hd">My Story</p>
              <p>I have a deep passion for design and development. I believe that talent plays a crucial role in building a successful career, and I have dedicated myself to becoming a skilled frontend developer. Showcasing creativity through meaningful digital products is essential, and I strive to deliver work that reflects both value and innovation.</p>
            </div>{/* cnt */}
            <div className="cnt">
              <p className="hd">My Work Debut</p>
              <p>I began my professional journey as a UI & UX Developer at a multinational company. At the organization, I have worked on designing and developing websites and software solutions for multiple countries and in various languages, including Azeri, Polish, French, Spanish, and Chinese.</p>
              <p>My work involves creating platforms for services such as visa processing, passport services, identity management, verification systems, and other global digital solutions.</p>
            </div>{/* cnt */}
            <div className="cnt">
              <p className="hd">My Mission</p>
              <p className="shd">My mission is to deliver innovative and high-quality web design and development solutions that create real value for clients.</p>
              <ul className="lists projects">
                <li>Building strong relationships with clients and teams</li>
                <li>Maintaining integrity and professionalism</li>
                <li>Optimizing costs without compromising quality</li>
                <li>Bringing innovation into every project</li>
              </ul>
            </div>{/* cnt */}
            <div className="cnt">
              <p className="hd">My Goal</p>
              <p>My goal is to contribute to making the web a better place by delivering high-quality, user-focused designs that help businesses grow and strengthen their digital presence. I aim to create solutions that are not only visually appealing but also highly functional, ensuring a seamless experience for users. By continuously improving my skills and adapting to new technologies, I strive to provide innovative and result-driven digital products that add real value to every project.</p>
            </div>{/* cnt */}
            <div className="cnt">
              <p className="hd">My Vision</p>
              <p>My vision is to establish myself as a leading Frontend Developer by consistently delivering exceptional and impactful design solutions. I aspire to build a strong professional identity recognized for creativity, quality, and reliability. Through dedication and continuous learning, I aim to work on diverse global projects, contribute to meaningful digital transformations, and set high standards in user experience and interface design.</p>
            </div>{/* cnt */}
            <div className="cnt">
                <p className="hd">Frontend Development Skills</p>
                <p className="shd">Technologies and tools I use to create responsive and interactive web applications.</p>
                <div className="skillBar colors one">
                  <article data-aos="fade-left">
                    <p>
                      <b>HTML</b>
                      <CounterNum target={80} suffix="%" />
                    </p>
                    <i></i>
                  </article>
                  <article data-aos="fade-right">
                    <p>
                      <b>PUG</b>
                      <CounterNum target={60} suffix="%" />
                    </p>
                    <i></i>
                  </article>
                  <article data-aos="fade-left">
                    <p>
                      <b>CSS</b>
                      <CounterNum target={80} suffix="%" />
                    </p>
                    <i></i>
                  </article>
                  <article data-aos="fade-right">
                    <p>
                      <b>SASS</b>
                      <CounterNum target={70} suffix="%" />
                    </p>
                    <i></i>
                  </article>
                  <article data-aos="fade-left">
                    <p>
                      <b>Bootstrap</b>
                      <CounterNum target={75} suffix="%" />
                    </p>
                    <i></i>
                  </article>
                  <article data-aos="fade-right">
                    <p>
                      <b>Responsive Web Design</b>
                      <CounterNum target={95} suffix="%" />
                    </p>
                    <i></i>
                  </article>
                  <article data-aos="fade-left">
                    <p>
                      <b>JavaScript</b>
                      <CounterNum target={65} suffix="%" />
                    </p>
                    <i></i>
                  </article>
                  <article data-aos="fade-right">
                    <p>
                      <b>React JS & Vite</b>
                      <CounterNum target={60} suffix="%" />
                    </p>
                    <i></i>
                  </article>
                  <article data-aos="fade-right">
                    <p>
                      <b>JQuery</b>
                      <CounterNum target={70} suffix="%" />
                    </p>
                    <i></i>
                  </article>
                  <article data-aos="fade-right">
                    <p>
                      <b>AMP (Accelerate Mobile Pages)</b>
                      <CounterNum target={75} suffix="%" />
                    </p>
                    <i></i>
                  </article>
                  <article data-aos="fade-left">
                    <p>
                      <b>Unbounce</b>
                      <CounterNum target={70} suffix="%" />
                    </p>
                    <i></i>
                  </article>
                  <article data-aos="fade-right">
                    <p>
                      <b>Pixel-Perfect Design</b>
                      <CounterNum target={99} suffix="%" />
                    </p>
                    <i></i>
                  </article>
                  <article data-aos="fade-left">
                    <p>
                      <b>Web Performance Optimization</b>
                      <CounterNum target={90} suffix="%" />
                    </p>
                    <i></i>
                  </article>
                  <article data-aos="fade-left">
                    <p>
                      <b>Cross-Browser Compatibility</b>
                      <CounterNum target={90} suffix="%" />
                    </p>
                    <i></i>
                  </article>
                  <article data-aos="fade-left">
                    <p>
                      <b>Visual Studio Code</b>
                      <CounterNum target={70} suffix="%" />
                    </p>
                    <i></i>
                  </article>
                  <article data-aos="fade-left">
                    <p>
                      <b>Adobe Dreamweaver</b>
                      <CounterNum target={65} suffix="%" />
                    </p>
                    <i></i>
                  </article>
                  <article data-aos="fade-left">
                    <p>
                      <b>Adobe Photoshop</b>
                      <CounterNum target={70} suffix="%" />
                    </p>
                    <i></i>
                  </article>
                  <article data-aos="fade-left">
                    <p>
                      <b>Macromedia Fireworks</b>
                      <CounterNum target={60} suffix="%" />
                    </p>
                    <i></i>
                  </article>
                </div>
              </div>{/* cnt */}
              <div className="cnt">
                <p className="hd">Language Proficiency</p>
                <p className="shd">Communication in multiple languages with varying fluency levels.</p>
                <div className="skillBar colors two">
                  <article data-aos="fade-left">
                    <p>
                      <b>English</b>
                      <CounterNum target={65} suffix="%" />
                    </p>
                    <i></i>
                  </article>
                  <article data-aos="fade-right">
                    <p>
                      <b>Hindi</b>
                      <CounterNum target={75} suffix="%" />
                    </p>
                    <i></i>
                  </article>
                  <article data-aos="fade-left">
                    <p>
                      <b>Urdu (Spoken)</b>
                      <CounterNum target={45} suffix="%" />
                    </p>
                    <i></i>
                  </article>
                </div>
              </div>{/* cnt */}
              
              <div className="outlineBox dk" data-aos="fade-up">
                <b>Outside of my Professional Life</b>
                <span>I am passionate about cricket and actively follow and engage in politics and social work. I enjoy exploring fashion and styling, nature sightseeing, photography, and food experiences. I love road trips, traveling, biking, and driving, along with outdoor activities like camping, swimming, hiking, and trekking. My interests also include sports, fitness, interior designing, listening to music, watching movies, and staying active on social media.</span>
              </div>{/* outlineBox */}

              <div className="btns center">
                <a href={Global.numTel} target="_blank" data-aos="fade-left">Hire Me</a>
                <Link to="/contact" data-aos="fade-right">Contact Me</Link>
              </div>{/* btns */}
            </div>{/* cols3 */}
          </div>{/* fw */}
        </div>{/* container */}
      </section>
  );
}