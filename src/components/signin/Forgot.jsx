import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import SNavbar from "./SNavbar";
import backgroundImage from "/src/assets/images/bg.svg";
import Footer from "/src/components/Footer";
import Verification from "./Verification"; // Import Verification component

const Forgot = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(true);
  const navigate = useNavigate();

  // Handle form submission
  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    // Add reset password logic here
    console.log("Reset password form submitted");
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
        <div className="rounded-md w-full max-w-md bg-white shadow-lg opacity-100 p-8">
          <h2 className="text-4xl font-bold text-center text-black mb-10">
            Forgot Password
          </h2>
          <form onSubmit={handleForgotPasswordSubmit}>
            <div className="relative my-8">
              <FaUser className="absolute right-2 top-4 text-black" />
              <input
                type="email"
                className="block w-full py-2.5 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-8"
              >
                Your Email
              </label>
            </div>
            <button
              className="w-full mb-4 text-[18px] mt-6 rounded-full bg-blue-600 text-white hover:bg-blue-900 py-2 transition-colors duration-300"
              type="submit"
              onClick={() => navigate("/login/forgot-password/verification")}
            >
              Reset Password
            </button>
            <div className="text-center mt-4">
              <button
                className="text-blue-500"
                onClick={() => navigate("/login")}
              >
                Back to Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Forgot;
