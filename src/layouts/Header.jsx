// eslint-disable-next-line no-unused-vars
import React from "react";
import Logo from "../ui/Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="flex items-center justify-between min-h-20 w-full">
      <div className="flex gap-1">
        <Logo />
        <span className="text-2xl font-bold text-blue-500 font-crimson_pro">
          Eat Good Naija
        </span>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
