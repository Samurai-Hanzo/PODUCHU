import React from "react";
import { Link } from "react-router-dom";

const Auth = () => {
    return (
        <div className="auth">
            <div className="auth-logo">
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                    <span className="auth-logo-title">PODUCHU</span>
                </Link>
            </div>
            <div className="reg-form">
                <div className="reg-form-title">
                    <span className="reg-form-name m-10">
                        CREATE A PODUCHU ACCOUNT
                    </span>
                    <input
                        className="reg-form-input-name m-10"
                        name="name"
                        type="text"
                        placeholder="Name"
                    />
                    <input
                        className="reg-form-input-name m-10"
                        name="last name"
                        type="text"
                        placeholder="Last name"
                    />
                    <input
                        className="reg-form-input-name m-10"
                        name="mail"
                        type="mail"
                        placeholder="Your@gmail.com"
                    />
                    <input
                        className="reg-form-input-name m-10"
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                    <input
                        className="reg-form-input-name m-10"
                        name="confirm password"
                        type="password"
                        placeholder="Confirm password"
                    />
                    <button className="btn-new-acc m-10">
                        Create a New Account
                    </button>
                    <span className="have-acc m-10">
                        Already have an account?
                    </span>
                    <Link
                        className="btn-have-acc m-10"
                        to="/login"
                        style={{ textDecoration: "none" }}
                    >
                        Log In
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Auth;
