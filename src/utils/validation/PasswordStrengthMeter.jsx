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
        return "bg-red-600";
      case 3:
        return "bg-yellow-600";
      case 4:
        return "bg-blue-600";
      case 5:
        return "bg-green-600";
      default:
        return "bg-gray-300";
    }
  };

  if (!password) {
    return null;
  }
  return (
    <div className="relative mb-2">
    {/* Password Strength Meter */}
    <div className="absolute top-0 right-8 w-1/3">
      <div className="password-strength-meter flex items-center">
        <p className="strength-message text-xs text-slate-800 mr-2">
          {strength.message}
        </p>
        <div className="progress-bar-container w-full bg-gray-200 rounded h-1">
          <div
            className={`progress-bar h-1 rounded ${getProgressBarColor(strength.score)}`}
            style={{ width: `${(strength.score / 5) * 100}%` }}
          />
        </div>
      </div>
    </div>
    </div>
  );
}

export default PasswordStrengthMeter;

