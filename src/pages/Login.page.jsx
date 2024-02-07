import React, { useState } from "react";
import {
  ButtonComponent,
  ContainerComponent,
  FormComponent,
} from "../components";

import { useNavigate } from "react-router-dom";
import { Register } from "../service/Auth.service";

const LoginPage = () => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleInputChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
    // console.log(e.target.name, e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <ContainerComponent>
      <div className="flex justify-center items-center h-full">
        <div className="w-1/4  h-auto">
          <h1 className=" font-serif text-3xl font-bold text-center ">
            Login Your Content
          </h1>
          <form onSubmit={handleSubmit}>
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
            {/* ! in props is to gain the priorities of that props */}
            <ButtonComponent
              type="submit"
              style={"!bg-red-500"}
              text={"Log in"}
            />
          </form>
          <p className="mt-2 text-sm">
            You haven't account yet?
            <button
              className=" underline text-blue-400"
              onClick={() => nav("/register")}
            >
              Register Now
            </button>
          </p>
        </div>
      </div>
    </ContainerComponent>
  );
};

export default LoginPage;
