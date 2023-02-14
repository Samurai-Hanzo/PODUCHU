import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUsPage from "./pages/AboutUsPage";
import AdminPage from "./pages/AdminPage";
import AuthPage from "./pages/AuthPage";
import ContactUsPage from "./pages/ContactUsPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import SupportPage from "./pages/SupportPage";

const Mainroutes = () => {
    const PUBLIC_ROUTES = [
        { link: "/", element: <HomePage />, id: 1 },
        { link: "/auth", element: <AuthPage />, id: 2 },
        { link: "*", element: <NotFoundPage />, id: 3 },
        { link: "/contactus", element: <ContactUsPage />, id: 4 },
        { link: "/aboutus", element: <AboutUsPage />, id: 5 },
        { link: "/support", element: <SupportPage />, id: 6 },
    ];

    const PRIVATE_ROUTES = [{ link: "/admin", element: <AdminPage />, id: 7 }];
    return (
        <div>
            <Routes>
                {PUBLIC_ROUTES.map((item) => (
                    <Route
                        path={item.link}
                        element={item.element}
                        key={item.id}
                    />
                ))}
            </Routes>
        </div>
    );
};

export default Mainroutes;
