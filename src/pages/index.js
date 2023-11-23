import Choose from "@/components/HomePage/choose";
import Collaboretion from "@/components/HomePage/collaboretion";
import Contact from "@/components/HomePage/contact";
import Discover from "@/components/HomePage/discover";
import LatestNews from "@/components/HomePage/latest";
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
      <Discover />
      <LatestNews />
      <Collaboretion />
      <Contact />
      <FooterPage />
    </div>
  );
}

export default index;
