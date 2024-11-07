function validatePassword(password) {
    let score = 0;
  
    const lengthCriteria = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
    if (lengthCriteria) score += 1;
    if (hasUppercase) score += 1;
    if (hasLowercase) score += 1;
    if (hasDigit) score += 1;
    if (hasSpecialChar) score += 1;
  
    if (score <= 2) {
      return { message: "Weak password", score };
    } else if (score === 3) {
      return { message: "Medium password", score };
    } else if (score >= 4) {
      return { message: "Strong password", score };
    }
  }
  
  export default validatePassword;
  