// Validation utility functions
export const validateName = (name) => {
  const nameRegex = /^[A-Za-z\s]+$/;
  if (!name.trim()) return 'Name is required';
  if (!nameRegex.test(name)) return 'Name should contain only alphabets';
  return '';
};

export const validateUsername = (username) => {
  const usernameRegex = /^[A-Za-z0-9@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/;
  if (!username.trim()) return 'Username is required';
  if (username.length < 3) return 'Username must be at least 3 characters';
  if (!usernameRegex.test(username)) return 'Username can contain alphanumeric values and special characters only';
  return '';
};

export const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email.trim()) return 'Email is required';
  if (!emailRegex.test(email)) return 'Please enter a valid email address';
  return '';
};

export const validatePhone = (phone) => {
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;
  if (!phone.trim()) return 'Phone number is required';
  if (!phoneRegex.test(phone)) return 'Please enter a valid phone number with country code';
  return '';
};

export const validatePassword = (password, username = '') => {
  const passwordRegex = /^[A-Za-z0-9@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/;
  if (!password.trim()) return 'Password is required';
  if (password.length < 6) return 'Password must be at least 6 characters';
  if (!passwordRegex.test(password)) return 'Password can contain alphanumeric values and special characters only';
  if (username && password === username) return 'Password should not be same as username';
  return '';
};

export const validateConfirmPassword = (password, confirmPassword) => {
  if (!confirmPassword.trim()) return 'Confirm password is required';
  if (password !== confirmPassword) return 'Passwords do not match';
  return '';
};
