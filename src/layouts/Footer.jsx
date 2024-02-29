/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="bg-blue-500 flex items-center justify-between py-8 px-20">
      <p className="text-white font-inter font-normal text-base">
        &copy; EatGoodNaija {`${date.getFullYear()}`} | Powered by EatGoodNaija
      </p>
      <ul className="flex gap-4 text-white ">
        <li className="cursor-pointer">
          <FaFacebookF />
        </li>
        <li className="cursor-pointer">
          <FaTwitter />
        </li>
        <li className="cursor-pointer">
          <FaLinkedinIn />
        </li>
        <li className="cursor-pointer">
          <FaInstagram />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
