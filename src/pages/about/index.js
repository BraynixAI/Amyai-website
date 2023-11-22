import About from "@/components/About_us";
import WhoWeAre from "@/components/About_us/whoweare";
import Discover from "@/components/HomePage/discover";
import AppBar from "@/components/common_components/AppBar";
import FooterPage from "@/components/common_components/Footer";
import React from "react";

function index() {
  return (
    <div>
      <AppBar />
      <About />
      <WhoWeAre />
      <Discover />
      <FooterPage />
    </div>
  );
}

export default index;
