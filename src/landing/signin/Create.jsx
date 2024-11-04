import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaPhoneAlt } from "react-icons/fa";
import { RiArrowDropDownLine, RiHomeSmile2Fill } from "react-icons/ri";
import SNavbar from "./SNavbar";
import backgroundImage from "/src/assets/images/bg.svg";
import validateEmail from "/src/utils/validateEmail";
import validatePhone from "/src/utils/validatePhone";
import Footer from "/src/components/Footer";
import { MdEmail } from "react-icons/md";

const Create = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handlePhoneChange = (e) => {
    const input = e.target.value;
    const formattedPhone = validatePhone(input);
    setPhone(formattedPhone);

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
                  id="firstName"
                  className="block w-full py-2.5 px-0 text-sm text-black bg-transparent border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
              <FaUser className="absolute right-2 top-4 text-black" />
                <input
                  type="text"
                  id="lastName"
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
                id="phone"
                className="block w-full py-2.5 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={phone}
                onChange={handlePhoneChange}
              />
              <label
                htmlFor="phone"
                className="absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-8"
              >
                Phone Number
              </label>
              {phoneError && <p className="text-red-500 text-sm mt-4">{phoneError}</p>}
            </div>
            <div className="relative my-8">
              <MdEmail className="absolute right-2 top-4 text-black" />
              <input
                type="text"
                className="block w-full py-2.5 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-8"
              >
                Your Email
              </label>
              {emailError && <p className="text-red-500 text-sm mt-4">{emailError}</p>}
            </div>
            <div className="flex space-x-2 my-8">
            <div className="relative w-1/2">
              <input
                type="password"
                id="createPassword"
                className="block w-full py-2.5 px-0 text-sm text-black bg-transparent border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="createPassword"
                className="absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-8"
              >
                Create Password
              </label>
            </div>
                    <div className="relative w-1/2">
                    <FaLock className="absolute right-2 top-4 text-black" />
              <input
                type="text"
                id="confirmPassword"
                className="block w-full py-2.5 px-0 text-sm text-black bg-transparent border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="confirmPassword"
                className="absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-8"
              >
                Confirm Password
              </label>
            </div>
            
      </div>
      <div className="relative mx-24 my-8">
      {/* Label above the button with icon */}
      <div className="flex items-center text-center text-md text-black mb-2">
        <RiHomeSmile2Fill className="text-2xl text-center text-blue-600 mr-1" />
        Choose Plan
      </div>

      <button
        onClick={toggleDropdown}
        className="w-full text-[16px] mt-1 rounded-lg bg-white text-black border-2 border-black transition-colors flex items-center justify-center gap-1 relative"
        type="button"
      >
        <span className="flex items-center gap-1">
          Select <RiArrowDropDownLine className="text-4xl" />
        </span>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Plan 1</button>
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Plan 2</button>
          <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Plan 3</button>
        </div>
      )}
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
