import React from "react";
import { RiHomeSmile2Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const SNavbar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center pt-8 lg:px-28 w-full">
      {/* Logo and Title in a row */}
      <div className="flex items-center mb-2">
        <RiHomeSmile2Fill className="lg:text-6xl text-4xl text-blue-600" />
        <h2 className="font-sans font-bold text-black lg:text-5xl text-4xl ml-2">
          Rent
        </h2>
        <h2 className="font-sans font-bold text-black lg:text-6xl text-5xl ml-2">
          Ez
        </h2>
      </div>
      {/* Home Button beneath the Logo and Title */}
      <button
        className="bg-transparent text-blue-600 text-lg py-1 px-3 md:py-2 md:px-4 rounded-full hover:bg-gray-200 transition-colors"
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>
    </div>
  );
};

export default SNavbar;
