/* eslint-disable no-unused-vars */
import React from "react";
import HeroImage from "../../assets/hero.svg";
import HeroCard from "./HeroCard";
import Ofada from "../../assets/ofada.svg";
import OfeOha from "../../assets/oha.svg";
import GoldenArrow from "../../assets/goldenArrow.svg";
import Fire from "../../assets/fire.svg";
import BlueBlock from "../../assets/blueblock.svg";
import YellowCircle from "../../assets/yellowCircle.svg";

const Hero = () => {
  return (
    <div id="/">
      <div className="flex justify-between items-center mx-auto my-12 w-full  overflow-y-visible">
        {/* text part */}
        <div className="text-center w-full flex flex-col items-center gap-4 lg:w-1/2 lg:items-start lg:text-left">
          <p className="text-4xl sm:text-6xl text-gray-900 not-italic font-bold font-rubik">
            Claim Best Offer
          </p>
          <p className="text-4xl sm:text-6xl text-gray-900 not-italic font-bold tracking-wide font-rubik">
            on African{" "}
            <span className="text-4xl sm:text-6xl text-blue-500 italic font-bold font-lobster_two">
              Food
            </span>
            <span className="text-4xl sm:text-6xl text-gray-900 not-italic font-bold">
              {" "}
              &
            </span>
          </p>{" "}
          <p className="text-4xl sm:text-6xl text-blue-500 italic font-bold font-lobster_two">
            Ingredients<span className="text-blue-500">.</span>
          </p>
          <div>
            <p className="font-inter not-italic font-medium text-gray-900 text-sm sm:text-base tracking-wide">
              Our job is filling your tummy with delicious food and
            </p>
            <p className="font-inter not-italic font-medium text-gray-900 text-sm sm:text-base tracking-wide">
              with fast and free delivery
            </p>
          </div>
          <a
            href="/signup"
            className="px-4 py-2 sm:px-8 sm:py-4 justify-center items-center rounded-2xl border border-blue-500
       bg-blue-500 text-white font-inter not-italic font-semibold text-sm sm:text-base
       transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-80 hover:bg-blue-800 duration-300"
          >
            Get Started
          </a>
        </div>

        {/* picture or hero image part */}
        <div className="relative hidden h-[776px] lg:flex lg:items-center lg:flex-shrink-0 lg:w-1/2">
          <img
            className="max-w-full h-auto"
            src={HeroImage}
            alt="hero-food-image"
          />

          <div className="absolute top-5 left-2">
            <HeroCard
              name="Ofada Stew"
              starsRating={4.8}
              stars={32}
              price={100000}
              perWeight={500}
              photoName={Ofada}
            />
          </div>
          <div className="absolute bottom-4 left-[60%]">
            <HeroCard
              name="Ofe Oha"
              starsRating={4.8}
              stars={32}
              price={100000}
              perWeight={500}
              photoName={OfeOha}
            />
          </div>
          <div>
            <img src={Fire} alt="" className="absolute top-20 right-24" />
          </div>
          <div>
            <img
              src={GoldenArrow}
              alt="golden arrow"
              className="absolute top-44 right-4 h-24 w-24"
            />
          </div>
          <div>
            <img
              src={BlueBlock}
              alt=""
              className="absolute bottom-72 right-6 "
            />
          </div>
          <div>
            <img
              src={BlueBlock}
              alt=""
              className="absolute bottom-16 left-1/4"
            />
          </div>
          <div>
            <img
              src={YellowCircle}
              alt=""
              className="absolute top-[40%] -left-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
