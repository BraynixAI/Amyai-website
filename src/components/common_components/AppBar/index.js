import React from "react";

function AppBar() {
  return (
    <div>
      <div className="bg-[#000E29] p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold">
            <img src="/images/amyai.svg"></img>
          </div>
          <div className="hidden md:flex justify-center space-x-4">
            <a href="#" className="text-white font-normal text-base ">
              Home
            </a>
            <a href="#" className="text-white font-normal text-base">
              About
            </a>
            <a href="#" className="text-white font-normal text-base">
              Service
            </a>
            <a href="#" className="text-white font-normal text-base">
              Blog
            </a>
            <a href="#" className="text-white font-normal text-base">
              Contact
            </a>
            <div className="flex items-center space-x-3">
              <img
                src="/images/phone.svg"
                // className="w-full h-full rounded-full "
              />
              <img
                src="/images/search.svg"
                // className="w-full h-full rounded-full "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppBar;
