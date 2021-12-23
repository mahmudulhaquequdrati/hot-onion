import React from "react";

const SingleBlog = ({ blog }) => {
  const { title, description, icon, img } = blog;
  return (
    <div className="rounded-3 col-12 my-2 col-md-6 col-lg-4">
      <div className=" card border-0 shadow-sm m-2">
        <img
          src={img}
          className="card-img-top w-fluid mx-auto mt-2"
          alt="..."
        />
        <div className="d-flex mt-3">
          <div className="  ">
            <img
              className="ms-2"
              style={{
                width: "35px",
              }}
              src={icon}
              alt=""
            />
          </div>
          <div className="card-body pt-0 ">
            <p className="my-1 fw-bold">{title}</p>
            <p className="card-text my-0 blog-des">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
