import React from "react";
import { FaEnvelope } from 'react-icons/fa'; // Make sure to import any necessary icons
import Footer from "../components/Footer"; // Adjust the import path based on your project structure
import {RiHomeSmile2Fill} from "react-icons/ri";
import Lnavbar from "./Lnavbar";

const Landing = () => (
    <div className="w-full">
      <Lnavbar />

      <div className="flex flex-col lg:flex-row bg-gradient-to-b from-blue-400 mt-8 to-blue-600">
        {/* Welcome Section */}
        <div className="flex-1 lg:ml-12 bg-transparent text-white flex flex-col justify-center items-start p-8 lg:w-3/5">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
            Renting Simplified
          </h1>
          <p className="mb-6 text-lg font-normal text-gray-200">
            Here at RentEz, we offer a secure payment portal for renters to make
            payments easily and contact their landlords, while helping landlords
            manage and track their properties effortlessly.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border-2 border-white text-white bg-transparent rounded-lg hover:text-white hover:bg-blue-400 focus:ring-4 focus:ring-blue-300 transition duration-500"
          >
            Learn more
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
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
          <div className="mt-12 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-2 text-center text-white">
  {/* Basic Plan */}
  <div className="hover:bg-slate-900 opacity-80 p-6 bg-blue-600 shadow-lg rounded-lg duration-300">
    <h2 className="text-2xl font-bold mb-4">RentEz Basic</h2>
    <p className="text-xl mb-6">$4.99 / month</p>
    <p className="text-gray-200 mb-6">Includes basic rental features secure payments, up to 5 tenants</p>
    <a
      href="#"
      className="inline-block px-5 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-blue-600 transition duration-300"
    >
      Choose Basic
    </a>
  </div>

  {/* Standard Plan */}
  <div className="hover:bg-slate-900 bg-blue-700 opacity-80 p-6 shadow-lg rounded-lg duration-300">
    <h2 className="text-2xl font-bold mb-4">RentEz Standard</h2>
    <p className="text-xl mb-6">$9.99 / month</p>
    <p className="text-gray-200 mb-6">All basic features plus advanced work order portal, up to 15 tenants</p>
    <a
      href="#"
      className="inline-block px-5 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-blue-600 transition duration-300"
    >
      Choose Standard
    </a>
  </div>

  {/* Premium Plan */}
  <div className="hover:bg-slate-900 opacity-80 p-6 bg-gradient-to-tr from-blue-400 to-blue-800 shadow-lg rounded-lg duration-300">
    <h2 className="text-2xl font-bold mb-4">RentEz Premium</h2>
    <p className="text-xl mb-6">$19.99 / month</p>
    <p className="text-gray-200 mb-6">Everything in Standard, plus advanced payment tracking, ulimited tenants</p>
    <a
      href="#"
      className="inline-block px-5 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-blue-600 transition duration-300"
    >
      Choose Premium
    </a>
  </div>
</div>
</div>
        {/* Video Section */}
        <div className="lg:w-2/5 lg:mr-8 mt-8 lg:mt-0 justify-center bg-transparent p-8">
          <h2 className="lg:text-4xl text-2xl mb-4 text-center text-white font-bold font-sans">
            Tutorial
          </h2>
          <div className="relative shadow-lg " style={{ paddingBottom: "56.25%" }}>
            {/* 16:9 aspect ratio */}
            <iframe
              src="https://www.youtube.com/embed/r9jwGansp1E"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
      {/* Add Footer at the bottom */}
      <Footer />
    </div>
);

export default Landing;
