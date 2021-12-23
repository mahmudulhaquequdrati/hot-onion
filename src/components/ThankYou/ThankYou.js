import React from "react";
import { Link } from "react-router-dom";
import success from "../../images/done.png";

const ThankYou = () => {
  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div className="text-center">
        <p>Your Order has been completed</p>
        <img width="35px" src={success} alt="" />
        <Link className="text-decoration-none" to="/">
          <p className="text-success mt-4">Go Home</p>
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
