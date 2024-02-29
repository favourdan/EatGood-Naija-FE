/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { MdError } from "react-icons/md";
import { useFormContext } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BiSolidLock } from "react-icons/bi";

import findInputError from "./findInputError";
import isFormValid from "./isFormValid";

export const Input = ({ label, type, id, name, validation, placeholder }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputError = findInputError(errors, name);
  const isInvalid = isFormValid(inputError);

  return (
    <div className="flex flex-col items-start gap-1 w-full">
      <div className="flex justify-between">
        <label
          htmlFor={id}
          className="
  text-blue-500 font-inter text-sm not-italic font-normal px-2"
        >
          {label}
        </label>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputError.error.message}
              key={inputError.error.message}
            />
          )}
        </AnimatePresence>
      </div>
      <div className="relative w-full  border rounded-lg">
        {id === "email" && (
          <MdEmail className="absolute top-3 left-3 fill-blue-500" />
        )}
        {id === "password" && (
          <BiSolidLock className="absolute top-3 left-3 fill-blue-500" />
        )}
        <input
          id={id}
          type={showPassword ? "text" : type}
          name={name}
          className={`appearance-none border ${
            isInvalid ? "border-blue-500" : "border-slate-400"
          }  w-full border rounded-lg  text-sm py-2 pl-8 pr-4 text-[#8B9AD8] bg-[#F5F5F5] focus:outline-none focus:shadow-outline placeholder:opacity-60`}
          placeholder={placeholder}
          {...register(name, validation)}
        />
        {type === "password" && (
          <span
            className="absolute top-3 right-5 text-blue-500 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </span>
        )}
      </div>
    </div>
  );
};

const InputError = ({ message }) => {
  return (
    <motion.p
      className="flex items-center gap-1 px-2 font-normal text-[#FCA311] text-xs italic bg-white rounded-md"
      {...framer_error}
    >
      <MdError />
      {message}
    </motion.p>
  );
};

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};
