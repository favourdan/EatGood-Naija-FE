/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const MenuCategory = ({ category }) => {
  return (
    <div
      className={`${
        category.active ? "bg-blue-500 border border-blue-700" : "bg-white"
      } flex items-center justify-center py-2 px-4 rounded-full `}
    >
      <div className="flex items-center justify-center gap-4">
        <img
          src={category.image}
          alt="rice dishes"
          className={`${category.active ? "bg-white p-1 rounded-full" : ""}`}
        />

        <span>
          <p
            className={`font-inter ${
              category.active ? "text-white" : "text-black"
            }  text-sm lg:text-base font-medium cursor-pointer`}
          >
            {category.name}
          </p>
        </span>
      </div>
    </div>
  );
};

export default MenuCategory;
