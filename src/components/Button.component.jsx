import React from "react";

const ButtonComponent = ({ style, text, ...rest }) => {
  return (
    <button
      {...rest}
      className={`bg-cyan-400 px-2 py-3 w-full hover:text-white hover:scale-90 duration-300 mt-5 rounded-lg text-center ${style}`}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
