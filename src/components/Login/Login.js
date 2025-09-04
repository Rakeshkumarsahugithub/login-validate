import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import InputField from '../common/InputField';
import { validateUsername, validatePassword } from '../../utils/validation';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
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
    
    const usernameError = validateUsername(formData.username);
    if (usernameError) newErrors.username = usernameError;
    
    const passwordError = validatePassword(formData.password);
    if (passwordError) newErrors.password = passwordError;
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fix the errors before submitting');
      return;
    }

    // Check if user exists in localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.username === formData.username && u.password === formData.password);
    
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      toast.success('Login successful!');
      // In a real app, you would navigate to a dashboard or home page
      setTimeout(() => {
        toast.info('Welcome back! In a real app, you would be redirected to the dashboard.');
      }, 1000);
    } else {
      toast.error('Invalid username or password');
    }
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Login</h1>
          <p>Sign in to continue</p>
        </div>
        
        <div className="login-form-container">
          <form onSubmit={handleSubmit} className="login-form">
            <InputField
              type="text"
              placeholder=""
              label="USERNAME"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              error={errors.username}
            />
            
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
            
            <button type="submit" className="login-button">
              LOGIN
            </button>
            
            <div className="signup-link">
              <span>Don't have Account? </span>
              <button type="button" onClick={handleSignUpClick} className="signup-text">
                SignUp
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
