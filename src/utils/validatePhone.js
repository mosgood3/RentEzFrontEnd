
function validatePhone(phone) {
    const digits = phone.replace(/\D/g, "").slice(0, 10);
    if (digits.length === 0) return ""; // Allow the field to be completely empty
    let res = '';
  
    if (digits.length > 0) {
        res = `(${digits.slice(0, 3)})`;
    }
    if (digits.length > 3) {
        res += ` ${digits.slice(3, 6)}`;
    }
    if (digits.length > 6) {
        res += `-${digits.slice(6, 10)}`;
    }
  
    return res;
  }

export default validatePhone;