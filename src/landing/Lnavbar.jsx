import React from "react";
import { RiHomeSmile2Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Lnavbar = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="flex items-center pt-4 lg:px-28 w-full justify-between">
      <div className="flex items-center">
        <RiHomeSmile2Fill className="lg:text-6xl text-4xl text-blue-600" />
        <h2 className="font-sans font-bold text-black lg:text-5xl text-4xl ml-2">
          Rent
        </h2>
        <h2 className="font-sans font-bold text-black lg:text-6xl text-5xl ml-2">
          Ez
        </h2>
      </div>
      <div className="flex mr-4 space-x-1">
        <button
          className="bg-blue-600 text-white font-bold mt-4 py-1 px-3 md:py-2 md:px-4 rounded-full lg:ml-4 text-sm md:text-base"
          onClick={handleLoginClick}
        >
          Log In
        </button>
        <button
          className="bg-transparent text-blue-600 border-2 border-blue-600 font-bold mt-4 py-1 px-3 md:py-2 md:px-4 rounded-full lg:ml-4 text-sm md:text-base"
          onClick={() => navigate("/Sign-up")}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Lnavbar;
