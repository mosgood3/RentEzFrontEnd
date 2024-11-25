// PasswordStrengthMeter.js
import React from 'react';
import validatePassword from './validatePassword';

function PasswordStrengthMeter({ password }) {
  const strength = validatePassword(password);

  const getProgressBarColor = (score) => {
    switch (score) {
      case 0:
      case 1:
      case 2:
        return "bg-red-500";
      case 3:
      case 4:
        return "bg-yellow-500";
      case 5:
        return "bg-green-500";
      default:
        return "bg-gray-300";
    }
  };

  if (!password) {
    return null;
  }
  return (
    <div className="password-strength-meter mx-12">
      <div className="progress-bar-container w-full bg-gray-200 rounded h-2">
        <div
          className={`progress-bar h-2 rounded ${getProgressBarColor(strength.score)}`}
          style={{ width: `${(strength.score / 5) * 100}%` }}
        />
      </div>
      <p className="strength-message mt-1 text-sm text-center slate-800">{strength.message}</p>
    </div>
  );
}

export default PasswordStrengthMeter;

