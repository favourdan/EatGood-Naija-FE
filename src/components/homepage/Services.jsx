/* eslint-disable no-unused-vars */
import React from "react";
import ServiceCard from "../homepage/ServiceCard";
import EasyOrder from "../../assets/easyorder.svg";
import FastDelivery from "../../assets/fastdelivery.svg";
import BestQuality from "../../assets/bestquality.svg";
import BlueBlock from "../../assets/blueblock.svg";
import YellowBlock from "../../assets/yellowblock.svg";

const services = [
  {
    id: 1,
    image: EasyOrder,
    serviceType: "Easy to Order",
    description: "You only need a few steps in ordering food",
  },
  {
    id: 2,
    image: FastDelivery,
    serviceType: "Fastest Delivery",
    description: "Delivery that is always ontime even faster",
  },
  {
    id: 3,
    image: BestQuality,
    serviceType: "Best Quality",
    description: "Not only fast for us quality is also number one",
  },
];

const Services = () => {
  return (
    <div
      className="w-full relative flex flex-col items-center justify-center px-16 py-16 gap-10"
      id="services"
    >
      <h2 className="font-inter font-bold text-4xl text-center sm:text-6xl text-[#010F1C]">
        What We Serve
      </h2>
      <div className="w-full flex flex-col sm:flex sm:flex-row items-center justify-between">
        {services.map((service) => (
          <ServiceCard services={service} key={service.id} />
        ))}
      </div>
      <div className="hidden lg:flex items-center justify-center">
        <img src={BlueBlock} alt="" className="absolute top-28 left-1/4" />
      </div>
      <div className="hidden lg:flex items-center justify-center">
        <img src={YellowBlock} alt="" className="absolute top-20 right-1/4" />
      </div>
    </div>
  );
};

export default Services;
