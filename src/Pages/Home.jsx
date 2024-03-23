import React from "react";
import HomeImage from "../assets/images/HomeImage.png";

const Home = () => {
  return (
    <section className="background h-screen grid grid-cols-2">
      <div className="flex items-center justify-center">
        <h1 className="text-6xl font-quicksand font-bold">WHAT UP!</h1>
      </div>
      <div className="flex items-center justify-center">
        <img
          src={HomeImage}
          alt="Description"
          className="object-cover"
          width={400}
        />
      </div>
    </section>
  );
};

export default Home;
