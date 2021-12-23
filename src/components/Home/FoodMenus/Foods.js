import React from "react";
import { Link } from "react-router-dom";

const Foods = ({ menus }) => {
  const { name, img, id, description, price } = menus;
  const newDescription = description.slice(0, 24);
  return (
    <div className="col-12 my-2 col-md-6 col-lg-4">
      <Link className="text-dark text-decoration-none" to={`/details/${id}`}>
        <div className="card border-0  card-design m-2">
          <img
            src={img}
            className="card-img-top w-50 mx-auto mt-2"
            alt="images"
          />
          <div className="card-body pt-0 text-center">
            <p className="my-1 fw-bold">{name}</p>
            <p className="card-text my-0 fs-6">{newDescription}</p>
            <p className="card-text my-0 fw-bolder">Price:$ {price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Foods;
