import {Helmet} from "react-helmet";
import { useEffect } from "react";
import Banner from "./modules/common/Banner";
import HomeBanner from "../images/banners/home.jpg";
import LifeStyleHome from "./modules/LifeStyle/LifeStyleHome";
import Childhood from "./modules/Home/Childhood";
import AboutUsHome from "./modules/AboutUs/AboutUsHome";
import Ads1 from "./modules/Ads/Ads1";
import Ads2 from "./modules/Ads/Ads2";
import Welcome from "./modules/Home/Welcome";
import Education from "./modules/Home/Education";
import Know from "./modules/Home/Know";
import Team from "./modules/Home/Team";
import Wcu from "./modules/Home/Wcu";
import Experience from "./modules/Home/Experience";



function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner
        pageName="Welcome to our website" 
        pageText="Home page content here lorem ipsum dolor sit amet consectetur adipisicing elit et error dolores aliquid eos quas sint voluptatum atque odit eaque nulla tempora provident quod earum id ea eum vero soluta numquam."
        isHome={true}
        otherImg={HomeBanner}
        showBreadcrumbs={false}
      />
      <Welcome />
      <AboutUsHome />
      <LifeStyleHome />
      <Education />
      <Experience />
      <Know />
      {/* <Wcu /> */}
      <Team />
      <Ads2 />
      <Childhood />
      <Ads1 />
    </>
  );
}

export default Home;
