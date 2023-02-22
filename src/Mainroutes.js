import React from "react";
import { Route, Routes } from "react-router-dom";
import Code from "./components/ForgotPassword/Code";
import MentorCard from "./components/Mentor/MentorCard";
import AboutUsPage from "./pages/AboutUsPage";
import AllMentors from "./pages/AllMentors";
import AuthPage from "./pages/AuthPage";
import ChangePassPage from "./pages/ChangePassPage";
import ContactUsPage from "./pages/ContactUsPage";
import ForgotPassPage from "./pages/ForgotPassPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import SupportPage from "./pages/SupportPage";

const Mainroutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/registration", element: <AuthPage />, id: 2 },
    { link: "*", element: <NotFoundPage />, id: 3 },
    { link: "/contactus", element: <ContactUsPage />, id: 4 },
    { link: "/aboutus", element: <AboutUsPage />, id: 5 },
    { link: "/support", element: <SupportPage />, id: 6 },
    { link: "/login", element: <LoginPage />, id: 7 },
    { link: "/forgotPass", element: <ForgotPassPage />, id: 8 },
    { link: "/changePass", element: <ChangePassPage />, id: 9 },
    { link: "/changePassWithCode", element: <Code />, id: 10 },
    { link: "/allMentors", element: <AllMentors />, id: 11 },
    // { link: "/oneMentor/:id", element: <MentorCard />, id: 12 },
    { link: "/oneMentor/:id", element: <MentorCard />, id: 12 },
  ];
  return (
    <div>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </div>
  );
};

export default Mainroutes;
