import React from "react";
import logo from "../Images/nss-logo.png";
import csvtu from "../Images/csvtulogo.jpg";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light nav-bg fixed-top py-2"
      id="mainNav"
    >
      <div className="container">
        <a href="#">
          <img id="nsslogo" src={logo} alt="NSS-LOGO" />
        </a>
        <a href="#">
          <img id="csvtu-logo" src={csvtu} alt="CSVTU-LOGO" />
        </a>

        <a className="navbar-brand text-white" href="#">
          National Service Scheme
          <br />
          <span>Chhattishgarh Swami Vivekanand University</span>
        </a>

        <button
          className="navbar-toggler navbar-toggler-left"
          type="button"
          data-toggle="collapse"
          data-target="#myNavbar"
          aria-controls="myNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="navbar-nav ml-auto my-2 my-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Announcement
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Events
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Coordinators
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Docs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Awards
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i class="fa fa-search" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
