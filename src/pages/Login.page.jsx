import React, { useEffect, useState } from "react";
import {
  ButtonComponent,
  ContainerComponent,
  ErrorComponent,
  FormComponent,
  LoadingComponent,
  PreventComponent,
} from "../components";

import { useNavigate } from "react-router-dom";
import { Login } from "../service/Auth.service";
import useApi from "../hook/useApi";
import { useSelector, useDispatch } from "react-redux";
import { LoginAction } from "../store/action/auth.action";

const LoginPage = () => {
  const nav = useNavigate();
  const { loading, error, data, auth } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleInputChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
    // console.log(e.target.name, e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    LoginAction(dispatch, formData);
  };
  useEffect(() => {
    if (data) {
      nav("/home");
    }
  }, [data]);
  return (
    <PreventComponent fail={"/home"} check={localStorage.getItem("auth~")}>
      <ContainerComponent>
        {loading ? (
          <LoadingComponent />
        ) : (
          <div className="flex justify-center items-center h-full">
            <div className="w-1/4  h-auto">
              <h1 className=" font-serif text-3xl font-bold text-center ">
                Login Your Account
              </h1>
              {error && <ErrorComponent>{error}</ErrorComponent>}
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
                  style={"bg-cyan-300"}
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
        )}
      </ContainerComponent>
    </PreventComponent>
  );
};

export default LoginPage;
