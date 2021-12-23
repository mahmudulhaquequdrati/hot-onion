import React from "react";

const Header = () => {
  return (
    <>
      <div
        id="home"
        className="mt-1 bg-image  d-flex flex-column justify-content-center"
      >
        <h2 className="text-center main-text my-4 fw-bold fs-1">
          Best food is waiting for you
        </h2>
        <form className="d-flex mb-5 mx-auto custom-form">
          <input
            className="form-control text-left ps-4 rounded-pill  header-input"
            type="search"
            placeholder="Your Favourite Food"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-none button-input rounded-pill"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default Header;
