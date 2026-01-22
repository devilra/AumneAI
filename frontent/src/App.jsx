import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import HomePage from "./Home/HomePage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SolutionBanner from "./Solutions/SolutionBanner";
import Solution from "./Solutions/Solution";
import Benefits from "./Benefits/Benefits";
import StatisticsSection from "./Home/StatisticsSection";
import ROICalculator from "./RoiCalculator/ROICalculator";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solutions" element={<Solution />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/industry-trends" element={<StatisticsSection />} />
        <Route path="/roi-calculator" element={<ROICalculator/>}

  />
      </Routes>
      <Footer /> 
    </>
  );
};

export default App;
