import React from "react";
import { RiHomeSmile2Fill } from "react-icons/ri";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const SNavbar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center pt-8 lg:px-28 w-full">
      <button className="flex items-center mb-2"
      onClick={() => navigate("/")}>
        <RiHomeSmile2Fill className="lg:text-6xl text-4xl text-white" />
        <h2 className="font-sans font-bold text-white lg:text-5xl text-4xl ml-2">
          Rent
        </h2>
        <h2 className="font-sans font-bold text-white lg:text-6xl text-5xl ml-2">
          Ez
        </h2>
      </button>
    </div>
  );
};

export default SNavbar;
