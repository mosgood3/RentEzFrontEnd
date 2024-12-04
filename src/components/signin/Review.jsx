import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import SNavbar from "./SNavbar";
import backgroundImage from "/src/assets/images/bg.svg";
import Footer from "/src/components/Footer";
import FormContext from "../../context/FormContext";
import getCardType from "../../utils/validation/cardType";

const Review = () => {
  const navigate = useNavigate();
  const { formData, setFormData, nextStep } = useContext(FormContext);


  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    setShowVerification(true);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-screen flex flex-col"
    >
      <SNavbar />
      <div className="flex flex-grow items-center justify-center">
        <div className="rounded-md w-full max-w-md h-full bg-white shadow-lg p-4">
          <h2 className="text-4xl font-bold text-center text-black mb-4">
            Summary
          </h2>
          <form onSubmit={handleSubmit}>
          <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg shadow-lg px-4 py-2 text-white w-5/6 mx-auto">
          <div className="flex justify-between items-center">
            <div>
            <span className="block text-lg font-bold">RentEz {formData?.plan || "No data available"}</span>
            </div>
            <div>
              <label className="text-xs uppercase font-semibold tracking-wide">Exp Date</label>
              <span className="block text-sm">{formData?.expdate || "John Smith"}</span>
            </div>
            
          </div>
          <div className="mb-2">
            <label className="text-xs uppercase font-semibold tracking-wide">Card Number</label>
            <span className="block text-lg font-mono">{formData?.card || "xxxx xxxx xxxx xxxx"}</span>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <label className="text-xs uppercase font-semibold tracking-wide">Name on Card</label>
              <span className="block text-lg font-bold">{formData?.namecard || "MM/YY"}</span>
            </div>
            <div>
            <span className="block text-6xl">
            {React.createElement(getCardType(formData?.card))}
          </span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-6 mx-8 space-x-4">
  <label className="text-sm text-slate-600">Email Address:</label>
  <span className="text-md text-slate-800">{formData?.email || "john.smith@example.com"}</span>
</div>

<div className="flex justify-between items-center mt-6 mx-8 border-b-2 border-gray-600 pb-2">
  <label className="text-sm text-slate-600">Billing Address:</label>
  <span className="text-md text-slate-800">{formData?.billingaddress || "1234 Main St, City, Country"}</span>
</div>

{/* Total Due Section */}
<div className="flex justify-between items-center mt-6 mx-8">
  <label className="text-sm font-semibold text-slate-600">Total Due:</label>
  <span className="text-lg font-bold text-green-500">
    ${formData?.plan === "Basic" ? "4.99" : formData?.plan === "Standard" ? "9.99" : formData?.plan === "Premium" ? "19.99" : "0.00"}
  </span>
</div>



            <button
              className="w-full mb-4 text-[18px] mt-6 rounded-full bg-blue-600 text-white hover:bg-blue-900 py-2 transition-colors duration-300"
              type="submit"
              onClick={() => navigate("/login")}
            >
              Subscribe
            </button>
            <div className="text-center">
              <span>
                Back to{" "}
                <button
                  className="text-blue-500"
                  onClick={() => navigate("/sign-up/plan")}
                >
                  Plan
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Review;
