import React from "react";
import Footer from "../Footer";
import Lnavbar from "./Lnavbar";

const Landing = () => (
  <div className="w-full">
    <Lnavbar />

{/* Main Section */}
<div
  className="relative flex flex-col items-center justify-center w-full h-screen px-4 text-white"
  style={{
    background: "radial-gradient(circle, #60a5fa,#3730a3)",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black opacity-20 pointer-events-none"></div>

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center text-center">
    <h1 className="mb-4 text-5xl font-extrabold tracking-tight leading-tight sm:text-6xl lg:text-7xl">
      Simplify your renting needs
    </h1>
    <p className="mb-8 text-lg font-medium text-gray-200 max-w-xl sm:text-xl">
      RentEz is a property management software with rich features including an 
      online payment portal, detailed analytics, and a work orders portal.
    </p>
    <a
      href="#"
      className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-500 hover:scale-105 focus:ring-4 focus:ring-blue-300 transition-transform duration-300"
    >
      Learn more
      <svg
        className="w-5 h-5 ml-2 rtl:rotate-180"
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

  {/* Curve */}
<div className="absolute bottom-0 w-full">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 240"
    className="w-full h-auto"
  >
    <path
      fill="#ffffff"
      d="M0,160 C420,320 720,0 1440,160 L1440,320 L0,320 Z"
    />
  </svg>
</div>

</div>


    {/* Plans Section */}
    <div className="w-full py-8 mx-4 bg-white">
  <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
    Select the Plan for Your Business Needs
  </h2>

  {/* Plan Options */}
  <div className="flex flex-wrap justify-center gap-8 px-4">
    {/* Plan 1 */}
    <div className="w-full max-w-xs p-6 bg-blue-50 border border-blue-200 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
      <h3 className="text-2xl font-semibold text-blue-600 mb-4 text-center">
        Basic
      </h3>
      <p className="text-gray-600 mb-6 text-center">
        Ideal for individuals or small landlords.
      </p>
      <ul className="text-sm text-gray-700 mb-6">
        <li>✔ Manage up to 5 properties</li>
        <li>✔ Basic analytics</li>
        <li>✔ Email support</li>
      </ul>
      <button className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-500 transition duration-300">
        Free
      </button>
    </div>

    {/* Plan 2 */}
    <div className="w-full max-w-xs p-6 bg-blue-50 border border-blue-200 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
      <h3 className="text-2xl font-semibold text-blue-600 mb-4 text-center">
        Standard
      </h3>
      <p className="text-gray-600 mb-6 text-center">
        Ideal for individuals or small landlords.
      </p>
      <ul className="text-sm text-gray-700 mb-6">
        <li>✔ Manage up to 5 properties</li>
        <li>✔ Basic analytics</li>
        <li>✔ Email support</li>
      </ul>
      <button className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-500 transition duration-300">
        $4.99/Month
      </button>
    </div>

    {/* Plan 3 */}
    <div className="w-full max-w-xs p-6 bg-blue-50 border border-blue-200 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
      <h3 className="text-2xl font-semibold text-blue-600 mb-4 text-center">
        Premium
      </h3>
      <p className="text-gray-600 mb-6 text-center">
        Ideal for individuals or small landlords.
      </p>
      <ul className="text-sm text-gray-700 mb-6">
        <li>✔ Manage up to 5 properties</li>
        <li>✔ Basic analytics</li>
        <li>✔ Email support</li>
      </ul>
      <button className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-500 transition duration-300">
        $19.99/Month
      </button>
    </div>
  </div>
</div>


    <Footer />
  </div>
);

export default Landing;
