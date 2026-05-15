import { useState } from "react";

import img1 from "../../assets/images/childhood/1.jpg";
import img2 from "../../assets/images/childhood/2.jpg";
import img3 from "../../assets/images/childhood/3.jpg";
import img4 from "../../assets/images/childhood/4.jpg";

export default function Childhood() {
  const [active, setActive] = useState(false);

  function readMore(e) {
    e.preventDefault();
    setActive(!active);
  }

  return (
    <>
      <section className="section childhood" id="ch">
        <div className="childhoodText">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="heading">
                  <h2 className="hd1" data-aos="fade-down">Childhood Days</h2>
                  <p className="hd2" data-aos="fade-up">A life full of joy and fun moments</p>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-left">
                <div className={`content ${active ? "active" : ""}`}>
                  <p>I was born into a loving family and grew up in a well-cared environment. I was born after my three sisters, so everyone loved me very much as a child. My grandmother especially loved me deeply, as I was very dear to her. When I was born, my family celebrated with great joy, and there was a three-day celebration.</p>
                  <p>As I grew up, my grandfather often took me to his brick kiln. There were many workers who used to play cricket there and called me “Babu ji.” My elder sister and I used to enjoy a lot when the brick-making season started at the kiln. We would light the first fire as a ritual of good luck. We enjoyed our time there and used to eat sugarcane, fried potatoes, and sweet potatoes, even roasted ones. We also used to bathe there in the tube well water, using its trough, and had a lot of fun. Truly, those were wonderful days.</p>
                  <p>During that time, I often saw peacocks, deer, and blue bulls in our fields. Once, I even sowed black gram with the workers in the kiln fields, and another time I helped plough the field with the tractor driver.</p>
                  <p>Apart from the kiln, I also enjoyed my time at home. My house was very big and had seven gates. I used to play cricket with my elder sister in the courtyard. There was another mud house behind our home where we used to play with toys and build small bridges. I was also good at repairing broken toys like scooters and cars. I loved flying kites from our wide roof.</p>
                  <p>During vacations, my cousins used to visit our house, and we had a lot of fun together. We enjoyed playing games like hide and seek, bursting crackers, and bathing in the fields using the tube well. We were quite naughty children.</p>
                  <p>My grandfather was very strict about us going outside, so he used to keep us in one place while he slept. But we would secretly run away to the mango garden and the pond, where we had a lot of fun.</p>
                  <p>Now everything has changed, and those beautiful childhood days are gone. But whenever I think about them, I feel amazed at how quickly we all grew up.</p>
                  <p><span onClick={readMore}>{active ? "Read Less" : "Read More"}</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="childhoodImg">
        <div className="container">
          <img src={img1} data-aos="fade-left" />
          <img src={img2} data-aos="fade-right" />
          <img src={img3} data-aos="fade-left" />
          <img src={img4} data-aos="fade-right" />
        </div>
      </section>
    </>
  );
}
