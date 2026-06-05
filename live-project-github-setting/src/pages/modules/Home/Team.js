import img1 from "../../../images/lifeStyle/forest/12.jpg";

function Team() {
  return (
    <>
      <section className="section team b1">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                    <hgroup>
                      <h3>Main <span>Heading</span></h3>
                      <p>Lorem ipsum dolor</p>
                    </hgroup>
                  </div>
                  <div className="col-6 col-lg-3">
                      <div className="teamArea">
                          <img src={img1} />
                          <i className="leftArrow"></i>
                          <i className="rightArrow"></i>
                          <i className="bottomArrow"></i>
                          <span className="name">
                              <b>Lorem</b>
                              <em>Ipsummdlr</em>
                          </span>
                          <span className="post">Lorem ipsum dolor</span>
                      </div>
                  </div>
                  <div className="col-6 col-lg-3">
                      <div className="teamArea">
                          <img src={img1} />
                          <i className="leftArrow"></i>
                          <i className="rightArrow"></i>
                          <i className="bottomArrow"></i>
                          <span className="name">
                              <b>Lorem</b>
                              <em>Ipsummdlr</em>
                          </span>
                          <span className="post">Lorem ipsum dolor</span>
                      </div>
                  </div>
                  <div className="col-6 col-lg-3">
                      <div className="teamArea">
                          <img src={img1} />
                          <i className="leftArrow"></i>
                          <i className="rightArrow"></i>
                          <i className="bottomArrow"></i>
                          <span className="name">
                              <b>Lorem</b>
                              <em>Ipsummdlr</em>
                          </span>
                          <span className="post">Lorem ipsum dolor</span>
                      </div>
                  </div>
                  <div className="col-6 col-lg-3">
                      <div className="teamArea">
                          <img src={img1} />
                          <i className="leftArrow"></i>
                          <i className="rightArrow"></i>
                          <i className="bottomArrow"></i>
                          <span className="name">
                              <b>Lorem</b>
                              <em>Ipsummdlr</em>
                          </span>
                          <span className="post">Lorem ipsum dolor</span>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}

export default Team;