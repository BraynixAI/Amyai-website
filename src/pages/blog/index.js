import Database from "@/components/Blog/database";
import AppBar from "@/components/common_components/AppBar";
import FooterPage from "@/components/common_components/Footer";
import React from "react";

function index() {
  return (
    <div>
      <AppBar />
      <Database />
      <FooterPage />
    </div>
  );
}

export default index;
