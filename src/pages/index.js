import Choose from "@/components/HomePage/choose";
import Offer from "@/components/HomePage/offer";
import PotentialPage from "@/components/HomePage/potential";
import Welcome from "@/components/HomePage/welcome";
import AppBar from "@/components/common_components/AppBar";
import FooterPage from "@/components/common_components/Footer";
import React from "react";

function index() {
  return (
    <div>
      <AppBar />
      <Welcome />
      <PotentialPage />
      <Offer />
      <Choose />
      <FooterPage />
    </div>
  );
}

export default index;
