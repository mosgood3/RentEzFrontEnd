import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import SNavbar from "./SNavbar";
import backgroundImage from "/src/assets/images/bg.svg";
import { FaPhoneAlt } from "react-icons/fa";
import validateEmail from "/src/utils/validateEmail"
import Footer from "/src/components/Footer";

const Create = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(""); // State for email error

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (!validateEmail(email)) {
        setEmailError("Please enter a valid email address");
        console.log("Invalid email, preventing navigation."); // Debugging log
        return; // Prevent navigation if email is invalid
    }

    setEmailError(""); // Clear the error if the email is valid
    console.log("Valid email, navigating to home."); // Debugging log
    navigate("/"); // Only navigate if the email is valid
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
            Create account
          </h2>
          <form onSubmit={handleSubmit}>
          <div className="flex space-x-2 my-8">
        <div className="relative w-1/2">
          <input
            type="text"
            className="block w-full py-2.5 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="firstName"
            className="absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-8"
          >
            First Name
          </label>
        </div>
        <div className="relative w-1/2">
          <input
            type="text"
            className="block w-full py-2.5 px-0 text-sm text-black bg-transparent border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="lastName"
            className="absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-8"
          >
            Last Name
          </label>
        </div>
      </div>
            <div className="relative my-8">
              <FaPhoneAlt className="absolute right-2 top-4 text-black" />
              <input
                type="text"
                className="block w-full py-2.5 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-8"
              >
                Phone Number
              </label>
            </div>
            <div className="relative my-8">
              <FaUser className="absolute right-2 top-4 text-black" />
              <input
                type="text"
                className="block w-full py-2.5 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={email} // Bind email state
                onChange={(e) => setEmail(e.target.value)} // Update email state
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-8"
              >
                Your Email
              </label>
              {emailError && <p className="text-red-500 text-sm mt-2">{emailError}</p>}
            </div>
            <div className="relative my-8">
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
                Choose Plan
              </label>
            </div>
            <button
              className="w-full mb-4 text-[18px] mt-6 rounded-full bg-blue-600 text-white hover:bg-blue-900 py-2 transition-colors duration-300"
              type="submit"
            >
              Submit
            </button>
            <div className="text-center mt-4">
              <span className="text-black">
                Already a member?{" "}
                <button
                  className="text-blue-500"
                  onClick={() => navigate("/login")}
                >
                  Login
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

export default Create;
