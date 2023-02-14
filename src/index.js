import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "../src/components/Navbar/navbar.css";
import "../src/components/Sidebar/sidebar.css";
import "../src/components/Header/header.css";
import "../src/components/HomeDescription/homedescription.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
