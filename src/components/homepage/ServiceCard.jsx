/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const ServiceCard = ({ services }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="p-2 mx-12">
        <img
          src={services.image}
          alt={services.serviceType}
          className="h-auto max-w-full flex-shrink-0"
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h3 className="font-inter font-bold text-xl text-black px-8 py-2">
          {services.serviceType}
        </h3>
        <p className="font-inter font-medium text-sm text-center text-[#333333]">
          {services.description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
