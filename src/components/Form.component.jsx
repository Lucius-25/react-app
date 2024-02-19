import React from "react";

const FormComponent = ({ type, name, label, placeholder = "", ...rest }) => {
  return (
    <div className="flex flex-col ">
      <label htmlFor={name} className=" text-center mb-3 mt-3">
        {label}
      </label>
      <input
        {...rest}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className=" border border-cyan-600 rounded-lg px-2 py-3"
      />
    </div>
  );
};

export default FormComponent;
