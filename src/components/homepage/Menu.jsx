/* eslint-disable no-unused-vars */
import React from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import RiceDishes from "../../assets/ricedishes.svg";
import Soups from "../../assets/soups.svg";
import GriiledFoods from "../../assets/grilledfoods.svg";
import RawFoods from "../../assets/rawfoods.svg";
import MenuCards from "./MenuCards";
import NativeJollof from "../../assets/native_jollof.jpeg";
import GoatMeatJollof from "../../assets/goat_meat_jollof.jpeg";
import MenuCategory from "./MenuCategory";

const menus = [
  {
    id: 1,
    img: NativeJollof,
    title: "Native Jollof Rice",
  },
  {
    id: 2,
    img: GoatMeatJollof,
    title: "Goat Meat Jollof Rice",
  },
  { id: 3, img: NativeJollof, title: "Native Jollof Rice" },
  // {
  //   id: 4,
  //   img: GoatMeatJollof,
  //   title: "Goat Meat Jollof Rice",
  // },
];

const menuCategories = [
  {
    id: 1,
    image: RiceDishes,
    name: "Rice Dishes",
    active: false,
  },
  { id: 2, image: Soups, name: "Soups and Stews", active: false },
  {
    id: 3,
    image: GriiledFoods,
    name: "Grilled and Roasted Foods",
    active: false,
  },
  { id: 4, image: RawFoods, name: "Raw Foods", active: false },
];

const Menu = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-10  py-10 mt-10" id="menu">
      {/* menu header and buttons */}
      <div className="flex items-center justify-between">
        <h3 className="font-inter font-bold text-4xl lg:text-6xl text-[#010F1C]">
          Our Menu
        </h3>
        <div className="flex gap-4">
          <div className="flex items-center justify-center bg-[#E0E0E0] rounded-full p-3 cursor-pointer hover:bg-gray-500">
            <MdKeyboardArrowLeft size={30} />
          </div>
          <div className="flex items-center justify-center p-3 bg-blue-500 rounded-full fill-white cursor-pointer hover:bg-blue-800">
            <MdKeyboardArrowRight size={30} className="" />
          </div>
        </div>
      </div>
      {/* menu content */}
      <div className="w-full flex items-center justify-center ">
        {/* left side of content */}
        <div className="w-1/3 flex flex-col gap-4 items-start justify-center py-16 ">
          {menuCategories.map((category) => (
            <MenuCategory category={category} key={category.id} />
          ))}
        </div>
        {/* right side of content */}
        <div className="flex items-center justify-between gap-4 py-4 w-2/3">
          {menus.map((menuItem) => (
            <MenuCards item={menuItem} key={menuItem.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
