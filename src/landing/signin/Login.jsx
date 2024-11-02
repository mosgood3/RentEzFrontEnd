import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import SNavbar from "./SNavbar";
import backgroundImage from "/src/assets/images/bg.svg";
import Footer from "/src/components/Footer";
import Verification from "./Verification"; // Import Verification component

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    setShowVerification(true); // Show verification after forgot password is submitted
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
        <div className="rounded-md w-full max-w-md h-full bg-white shadow-lg p-8">
          <h2 className="text-4xl font-bold text-center text-black mb-10">
            Login
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="relative my-8">
              <FaUser className="absolute right-2 top-4 text-black" />
              <input
                type="text"
                className="block w-full py-2.5 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-8"
              >
                Your Email
              </label>
            </div>
            <div className="relative my-4">
              <FaLock className="absolute right-2 top-4 text-black" />
              <input
                type="password"
                className="block w-full py-2.5 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="password"
                className="absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-8"
              >
                Your Password
              </label>
            </div>
            <div className="flex justify-between mt-16 items-center">
              <div className="flex gap-2 items-center">
                <input
                  className="text-black"
                  type="checkbox"
                  id="remember-me"
                />
                <label className="text-black" htmlFor="remember-me">
                  Remember Me
                </label>
              </div>
              <span className="m-4">
                <button
                  className="text-blue-500"
                  onClick={() => navigate("/login/forgot-password")}
                >
                  Forgot Password?
                </button>
              </span>
            </div>
            <button
              className="w-full mb-4 text-[18px] mt-6 rounded-full bg-blue-600 text-white hover:bg-blue-900 py-2 transition-colors duration-300"
              type="submit"
            >
              Submit
            </button>
            <div className="text-center mt-4">
              <span className="text-black">
                New Here?{" "}
                <button
                  className="text-blue-500"
                  onClick={() => navigate("/Sign-up")}
                >
                  Create an Account
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

export default Login;
