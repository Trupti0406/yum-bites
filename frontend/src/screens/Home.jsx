import React from "react";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Login from "./Login";

const Home = () => {
  return (
    <>
      <Carousel />
      <Card />
      <Login/>
    </>
    
  );
};

export default Home;
