import React from "react";
import logo from "../../../images/logo.png";

const Footer = () => {
  return (
    <div className="pt-5 pb-3 footer">
      <div className="row mx-auto container text-lg-start text-center text-md-center text-xm-center">
        <div className="col-lg-6 col-sm-6 mx-auto">
          <img className="img-fluid w-25 mb-3" src={logo} alt="" />
        </div>
        <div className="col-lg-3 footer mt-lg-0  mt-sm-4 col-sm-12">
          <nav>
            <ul className="list-unstyled">
              <li>Read Our Blogs</li>
              <li>Know more</li>
              <li>Join Us today</li>
              <li>Follow om social media</li>
            </ul>
          </nav>
        </div>
        <div className="col-lg-3 mt-lg-0  mt-sm-4 footer-p col-sm-12">
          <p>Get helps</p>
          <p>Read Faq</p>
          <p>View All cities</p>
          <p>Near Restrurent</p>
        </div>
      </div>
      <p className="copyright-text pt-3">
        &copy;2021 All right reserved by Qudrati.
      </p>
    </div>
  );
};

export default Footer;
