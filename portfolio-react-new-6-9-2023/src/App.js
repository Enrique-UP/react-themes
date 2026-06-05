import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/common/common.scss";

import Header from "./pages/modules/Header";
import Footer from "./pages/modules/Footer";
import RenderToTop from "./pages/modules/RenderToTop";
import Top from "./pages/modules/Top";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import ReviewsPage from "./pages/ReviewsPage";
import Contactus from "./pages/Contactus";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/reviews" element={<ReviewsPage />} />
        <Route exact path="/contact" element={<Contactus />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
      <div className="fw background"><i className="icon">&#xe039;</i></div>
      <RenderToTop />
      <Top />
    </>
  );
}

export default App;
