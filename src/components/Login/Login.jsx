import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LoginAcc } from "../../store/mentorsSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleCLick = async () => {
    if (!email.trim() || !password.trim()) {
      alert("enter info retard");
      return;
    }
    await dispatch(
      LoginAcc({
        email,
        password,
      })
    );
    navigate("/");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="login">
      <div className="login-logo">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <span className="login-logo-title">PODUCHU</span>
        </Link>
      </div>
      <div className="log-form">
        <div className="log-form-title">
          <span className="log-form-name m-10">LOGIN A PODUCHU ACCOUNT</span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="log-form-input-name m-10"
            name="mail"
            type="mail"
            placeholder="Your@gmail.com"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="log-form-input-name m-10"
            name="password"
            type="password"
            placeholder="Password"
          />

          <button className="btn-new-acc m-10" onClick={handleCLick}>
            Log In
          </button>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/forgotPass"
          >
            Forgot password?
          </Link>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/changePass"
          >
            Change password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
