import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"; // Importing the icon components

const SocialMediaLink = ({ href, icon, hoverClass }) => {
  return (
    <a
      href={href}
      target="_blank" // Opens the link in a new tab
      rel="noopener noreferrer" // Security measure
      className={`flex items-center transition-colors duration-300 ${hoverClass}`}
    >
      {icon}
    </a>
  );
};

const Footer = () => (
  <div className="w-full absolute-0 bg-transparent text-white py-4 mt-4">
    <div className="flex items-center justify-between px-4">
      <div className="text-sm font-bold">
        © 2024 RentEz - All Rights Reserved
      </div>
      <div className="flex space-x-4">
        <SocialMediaLink
          href="https://facebook.com"
          icon={<FaFacebook size={24} />}
          hoverClass="hover:text-blue-600"
        />
        <SocialMediaLink
          href="https://instagram.com"
          icon={<FaInstagram size={24} />}
          hoverClass="hover:text-pink-600"
        />
        <SocialMediaLink
          href="https://twitter.com"
          icon={<FaTwitter size={24} />}
          hoverClass="hover:text-blue-400"
        />
        <SocialMediaLink
          href="https://linkedin.com"
          icon={<FaLinkedin size={24} />}
          hoverClass="hover:text-blue-700"
        />
      </div>
    </div>
  </div>
);

export default Footer;
