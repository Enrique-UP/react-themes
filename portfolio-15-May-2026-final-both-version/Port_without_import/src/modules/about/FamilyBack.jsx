import { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Captions from "yet-another-react-lightbox/plugins/captions";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/captions.css";





export default function FamilyBack() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = [
    { src: "images/lifeStyle/others/1935.jpg" },
    { src: "images/lifeStyle/others/grandFather2.jpg" },
    { src: "images/gamaPahalwan.jpg" },
    { src: "images/lifeStyle/others/grandFather1.jpg" },

    { src: "images/lifeStyle/aunty/2aug2021.jpg" },
    { src: "images/lifeStyle/aunty/1996.jpg" },
    { src: "images/lifeStyle/aunty/1997-1.jpg" },
    { src: "images/lifeStyle/aunty/1997-3.jpg" },
    { src: "images/lifeStyle/aunty/1997-4.jpg" },
    { src: "images/lifeStyle/aunty/mar2016.jpg" },

    { src: "images/lifeStyle/others/2010.jpg" },
    { src: "images/lifeStyle/30nov2019/1.jpg" },
    { src: "images/lifeStyle/20sep2025/2.jpg" },
    { src: "images/lifeStyle/20sep2025/1.jpg" },
    { src: "images/lifeStyle/20sep2025/4.jpg" },
    { src: "images/lifeStyle/20sep2025/6.jpg" },

    { src: "images/lifeStyle/19nov2019/1.jpg" },
    { src: "images/lifeStyle/others/1may2022.jpg" },
    { src: "images/lifeStyle/others/11jul2021.jpg" },
    { src: "images/lifeStyle/others/23feb2020.jpg" },
    { src: "images/lifeStyle/feb2017/3.jpg" },
    { src: "images/lifeStyle/feb2017/4.jpg" },

    { src: "images/lifeStyle/others/1958.jpg" },
    { src: "images/lifeStyle/shillong/1.jpg" },
    { src: "images/lifeStyle/shillong/2.jpg" },
    { src: "images/lifeStyle/shillong/3.jpg" },
    { src: "images/lifeStyle/shillong/4.jpg" },
    { src: "images/lifeStyle/shillong/5.jpg" },
  ];

  const handleImageClick = (e) => {
    const i = Number(e.currentTarget.dataset.index);
    setIndex(i);
    setOpen(true);
  };

  return (
    <>
      <section className="section family" id="family">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <hgroup>
                <h2 data-aos="fade-down">My <span>Family</span> Background</h2>
                <p data-aos="fade-up">Honoring the past while building the future</p>
              </hgroup>
            </div>{/* cols */}

            <div className="col-12">
              <div className="imgText">
                <figure>
                  <figcaption data-aos="fade-right">
                    <img data-src={slides[0].src} data-index="0" onClick={handleImageClick} />
                    <span>My Great-Grandfather’s name in a 1935 Book Published from Amritsar, Punjab</span>
                  </figcaption>
                  <div className="content" data-aos="fade-left">
                    <p className="hd">Ancestral Legacy and Zamindari Heritage</p>
                    <p>I come from an old, reputed, and sports-oriented family based in the Budaun district of Uttar Pradesh, India.</p>
                    <p>My great-great-grandfather, Late Mr. Naimuddin, and my great-grandfather, Late Mr. Shamsuddin, were both prominent zamindars.</p>
                    <p>Late Mr. Naimuddin established the first brick kiln (bhatta) in the Budaun district in 1810 during the British period, on the request of the British authorities. It was the first brick kiln in the district at that time and produced traditional kakaiya bricks.</p>
                    <p>My great-grandfather, Late Mr. Shamsuddin, later expanded this legacy by owning around 19 brick kilns. His legacy is also recorded in a 1935 publication published in Amritsar, Punjab. They were widely known for resolving community matters and promoting unity among people.</p>
                  </div>{/* content */}
                </figure>

                <figure>
                  <figcaption data-aos="fade-right">
                    <img data-src={slides[1].src} data-index="1" onClick={handleImageClick} />
                    <span>My Grandfather (Late Mr. Qamaruddin)</span>
                  </figcaption>
                  <div className="content" data-aos="fade-left">
                    <p className="hd">Leadership, Business, and Sports Legacy of My Grandfather</p>
                    <p>My grandfather, Late Mr. Qamaruddin, served in the Indian Army before resigning to manage and expand his family business.</p>
                    <p>He carried forward this legacy with significant landholdings and business ventures, including brick kilns. He also served as the State President of the Brick Kiln Association. He served as Vice Chairman in Ujhani and became a well-recognized and respected personality in the region.</p>
                    <p>He was widely known for resolving community matters, including settling disputes and helping people resolve conflicts fairly and peacefully.</p>
                    <p>Alongside his professional achievements, he was a national-level cricketer who represented Uttar Pradesh as a wicketkeeper and batsman. He was also skilled in hockey and chess, reflecting his versatile personality.</p>
                    <p>He was known as an intelligent and capable individual who strongly believed in social harmony, promoting unity among communities and respect for all religions. He was also regarded as one of the most capable and respected individuals in the Budaun district.</p>
                  </div>{/* content */}
                </figure>

                <figure>
                  <figcaption data-aos="fade-right">
                    <img data-src={slides[2].src} data-index="2" onClick={handleImageClick} />
                    <span>The Great Gama Pahalwan</span>
                  </figcaption>
                  <div className="content" data-aos="fade-left">
                    <p className="hd">Our Connection with Wrestling Legend – The Great Gama</p>
                    <p>Our family is related to the world-famous wrestler The Great Gama (Ghulam Mohammad Baksh Bhatt), who was known as "Rustam-e-Hind" and was my grandfather's cousin. In our family relations, he is regarded as my grandfather. He remained undefeated throughout his wrestling career and is remembered as one of the greatest wrestlers in history.</p>
                    <p>He earned worldwide respect for his extraordinary strength, discipline, and dedication to wrestling. The Great Gama defeated many renowned international wrestlers and achieved global recognition for his unmatched wrestling skills and physical power. One of his greatest achievements was winning the prestigious John Bull Belt in England, which brought him international fame and honor.</p>
                    <p>His remarkable legacy continues to inspire generations of wrestlers and sports enthusiasts around the world, and he is still remembered with great pride as a symbol of courage, excellence, and greatness in Indian wrestling history.</p>
                  </div>{/* content */}
                </figure>

                <figure>
                  <figcaption data-aos="fade-right">
                    <img data-src={slides[3].src} data-index="3" onClick={handleImageClick} />
                    <span>My grandfather is standing as the wicket-keeper</span>
                  </figcaption>
                  <div className="content" data-aos="fade-left">
                    <p className="hd">A Family Deeply Rooted in Sports</p>
                    <p>Continuing this legacy, my father, Mr. Mohammad Arif, has been an excellent volleyball player, while my uncle was a national-level volleyball player and captain of the Uttar Pradesh team.</p>
                  </div>{/* content */}
                </figure>

                <figure className="img">
                <div className="content" data-aos="fade-left">
                  <p className="hd">Musical Talent and Achievements in the Family</p>
                  <p>My aunt, Nusrat Waseem, is a Bollywood playback singer who has performed in films, albums, TV shows, live concerts, and international events. She appeared on Doordarshan’s Meri Awaaz Suno and was a runner-up in the 2016 Sony SAB Antakshari competition. She has also worked with singer <b>Altaf Raja</b>, contributed to the <b>film Tarazu</b>, and continues her active singing career. She has been honored with the <b>Adharshila Best Female Singer Award (presented by the President of India, Mr. Shankar Dayal Sharma)</b> and the Best Singer Award by Venus Records and Tapes Company. She currently runs a Mumbai-based music studio called “Musica”, where she trains aspiring singers.</p>
                  <p>Below are the links to Recorded Songs & Qawwalis:-</p>
                  <ul className="lists songs">
                    <li><a href="https://www.youtube.com/results?search_query=Khwaja+Ki+Hai+Ye+Angnayee+Altaf+Raja" target="_blank">Khwaja Ki Hai Ye Angnayee (With Altaf Raza)</a></li>
                    <li><a href="https://www.youtube.com/results?search_query=Jogan+Aayee+Altaf+Raja" target="_blank">Jogan Aayee (With Altaf Raza)</a></li>
                    <li><a href="https://www.youtube.com/results?search_query=Chali+Chali+Woh+Sharaab+Altaf+Raja" target="_blank">Chali Chali Woh Sharaab (With Altaf Raza)</a></li>
                    <li><a href="https://www.youtube.com/results?search_query=Ya+Habibe+Khuda+Altaf+Raja" target="_blank">Ya Habibe Khuda (With Altaf Raza)</a></li>
                    <li><a href="https://www.youtube.com/results?search_query=Shahe+Sanjar+Ke+Dar+Ki+Altaf+Raja" target="_blank">Shahe Sanjar Ke Dar Ki (With Altaf Raza)</a></li>
                    <li><a href="https://www.youtube.com/results?search_query=Nazar+Na+Hate+Mere+Yaar+Se+Tarazu" target="_blank">Nazar Na Hate Mere Yaar Se (Tarazu movie)</a></li>
                  </ul>
                </div>{/* content */}
                <div className="images">
                    <figcaption>
                      <img data-src={slides[4].src} data-index="4" onClick={handleImageClick} data-aos="fade-left" />
                      <img data-src={slides[5].src} data-index="5" onClick={handleImageClick} data-aos="fade-right" />
                      <img data-src={slides[6].src} data-index="6" onClick={handleImageClick} data-aos="fade-left" />
                      <img data-src={slides[7].src} data-index="7" onClick={handleImageClick} data-aos="fade-right" />
                      <img data-src={slides[8].src} data-index="8" onClick={handleImageClick} data-aos="fade-left" />
                      <img data-src={slides[9].src} data-index="9" onClick={handleImageClick} data-aos="fade-right" />
                    </figcaption>
                    <span>My aunt Nusrat Waseem (Playback Singer)</span>
                </div>{/* images */}
                </figure>

                <figure className="img">
                <div className="content" data-aos="fade-left">
                  <p className="hd">My Cricket Journey and Passion for the Game</p>
                  <p>I am known as a stylish cricketer with natural sporting ability since childhood and active involvement in cricket as an all-rounder. I am recognized for my strong batting technique, preference for long innings, solid straight-bat play, consistent timing, good footwork, body control, classic cricketing shots, and disciplined batting style. As a pace bowler, I once broke a batsman’s helmet with a sharp bouncer and also broke the stumps many times with fast deliveries. In fielding, I was known as a sharp and agile fielder.</p>
                  <p>I participated in state-level open tournaments across multiple states in India, competing with and against players from Uttar Pradesh, Delhi, Haryana, Uttarakhand, Madhya Pradesh, Bihar, Himachal Pradesh, Maharashtra, West Bengal, and Tamil Nadu. I also shared the field with players associated with state-level tournaments, the Ranji Trophy, and the IPL. I am deeply passionate about cricket and played at school, club, and corporate levels.</p>
                </div>{/* content */}
                <div className="images">
                    <figcaption>
                      <img data-src={slides[10].src} data-index="10" onClick={handleImageClick} data-aos="fade-left" />
                      <img data-src={slides[11].src} data-index="11" onClick={handleImageClick} data-aos="fade-right" />
                      <img data-src={slides[12].src} data-index="12" onClick={handleImageClick} data-aos="fade-left" />
                      <img data-src={slides[13].src} data-index="13" onClick={handleImageClick} data-aos="fade-right" />
                      <img data-src={slides[14].src} data-index="14" onClick={handleImageClick} data-aos="fade-left" />
                      <img data-src={slides[15].src} data-index="15" onClick={handleImageClick} data-aos="fade-right" />
                    </figcaption>
                    <span>My Cricketing Memories</span>
                  </div>{/* images */}
                </figure>

                <figure className="img">
                <div className="content" data-aos="fade-left">
                  <p className="hd">Interest in Politics and Helping People</p>
                  <p>I have a strong interest in politics and actively participate in election activities, including canvassing, campaigning, and connecting with people. I have a keen interest in understanding people's challenges and contributing to meaningful solutions. People often approach me for guidance, and I support them by offering practical advice and helping them through my network and connections. I believe in helping people selflessly and without any bias, treating everyone with fairness and equal respect. I also enjoy exploring new experiences and embracing life with an adventurous spirit.</p>
                </div>{/* content */}
                <div className="images">
                    <figcaption>
                      <img data-src={slides[16].src} data-index="16" onClick={handleImageClick} data-aos="fade-left" />
                      <img data-src={slides[17].src} data-index="17" onClick={handleImageClick} data-aos="fade-right" />
                      <img data-src={slides[18].src} data-index="18" onClick={handleImageClick} data-aos="fade-left" />
                      <img data-src={slides[19].src} data-index="19" onClick={handleImageClick} data-aos="fade-right" />
                      <img data-src={slides[20].src} data-index="20" onClick={handleImageClick} data-aos="fade-left" />
                      <img data-src={slides[21].src} data-index="21" onClick={handleImageClick} data-aos="fade-right" />
                    </figcaption>
                    <span>Memories with MPs, MLAs, MLCs & Ministers</span>
                  </div>{/* images */}
                </figure>

                <figure className="img">
                  <div className="content" data-aos="fade-left">
                    <p className="hd">Carrying Forward the Family Legacy</p>
                    <p>Although I may never equal the remarkable achievements and legacy of my elders, I sincerely strive to follow their path, uphold their values, and continue the traditions they built with honor and respect.</p>
                    <p>Today, I proudly carry forward this legacy through my journey as a software engineer while continuing to support and help people in need.</p>
                  </div>{/* content */}
                  <div className="images">
                    <figcaption>
                      <img data-src={slides[22].src} data-index="22" onClick={handleImageClick} data-aos="fade-left" />
                      <img data-src={slides[23].src} data-index="23" onClick={handleImageClick} data-aos="fade-right" />
                      <img data-src={slides[24].src} data-index="24" onClick={handleImageClick} data-aos="fade-left" />
                      <img data-src={slides[25].src} data-index="25" onClick={handleImageClick} data-aos="fade-right" />
                      <img data-src={slides[26].src} data-index="26" onClick={handleImageClick} data-aos="fade-left" />
                      <img data-src={slides[27].src} data-index="27" onClick={handleImageClick} data-aos="fade-right" />
                    </figcaption>
                    <span>Carrying Forward the Legacy</span>
                </div>{/* images */}
              </figure>              
            </div>{/* imgText */}
          </div>{/* cols */}
        </div>{/* row */}
      </div>{/* container */}
    </section>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        plugins={[Zoom, Thumbnails, Fullscreen, Slideshow, Captions, Counter]}
      />
    </>
  );
}