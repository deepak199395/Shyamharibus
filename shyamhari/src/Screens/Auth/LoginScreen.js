import React from 'react';
import "../Auth/LoginScreen.css";
import Header from '../../Componants/Layout/Header';

const LoginScreen = () => {
    return (
        <>
            <Header />
          <div className="login-page">
                <form className="login-form">
                    <h2>Login</h2>

                    <label>Email or Phone</label>
                    <input type="text" placeholder="Enter email or phone" />

                    <label>Password</label>
                    <input type="password" placeholder="Enter password" />

                    <button type="submit">Login</button>

                    <p className="register-link">
                        Don’t have an account? <a href="/Register">Register</a>
                    </p>
                </form>
            </div>
        </>

    );
};

export default LoginScreen;
