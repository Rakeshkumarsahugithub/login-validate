# Login & Sign-Up Application

A responsive React application with Login and Sign-Up functionality, featuring form validation, localStorage integration, and toast notifications.
  <a href="https://login-validate-ten.vercel.app"><strong>Live Demo 🚀</strong></a>
## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Form Validation**: Comprehensive validation for all input fields
- **Reusable Components**: Modular input components for maintainability
- **Local Storage**: User data persistence using localStorage
- **Toast Notifications**: Real-time feedback for user actions
- **Routing**: Smooth navigation between Login and Sign-Up screens
- **Password Toggle**: Show/hide password functionality

## Validation Rules

- **Name**: Only alphabets allowed
- **Username**: Alphanumeric values with special characters, minimum 3 characters
- **Email**: Valid email format (Google email standard)
- **Phone**: Country code + phone number format
- **Password**: Alphanumeric with special characters, minimum 6 characters, must be different from username
- **Confirm Password**: Must match the password field

## Installation & Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view the application

## Project Structure

```
src/
├── components/
│   ├── common/
│   │   ├── InputField.js
│   │   └── InputField.css
│   ├── Login/
│   │   ├── Login.js
│   │   └── Login.css
│   └── SignUp/
│       ├── SignUp.js
│       └── SignUp.css
├── utils/
│   └── validation.js
├── App.js
├── App.css
├── index.js
└── index.css
```

## Usage

1. **Sign-Up**: Create a new account with all required fields
2. **Login**: Sign in with your username and password
3. **Navigation**: Click "SignUp" on login screen to navigate to registration
4. **Validation**: Real-time validation with error messages below input fields
5. **Success**: Toast notifications for successful operations

## Technologies Used

- React 18
- React Router DOM
- React Toastify
- CSS3 with Flexbox
- localStorage API
#
