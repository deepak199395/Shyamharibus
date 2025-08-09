import React from 'react';
import Header from '../../Componants/Layout/Header';
import "../Auth/Register.css";

const Register = () => {
  return (
    <div>
      <Header />
      <div className="register-page">
        <form className="register-form">
          <h2>Create Account</h2>

          <label>Full Name</label>
          <input type="text" placeholder="Enter your full name" />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Phone</label>
          <input type="text" placeholder="Enter your phone number" />

          <label>Password</label>
          <input type="password" placeholder="Enter password" />

          <label>Confirm Password</label>
          <input type="password" placeholder="Re-enter password" />

          <button type="submit">Register</button>

          <p className="login-link">
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
