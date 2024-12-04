import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import SNavbar from "./SNavbar";
import validatePassword from "../../utils/validation/validatePassword";
import validateEmail from "/src/utils/validation/validateEmail";
import PasswordStrengthMeter from "/src/utils/validation/PasswordStrengthMeter";
import Footer from "/src/components/Footer";
import FormContext from "../../context/FormContext";
import Background from "./Background";

const Create = () => {
  const navigate = useNavigate();
  const { formData, setFormData, nextStep } = useContext(FormContext);

  const [emailError, setEmailError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [strength, setStrength] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      alert("Please fill out all fields.");
      return;
    }
    if (!validateEmail(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (strength?.score < 5) {
      alert("Password strength must be excellent.");
      return;
    }

    try {
      nextStep();
      navigate("/sign-up/plan");
    } catch (err) {
      console.error("Error creating account:", err);
      alert(err.message || "An error occurred while creating the account.");
    }
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setFormData((prev) => ({ ...prev, password: newPassword }));
    setStrength(validatePassword(newPassword));
  };

  return (
    <div>
    <Background>
      <SNavbar />
      <div className="flex flex-grow items-center justify-center">
        <div className="sm:rounded-md w-full max-w-md h-full bg-white shadow-md mb-2 p-6">
          <h2 className="text-4xl font-bold text-center text-slate-800">
            Create Login
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="relative mt-12 mb-12">
              <FaUser className="absolute right-2 top-4 peer-focus:text-blue-600 text-slate-800" />
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                className="block w-full py-2.5 px-0 text-sm text-slate-800 bg-transparent border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                maxLength="50"
              />
              <label
                htmlFor="name"
                className="absolute text-sm text-slate-800 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-8"
              >
                Name (Person or Business)
              </label>
            </div>

            <div className="relative mb-12">
              <MdEmail className="absolute right-2 top-4 text-slate-800" />
              <input
                type="text"
                id="email"
                className="block w-full py-2.5 px-0 text-sm text-slate-800 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value={formData.email}
                maxLength="254"
                onChange={(e) => {
                  const newEmail = e.target.value;
                  setFormData((prev) => ({ ...prev, email: newEmail }));
                  if (newEmail && !validateEmail(newEmail)) {
                    setEmailError("Please enter a valid email address.");
                  } else {
                    setEmailError("");
                  }
                }}
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-slate-800 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-8"
              >
                Email
              </label>
              {emailError && (
                <p className="text-red-500 absolute text-sm mt-4">{emailError}</p>
              )}
            </div>

            <div className="relative">
  
    <PasswordStrengthMeter password={formData.password} />
    <input
                type={passwordVisible ? "text" : "password"}
                id="createPassword"
                value={formData.password}
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

              <div
                className="absolute right-2 top-4 cursor-pointer"
                onMouseDown={() => setPasswordVisible(true)}
                onMouseUp={() => setPasswordVisible(false)}
                onMouseLeave={() => setPasswordVisible(false)}
              >
                {passwordVisible ? (
                  <FaEyeSlash className="text-slate-800" />
                ) : (
                  <FaEye className="text-slate-800" />
                )}
              </div>
              <p className=" mt-4 mx-12 text-center text-xs text-gray-400">Minumum of 8 characters, with upper and lowercase, number and a special character</p>
            </div>
            
          <div className="flex mx-6 items-center">
            <button
            className="w-full flex items-center gap-2 justify-center mb-4 text-[18px] mt-6 rounded-full bg-blue-600 text-white hover:bg-blue-900 py-2 transition-colors duration-300"
            type="submit"
            >
          <span> Next </span>
          <FaArrowRight />
          </button>
          </div>


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
      </Background>
    </div>
  );
};

export default Create;
