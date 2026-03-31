import {Helmet} from "react-helmet";
import Banner from "./modules/common/Banner";
import LeftSidebar from "./modules/common/LeftSidebar";
import RightSidebar from "./modules/common/RightSidebar";

function InnerPage() {
  return (
    <>
      <Helmet>
        <title>Inner Page</title>
      </Helmet>
      <Banner
        pageName="Inner Page" 
        pageText="Lorem ipsum dolor sit ameet."
      />
      <section className="section innerPage">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <hgroup>
                <h2>Lorem</h2>
                <p>Lorem ipsum dolor sit ameet</p>
              </hgroup>
            </div>
            <LeftSidebar />
            <div className="col-lg-6 order">MainArea of Page</div>
            <RightSidebar />
          </div>
        </div>
      </section>
    </>
  );
}

export default InnerPage;