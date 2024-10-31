import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Update from "./Update";
import backgroundImage from "/src/assets/images/bg.svg";
import Footer from "/src/components/Footer";
import SNavbar from "./SNavbar";

const Verification = () => {
  const navigate = useNavigate();

  const handleBackToLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
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
        <div className="rounded-md w-full max-w-md bg-white shadow-lg opacity-100 p-8">
          <h2 className="text-4xl font-bold text-center mb-10">Confirm Code</h2>
          <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
            <div class="flex mb-2 w-full space-x-2 rtl:space-x-reverse justify-center items-center">
              <div>
                <label for="code-1" class="sr-only">
                  First code
                </label>
                <input
                  type="text"
                  maxlength="1"
                  data-focus-input-init
                  data-focus-input-next="code-2"
                  id="code-1"
                  class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label for="code-2" class="sr-only">
                  Second code
                </label>
                <input
                  type="text"
                  maxlength="1"
                  data-focus-input-init
                  data-focus-input-prev="code-1"
                  data-focus-input-next="code-3"
                  id="code-2"
                  class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label for="code-3" class="sr-only">
                  Third code
                </label>
                <input
                  type="text"
                  maxlength="1"
                  data-focus-input-init
                  data-focus-input-prev="code-2"
                  data-focus-input-next="code-4"
                  id="code-3"
                  class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label for="code-4" class="sr-only">
                  Fourth code
                </label>
                <input
                  type="text"
                  maxlength="1"
                  data-focus-input-init
                  data-focus-input-prev="code-3"
                  data-focus-input-next="code-5"
                  id="code-4"
                  class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label for="code-5" class="sr-only">
                  Fifth code
                </label>
                <input
                  type="text"
                  maxlength="1"
                  data-focus-input-init
                  data-focus-input-prev="code-4"
                  data-focus-input-next="code-6"
                  id="code-5"
                  class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
              <div>
                <label for="code-6" class="sr-only">
                  Sixth code
                </label>
                <input
                  type="text"
                  maxlength="1"
                  data-focus-input-init
                  data-focus-input-prev="code-5"
                  id="code-6"
                  class="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  required
                />
              </div>
            </div>
            <p
              id="helper-text-explanation"
              class="mt-2 text-sm text-gray-500 dark:text-gray-400"
            >
              Please enter the 6 digit code we sent via email.
            </p>
            <div className="text-center mt-2">
              <span>
                <Link className="text-blue-500" to="/login">
                  Resend Code
                </Link>
              </span>
            </div>
            <button
              className="w-full mb-4 text-[18px] rounded-full mt-6 text-white bg-blue-600 hover:text-white py-2 transition-colors duration-300"
              type="submit"
              onClick={() => navigate("/login/new-password")}
            >
              Confirm
            </button>
            <div className="text-center">
              <span>
                Back to{" "}
                <button
                  className="text-blue-500"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Verification;
