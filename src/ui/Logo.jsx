// eslint-disable-next-line no-unused-vars
import React from "react";
import Thai from "../assets/Thai.svg";

const Logo = () => {
  return (
    <div className="flex gap-0">
      <a href="/" target="">
        <img
          className="h-8 w-8 cursor-pointer flex-shrink-0"
          src={Thai}
          alt="Site Logo"
        />
      </a>
    </div>
  );
};

export default Logo;
