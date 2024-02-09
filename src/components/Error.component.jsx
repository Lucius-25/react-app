import React from "react";
import { IoIosWarning } from "react-icons/io";

const ErrorComponent = ({ children }) => {
  return (
    <div className="flex items-center justify-center mt-2 border-2 border-red-500 text-red-500 ">
      <IoIosWarning className="w-8 h-8   " />
      <h1 className="text-center  ">{children}</h1>
      <IoIosWarning className="w-8 h-8" />
    </div>
  );
};

export default ErrorComponent;
