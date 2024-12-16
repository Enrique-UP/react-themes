import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const TestimonialSlider = () => {
  return (
    <>
        <section className="sectionTB testimonials">
            <div className="container">
                <div className="mainHead">
                    <p className="subHead" data-aos="fade-left">Testimonials</p>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-6">
                            <h1 className="head" data-aos="fade-right">What client's say?</h1>
                        </div>{/* col */}
                        <div className="col-xs-12 col-sm-12 col-6">
                            <p className="detailsHead" data-aos="fade-up">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti eum inventore adipisci, quis magnam provident voluptate doloremque.</p>
                        </div>{/* col */}
                    </div>{/* row */}
                </div>{/* mainHead */}
                {/*
                    https://swiperjs.com/react
                */}
                <Swiper modules={[Navigation, Autoplay]} autoplay={true} spaceBetween={30} slidesPerView={3} navigation breakpoints={
                    {
                        0: {slidesPerView: 1},
                        576: {slidesPerView: 2},
                        992: {slidesPerView: 3}
                    }
                }>
                    <SwiperSlide className="testiArea">
                        <p className="text">Since practicing chanting yoga , I feel much calmer. I sail through my management meetings at work now, before I couldn't stand them. My day goes much smoother. 20-30minutes in the morning helps me to completely relax and calm myself for the day.</p>
                        <p className="nameDp">
                            <i className="icon">&#xf061;</i>
                            <span>
                                Christopher
                                <i>Consultant geriatric medicine, London</i>
                            </span>
                        </p>
                    </SwiperSlide>
                    <SwiperSlide className="testiArea">
                        <p className="text">It changed my life. I was anxious before and on medications for anxiety and antidepressants, now I feel calmer and happier. I have high levels of energy throughout the day.</p>
                        <p className="nameDp">
                            <i className="icon">&#xf061;</i>
                            <span>
                                Lynda
                                <i>Volunteer MIND, UK</i>
                            </span>
                        </p>
                    </SwiperSlide>
                    <SwiperSlide className="testiArea">
                        <p className="text">I felt less angry and anxious in just 3 weeks.I feel kinder and my blood pressure has reduced from 156/94 to 117/78. My alcohol consumption reduced and I was able to stop drinking in just 6 weeks. I feel introspective after 20 minutes of practice and detached from outside world and stress. I also have high levels of energy and learnt to get up early. I definitely recommend this to others as a life changer.</p>
                        <p className="nameDp">
                            <i className="icon">&#xf061;</i>
                            <span>
                                David
                                <i>Consultant Cardiology , London</i>
                            </span>
                        </p>
                    </SwiperSlide>
                    <SwiperSlide className="testiArea">
                        <p className="text">Since I have been on the program I feel my life is much balanced. I have more tolerance and feel much stronger in coping with difficult situations and everyday stress. Its definitely the best program for wellness.</p>
                        <p className="nameDp">
                            <i className="icon">&#xf061;</i>
                            <span>
                                Caroline Fuggle
                                <i>Teacher, UK</i>
                            </span>
                        </p>
                    </SwiperSlide>
                    <SwiperSlide className="testiArea">
                        <p className="text">I suffered with flying phobia for 17years. The practice of changing yoga completely rid me of the fear of flying.</p>
                        <p className="nameDp">
                            <i className="icon">&#xf061;</i>
                            <span>
                                Lucy
                                <i>Psychotherapist, UK</i>
                            </span>
                        </p>
                    </SwiperSlide>
                    <SwiperSlide className="testiArea">
                        <p className="text">The program helped me to regain my sleep pattern back. I used to suffer insomnia and felt tired and run down and very emotional. I was finding it difficult to deal with stress at workplace. The program helped me to come off the sleeping pills. l I have learned to relax and being free of medications feels great!</p>
                        <p className="nameDp">
                            <i className="icon">&#xf061;</i>
                            <span>
                                Natalie
                                <i>UK</i>
                            </span>
                        </p>
                    </SwiperSlide>
                </Swiper>
            </div>{/* container */}
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="btn center">
                            <Link to="/testimonials" data-aos="zoom-in"><span>View more <i className="icon">&#xf178;</i></span></Link>
                        </div>{/* btn */}
                    </div>{/* cols */}
                </div>{/* row */}
            </div>{/* container */}
        </section>
    </>
  );
}

export default TestimonialSlider;
