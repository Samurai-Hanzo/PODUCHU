import React from "react";
import Header from "../components/Header/Header";
import HomeDescription from "../components/HomeDescription/HomeDescription";
// import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

const HomePage = () => {
    return (
        <div>
            <Sidebar />
            <Header />
            <HomeDescription />
        </div>
    );
};

export default HomePage;
