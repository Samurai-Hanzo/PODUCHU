import React from "react";
import { Link } from "react-router-dom";

const Code = () => {
    return (
        <div className="login">
            <div className="login-logo">
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                    <span className="login-logo-title">PODUCHU</span>
                </Link>
            </div>
            <div className="log-form">
                <div className="log-form-title">
                    <span className="log-form-name m-10">CHANGE PASSWORD</span>
                    <input
                        className="log-form-input-name m-10"
                        name="code"
                        type="number"
                        placeholder="Code"
                    />
                    <input
                        className="log-form-input-name m-10"
                        name="mail"
                        type="mail"
                        placeholder="Your@gmail.com"
                    />
                    <input
                        className="log-form-input-name m-10"
                        name="New password"
                        type="password"
                        placeholder="New password"
                    />
                    <input
                        className="log-form-input-name m-10"
                        name="Confirm new password"
                        type="password"
                        placeholder="Confirm new password"
                    />

                    <button className="btn-new-acc m-10">
                        Change Password
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Code;
