import React from "react";
import Typewriter from 'typewriter-effect';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import "../../sass/about.scss";
import img1 from "../../images/about_me-1.jpg";
import img2 from "../../images/about_me-2.jpg";
import img3 from "../../images/about_me-3.jpg";

const CounterTag = ({ target, duration }) => {
    const [ref, inView] = useInView({
		threshold: 0.3,
		triggerOnce: true,
	});
    return (
		<span ref={ref}>
			<CountUp
				start={0}
				end={inView ? target : 0}
				duration={duration}
				separator=','
				useEasing={true} />
		</span>
	);
};

const AboutUs = () => {
    const years = new Date().getFullYear() - 2015;
    return(
        <>
            <section className="section aboutMe" id="about">
                <div className="container">
                    <h1 className="heading">
                        About <span>Me</span>
                        <i>WHO I AM?</i>
                    </h1>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col col-md-6">
                            <div className="row">
                                <div className="col-sm-12">
                                    <figure className="heightImg1">
                                        <img data-src={img1} />
                                    </figure>
                                </div>
                                <div className="col-sm-12">
                                    <div className="row">
                                        <div className="col-6">
                                            <figure className="heightImg2">
                                                <img data-src={img2} />
                                            </figure>
                                        </div>
                                        <div className="col-6">
                                            <figure className="heightImg2">
                                                <img data-src={img3} />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-md-6">
                            <p className="head">Hello!</p>
                            <p className="subHead">I am Nomaan Arif</p>
                            <div className="post">
                                {/* <span>Hello!</span> */}
                                <Typewriter options={{strings: [
                                    '<b>(Software <i>Engineer</i></b>).',
                                    '<b>(Frontend <i>Developer</i></b>).',
                                    '<b>(React JS <i>Developer</i></b>).',
                                    '<b>(UI & UX <i>Developer</i></b>).'
                                ], autoStart: true, loop: true, }} />
                            </div>
                            <p className="text">From India and i like designing and coding the software. I am expert software engineer with more than <span>{years}</span> years of experience passionate to develop outstanding design & i am a jack of all trades when it comes to web design. I am proud to be called a <b>Software Engineer</b>. Now I’m based in Delhi, India & Working for <b className="blsisl"></b> and enjoying the life in the countryside.</p>
                            <p className="head1">My Achievements</p>
                            <p>I have worked on the below passed projects:-</p>
                            <ul className="lists list1 myAchievements">
                            <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul className="lists list2 myAchievements">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <div className="fw">
                                <p className="head1">My Story</p>
                                <p>I love to <strong>design</strong> &amp; <strong>code</strong>. When it comes to the talent, it is a most important component of a <strong>successful career</strong> and therefore, I had finally decided to be a part of a successful <strong>ui &amp; ux developer</strong>. Talent always requires promotion and a <strong>ui &amp; ux developer</strong> must show their talent on the <strong>website</strong> or <strong>software</strong> that their work is of value.</p>
                            </div>
                            <div className="fw">
                                <p className="head1">My Work Debut</p>
                                <p>I <strong>debuted</strong> as a <strong>ui &amp; ux developer</strong> at <strong className="blsisl"> Company</strong>. I work with this company for <strong>designing/developing</strong> different <strong>websites/softwares</strong> for <strong>different countries</strong> in <strong>different languages</strong> such as <strong>Azeri</strong>, <strong>Polish</strong>, <strong>French</strong>, <strong>Spainish</strong> and <strong>Chinese</strong> etc. Being a part of the employee in <strong className="blsisl"> company</strong>, I typically design here creative <strong>websites</strong>, for a variety of <strong>services like passport services, visa processing services, visa verification, commercial verification and other services as well like consular services, e-visas, biometric and identity management services, verification and attestation services, in all over the world</strong>.</p>
                            </div>
                            <div className="fw">
                                <p className="head1">My Work Experience</p>
                                <p>In fact, I have more than <strong>7 years commercial experience</strong> in <strong>ui &amp; ux developing</strong>, I work with <strong>clients</strong> from <strong>around the world</strong> and provide them <strong>websites</strong> on <strong>latest technology</strong>. I have <strong>designed</strong> more than <strong>300 projects</strong>. I am spending my whole time in developing the innovative creativity while designing the websites at the present organization. I have strong developing experiences as a ui &amp; ux developer, carrying up to <strong>date Knowledge</strong> of the latest industry trends in ui &amp; ux developing and usability. I am expert in handling the challenging projects in a professional way. I have strong <strong>problem-solving</strong> and <strong>planning skills</strong> with the ability to work independently or in a team environment. I handle the responsibility of <strong>website designing, website redesigning, software designing, e-commerce website designing, custom website designing, landing page designing, responsive web technology, ui and ux developing, e-mailer designing, invoice designing, web implementation, website updating, graphic designing, logo designing, web ads designing, web banner designing, web template designing, image editing, image optimizing, brochure and flyers designing</strong> etc. I interact with clients to understand their existing applications and design the site according to their system requirements, working with business analysts to understand their business models and goals and help define strategy content and features and work according their need.</p>
                            </div>
                            <div className="fw">
                                <p className="head1">My Mission</p>
                                <p>My mission at Grand is to provide advanced and innovative <strong>web design</strong> and <strong>web development</strong> of the highest quality for all of our clients.</p>
                                <ul className="lists list3">
                                    <li>Good relationships with clients &amp; team members</li>
                                    <li>Integrity in all i do to achieve full potential</li>
                                    <li>Cut expenses without sacrificing quality</li>
                                    <li>Integrating innovations into every project</li>
                                </ul>
                            </div>
                            <div className="fw">
                                <p className="head1">My Goal</p>
                                <p>My goal is to make the Website a better for everyone. I hard work for providing my customers with <strong>first-class website templates</strong>, design to push their business forward and improve their reputation.</p>
                            </div>
                            <div className="fw">
                                <p className="head1">My Vision</p>
                                <p>My vision is to expand my current position as a leading <strong>UI &amp; UX Developer</strong>. While providing first-class designs.</p>
                            </div>
                            <div className="fw progress-bars">
                                <p className="head1">My Technical Skills</p>
                                <div className="row">
                                    <div className="col-6 bar-item">
                                        <div className="skill-header">
                                            <b>HTML</b>
                                            <div className="count-box"><CounterTag className="count-text" target={70} duration={5} /></div>
                                        </div>
                                        <div className="bar-inner"><div className="progress-line back-1 seventy"></div></div>
                                    </div>
                                    <div className="col-6 bar-item">
                                        <div className="skill-header">
                                            <b>PUG (Jade)</b>
                                            <div className="count-box"><CounterTag className="count-text" target={75} duration={5} /></div>
                                        </div>
                                        <div className="bar-inner"><div className="progress-line back-2 seventyfive"></div></div>
                                    </div>
                                    <div className="col-6 bar-item">
                                        <div className="skill-header">
                                            <b>CSS</b>
                                            <div className="count-box"><CounterTag className="count-text" target={70} duration={5} /></div>
                                        </div>
                                        <div className="bar-inner"><div className="progress-line back-3 seventy"></div></div>
                                    </div>
                                    <div className="col-6 bar-item">
                                        <div className="skill-header">
                                            <b>SAAS</b>
                                            <div className="count-box"><CounterTag className="count-text" target={70} duration={5} /></div>
                                        </div>
                                        <div className="bar-inner"><div className="progress-line back-4 seventy"></div></div>
                                    </div>
                                    <div className="col-6 bar-item">
                                        <div className="skill-header">
                                            <b>JavaScript</b>
                                            <div className="count-box"><CounterTag className="count-text" target={65} duration={5} /></div>
                                        </div>
                                        <div className="bar-inner"><div className="progress-line back-5 sixtyfive"></div></div>
                                    </div>
                                    <div className="col-6 bar-item">
                                        <div className="skill-header">
                                            <b>Jquery</b>
                                            <div className="count-box"><CounterTag className="count-text" target={70} duration={5} /></div>
                                        </div>
                                        <div className="bar-inner"><div className="progress-line back-6 seventy"></div></div>
                                    </div>
                                    <div className="col-6 bar-item">
                                        <div className="skill-header">
                                            <b>React JS</b>
                                            <div className="count-box"><CounterTag className="count-text" target={60} duration={5} /></div>
                                        </div>
                                        <div className="bar-inner"><div className="progress-line back-7 sixty"></div></div>
                                    </div>
                                    <div className="col-6 bar-item">
                                        <div className="skill-header">
                                            <b>Bootstrap & Responsive</b>
                                            <div className="count-box"><CounterTag className="count-text" target={80} duration={5} /></div>
                                        </div>
                                        <div className="bar-inner"><div className="progress-line back-8 eighty"></div></div>
                                    </div>
                                    <div className="col-6 bar-item">
                                        <div className="skill-header">
                                            <b>AMP (Accelerate Mobile Pages)</b>
                                            <div className="count-box"><CounterTag className="count-text" target={70} duration={5} /></div>
                                        </div>
                                        <div className="bar-inner"><div className="progress-line back-9 seventy"></div></div>
                                    </div>
                                    <div className="col-6 bar-item">
                                        <div className="skill-header">
                                            <b>Adobe Photoshop</b>
                                            <div className="count-box"><CounterTag className="count-text" target={65} duration={5} /></div>
                                        </div>
                                        <div className="bar-inner"><div className="progress-line back-10 sixtyfive"></div></div>
                                    </div>
                                </div>
                            </div>
                            <div className="fw progress-bars">
                                <p className="head1">Languages</p>
                                <div className="row">
                                    <div className="col-4 bar-item">
                                        <div className="skill-header">
                                            <b>Hindi</b>
                                            <div className="count-box"><CounterTag className="count-text" target={70} duration={5} /></div>
                                        </div>
                                        <div className="bar-inner"><div className="progress-line back-1 seventy"></div></div>
                                    </div>
                                    <div className="col-4 bar-item">
                                        <div className="skill-header">
                                            <b>English</b>
                                            <div className="count-box"><CounterTag className="count-text" target={65} duration={5} /></div>
                                        </div>
                                        <div className="bar-inner"><div className="progress-line back-2 sixtyfive"></div></div>
                                    </div>
                                    <div className="col-4 bar-item">
                                        <div className="skill-header">
                                            <b>Urdu</b>
                                            <div className="count-box"><CounterTag className="count-text" target={60} duration={5} /></div>
                                        </div>
                                        <div className="bar-inner"><div className="progress-line back-3 sixty"></div></div>
                                    </div>
                                </div>
                            </div>
                            <div className="fw techSkills">
                                <div className="row mu-single-counter2">
                                    <div className="col-6 col-md-3">
                                        <div className="cnt count-box">
                                            <i className="icon">&#xe044;</i>
                                            <b>My Designed Templates</b>
                                            <CounterTag className="count-text" target={350} duration={5} />
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-3">
                                        <div className="cnt count-box">
                                            <i className="icon">&#xe047;</i>
                                            <b>My Happy Clients</b>
                                            <CounterTag className="count-text" target={200} duration={5} />
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-3">
                                        <div className="cnt count-box">
                                            <i className="icon">&#xe031;</i>
                                            <b>My Hours of Coading</b>
                                            <CounterTag className="count-text" target={100000} duration={5} />
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-3">
                                        <div className="cnt count-box">
                                            <i className="icon">&#xe053;</i>
                                            <b>My Lines of Code</b>
                                            <CounterTag className="count-text" target={500000} duration={5} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="fw family active">
                                <p className="head1">My Family Background</p>
                                <p>I belong from the <strong>royal and sporty family</strong> of <strong>Ujhani</strong> (<strong>Budaun district</strong> of <strong>Uttar Pradesh</strong>), <strong>India</strong>. My <strong>grandfather</strong> (<strong>Late. Mr. Qamaruddin</strong>), great-grandfather (<strong>Late. Mr. Shamsuddin</strong>) and forefather was a very big <strong>landlord</strong> as well as he was very <strong>big dealers (Frozen businessmen)</strong> of <strong>Uttar Pradesh</strong>. (There were <strong>19 allowances</strong> for <strong>BRICS</strong> May, too <strong>many districts</strong> in <strong>Uttar Pradesh</strong>). My grandfather was a <strong>national level cricketer</strong> (<strong>wicket keeper and batsman</strong>), and was also know how to <strong>play chess</strong> along with that being a <strong>landlord</strong> he was also a <strong>good litigant</strong>. He was a <strong>brilliant person</strong> and had a kind of information related to the <strong>politics</strong> and all topics as he was a <strong>politician</strong> to discuss a variety of references. In addition to <strong>respecting all religions</strong>, he was a person who maintained <strong>unity between all religions</strong> and was a <strong>respected deity</strong>. He had been an <strong>army officer</strong> to serve Indian and after resigned from that post he started his previous <strong>business</strong> appropriately. Subsequently, <strong>My father (Mr. Mohammad Arif)</strong> has started the same business. My father was a brilliant player of <strong>volleyball</strong>. Even my uncle (<strong>Mr. Mohammad Aslam</strong>) was a <strong>national level volleyball player</strong> and he has been a <strong>captain</strong> of the <strong>Uttar Pradesh volleyball team</strong>. I have also been a <strong>state level cricketer</strong>. Now, I am a <strong>software engineer</strong>.</p>
                            </div>
                            <div className="fw outSideWork">
                                <p className="head2">Outside Of Work</p>
                                <p className="texts">I am good former Cricketer (School, Club and State Level), Political Critic, Consultant, Social Rural Activist and Adventurer.</p>
                            </div>
                            <p className="btns center">
                                <a href="#" className="btn-1">View my CV</a>
                                <a href="#" className="btn-2">Hire Me</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AboutUs;