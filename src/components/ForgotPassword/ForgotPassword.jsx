import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    return (
        <div className="login">
            <div className="login-logo">
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                    <span className="login-logo-title">PODUCHU</span>
                </Link>
            </div>
            <div className="log-form">
                <div className="log-form-title">
                    <span className="log-form-name m-10">Change Password</span>
                    <input
                        className="log-form-input-name m-10"
                        name="mail"
                        type="mail"
                        placeholder="Your@mail.com"
                    />

                    <button className="btn-new-acc m-10">Send me code</button>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
