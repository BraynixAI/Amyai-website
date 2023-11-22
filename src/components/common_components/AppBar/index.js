import React from "react";

function AppBar() {
  return (
    <div>
      <div className="bg-[#000E29] py-1">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold lg:my-4  m-3">
            <img src="/images/amyai.svg" className="lg:h-14 h-10" />
          </div>
          <div>
            <div className="hidden lg:flex justify-center items-center space-x-4  rounded-full px-5 border-x-white">
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
              <div className="flex items-center space-x-3 ">
                <button className="  rounded-full p-1 border-x-transparent">
                  <img
                    src="/images/phone.svg"
                    // className="w-full h-full rounded-full "
                  />
                </button>
                <button className="  rounded-full p-1 border-x-transparent">
                  <img
                    src="/images/search.svg"
                    // className="w-full h-full rounded-full "
                  />
                </button>
              </div>
            </div>
          </div>

          <button className="lg:hidden mx-5">
            <img src="/images/circle2017.svg" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppBar;
