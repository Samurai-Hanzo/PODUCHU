import { IconButton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "../../asstets/menu-img.svg";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-title-1">
                <img src={MenuIcon} alt="" />
            </div>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <span className="logo">PODUCHU</span>
            </Link>
            <div className="sidebar-title-2">
                <i className="fa-brands fa-youtube icons"></i>
                <i className="fa-brands fa-twitter icons"></i>
                <i className="fa-brands fa-instagram icons"></i>
                <i className="fa-brands fa-facebook icons"></i>
            </div>
            <div className="sidebar-title-3">
                <Link to="/registration">
                    <i class="fa-solid fa-right-to-bracket icons"></i>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
