import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Listing from "../pages/Listing";
import Gallery from "../pages/Gallery";
import About from "../pages/AboutUs";
// import Contact from '../pages/Contact'
import Footer from "../components/Footer/Footer";
import { Signup } from "../pages/Signup";
import { Login } from "../pages/Login";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}>
          <Route path="/home" element={<Home />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Footer />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Routers;
