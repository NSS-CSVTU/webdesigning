import React from "react";

function Stories() {
  return (
    <div>
      <section className="mt-3">
        <div className="stories">
          <div className="container">
            <div className="section-title text-center">
              <h3>Gallery</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                totam hic id nesciunt quaerat veritatis.
              </p>
            </div>
            {/* <!-----> */}
            <div className="row" >
              <div className="col-md-4">
                <div className="story-box overlay shadow">
                  <div className="story-icon">
                    {/* <i className="fas fa-ambulance"></i> */}
                    <img src="./Images/" alt="" />
                  </div>
                  <h2>no.1</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Beatae ipsam sit consequatur ducimus asperiores quod nobis
                    ad cumque at harum.
                  </p>
                </div>
              </div>
              {/* <!-----> */}
              <div className="col-md-4">
                <div className="story-box overlay shadow">
                  <div className="story-icon">
                    {/* <i className="fas fa-hand-holding-water"></i> */}
                  </div>
                  <h2>no.2</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Beatae ipsam sit consequatur ducimus asperiores quod nobis
                    ad cumque at harum.
                  </p>
                </div>
              </div>
              {/* <!-----> */}
              <div className="col-md-4">
                <div className="story-box overlay shadow">
                  <div className="story-icon">
                    {/* <i className="fas fa-seedling"></i> */}
                  </div>
                  <h2>no.3</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Beatae ipsam sit consequatur ducimus asperiores quod nobis
                    ad cumque at harum.
                  </p>
                </div>
              </div>
              {/* <!-----> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Stories;
