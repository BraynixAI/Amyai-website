import About from "@/components/About_us";
import Contact from "@/components/HomePage/contact";
import Offer from "@/components/HomePage/offer";
import AppBar from "@/components/common_components/AppBar";
import FooterPage from "@/components/common_components/Footer";
import React from "react";

function index() {
  return (
    <div>
      <AppBar />
      <About />
      <Offer />
      <Contact />
      <FooterPage />
    </div>
  );
}

export default index;
