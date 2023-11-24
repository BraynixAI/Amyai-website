import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

function Contact() {
  return (
    <div>
      <div className="mt-20 mb-32 hidden md:block mx-10">
        <div className=" overflow-hidden z-0">
          <img src="/images/action.svg" className="w-full" />
        </div>
        <div className="flex space-x-5 px-10 z-10 overflow-hidden  md:-mt-36 text-white">
          <div className="space-y-3 w-3/4">
            <p className="font-semibold text-3xl">Let's Begin Your Journey</p>
            <p className="text-sm w-4/5">
              Initiate your journey with AMYAI Solutions Inc and experience the
              transformative power of technology in your business. Contact us to
              start your technology evolution.
            </p>
          </div>
          <div className="self-center">
            <button className="flex  items-center space-x-4 bg-blue-500 py-2 px-5 hover:bg-blue-700 rounded-md font-medium text-sm ">
              <a href="contact_us" className="text-white font-medium text-base">
                Contact
              </a>
              <ArrowLongRightIcon className="w-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center md:hidden ">
        <div className=" mb-10 mt-5">
          <div className="z-0 overflow-hidden mx-2 ">
            <img src="/images/Calltoaction.svg" className="w-full" />
          </div>
          <div className="-mt-36 z-10 text-white text-center ">
            <div className="justify-center items-center flex "></div>
            <p className="font-semibold text-base mt-1">
              Let's Begin Your Journey
            </p>
            <div className="flex justify-center my-1">
              <p className="text-xs font-normal w-[90%] px-2 my-1">
                Initiate your journey with AMYAI Solutions Inc and experience
                the transformative power of technology in your business. Contact
                us to start your technology evolution.
              </p>
            </div>
            <button className="bg-blue-500 px-4 hover:bg-blue-700 rounded-md font-medium text-sm ">
              <a href="contact_us" className="text-white font-normal text-base">
                Contact
              </a>
            </button>
          </div>
        </div>
      </div>
      {/* <div className="m-10">
        <div className="hidden md:block">
          <div className=" bg-journey-bg bg-cover overflow-x-hidden justify-center flex items-center text-white lg:h-[181px] w-11/12 mx-auto my-10 rounded-md">
            <div className="flex space-x-5">
              <div className="space-y-3 w-3/4">
                <p className="font-semibold text-3xl">
                  Let's Begin Your Journey
                </p>
                <p className="text-sm w-4/5">
                  Initiate your journey with AMYAI Solutions Inc and experience
                  the transformative power of technology in your business.
                  Contact us to start your technology evolution.
                </p>
              </div>
              <div className="flex items-center rounded-md w-1/4 md:mt-12 justify-center">
                <button className="px-2 py-1 bg-blue-500  rounded-md text-white">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <div className="bg-journey1-bg bg-cover h-[176px] w-[368px] text-white text-center  ">
            <p className="font-semibold text-base mt-1">
              Let's Begin Your Journey
            </p>
            <div className="flex justify-center">
              <p className="text-xs font-normal  w-[90%] px-2 my-1">
                Initiate your journey with AMYAI Solutions Inc and experience
                the transformative power of technology in your business. Contact
                us to start your technology evolution.
              </p>
            </div>

            <button className="bg-blue-500 px-4 hover:bg-blue-700 rounded-md font-medium text-sm ">
              Contact Us
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Contact;
