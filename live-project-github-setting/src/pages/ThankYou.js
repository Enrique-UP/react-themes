import {Helmet} from "react-helmet";
import Banner from "./modules/common/Banner";
import HomeBanner from "../images/banners/home.jpg";

function ThankYou() {
  return (
    <>
      <Helmet>
        <title>Thank You</title>
      </Helmet>
      <Banner
        pageName="Thank You!" 
        pageText="Your message has been sent successfully."
        otherImg={HomeBanner}
        showBreadcrumbs={false}
      />
    </>
  );
}

export default ThankYou;