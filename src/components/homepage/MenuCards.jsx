/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
// import NativeJollof from "../assets/native_jollof.jpeg";
// import GoatMeatJollof from "../assets/goat_meat_jollof.jpeg";

const MenuCards = ({ item }) => {
  return (
    <div className="overflow-hidden relative h-[320px] w-[280px]">
      <img
        src={item.img}
        alt=""
        className="rounded-xl h-full w-full object-cover brightness-75 bg-gradient-to-br from-slate-400 to-slate-800"
      />
      <div className="absolute bottom-12 left-6 flex flex-col gap-6">
        <p className="font-inter text-white text-xl">{item.title}</p>
        <div className="flex items-center gap-4">
          <p className="font-inter text-white text-xl">#{`${100000}`}</p>
          <span className="font-inter text-sm text-white">/500kg</span>
        </div>
      </div>
      <button className="absolute bottom-5 left-6 text-white cursor-pointer">
        Order Now
      </button>
    </div>
  );
};

export default MenuCards;
