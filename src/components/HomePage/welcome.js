import React from "react";

function Welcome() {
  return (
    <div className="bg-[#000E29] md:p-10 p-4 ">
      <div className="md:hidden grid md:grid-cols-2 gap-1">
        <div className="">
          <p className="text-center px-3 text-2xl font-bold  text-white">
            Welcome to
          </p>
          <p className="text-center px-3 text-2xl font-bold  text-white">
            Amyai Solutions Inc
          </p>
          <p className="text-center font-normal text-sm text-white my-2">
            Are you looking for technology solutions to drive your business
            forward? At Amyai Solutions Inc, we are your go-to sourcing platform
            for top-notch technology expertise & a cutting-edge service
            platform, specializing in the following key technologies:
          </p>
        </div>
        <div className="my-2">
          <img src="/images/Illustration.svg" />
        </div>{" "}
        <div className="my-4 flex flex-col items-center space-y-4">
          <button className="bg-blue-500 font-semibold text-white rounded-md px-6 py-2">
            Get in Touch
          </button>
          <a href="#" className="font-light text-white ">
            Learn more
          </a>
        </div>
      </div>
      <div className="hidden md:block ">
        <div className="grid grid-cols-2 gap-1">
          <div className="">
            <p className=" px-3 md:px-0 text-2xl font-bold md:text-7xl text-white">
              Welcome to Amyai Solutions Inc
            </p>
            <p className=" font-normal text-base text-white w-6/6 my-4">
              Are you looking for technology solutions to drive your business
              forward? At Amyai Solutions Inc, we are your go-to sourcing
              platform for top-notch technology expertise & a cutting-edge
              service platform, specializing in the following key technologies:
            </p>
            <div className="space-x-5 my-6">
              <button className="bg-blue-500 font-semibold text-white rounded-md px-6 py-2">
                Get in Touch
              </button>
              <a href="#" className="font-light text-white ">
                Learn more
              </a>
            </div>
          </div>
          <div className="">
            <img src="/images/Illustration.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
