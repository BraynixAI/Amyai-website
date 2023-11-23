import React, { useState } from "react";

function Choose() {
  const [tab, setTab] = useState(1);
  const [tab2, setTab2] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const handelOnClick = (number) => {
    setTab(number);
  };
  return (
    <div className="my-20">
      <div className="flex flex-col-reverse lg:flex-row lg:justify-between bg-[#000E29] h-3/4 z-0 overflow-hidden">
        <div className="flex justify-center items-center mb-20 lg:mb-7 mx-12 mt-5 lg:mt-0 lg:mx-0 lg:w-1/2">
          <img src="/images/group3703.svg" className="h-2/3" />
        </div>
        <div className="flex justify-center lg:justify-start lg:w-1/2 lg:items-center">
          <div className="text-white text-center lg:text-left">
            <p className="font-bold lg:font-semibold text-2xl lg:text-4xl my-2 pt-4 lg:pt-0">
              Why Choose Us
            </p>
            <p className=" text-sm text-gray-400 lg:mt-5 mt-3">
              Your Partner in Technology Success
            </p>
          </div>
        </div>
      </div>
      <div className="lg:mx-20 mx-5 bg-white lg:rounded-xl -mt-20">
        {/* <div className="lg:space-x-5 space-x-2  lg:ml-10 "> */}
        {/* <div className=" lg:w-3/5   "> */}
        <div className="flex overflow-x-scroll md:overflow-x-hidden w-full  lg:w-1/2  lg:ml-10 text-sm text-gray-500 font-medium">
          <div className="flex-1 w-full">
            <button
              className={` ${
                tab === 1
                  ? "w-full flex-1 p-1 md:py-5 md:px-2 font-semibold shadow-md  bg-blue-400 text-white"
                  : "w-full flex-1 p-1 md:py-5 md:px-2 font-semibold shadow-md border-b-2 text-black "
              }`}
              onClick={() => handelOnClick(1)}
            >
              Expertise
            </button>
            {tab === 1 ? (
              <div className="triangle-down mx-auto "></div>
            ) : (
              <div className="triangle-down-transparent mx-auto "></div>
            )}
          </div>
          <div className="flex-1 w-full">
            <button
              className={` ${
                tab === 2
                  ? "w-full flex-1 p-1 md:py-5 md:px-2 font-semibold shadow-md  bg-blue-400 text-white"
                  : "w-full flex-1 p-1 md:py-5 md:px-2 font-semibold shadow-md border-b-2 text-black "
              }`}
              onClick={() => handelOnClick(2)}
            >
              Innovation
            </button>
            {tab === 2 ? (
              <div className="triangle-down mx-auto "></div>
            ) : (
              <div className="triangle-down-transparent mx-auto "></div>
            )}
          </div>
          <div className="flex-1 w-full">
            <button
              className={` ${
                tab === 3
                  ? "w-full flex-1 p-1 md:py-5 md:px-2 font-semibold shadow-md  bg-blue-400 text-white"
                  : "w-full flex-1 p-1 md:py-5 md:px-2 font-semibold shadow-md border-b-2 text-black "
              }`}
              onClick={() => handelOnClick(3)}
            >
              Client-Centric Approach
            </button>
            {tab === 3 ? (
              <div className="triangle-down mx-auto "></div>
            ) : (
              <div className="triangle-down-transparent mx-auto "></div>
            )}
          </div>

          {/* </div> */}
        </div>
        {/* </div> */}
        <div className="flex flex-col-reverse lg:flex-row mx-4 md:mx-20 lg:mx-5 ">
          <div className="lg:p-5 lg:w-1/2 lg:mr-5 ">
            <p className="font-semibold text-xl lg:text-4xl lg:mr-24 my-4">
              We have a team of experienced professionals in each of our focus
              areas
            </p>
            <p className="text-gray-500 text-xs lg:w-[60%]">
              Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea
              commodo claritatem insitamconse quat.Exerci tation ullamcorper
              suscipit lobort
            </p>
          </div>
          <div className=" my-2 lg:my-5  lg:w-1/2 ">
            <div className="flex justify-center items-center">
              <img src="/images/programmingbg.svg" className="rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choose;
