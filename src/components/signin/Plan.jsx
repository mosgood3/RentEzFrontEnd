import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SNavbar from "./SNavbar";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import backgroundImage from "/src/assets/images/bg.svg";
import Footer from "/src/components/Footer";
import FormContext from "../../context/FormContext";
import Background from "./Background";

const Plan = () => {
  const navigate = useNavigate();
  const { formData, setFormData, nextStep } = useContext(FormContext);
  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };


  const handleCvvChange = (event) => {
    const value = event.target.value.replace(/\D/g, "").slice(0, 3);
    setFormData({...formData, cvv: value });
  };

  const handleCardChange = (event) => {
    const value = event.target.value.replace(/\D/g, "");
    const formatted = value.match(/.{1,4}/g)?.join(" ") || "";
    setFormData({ ...formData, card: formatted });
  };

  const handleExpChange = (event) => {
    let value = event.target.value.replace(/\D/g, "");
    if (value.length > 2) {
      value = `${value.slice(0, 2)}/${value.slice(2, 4)}`;
    }
    setFormData({...formData, expdate: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      alert("Please fill out all fields on account.");
    
    if (!formData.plan || !formData.card || !formData.expdate || !formData.cvv)
      alert("Please fill out all fields.");
      return;
    }
    nextStep();
    navigate("/sign-up/review");
  };

  return (
    <div>
      <Background>
      <SNavbar />
      <div className="flex flex-grow items-center justify-center">
        <div className="rounded-md w-full max-w-md bg-white shadow-lg p-4">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-6">
            Choose Your Plan
          </h2>
          <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-3 justify-center mb-10 gap-2">
  {["Basic", "Standard", "Premium"].map((plan) => (
    <label
      key={plan}
      className={`relative cursor-pointer border rounded-lg p-4 text-center shadow-lg transition-transform transform hover:scale-105 ${
        formData.plan === plan
          ? "border-2 border-blue-500 shadow-xl bg-gradient-to-r from-blue-500 to-blue-700 text-white"
          : "border-slate-300 bg-white text-slate-700 hover:shadow-md"
      }`}
    >
      <input
        type="radio"
        name="plan"
        value={plan}
        checked={formData.plan === plan}
        onChange={(e) => handleChange("plan", e.target.value)}
        className="hidden"
      />
      {/* Plan Name */}
      <p className="text-lg font-bold mb-1">{plan}</p>
      {/* Plan Price */}
      <p className="text-sm">
        ${plan === "Basic" ? "4.99" : plan === "Standard" ? "9.99" : "19.99"}
        <span className="text-xs">/mo</span>
      </p>
      {/* Active State Indicator */}
      {formData.plan === plan && (
        <span className="absolute top-0 right-0 bg-blue-400 text-white text-xs px-2 py-1 rounded-lg">
          Selected
        </span>
      )}
    </label>
  ))}
</div>
            <div className="relative mb-10">
              <input
                type="text"
                id="BillingAddress"
                value={formData.billingaddress || ""}
                onChange={(e) => handleChange("billingaddress", e.target.value)}
                className="block w-full py-2 px-2 text-sm text-slate-800 bg-transparent border-b-2 border-slate-800 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="123 Sesame Street"
              />
              <label
                htmlFor="BillingAddress"
                className="px-1 pb-1 absolute text-sm text-slate-800 bottom-8 peer-focus:text-blue-600"
              >
                Billing Address
              </label>
            </div>
            <div className="relative mb-10">
              <input
                type="text"
                id="NameCard"
                value={formData.namecard || ""}
                onChange={(e) => handleChange("namecard",e.target.value)}
                className="block w-full py-2 px-2 text-sm text-slate-800 bg-transparent border-b-2 border-slate-800 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="John Smith"
                maxLength="100"
              />
              <label
                htmlFor="NameCard"
                className="px-1 absolute text-sm text-slate-800 duration-300 transform -translate-y-0 scale-75 bottom-8 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-12"
              >
                Name on Card
              </label>
            </div>
            <div className="relative mb-10">
              <input
                type="text"
                id="card"
                value={formData.card || ""}
                onChange={handleCardChange}
                className="block w-full py-2 px-2 text-sm text-slate-800 bg-transparent border-b-2 border-slate-800 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="xxxx-xxxx-xxxx-xxxx"
                maxLength="19"
              />
              <label
                htmlFor="card"
                className="px-1 absolute text-sm text-slate-800 duration-300 transform -translate-y-0 scale-75 bottom-8 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-12"
              >
                Card Number
              </label>
            </div>
            <div className="relative gap-2 flex">
              <div className="flex flex-col w-1/2 mr-2 relative">
                <input
                  type="text"
                  id="exp"
                  value={formData.expdate || ""}
                  onChange={handleExpChange}
                  className="block w-full py-2 px-2 text-sm text-slate-800 bg-transparent border-b-2 border-slate-800 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="MM/YY"
                  maxLength="5"
                />
                <label
                  htmlFor="exp"
                  className="px-1 absolute text-sm text-slate-800 duration-300 transform -translate-y-0 scale-75 bottom-8 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-12"
                >
                  Expiration Date
                </label>
              </div>
              <div className="flex flex-col w-1/2 ml-2 relative">
                <input
                  type="password"
                  id="cvv"
                  value={formData.cvv || ""}
                  onChange={handleCvvChange}
                  className="block w-full py-2 px-2 text-sm text-slate-800 bg-transparent border-b-2 border-slate-800 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="xxx"
                  maxLength="3"
                />
                <label
                  htmlFor="cvv"
                  className="px-1 absolute text-sm text-slate-800 duration-300 transform -translate-y-0 scale-75 bottom-8 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-12"
                >
                  CVV*
                </label>
              </div>
            </div>
            <div className="flex mx-6 mt-4 items-center">
            <button
            className="w-full flex items-center gap-2 justify-center mb-4 text-[18px] mt-6 rounded-full bg-blue-600 text-white hover:bg-blue-900 py-2 transition-colors duration-300"
            type="submit"
            >
          <span> Next </span>
          <FaArrowRight />
          </button>
          </div>


            <div className="text-center mt-2">
              <span className="text-slate-800">
                Back to {" "}
                <button
                  className="text-blue-500"
                  onClick={() => navigate("/sign-up")}
                >
                  Account
                </button>
              </span>
            </div>

          </form>
        </div>
      </div>
      <Footer />
      </Background>
    </div>
  );
};

export default Plan;
