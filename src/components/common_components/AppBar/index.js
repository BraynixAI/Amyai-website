import React from "react";

function AppBar() {
  return (
    <div>
      <div className="bg-[#000E29] lg:px-14 p-5 ">
        <div className="  flex justify-between items-center ">
          <div className="text-white text-lg font-bold ">
            <img src="/images/amyai.svg" className="lg:h-14 h-10" />
          </div>
          <div className="flex h-12">
            <div className="hidden border border-r-transparent border-white lg:flex justify-center items-center space-x-8  rounded-full px-5 ">
              <a href="/" className="text-white font-normal text-base ">
                Home
              </a>
              <a href="/about" className="text-white font-normal text-base">
                About-us
              </a>
              <a
                href="/servicepage"
                className="text-white font-normal text-base"
              >
                Service
              </a>
              <a href="/blog" className="text-white font-normal text-base">
                Blog
              </a>
              <a href="contact_us" className="text-white font-normal text-base">
                Contact
              </a>
            </div>
            <div className="hidden lg:block">
              <div className=" flex items-center  -ml-4">
                <div className="border border-white rounded-full p-1 border-l-transparent h-12 w-12">
                  <button className="h-full w-full flex justify-center items-center">
                    <img src="/images/phone.svg" className="h-7 w-7  " />
                  </button>
                </div>
                {/* <div className="border border-white rounded-full -ml-4 pl- p-1 border-l-transparent h-12 w-12">
                  <button className="h-full w-full flex justify-center items-center">
                    <img src="/images/search.svg" className="h-7 w-7  " />
                  </button>
                </div> */}
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
