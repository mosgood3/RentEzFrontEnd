import React from "react";
import { RiHomeSmile2Fill } from "react-icons/ri";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const SNavbar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center pt-8 lg:px-28 w-full">
      {/* Logo and Title in a row */}
      <div className="flex items-center mb-2">
        <RiHomeSmile2Fill className="lg:text-6xl text-4xl text-white" />
        <h2 className="font-sans font-bold text-white lg:text-5xl text-4xl ml-2">
          Rent
        </h2>
        <h2 className="font-sans font-bold text-white lg:text-6xl text-5xl ml-2">
          Ez
        </h2>
      </div>
      {/* Home Button beneath the Logo and Title */}
      <div className="flex flex-row">
        <button
          className="flex items-center bg-transparent text-white text-lg py-1 px-3 md:py-2 md:px-4 hover:text-blue-900 rounded-full transition-colors"
          onClick={() => navigate("/")}
        >
          <IoMdArrowRoundBack className="mr-2" /> {/* Add margin to the icon */}
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default SNavbar;
