import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMentors } from "../../store/mentorsSlice";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <Link to="/products" style={{ textDecoration: "none", color: "black" }}>
          <span className="navlink">Find Mentor</span>
        </Link>
        <Link to="/products" style={{ textDecoration: "none", color: "black" }}>
          <span className="navlink">Group Classes</span>
        </Link>
        <Link to="/products" style={{ textDecoration: "none", color: "black" }}>
          <span className="navlink">Store</span>
        </Link>
        <Link to="/support" style={{ textDecoration: "none", color: "black" }}>
          <span className="navlink">Support</span>
        </Link>
      </div>
      <div className="created-by">created by Makers Students</div>
    </div>
  );
    return (
        <div className="navbar">
            <div className="navbar-links">
                <Link
                    to="/mentorList"
                    style={{ textDecoration: "none", color: "black" }}
                >
                    <span className="navlink">Find Mentor</span>
                </Link>
                <Link
                    to="/products"
                    style={{ textDecoration: "none", color: "black" }}
                >
                    <span className="navlink">Group Classes</span>
                </Link>
                <Link
                    to="/products"
                    style={{ textDecoration: "none", color: "black" }}
                >
                    <span className="navlink">Store</span>
                </Link>
                <Link
                    to="/support"
                    style={{ textDecoration: "none", color: "black" }}
                >
                    <span className="navlink">Support</span>
                </Link>
            </div>
            <div className="created-by">created by Makers Students</div>
        </div>
    );
};

export default Navbar;
