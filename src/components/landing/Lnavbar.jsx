import React from "react";
import { RiHomeSmile2Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Lnavbar = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="fixed flex items-center py-4 px-6 lg:px-28 w-full justify-between z-50 bg-white shadow-md backdrop-blur-sm">
      <div className="flex items-center">
        <RiHomeSmile2Fill className="lg:text-6xl text-4xl text-blue-600" />
        <h2 className="font-sans font-bold text-blue-600 lg:text-5xl text-4xl ml-2">
          Rent
        </h2>
        <h2 className="font-sans font-bold text-slate-800 lg:text-6xl text-5xl ml-2">
          Ez
        </h2>
      </div>
      <div className="flex space-x-4">
        <button
          className="text-white bg-blue-600 font-semibold py-2 px-4 rounded-full text-sm md:text-base hover:bg-blue-700 transition duration-300"
          onClick={handleLoginClick}
        >
          Log In
        </button>
        <button
          className="text-blue-600 border-2 border-blue-600 font-semibold py-2 px-4 rounded-full text-sm md:text-base hover:bg-blue-600 hover:text-white transition duration-300"
          onClick={() => navigate("/sign-up")}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Lnavbar;
