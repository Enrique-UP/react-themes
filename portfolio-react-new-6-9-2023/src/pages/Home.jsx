import React from "react";
import { useEffect } from "react";
import CustomScript from "./modules/CustomScript";
import Slider from "./modules/Slider";
import Welcome from "./modules/Welcome";
import About from "./modules/About";
import Reviews from "./modules/Reviews";
import Disclaimer from "./modules/Disclaimer";
import Experience from "./modules/Experience";
import Education from "./modules/Education";
import Skills from "./modules/Skills";
import Ads1 from "./modules/Ads1";
import LifeStyle from "./modules/LifeStyle";
import MainProjects from "./modules/MainProjects";
import Helpers from "./modules/Helpers";
import WhyChooseMe from "./modules/WhyChooseMe";
import Ads2 from "./modules/Ads2";
import BrandingProjects from "./modules/BrandingProjects";
import Ads3 from "./modules/Ads3";
import Childhood from "./modules/Childhood";

const Home = () => {
  useEffect(() => {
    let observer = new window.IntersectionObserver(function (entries, self) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImages(entry.target);
          self.unobserve(entry.target);
        }
      });
    });

    const imgs = document.querySelectorAll("[data-src], [data-style]");
    imgs.forEach((img) => {
      observer.observe(img);
    });
    return () => {
      imgs.forEach((img) => {
        observer.unobserve(img);
      });
    };
  }, []);

  const loadImages = (image) => {
    image.src = image.dataset.src;
    image.style = `background-image:url(${image.dataset.style})`;
    
    if(image.hasAttribute("data-src")){
        image.removeAttribute("data-src");
        image.removeAttribute("style");
    }
    if(image.hasAttribute("data-style")){
        image.removeAttribute("data-style");
    }
  };
    return(
        <>
          <CustomScript>
            <Slider />
            <Welcome />
            <Disclaimer />
            <About />
            <Ads3 />
            <LifeStyle />
            <Ads1 />
            <MainProjects />
            <BrandingProjects />
            <Experience />
            <Skills />
            <Education />
            <Helpers />
            <WhyChooseMe />
            <Ads2 />
            <Reviews />
            <Childhood />
          </CustomScript>
        </>
    );
}
export default Home;