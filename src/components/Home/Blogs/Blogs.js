import React from "react";
import SingleBlog from "./SingleBlog";

const blogs = [
  {
    id: 1,
    img: "/images/adult-blur-blurred-background-687824.png",
    title: "Fast Delevary",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dignissimos eaque illo, ad tempore deleniti.",
    icon: "/images/fastdelevary.png",
  },

  {
    id: 2,
    img: "/images/chef-cook-food-33614.png",
    title: "Good Auto Responder",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dignissimos eaque illo, ad tempore deleniti.",
    icon: "/images/autoresponder.png",
  },
  {
    id: 3,
    img: "/images/architecture-building-city-2047397.png",
    title: "Home Delevary",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dignissimos eaque illo, ad tempore deleniti.",
    icon: "/images/homedelevary.png",
  },
];

const Blogs = () => {
  return (
    <div className="container mx-auto my-4 ">
      <div className="ps-5">
        <h3 className="">Why Choose Us?</h3>
        <p className="why-texts">
          We are giving you the best service in food sector and you can not get
          this kind of service anywhere in the world!
        </p>
      </div>
      <div className=" row container mx-auto">
        {blogs.map((blog) => (
          <SingleBlog key={blog.id} blog={blog}></SingleBlog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
