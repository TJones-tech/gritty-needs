"use client";
import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Your One-Stop Shop Destination, Dive into Premium Deals
        </h1>

        <p className="hero__subtitle">
          Streamline your shopping experience with our effortless deals.
        </p>

        <CustomButton
          title="Explore Deals"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
    </div>
  );
};

export default Hero;
