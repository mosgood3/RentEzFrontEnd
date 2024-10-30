import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";

const Update = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="rounded-md lg:mt-20 mt-10 h-full bg-white shadow-lg items-center justify-center p-8 relative">
      <h2 className="text-4xl font-bold text-center mb-6">New Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="relative my-8">
          <FaLock className="absolute right-2 top-4 text-black" />
          <input
            type="password"
            className="block w-80 py-2.5 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="password"
            className="absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-8"
          >
            New Password
          </label>
        </div>
        <div className="relative my-4">
          <FaLock className="absolute right-2 top-4 text-black" />
          <input
            type="password"
            className="block w-80 py-2.5 px-0 text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="password"
            className="absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-8"
          >
            New Password
          </label>
        </div>
        <button
          className="w-full mb-4 text-[18px] mt-6 rounded-full bg-blue-600 text-white hover:bg-blue-900 py-2 transition-colors duration-300"
          type="submit"
        >
          Update
        </button>
        <div>
          <div className="text-center">
            <span>
              Back to{" "}
              <Link className="text-blue-500" to="/login">
                Login
              </Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Update;
