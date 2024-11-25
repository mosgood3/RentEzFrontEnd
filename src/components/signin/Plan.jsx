import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Add this import for navigation
import SNavbar from "./SNavbar";
import backgroundImage from "/src/assets/images/bg.svg";
import Footer from "/src/components/Footer";

const Plan = () => {
  const [selectedPlan, setSelectedPlan] = useState("Choose Plan");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const [cvv, setCvv] = useState('');
  const [exp, setExp] = useState('');
  const [card, setCard] = useState('');
  
  const handleCvvChange = (event) => {
    const value = event.target.value.replace(/\D/g, '').slice(0, 3);
    setCvv(value);
  };
  const handleCardChange = (event) => {
    const value = event.target.value.replace(/\D/g, "");
    const formatted = value.match(/.{1,4}/g)?.join(" ") || "";
    setCard(formatted);
  };
  const handleExpChange = (event) => {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length > 2) {
      value = `${value.slice(0, 2)}/${value.slice(2, 4)}`;
    }
    setExp(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
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
        <div className="rounded-md w-full max-w-md bg-white shadow-lg p-8">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-6">
            Choose Your Plan
          </h2>

          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div>
                <div className="grid grid-cols-3 justify-center mb-10 gap-2">
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
              <div className="relative mb-10">
              <input
                type="text"
                id="BillingAddress"
                className="block w-full py-2 px-2 text-sm text-slate-800 bg-transparent border-b-2 border-slate-800 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="123 Sesame Street"
                maxLength="254"
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
                className="block w-full py-2 px-2 text-sm text-slate-800 bg-transparent border-b-2 border-slate-800 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="John Smith"
                maxLength="100"
              />
              <label
                htmlFor="NameCard"
                className="px-1 absolute text-sm text-slate-800 duration-300 transform -translate-y-0 scale-75 bottom-8 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-14"
              >
                Name on Card
              </label>
            </div>
            <div className="relative mb-10">
              <input
                type="text"
                id="card"
                value = {card}
                onChange={handleCardChange}
                className="block w-full py-2 px-2 text-sm text-slate-800 bg-transparent border-b-2 border-slate-800 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="xxxx-xxxx-xxxx-xxxx"
                maxLength="19"
              />
              <label
                htmlFor="card"
                className="px-1 absolute text-sm text-slate-800 duration-300 transform -translate-y-0 scale-75 bottom-8 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-14"

              >
                Card Number
              </label>
            </div>
            <div className="relative gap-2 mb-2 flex">
  {/* Expiration Date Input */}
  <div className="flex flex-col w-1/2 mr-2 relative">
    <input
      type="text"
      id="exp"
      value={exp}
      onChange={handleExpChange}
      className="block w-full py-2 px-2 text-sm text-slate-800 bg-transparent border-b-2 border-slate-800 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder="MM/YY"
      maxLength="5"
    />
    <label
      htmlFor="exp"
      className="px-1 absolute text-sm text-slate-800 duration-300 transform -translate-y-0 scale-75 bottom-8 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-14"
      >
      Expiration Date
    </label>
  </div>

  {/* CVV Input */}
  <div className="flex flex-col w-1/2 ml-2 relative">
    <input
      type="text"
      id="cvv"
      value={cvv}
      onChange={handleCvvChange}
      className="block w-full py-2 px-2 text-sm text-slate-800 bg-transparent border-b-2 border-slate-800 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder="xxx"
      maxLength="3"
    />
    <label
      htmlFor="cvv"
      className="px-1 absolute text-sm text-slate-800 duration-300 transform -translate-y-0 scale-75 bottom-8 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-14"
      >
      CVV*
    </label>
  </div>
</div>


              <button
                type="submit"
                className="w-full mb-4 text-[18px] mt-8 rounded-full bg-blue-600 text-white hover:bg-blue-900 py-2 transition-colors duration-300"
              >
                Create
              </button>
              <div className="text-center mt-4">
              <span className="text-slate-800">
                Back to{" "}
                <button
                  className="text-blue-500"
                  onClick={() => navigate("/sign-up")}
                >
                  account
                </button>
              </span>
            </div>
            </form>
          ) : (
            <div className="text-center">
              <p className="text-lg font-semibold">You have selected the {selectedPlan} plan!</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 text-blue-600"
              >
                Change Plan
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Plan;
