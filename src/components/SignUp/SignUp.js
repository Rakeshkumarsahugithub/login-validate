import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import InputField from '../common/InputField';
import { 
  validateName, 
  validateUsername, 
  validateEmail, 
  validatePhone, 
  validatePassword, 
  validateConfirmPassword 
} from '../../utils/validation';
import './SignUp.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    const nameError = validateName(formData.name);
    if (nameError) newErrors.name = nameError;
    
    const usernameError = validateUsername(formData.username);
    if (usernameError) newErrors.username = usernameError;
    
    const emailError = validateEmail(formData.email);
    if (emailError) newErrors.email = emailError;
    
    const phoneError = validatePhone(formData.phone);
    if (phoneError) newErrors.phone = phoneError;
    
    const passwordError = validatePassword(formData.password, formData.username);
    if (passwordError) newErrors.password = passwordError;
    
    const confirmPasswordError = validateConfirmPassword(formData.password, formData.confirmPassword);
    if (confirmPasswordError) newErrors.confirmPassword = confirmPasswordError;
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fix the errors before submitting');
      return;
    }

    // Check if user already exists
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const existingUser = users.find(u => u.username === formData.username || u.email === formData.email);
    
    if (existingUser) {
      if (existingUser.username === formData.username) {
        toast.error('Username already exists');
        setErrors(prev => ({ ...prev, username: 'Username already exists' }));
      } else {
        toast.error('Email already exists');
        setErrors(prev => ({ ...prev, email: 'Email already exists' }));
      }
      return;
    }

    // Save user to localStorage
    const newUser = {
      id: Date.now(),
      name: formData.name,
      username: formData.username,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
      createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    toast.success('Account created successfully!');
    
    // Navigate to login page after successful signup
    setTimeout(() => {
      navigate('/login');
    }, 1500);
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-header">
          <h1>Create new Account</h1>
        </div>
        
        <div className="signup-form-container">
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-row">
              <div className="form-col">
                <InputField
                  type="text"
                  placeholder=""
                  label="NAME"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  error={errors.name}
                />
              </div>
              <div className="form-col">
                <InputField
                  type="text"
                  placeholder=""
                  label="USERNAME"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  error={errors.username}
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-col">
                <InputField
                  type="email"
                  placeholder=""
                  label="EMAIL"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  error={errors.email}
                />
              </div>
              <div className="form-col">
                <InputField
                  type="tel"
                  placeholder=""
                  label="PHONE NO."
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  error={errors.phone}
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-col">
                <InputField
                  type="password"
                  placeholder=""
                  label="NEW PASSWORD"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  error={errors.password}
                  showPasswordToggle={true}
                />
              </div>
              <div className="form-col">
                <InputField
                  type="password"
                  placeholder=""
                  label="CONFIRM NEW PASSWORD"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  error={errors.confirmPassword}
                  showPasswordToggle={true}
                />
              </div>
            </div>
            
            <button type="submit" className="signup-button">
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
