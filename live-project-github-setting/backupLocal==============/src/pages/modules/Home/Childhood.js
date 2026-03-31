import { useState } from "react";

import img1 from "../../../images/lifeStyle/childhood/1.jpg";
import img2 from "../../../images/lifeStyle/childhood/2.jpg";
import img3 from "../../../images/lifeStyle/childhood/3.jpg";
import img4 from "../../../images/lifeStyle/childhood/4.jpg";

function Childhood() {
  const [active, setActive] = useState(false);

  function readMore(e) {
    e.preventDefault();
    setActive(!active);
  }

  return (
    <>
      <section className="sectionT childhood" id="childhood">
        <div className="childhoodText">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="fw left">
                  <h2 className="hd1">Welcome to lorem</h2>
                  <p className="hd2">Lorem ipsum dolor sit amet ipsum!</p>
                </div>
              </div>{/* cols */}

              <div className="col-12 col-lg-6">
                <div className="fw right">
                  <p className="hd3">Loremipsum dolor</p>
                  <p className={`text ${active ? "active" : ""}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis enim veritatis repellendus aspernatur? Optio non deleniti error est! Neque amet pariatur facilis tempora fuga. Aliquid ab, autem ipsam, soluta similique voluptate veritatis nam quisquam quia nulla possimus recusandae culpa? Accusantium molestias voluptas a, ea cupiditate totam ratione dignissimos architecto id doloremque voluptatibus nulla odio distinctio facilis? Ratione sapiente laboriosam doloremque voluptates incidunt earum culpa odio porro quae inventore quidem temporibus, explicabo assumenda blanditiis, iusto itaque suscipit? Qui, est magni debitis unde ipsam incidunt ipsa error laborum corrupti dolorem reiciendis perferendis neque nemo exercitationem quos laboriosam maxime! Quod dignissimos delectus pariatur aliquam debitis neque aperiam esse omnis consequuntur consectetur dolores nobis modi, corporis cumque aliquid ad sed explicabo ipsam, excepturi obcaecati harum.</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione reprehenderit corrupti aliquid unde harum esse totam voluptatibus, numquam enim. Ab sequi repellendus numquam enim eligendi, ipsum corrupti! Distinctio soluta laudantium blanditiis quo, tempora est et odio commodi doloremque facilis magnam rerum officia ut culpa nihil itaque possimus maiores sunt incidunt!</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione reprehenderit corrupti aliquid unde harum esse totam voluptatibus, numquam enim. Ab sequi repellendus numquam enim eligendi, ipsum corrupti! Distinctio soluta laudantium blanditiis quo, tempora est et odio commodi doloremque facilis magnam rerum officia ut culpa nihil itaque possimus maiores sunt incidunt!</p>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione reprehenderit corrupti aliquid unde harum esse totam voluptatibus, numquam enim. Ab sequi repellendus numquam enim eligendi, ipsum corrupti! Distinctio soluta laudantium blanditiis quo, tempora est et odio commodi doloremque facilis magnam rerum officia ut culpa nihil itaque possimus maiores sunt incidunt!</p>
                  <p className="readMore">
                    <a onClick={readMore}>{active ? "Read Less" : "Read More"}</a>
                  </p>
                </div>
              </div>{/* cols */}
            </div>{/* row */}
          </div>{/* container */}
        </div>{/* childhood */}
        <div className="childhoodImg">
          <div className="container">
            <img src={img1} />
            <img src={img2} />
            <img src={img3} />
            <img src={img4} />
          </div>{/* container */}
        </div>{/* fw */}
      </section>
    </>
  );
}

export default Childhood;