import React, { useState } from 'react';
import './InputField.css';

const InputField = ({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  error, 
  showPasswordToggle = false,
  label,
  name
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputType = showPasswordToggle ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="input-field">
      {label && <label className="input-label">{label}</label>}
      <div className="input-container">
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          className={`input ${error ? 'input-error' : ''}`}
        />
        {showPasswordToggle && (
          <button
            type="button"
            className="password-toggle"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        )}
      </div>
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default InputField;
