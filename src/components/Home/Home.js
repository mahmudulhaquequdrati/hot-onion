import React from "react";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/NavBar/NavBar";
import Blogs from "./Blogs/Blogs";
import FoodMenus from "./FoodMenus/FoodMenus";
import Header from "./Header/Header";

const Home = () => {
  return (
    <>
      <NavBar />
      <Header />
      <FoodMenus />
      <Blogs />
      <Footer />
    </>
  );
};

export default Home;
