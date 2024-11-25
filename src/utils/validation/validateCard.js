function validatePhone(card) {
  const digits = phone.replace(/\D/g, "").slice(0, 16);

  if (digits.length > 0) {
      card = `(${digits.slice(0, 3)})`;
  }
  if (digits.length > 3) {
      card += ` ${digits.slice(3, 6)}`;
  }
  if (digits.length > 6) {
      card += `-${digits.slice(6, 10)}`;
  }

  return card;
}

export default validatePhone;