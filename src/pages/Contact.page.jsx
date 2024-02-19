import React, { useState } from "react";
import { ButtonComponent, FormComponent } from "../components";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });
  const handleInputChange = (e) =>
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-[400px] px-4 py-2 h-auto shadow-lg mt-32  ">
        <h1 className=" font-san text-2xl font-bold text-center ">
          Create Your Contact
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5  ">
          <FormComponent
            onChange={handleInputChange}
            value={formData.name}
            label={"Name"}
            name={"name"}
            type={"text"}
            placeholder="Lucas Asta"
          />
          <FormComponent
            onChange={handleInputChange}
            value={formData.phone}
            label={"Phone"}
            name={"phone"}
            type={"text"}
            placeholder="+95 9*** *** ***"
          />
          <FormComponent
            onChange={handleInputChange}
            value={formData.email}
            label={"Email"}
            name={"email"}
            type={"text"}
            placeholder="youremail@gamil.com"
          />
          <FormComponent
            onChange={handleInputChange}
            value={formData.address}
            label={"Address"}
            name={"address"}
            type={"text"}
            placeholder=""
          />
          <ButtonComponent
            type="submit"
            style={"mt-5 w-full "}
            text={"Create Content"}
          />
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
