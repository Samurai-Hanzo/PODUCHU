import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="login">
            <div className="login-logo">
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                    <span className="login-logo-title">PODUCHU</span>
                </Link>
            </div>
            <div className="log-form">
                <div className="log-form-title">
                    <span className="log-form-name m-10">
                        LOGIN A PODUCHU ACCOUNT
                    </span>
                    <input
                        className="log-form-input-name m-10"
                        name="mail"
                        type="mail"
                        placeholder="Your@gmail.com"
                    />
                    <input
                        className="log-form-input-name m-10"
                        name="password"
                        type="password"
                        placeholder="Password"
                    />

                    <button className="btn-new-acc m-10">Log In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
