import { Helmet } from "react-helmet-async";
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
import DesignServices from "./DesignServices";
import Ads3 from "../ads/Ads3";
import Wcu from "./Wcu";
import Ads4 from "../ads/Ads4";
import ReviewsHome from "../review/ReviewsHome";
import Slider from "./Slider";
import TopProjects from "./TopProjects";
import BrandingProjects from "./BrandingProjects";
import FamilyBack from "../about/FamilyBack";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="This is home page" />
      </Helmet>
      <Slider />
      <Welcome />
      <AboutHome />
      <LifestyleHome /> 
      <FamilyBack />
      <TopProjects />
      <Experience />
      <Education />
      <DesignServices />
      <BrandingProjects />
      <Ads3 />
      <Wcu /> 
      <Ads1 />
      <Team />
      <Ads2 />
      <ReviewsHome />
      <Childhood />
      <Ads4 />
    </>
  );
}