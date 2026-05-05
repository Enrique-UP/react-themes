import {useEffect} from "react";
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';

import "aos/dist/aos.css";
import Aos from "aos";

import "./assets/sass/style.scss";

import Header from './modules/common/Header';
import Footer from './modules/common/Footer';

import Home from './modules/home/Home';
import LifeStyle from './modules/lifeStyle/LifeStyle';
import Portfolio from './modules/portfolio/Portfolio';
import Contact from './modules/contact/Contact';
import InnerPage from './modules/InnerPage';
import Poetry from './modules/poetry/Poetry';
import ThankYou from './modules/ThankYou';

import ScrollTop from './modules/common/ScrollTop';
import RenderTop from './modules/common/RenderTop';
import CommonScript from './modules/common/CommonScript';
import Reviews from './modules/review/Reviews';
import ScrollToHashOnLoad from "./modules/common/ScrollToHashOnLoad";



export default function App() {
  useEffect(() => {
    Aos.init({duration:1000, once: true});
  }, []);
  return (
    <HashRouter>      
      <Header />
      <ScrollToHashOnLoad />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lifestyle" element={<LifeStyle />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/poetry" element={<Poetry />} />
        <Route path="/inner" element={<InnerPage />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>


      <Footer />
      <ScrollTop />
      <RenderTop />
      <CommonScript />
    </HashRouter>
  );
}
