import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createAcc } from "../../store/mentorsSlice";
import { useDispatch } from "react-redux";

const Auth = () => {
  const [createdAccSuccesful, setcreatedAccSuccesful] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const dispatch = useDispatch();

  const handleCLick = async () => {
    if (password === passwordConfirm) {
      await dispatch(
        createAcc({
          email,
          password,
          passwordConfirm,
        })
      );
    } else {
      alert("passwords does not match ");
    }
    console.log(123);

    setEmail("");
    setPassword("");
    setPasswordConfirm("");
    setcreatedAccSuccesful(true);
  };

  return (
    <div className="auth">
      <div className="auth-logo">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <span className="auth-logo-title">PODUCHU</span>
        </Link>
      </div>
      <div className="reg-form">
        <div className="reg-form-title">
          <span className="reg-form-name m-10">CREATE A PODUCHU ACCOUNT</span>

          <input
            className="reg-form-input-name m-10"
            name="mail"
            type="mail"
            placeholder="Your@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="reg-form-input-name m-10"
            name="password"
            value={password}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="reg-form-input-name m-10"
            name="confirm password"
            value={passwordConfirm}
            type="password"
            placeholder="Confirm password"
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <button className="btn-new-acc m-10" onClick={handleCLick}>
            Create a New Account
          </button>
          <span className="have-acc m-10">Already have an account?</span>
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
