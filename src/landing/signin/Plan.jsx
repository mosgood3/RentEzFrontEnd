import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaPhoneAlt } from "react-icons/fa";
import { RiArrowDropDownLine, RiHomeSmile2Fill } from "react-icons/ri";
import SNavbar from "./SNavbar";
import backgroundImage from "/src/assets/images/bg.svg";
import validateEmail from "/src/utils/validateEmail";
import PasswordStrengthMeter from "/src/utils/PasswordStrengthMeter";
import Footer from "/src/components/Footer";
import { MdEmail } from "react-icons/md";
import { createLandlord } from "/src/utils/api/LandlordPost";

const Plan = () => {
    const [selectedPlan, setSelectedPlan] = useState("Choose Plan");

}

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
        <div className="rounded-md w-full max-w-md h-full bg-white shadow-lg p-8">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-6">
            Create Account
          </h2>


          <form onSubmit={handleSubmit}>
          <div className="flex space-x-2 mt-4">
          <div className="mb-8">
  <div className="grid grid-cols-3 justify-center gap-6">
    <label
      className={`cursor-pointer border rounded-lg p-4 text-center shadow-md transition-transform transform hover:scale-110 ${
        selectedPlan === "Basic"
          ? "border-blue-600 bg-blue-50 text-blue-600"
          : "border-gray-300 bg-white text-slate-800"
      }`}
    >
      <input
        type="radio"
        name="plan"
        value="Basic"
        checked={selectedPlan === "Basic"}
        onChange={(e) => setSelectedPlan(e.target.value)}
        className="hidden"
      />
      <p className="text-lg font-semibold">Basic</p>
      <p className="text-sm">$ 4.99/mo</p>
    </label>
    <label
      className={`cursor-pointer border rounded-lg p-4 text-center shadow-md transition-transform transform hover:scale-110 ${
        selectedPlan === "Standard"
          ? "border-blue-600 bg-blue-50 text-blue-600"
          : "border-gray-300 bg-white text-slate-800"
      }`}
    >
      <input
        type="radio"
        name="plan"
        value="Standard"
        checked={selectedPlan === "Standard"}
        onChange={(e) => setSelectedPlan(e.target.value)}
        className="hidden"
      />
      <p className="text-lg font-semibold">Standard</p>
      <p className="text-sm">$ 9.99/mo</p>
    </label>
    <label
      className={`cursor-pointer border rounded-lg p-4 text-center shadow-md transition-transform transform hover:scale-110 ${
        selectedPlan === "Premium"
          ? "border-blue-600 bg-blue-50 text-blue-600"
          : "border-gray-300 bg-white text-slate-800"
      }`}
    >
      <input
        type="radio"
        name="plan"
        value="Premium"
        checked={selectedPlan === "Premium"}
        onChange={(e) => setSelectedPlan(e.target.value)}
        className="hidden"
      />
      <p className="text-lg font-semibold">Premium</p>
      <p className="text-sm">$ 19.99/mo</p>
    </label>
  </div>
</div>
</div>

    </div>

)

export default Plan