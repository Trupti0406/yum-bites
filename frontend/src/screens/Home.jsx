import React from "react";
import Card from "../components/Card";

const Home = () => {
  return (
    <div class="row p-1">
      <div className="col">
        <Card />
      </div>
      <div className="col">
        <Card />
      </div>
      <div className="col">
        <Card />
      </div>
    </div>
  );
};

export default Home;
