import { Helmet } from "react-helmet-async";
import Banner from "./common/Banner";

export default function ThankYou() {
  return (
    <>
      <Helmet>
        <title>Thank You</title>
        <meta name="description" content="This is Reviews page" />
      </Helmet>
      <Banner
        pageName="Thank You!" 
        pageText="Lorem ipsum dolor sit amet consectetur adipisicing elit dolores distinctio tempora illo nostrum dignissimos dolore voluptate harum recusandae tempore minus"
        otherImg="images/banners/home.jpg"
        showBreadcrumbs={false}
      />
    </>
  );
}
