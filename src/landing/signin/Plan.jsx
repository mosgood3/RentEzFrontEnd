import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaPhoneAlt } from "react-icons/fa";
import { RiArrowDropDownLine, RiHomeSmile2Fill } from "react-icons/ri";
import SNavbar from "./SNavbar";
import backgroundImage from "/src/assets/images/bg.svg";
import validateEmail from "/src/utils/validateEmail";
import PasswordStrengthMeter from "/src/utils/PasswordStrengthMeter";
import Footer from "/src/components/Footer";
import { MdEmail } from "react-icons/md";
import { createLandlord } from "/src/utils/api/LandlordPost";

const Plan = () => {
    const [selectedPlan, setSelectedPlan] = useState("Choose Plan");

}

return (
<div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-screen flex flex-col"
    >

    </div>

)

export default Plan