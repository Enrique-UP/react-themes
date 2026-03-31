import { Link } from 'react-router-dom';
import CounterNum from './CounterNum';
import SkillBar from './SkillBar';
import { Global } from '../common/Global';
import img1 from "../../../images/lifeStyle/forest/6.jpg";
import img2 from "../../../images/lifeStyle/forest/3.jpg";
import img3 from "../../../images/lifeStyle/forest/12.jpg";
import TextSlider from './TextSlider';

const ListContent = () => {
  return (
    <>
      <li>01 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>02 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>03 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>04 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>05 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>06 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>07 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>08 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>09 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>10 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>11 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>12 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>13 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>14 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>15 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>16 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>17 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>18 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>19 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>20 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>21 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>22 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>23 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>24 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>25 Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
    </>
  );
};

function AboutUsHome() {
  return (
    <>
      <section className="section aboutMe">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <hgroup>
                <h2>Lorem <span>Lorem</span></h2>
                <p>Lorem</p>
              </hgroup>
            </div>{/* cols */}
            <div className="col col-md-6">
              <div className="row">
                <div className="col-sm-12">
                  <figure className="heightImg1">
                    <img src={img1} />
                  </figure>
                </div>{/* cols */}
                <div className="col-sm-12">
                  <div className="row">
                    <div className="col-6">
                      <figure className="heightImg2">
                        <img src={img2} />
                      </figure>
                    </div>{/* cols */}
                    <div className="col-6">
                      <figure className="heightImg2">
                        <img src={img3} />
                      </figure>
                    </div>{/* cols */}
                  </div>{/* row */}
                </div>{/* cols */}
              </div>{/* row */}
            </div>{/* cols */}
            <div className="col col-md-6">
              <p className="head">Hello!</p>
              <p className="subHead">Lorem, ipsum dolor.</p>
              <p className="post">
                <span className="Typewriter">
                  <TextSlider />
                </span>
              </p>
              <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolor pariatur repellat consequuntur. Neque officiis fuga quasi exercitationem et, iure ipsa sit natus debitis itaque odio consectetur nesciunt atque placeat totam hic ipsam minus consequuntur nemo quisquam alias eos laborum. Consectetur odio aperiam accusantium cum dolorum culpa minima ullam sint.</p>
              <p className="head1">Lorem</p>
              <ul className="unlist list1">
                 <ListContent />
              </ul>
            </div>{/* cols */}
            <div className="col-12">
              <ul className="unlist list2">
                 <ListContent />
              </ul>
              <div className="fw progress-bars">
                <p className="head1">Skl</p>
                <div className="row">
                  <div className="col-6">
                    <SkillBar title="HTML" value={80} bgClass="back-1" />
                  </div>{/* cols */}
                  <div className="col-6">
                    <SkillBar title="HTML" value={90} bgClass="back-2" />
                  </div>{/* cols */}
                  <div className="col-6">
                    <SkillBar title="HTML" value={60} bgClass="back-3" />
                  </div>{/* cols */}
                  <div className="col-6">
                    <SkillBar title="HTML" value={70} bgClass="back-4" />
                  </div>{/* cols */}
                  <div className="col-6">
                    <SkillBar title="HTML" value={80} bgClass="back-5" />
                  </div>{/* cols */}
                  <div className="col-6">
                    <SkillBar title="HTML" value={60} bgClass="back-6" />
                  </div>{/* cols */}
                  <div className="col-6">
                    <SkillBar title="HTML" value={50} bgClass="back-7" />
                  </div>{/* cols */}
                  <div className="col-6">
                    <SkillBar title="HTML" value={50} bgClass="back-8" />
                  </div>{/* cols */}
                  <div className="col-6">
                    <SkillBar title="HTML" value={50} bgClass="back-9" />
                  </div>{/* cols */}
                  <div className="col-6">
                    <SkillBar title="HTML" value={50} bgClass="back-10" />
                  </div>{/* cols */}
                </div>{/* row */}
              </div>{/* fw */}
              <div className="fw progress-bars">
                <p className="head1">Lang</p>
                <div className="row">
                  <div className="col-4">
                    <SkillBar title="HTML" value={50} bgClass="back-1" />
                  </div>{/* cols */}
                  <div className="col-4">
                    <SkillBar title="HTML" value={50} bgClass="back-2" />
                  </div>{/* cols */}
                  <div className="col-4">
                    <SkillBar title="HTML" value={60} bgClass="back-3" />
                  </div>{/* cols */}
                </div>{/* row */}
              </div>{/* fw */}
              <div className="fw">
                <p className="head1">Lorem</p>
                <p>Lorem ipsum dolor, sit <b>amet consectetur adipisicing elit</b>. Nulla esse sit perspiciatis numquam impedit fuga! In quae, blanditiis voluptatibus molestiae facilis autem nihil consectetur iusto, quaerat quibusdam tenetur perspiciatis? Reiciendis provident corporis rerum atque doloremque officia. Dolore, veniam, quam eum esse nostrum iste voluptas numquam neque reiciendis ipsam et necessitatibus mollitia fuga ratione praesentium dolorum! Fugit ipsam, sapiente quidem iure a adipisci, molestiae omnis architecto iste rem quia, delectus corporis alias expedita exercitationem quaerat itaque porro eaque? Dignissimos earum, deserunt impedit inventore nemo a amet aut saepe natus quod perspiciatis adipisci, cumque beatae porro nihil? Assumenda libero architecto a expedita culpa ad ratione. Voluptatibus tempora perspiciatis soluta dolor, reprehenderit deserunt vel repellat facilis harum fugiat quaerat voluptas veritatis ea possimus sapiente praesentium. Facilis minus a quidem distinctio earum modi ipsam esse asperiores aliquam impedit reiciendis fugit doloremque error, blanditiis cum exercitationem totam ut ducimus quibusdam eum natus non ipsum. Rem eum expedita ea, porro facilis unde fuga consequuntur. Amet minima aut placeat reprehenderit laboriosam sed molestiae perferendis ea saepe quibusdam. Eaque praesentium perferendis velit? Provident ullam excepturi sunt dignissimos saepe porro, unde quae nisi ipsum? Illum, nostrum! Voluptates, natus? Beatae iusto ipsum eius. Hic ab necessitatibus consequuntur voluptatum similique atque!</p>
              </div>{/* fw */}
              <div className="fw">
                <p className="head1">Lorem</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla esse sit perspiciatis numquam impedit fuga! In quae, blanditiis voluptatibus molestiae facilis autem nihil consectetur iusto, quaerat quibusdam tenetur perspiciatis? Reiciendis provident corporis rerum atque doloremque officia. Dolore, veniam, quam eum esse nostrum iste voluptas numquam neque reiciendis ipsam et necessitatibus mollitia fuga ratione praesentium dolorum! Fugit ipsam, sapiente quidem iure a adipisci, molestiae omnis architecto iste rem quia, delectus corporis alias expedita exercitationem quaerat itaque porro eaque?</p>
                <p>Dignissimos earum, deserunt impedit inventore nemo a amet aut saepe natus quod perspiciatis adipisci, cumque beatae porro nihil? Assumenda libero architecto a expedita culpa ad ratione. Voluptatibus tempora perspiciatis soluta dolor, reprehenderit deserunt vel repellat facilis harum fugiat quaerat voluptas veritatis ea possimus sapiente praesentium. Facilis minus a quidem distinctio earum modi ipsam esse asperiores aliquam impedit reiciendis fugit doloremque error, blanditiis cum exercitationem totam ut ducimus quibusdam eum natus non ipsum. Rem eum expedita ea, porro facilis unde fuga consequuntur. Amet minima aut placeat reprehenderit laboriosam sed molestiae perferendis ea saepe quibusdam. Eaque praesentium perferendis velit? Provident ullam excepturi sunt dignissimos saepe porro, unde quae nisi ipsum? Illum, nostrum! Voluptates, natus? Beatae iusto ipsum eius. Hic ab necessitatibus consequuntur voluptatum similique atque!</p>
              </div>{/* fw */}
              <div className="fw family">
                <p className="head1">Lorem</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla esse sit perspiciatis numquam impedit fuga! In quae, blanditiis voluptatibus molestiae facilis autem nihil consectetur iusto, quaerat quibusdam tenetur perspiciatis? Reiciendis provident corporis rerum atque doloremque officia. Dolore, veniam, quam eum esse nostrum iste voluptas numquam neque reiciendis ipsam et necessitatibus mollitia fuga ratione praesentium dolorum! Fugit ipsam, sapiente quidem iure a adipisci, molestiae omnis architecto iste rem quia, delectus corporis alias expedita exercitationem quaerat itaque porro eaque? Dignissimos earum, deserunt impedit inventore nemo a amet aut saepe natus quod perspiciatis adipisci, cumque beatae porro nihil? Assumenda libero architecto a expedita culpa ad ratione. Voluptatibus tempora perspiciatis soluta dolor, reprehenderit deserunt vel repellat facilis harum fugiat quaerat voluptas veritatis ea possimus sapiente praesentium. Facilis minus a quidem distinctio earum modi ipsam esse asperiores aliquam impedit reiciendis fugit doloremque error, blanditiis cum exercitationem totam ut ducimus quibusdam eum natus non ipsum. Rem eum expedita ea, porro facilis unde fuga consequuntur. Amet minima aut placeat reprehenderit laboriosam sed molestiae perferendis ea saepe quibusdam. Eaque praesentium perferendis velit? Provident ullam excepturi sunt dignissimos saepe porro, unde quae nisi ipsum? Illum, nostrum! Voluptates, natus? Beatae iusto ipsum eius. Hic ab necessitatibus consequuntur voluptatum similique atque!</p>
              </div>{/* fw */}
              <div className="fw techSkills">
                <div className="row mu-single-counter2">
                  <div className="col-6 col-md-3">
                    <div className="cnt count-box">
                      <i className="icon">&#xa044;</i>
                      <b>LoremIpsum</b>
                      <CounterNum className="count-text" end={10000} />
                    </div>{/* cnt */}
                  </div>{/* cols */}
                  <div className="col-6 col-md-3">
                    <div className="cnt count-box">
                      <i className="icon">&#xa045;</i>
                      <b>LoremIpsum</b>
                      <CounterNum className="count-text" end={5000} prefix="$ " suffix="+" />
                    </div>{/* cnt */}
                  </div>{/* cols */}
                  <div className="col-6 col-md-3">
                    <div className="cnt count-box">
                      <i className="icon">&#xa071;</i>
                      <b>LoremIpsum</b>
                      <CounterNum className="count-text" end={15000} prefix="$ " suffix="+" />
                    </div>{/* cnt */}
                  </div>{/* cols */}
                  <div className="col-6 col-md-3">
                    <div className="cnt count-box">
                      <i className="icon">&#xa053;</i>
                      <b>LoremIpsum</b>
                      <CounterNum className="count-text" end={100} prefix="$ " suffix="+" />
                    </div>{/* cnt */}
                  </div>{/* cols */}
                </div>{/* row */}
              </div>{/* fw */}
            </div>{/* cols */}

            <div className="col-12">
              <div className="fw box1">
                <p className="head2">Lorem</p>
                <p className="texts it">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur officiis eaque quod earum et ex quasi doloribus impedit nemo, voluptatem deserunt cumque at asperiores repellat dolore vitae aliquam quae incidunt voluptas quas. Consequuntur magnam aut necessitatibus facilis quia deserunt, voluptas magni est blanditiis quos minima laborum quod? Quia atque sint explicabo animi temporibus! Ut necessitatibus ratione eius, nam reiciendis illo?</p>
              </div>{/* fw */}
            </div>{/* cols */}
            <div className="col-12">
              <div className="btns center">
                <a href={Global.numTel} target="_blank" className="btn-1">Hire Us</a>
                <Link to="/aboutus" className="btn-2">About Us</Link>
                <Link to="/contactus" className="btn-2">Contact Us</Link>
              </div>
            </div>{/* cols */}
          </div>{/* row */}
        </div>{/* container */}
      </section>
    </>
  );
}

export default AboutUsHome;
