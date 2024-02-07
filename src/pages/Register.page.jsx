import React, { useState } from "react";
import {
  ButtonComponent,
  ContainerComponent,
  FormComponent,
} from "../components";
import { useNavigate } from "react-router-dom";
import { Register } from "../service/Auth.service";

const RegisterPage = () => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirm: "",
  });
  const handleInputChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
    // console.log(e.target.name, e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await Register(formData);
    console.log(res);
  };
  return (
    <ContainerComponent>
      <div className="flex justify-center items-center h-full">
        <div className="w-1/4  h-auto">
          <h1 className=" font-serif text-3xl font-bold text-center ">
            Register Your Account
          </h1>
          <form onSubmit={handleSubmit}>
            <FormComponent
              value={formData.name}
              onChange={handleInputChange}
              label={"Enter Your Name"}
              name={"name"}
              type={"text"}
              placeholder="Lucas Asta"
            />
            <FormComponent
              value={formData.email}
              onChange={handleInputChange}
              label={"Enter Your Email"}
              name={"email"}
              type={"email"}
              placeholder="example@email.com"
            />
            <FormComponent
              onChange={handleInputChange}
              value={formData.password}
              label={"Enter Your Password"}
              name={"password"}
              type={"password"}
              placeholder="Apple@123"
            />
            <FormComponent
              onChange={handleInputChange}
              value={formData.password_confirm}
              label={"Confirm Your Password"}
              name={"password_confirm"}
              type={"password"}
              placeholder="Confirm Password"
            />
            {/* ! in props is to gain the priorities of that props */}
            <ButtonComponent
              // onClick={handleSubmit}
              type="submit"
              style={"!bg-red-500"}
              text={"Register Now"}
            />
          </form>
          <p className="mt-2 text-sm">
            You already have an account
            <button
              className=" ms-1 underline text-blue-400"
              onClick={() => nav("/")}
            >
              Login Now
            </button>
          </p>
        </div>
      </div>
    </ContainerComponent>
  );
};

export default RegisterPage;
