import BlogDetails from "@/components/Blog_details";
import AppBar from "@/components/common_components/AppBar";
import FooterPage from "@/components/common_components/Footer";
import React from "react";

function index() {
  return (
    <div>
      <AppBar />
      <BlogDetails />
      <FooterPage />
    </div>
  );
}

export default index;
