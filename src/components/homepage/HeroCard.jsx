/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
// import Ofada from "../assets/ofada.svg";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FiPlus } from "react-icons/fi";

const HeroCard = ({
  photoName,
  name,
  starsRating,
  stars,
  price,
  perWeight,
}) => {
  return (
    <div className=" h-48 w-56 rounded-lg flex-col flex-shrink-0">
      <img
        src={photoName}
        alt={name}
        className="w-24 h-24 object-contain absolute -top-1 left-4"
      />

      <div className="h-36 bg-white shadow-xl border border-[#D0D5DD] rounded-lg flex flex-col gap-4 px-4 py-3 mt-12">
        <div className="flex items-center justify-end">
          <MdOutlineStarPurple500 size={20} className="fill-blue-500" />
          <span>
            <p>
              {starsRating}({stars}k)
            </p>
          </span>
        </div>
        <p className="flex justify-start items-center font-inter font-normal text-sm -tracking-wider text-[#101828]">
          {name}
        </p>
        <div className=" flex items-center justify-between">
          <button className="bg-white border border-[#EAECF0] py-2 px-4 text-blue-500 font-inter rounded-lg flex items-center">
            Add <FiPlus size={20} className="fill-blue-500" />
          </button>
          <div className="flex flex-col gap-2">
            <p className="text-[#101828] text-sm font-medium font-inter items-end">
              #{price}
            </p>
            <p className="text-[#828282] font-inter text-xs items-end ov">
              /{perWeight}kg
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
