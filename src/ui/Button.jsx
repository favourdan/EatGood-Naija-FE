/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

export default function Button({ className, onClick, children }) {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

// "flex items-center gap-3 border border-none cursor-pointer py-3 px-4 rounded-2xl font-medium"
