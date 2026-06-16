import { Link } from "react-router-dom";

export default function Ads2() {
  return (
    <>
      <section className="section ads2" id="ads2">
            <div className="container">
                <hgroup>
                    <h2 className="hd" data-aos="fade-down">I create modern web solutions</h2>
                    <p data-aos="fade-up">I develop responsive websites that deliver seamless usability, strong performance, and a clean, intuitive interface.</p>
                    <div className="btns center bsn" data-aos="fade-right">
                        <Link to="/contact">Contact Me</Link>
                    </div>
                </hgroup>
            </div>{/* container */}
        </section>
    </>
  );
}