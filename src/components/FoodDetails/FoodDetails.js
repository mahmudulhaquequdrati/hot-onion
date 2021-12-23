import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import menulist from "../Home/FoodMenus/MenuList";
import NavBar from "../Shared/NavBar/NavBar";

const FoodDetails = () => {
  const { id } = useParams();

  const found = menulist.find((food) => food.id === id);
  const { name, img, price, description } = found || {};
  return (
    <>
      <NavBar />
      <div className="row details container mx-auto ">
        <div className="col-lg-6 col-md-6 det col-sm-12 d-flex align-items-center">
          <div className="">
            <h2 className="py-2">{name}</h2>
            <p className="text-secondary lh-sm">{description}</p>
            <h3 className="ms-2">${price}</h3>
            <Link to="/success">
              <button className="bg-danger text-light py-2 px-4 border-0 rounded-pill my-3">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 px-4 py-2 ">
          <img className="img-fluid  mx-auto" src={img} alt="" />
        </div>
      </div>
    </>
  );
};

export default FoodDetails;
