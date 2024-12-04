import React from "react";

const Background = ({ children }) => {
  return (
    <div
      className="min-h-screen flex flex-col bg-blue-600 sm:bg-[url('/src/assets/images/bg.svg')] sm:bg-cover sm:bg-center"
    >
      {children}
    </div>
  );
};

export default Background;
