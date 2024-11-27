import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDiscover, FaCcDinersClub, FaCcJcb, FaCcStripe } from 'react-icons/fa';

const getCardType = (cardNumber) => {
  const patterns = [
    { type: "Visa", regex: /^4\d{12}(\d{3})?(\d{3})?$/, icon: FaCcVisa },
    { type: "MasterCard", regex: /^(5[1-5]\d{4}|222[1-9]|22[3-9]\d{3}|2[3-6]\d{4}|27[01]\d{3}|2720)\d{10}$/, icon: FaCcMastercard },
    { type: "American Express", regex: /^3[47]\d{13}$/, icon: FaCcAmex },
    { type: "Discover", regex: /^(6011|622(12[6-9]|1[3-9]\d|[2-8]\d{2}|9[01]\d|92[0-5])|64[4-9]\d|65\d{2})\d{12}$/, icon: FaCcDiscover },
    { type: "Diners Club", regex: /^3(0[0-5]|[68]\d)\d{11}$/, icon: FaCcDinersClub },
    { type: "JCB", regex: /^35(2[89]|[3-8]\d)\d{12}$/, icon: FaCcJcb },
    { type: "UnionPay", regex: /^62\d{14,17}$/, icon: FaCcStripe },
    { type: "Maestro", regex: /^(50|5[6-9]|6\d)\d{10,17}$/, icon: FaCcStripe },
  ];

  for (const { type, regex, icon } of patterns) {
    if (regex.test(cardNumber)) {
      return icon; // Return the icon component
    }
  }

  return FaCcStripe; // Default icon if no match
};

export default getCardType;
