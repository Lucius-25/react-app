import React, { useEffect, useState } from "react";
import {
  ButtonComponent,
  ContainerComponent,
  FormComponent,
  LoadingComponent,
  ErrorComponent,
} from "../components";
import { useNavigate } from "react-router-dom";
import { Register } from "../service/Auth.service";
import useApi from "../hook/useApi";

const RegisterPage = () => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const { handleApiData, loading, error, data } = useApi(Register);

  const handleInputChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
    // console.log(e.target.name, e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await Register(formData);
    // console.log(res);
    handleApiData(formData);
  };

  useEffect(() => {
    if (data) {
      nav("/");
    }
  }, [data]);

  // console.log(loading, data, error);
  return (
    <ContainerComponent>
      {loading ? (
        <LoadingComponent />
      ) : (
        <div className="flex justify-center items-center h-full">
          <div className="w-1/4  h-auto">
            <h1 className=" font-serif text-3xl font-bold text-center ">
              Register Your Account
            </h1>
            {error && <ErrorComponent>{error}</ErrorComponent>}
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
                value={formData.password_confirmation}
                label={"Confirm Your Password"}
                name={"password_confirmation"}
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
      )}
    </ContainerComponent>
  );
};

export default RegisterPage;
