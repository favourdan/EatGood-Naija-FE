/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import Button from "./Button";
import EmailImage from "../assets/reset.svg";

const Modal = ({ image, text, onSubmit }) => {
  const [isOpen, setIsOpen] = useState(true);

  function handleModal() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <>
      <button
        className="font-inter font-bold text-4-xl absolute"
        onClick={handleModal}
      >
        &times;
      </button>
      {isOpen && (
        <div className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden bg-gray-500 py-12">
          <div className="bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
            <div className="mx-auto flex w-full max-w-md flex-col items-center space-y-10">
              <img src={image} alt="Modal image" />

              <p className="font-inter font-semibold text-xl text-blue-500">
                {text}
              </p>
              <Button
                className="py-2 px-24 rounded-2xl text-white bg-blue-500 w-full font-inter font-semibold text-base"
                onClick={onSubmit}
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
