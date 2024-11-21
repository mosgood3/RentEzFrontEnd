
import React, { useState } from "react";
import validatePhone from "/src/utils/validatePhone";

const Create = () => {

const [phoneError, setPhoneError] = useState("");
const handlePhoneChange = (e) => {
    const formattedPhone = validatePhone(e.target.value);
    setPhone(formattedPhone);
  };



<div className="relative w-1/2">
<FaPhoneAlt className="absolute right-2 top-4 text-slate-800" />
<input
  type="text"
  id="phone"
  className="block w-full py-2.5 px-0 text-sm text-slate-800 bg-transparent border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
  placeholder=" "
  value={phone}
  onChange={handlePhoneChange}
/>
<label
  htmlFor="phone"
  className="absolute text-sm text-slate-800 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-8"
>
  Phone Number
</label>
{phoneError && <p className="text-red-500 text-sm mt-4">{phoneError}</p>}
</div>
}

export default Create;