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

const Create = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Choose Plan");
  const [password, setPassword] = useState("");

  const handlePhoneChange = (e) => {
      setPassword(event.target.values);

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setEmailError("");
    navigate("/");
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setIsOpen(false);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setStrength(validatePassword(newPassword));
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
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-10">
            Create account
          </h2>


          <form onSubmit={handleSubmit}>
          <div className="flex space-x-2 mt-8 mb-12">
          <div className="relative w-1/2 mr-4">
                <button
                  onClick={toggleDropdown}
                  className="w-full text-[16px] mt-1 rounded-lg py-1 bg-slate-800 text-white shadow-lg border-black transition-colors flex items-center justify-center relative"
                  type="button"
                >
                  <span className="flex text-md items-start">{selectedPlan}</span>
                  <RiArrowDropDownLine className="absolute right-4 text-4xl" />
                </button>

                {isOpen && (
                  <div className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1 z-10">
                    <button
                      className="w-full flex justify-between text-left text-sm px-2 py-2 hover:bg-gray-100"
                      onClick={() => handlePlanSelect("Basic")}
                    >
                      <span>Basic</span>
                      <span>$4.99/month</span>
                    </button>
                    <button
                      className="w-full flex justify-between text-sm text-left px-2 py-2 hover:bg-gray-100"
                      onClick={() => handlePlanSelect("Standard")}
                    >
                      <span>Standard</span>
                      <span>$9.99/month</span>
                    </button>
                    <button
                      className="w-full flex justify-between text-sm text-left px-2 py-2 hover:bg-gray-100"
                      onClick={() => handlePlanSelect("Premium")}
                    >
                      <span>Premium</span>
                      <span>$19.99/month</span>
                    </button>
                  </div>
                )}
              </div>
            <div className="relative w-1/2">
              <FaPhoneAlt className="absolute right-2 top-4 text-slate-800" />
              <input
                type="text"
                id="phone"
                className="block w-full py-2.5 px-0 text-sm text-slate-800 bg-transparent border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={phone}
                onChange={handlePhoneChange}
              />
              <label
                htmlFor="phone"
                className="absolute text-sm text-slate-800 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-8"
              >
                Phone Number
              </label>
              {phoneError && <p className="text-red-500 text-sm mt-4">{phoneError}</p>}
            </div>
          </div>
            
            <div className="flex space-x-2 mb-12">
              <div className="relative w-1/2">
                <input
                  type="text"
                  id="firstName"
                  className="block w-full py-2.5 px-0 text-sm text-slate-800 bg-transparent border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  maxlength = "50"
                />
                <label
                  htmlFor="firstName"
                  className="absolute text-sm text-slate-800 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-8"
                >
                  First Name
                </label>
              </div>
              <div className="relative w-1/2">
              <FaUser className="absolute right-2 top-4 text-slate-800" />
                <input
                  type="text"
                  id="lastName"
                  className="block w-full py-2.5 px-0 text-sm text-slate-800 bg-transparent border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  maxlength = "50"
                />
                <label
                  htmlFor="lastName"
                  className="absolute text-sm text-slate-800 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-8"
                >
                  Last Name
                </label>
              </div>
            </div>
          
            <div className="relative mb-12">
              <MdEmail className="absolute right-2 top-4 text-slate-800" />
              <input
                type="text"
                className="block w-full py-2.5 px-0 text-sm text-slate-800 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={email}
                maxlength = "254"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-slate-800 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-8"
              >
                Your Email
              </label>
              {emailError && <p className="text-red-500 text-sm mt-4">{emailError}</p>}
            </div>
            <div className="flex flex-col space-y-4">
      {/* Password input fields */}
      <div className="flex space-x-2 mb-4">
        <div className="relative w-1/2">
          <input
            type="password"
            id="createPassword"
            value={password}
            onChange={handlePasswordChange}
            className="block w-full py-2.5 px-0 text-sm text-slate-800 bg-transparent border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="createPassword"
            className="absolute text-sm text-slate-800 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-8"
          >
            Create Password
          </label>
        </div>
        <div className="relative w-1/2">
          <FaLock className="absolute right-2 top-4 text-slate-800" />
          <input
            type="password"
            id="confirmPassword"
            className="block w-full py-2.5 px-0 text-sm text-slate-800 bg-transparent border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="confirmPassword"
            className="absolute text-sm text-slate-800 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-8"
          >
            Confirm Password
          </label>
        </div>
        
      </div>
      <div className="w-full mt-10">
          <PasswordStrengthMeter password={password} />
          </div>
    </div>

            
            <button
              className="w-full mb-4 text-[18px] mt-6 rounded-full bg-blue-600 text-white hover:bg-blue-900 py-2 transition-colors duration-300"
              type="submit"
            >
              Create
            </button>
            <div className="text-center mt-4">
              <span className="text-slate-800">
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
