import React from "react";

function Project() {
  return (
    <div>
      <section className="project py-5">
        <div className="container">
          <div className="row my-3">
            <div className="col-10 mx-auto text-center">
              <h1 className="text-uppercase">Our Latest Events</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                provident.
              </p>
            </div>
          </div>
          {/* <!-----> */}
          <div className="row">
            {/* <!--single Project--> */}
            <div className="col-10 col-md-6 col-lg-4">
              <div className="project-container p-5 outline">
                <img src="Images/img-1.jpg" className="img-fluid grow" alt="" />
                <a herf="#" class="donation text-capitalize">
                  READ MORE
                </a>
              </div>
              <h4 className="text-capitalize text-center my-2">EVENT-1</h4>
              <h6 className="text-center">Specification</h6>
            </div>
            {/* <!--End of Single Project--> */}
            {/* <!--single Project--> */}
            <div className="col-10 col-md-6 col-lg-4">
              <div className="project-container p-5 outline">
                <img src="Images/img-2.jpg" className="img-fluid grow" alt="" />
                <a herf="#" class="donation text-capitalize">
                  READ MORE
                </a>
              </div>
              <h4 className="text-capitalize text-center my-2">EVENT-2</h4>
              <h6 className="text-center">Specification</h6>
            </div>
            {/* <!--End of Single Project-->
<!--single Project--> */}
            <div className="col-10 col-md-6 col-lg-4">
              <div className="project-container p-5 outline">
                <img src="Images/img-3.jpg" className="img-fluid grow" alt="" />
                <a herf="#" class="donation text-capitalize">
                  READ MORE
                </a>
              </div>
              <h4 className="text-capitalize text-center my-2">EVENT-3</h4>
              <h6 className="text-center">Specification</h6>
            </div>
            {/* <!--End of Single Project-->
<!--single Project--> */}
            <div className="col-10 col-md-6 col-lg-4">
              <div className="project-container p-5 outline">
                <img src="Images/img-4.jpg" className="img-fluid grow" alt="" />
                <a herf="#" class="donation text-capitalize">
                  READ MORE
                </a>
              </div>
              <h4 className="text-capitalize text-center my-2">EVENT-4</h4>
              <h6 className="text-center">Specification</h6>
            </div>
            {/* <!--End of Single Project-->
<!--single Project--> */}
            <div className="col-10 col-md-6 col-lg-4">
              <div className="project-container p-5 outline">
                <img src="Images/img-5.jpg" className="img-fluid grow" alt="" />
                <a herf="#" class="donation text-capitalize">
                  READ MORE
                </a>
              </div>
              <h4 className="text-capitalize text-center my-2">EVENT-5</h4>
              <h6 className="text-center">Specification</h6>
            </div>
            {/* <!--End of Single Project--> */}
            {/* <!--single Project--> */}
            <div className="col-10 col-md-6 col-lg-4">
              <div className="project-container p-5 outline">
                <img src="Images/img-6.jpg" className="img-fluid grow" alt="" />
                <a herf="#" class="donation text-capitalize">
                  READ MORE
                </a>
              </div>
              <h4 className="text-capitalize text-center my-2">EVENT-6</h4>
              <h6 className="text-center">Specification</h6>
            </div>
            {/* <!--End of Single Project--> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project;
