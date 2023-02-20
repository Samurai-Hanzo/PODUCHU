import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "../src/components/Navbar/navbar.css";
import "../src/components/Sidebar/sidebar.css";
import "../src/components/Header/header.css";
import "../src/components/HomeDescription/homedescription.css";
import "../src/components/Auth/auth.css";
import "../src/components/Login/login.css";
import "../src/components/ChangePassword/change.css";
import "../src/components/ForgotPassword/forgot.css";
import "../src/components/Mentor/css/mentorlist.css";
import MentorContextProvider from "./contexts/MentorContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MentorContextProvider>
        <App />
      </MentorContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
