import React from "react";
import MenuIcon from "../../images/menu-img.svg";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-title-1">
                <img src={MenuIcon} alt="" />
            </div>
            <div className="sidebar-title-2">
                <i class="fa-brands fa-youtube icons"></i>
                <i class="fa-brands fa-twitter icons"></i>
                <i class="fa-brands fa-instagram icons"></i>
                <i class="fa-brands fa-facebook icons"></i>
            </div>
            <div className="sidebar-title-3"></div>
        </div>
    );
};

export default Sidebar;
