import React from "react";

function Welcome() {
  return (
    <div className="bg-[#000E29] lg:p-8 p-5 ">
      {/* mobile screen views */}
      <div className="lg:hidden grid lg:grid-cols-2 gap-1">
        <div className="">
          <p className=" md:hidden text-center px-3 text-2xl font-bold  text-white">
            Welcome to
          </p>
          <p className="md:hidden text-center px-3 text-2xl font-bold  text-white">
            Amyai Solutions Inc
          </p>
          <p className="hidden md:block lg:hidden  text-center px-3 lg:px-0 text-2xl font-bold md:text-4xl text-white">
            Welcome to Amyai Solutions Inc
          </p>
          <p className="text-center font-normal text-sm text-white my-2">
            Are you looking for technology solutions to drive your business
            forward? At Amyai Solutions Inc, we are your go-to sourcing platform
            for top-notch technology expertise & a cutting-edge service
            platform, specializing in the following key technologies:
          </p>
        </div>
        <div className="my-2 flex justify-center items-center">
          <img src="/images/Illustration.svg" className="" />
        </div>
        <div className="my-4 flex flex-col items-center space-y-4">
          <button className="bg-blue-500 hover:bg-blue-700 font-semibold text-white rounded-lg px-6 py-2">
            Get in Touch
          </button>
          <div className="flex items-center space-x-2">
            <a href="#" className="font-light text-white ">
              Learn more
            </a>
            <div className="triangle-right"></div>
          </div>
        </div>
      </div>

      {/* desktop screen views */}
      <div className="hidden lg:block ">
        <div className="grid md:grid-cols-11 gap-1 mx-6">
          <div className="md:col-span-6">
            <p className="px-3 lg:px-0 text-2xl font-bold lg:text-7xl text-white">
              Welcome to Amyai Solutions Inc
            </p>
            <p className=" font-normal text-base text-white lg:w-11/12 my-6">
              Are you looking for technology solutions to drive your business
              forward? At Amyai Solutions Inc, we are your go-to sourcing
              platform for top-notch technology expertise & a cutting-edge
              service platform, specializing in the following key technologies:
            </p>
            <div className="flex space-x-5 my-6">
              <button className="bg-blue-500 hover:bg-blue-700 font-semibold text-white rounded-lg px-6 py-2">
                Get in Touch
              </button>
              <div className="flex items-center space-x-2">
                <a href="#" className="font-light text-white ">
                  Learn more
                </a>
                <div className="triangle-right"></div>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 flex justify-end">
            <img src="/images/Illustration.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
