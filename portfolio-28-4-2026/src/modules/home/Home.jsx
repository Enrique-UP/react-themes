import { Helmet } from "react-helmet-async";
import HomeBanner from "../../assets/images/banners/home.jpg";
import Banner from "../common/Banner";
import Welcome from "./Welcome";
import AboutHome from "../about/AboutHome";
import LifestyleHome from "../lifeStyle/LifeStyleHome";
import Childhood from "./Childhood";
import Ads1 from "../ads/Ads1";
import Ads2 from "../ads/Ads2";
import Team from "./Team";
import Education from "./Education";
import Experience from "./Experience";
import TechnicalSkills from "./TechnicalSkills";
import Ads3 from "../ads/Ads3";
import Wcu from "./Wcu";
import Ads4 from "../ads/Ads4";
import ReviewsHome from "../review/ReviewsHome";
import Slider from "./Slider";
import TopProjects from "./TopProjects";
import BrandingProjects from "./BrandingProjects";



export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="This is home page" />
      </Helmet>
      {/* <Banner
        pageName="Welcome to our website" 
        pageText="Lorem ipsum dolor sit amet consectetur adipisicing elit dolores distinctio tempora illo nostrum dignissimos dolore voluptate harum recusandae tempore minus"
        isHome={true}
        otherImg={HomeBanner}
        showBreadcrumbs={false}
      /> */}
      <Slider />
      <Welcome />
      <AboutHome />
      <TopProjects />
      <Experience />
      <Education />
      <TechnicalSkills />
      <Ads4 />
      <LifestyleHome />
      <Childhood />
      <Team />
      <Ads2 />
      <Wcu /> 
      <BrandingProjects />
      <Ads1 />
      <ReviewsHome />
      <Ads3 />
    </>
  );
}