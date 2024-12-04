import React from "react";
import Footer from "../Footer";
import Lnavbar from "./Lnavbar";

const Landing = () => (
  <div className="w-full">
    <Lnavbar />

    {/* Main Section */}
    <div className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-b from-blue-400 to-blue-600 text-white">
      <h1 className="mb-4 text-5xl font-bold text-center leading-tight">
        Simplify your renting needs
      </h1>
      <p className="mb-6 text-lg font-normal text-center text-gray-200 max-w-xl">
        RentEz is a property management software with rich features including an 
        online payment portal, detailed analytics, and a work orders portal.
      </p>
      <a
        href="#"
        className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white border-2 border-white bg-transparent rounded-lg hover:bg-blue-400 hover:border-blue-400 focus:ring-4 focus:ring-blue-300 transition duration-500"
      >
        Learn more
        <svg
          className="w-4 h-4 ml-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>

    {/* Plans Section */}
    <div className="w-full py-8 bg-white">
      <h2 className="text-4xl font-bold text-center text-slate-800 mb-6">
        Select the Plan for Your Business Needs
      </h2>
    </div>

    <Footer />
  </div>
);

export default Landing;
