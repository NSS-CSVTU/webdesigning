import React from "react";
import "../css/counter.css";

// var counterStyle = {
//   visibility: "visible",
//   animationDuration: "900ms",
//   animationName: "fadeIn",
// };

const Counters = () => {
  return (
    <div>
      {/* <div
        className="fast-counter sp-two counted"
        style={{
          backgroundImage: 'url(${require("images/bg.jpg")})',
        }}
      >
        <div className="container">
          <div className="row">
            <article
              className="column counter-column col-x3-3 col-lg-6col-md-6 wow fadeIn animated"
              date-wow-duration="900ms"
              style={counterStyle}
            >
              <div className="item">
                <div className="inner-box">
                  <div className="icon-box">
                    <span className="flaticon-balloon"></span>
                  </div>
                  <div className="count-outer">
                    <span
                      className="count-text"
                      data-speed="3000"
                      data-stop="30682"
                    >
                      {props.data}
                    </span>
                    <p>{props.name}</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div> */}
      <section id="counter" class="counter-section">
        <div class="container">
          <ul class="row counters">
            <li class="col-md-3 col-sm-6 sm-padding">
              <div class="counter-content">
                <i class="ti-money"></i>
                <h3 class="counter">85389</h3>
                <h4 class="text-white">Number of volunteer</h4>
              </div>
            </li>
            <li class="col-md-3 col-sm-6 sm-padding">
              <div class="counter-content">
                <i class="ti-face-smile"></i>
                <h3 class="counter">10693</h3>
                <h4 class="text-white">Number of Programme Officers</h4>
              </div>
            </li>
            <li class="col-md-3 col-sm-6 sm-padding">
              <div class="counter-content">
                <i class="ti-user"></i>
                <h3 class="counter">50177</h3>
                <h4 class="text-white">Number of colleges</h4>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Counters;
