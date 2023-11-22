import React from "react";

function PotentialPage() {
  return (
    <div className="my-20 w-[85%] mx-auto">
      <div className="text-center">
        <p className="font-semibold text-4xl text-black">
          Unlock the potential
        </p>
        <p className="font-normal text-2xl text-gray-500">
          of your business with Amyai Solutions Inc
        </p>
      </div>
      {/* <div className="flex justify-center items-center w-full bg-red-600"> */}
      <div className="grid md:grid-cols-4 gap-4 bg-gradient-to-r from-[#1727400D] via-[#2CBDFF47] to-[#5EF4B22E]  justify-center  py-5 rounded-full ">
        <div className="col-span-1 bg-white/30 backdrop-blur-lg shadow-lg rounded-lg flex justify-center items-center px-20 m-3 mr-0">
          <div className=" flex flex-col justify-center items-center space-y-5 h-20 w-20">
            <img src="/images/project.svg" className="w-10" />
            <p className="text-center text-sm font-semibold">
              Project Management
            </p>
          </div>
        </div>
        <div className="col-span-2 border flex justify-center  p-3 rounded-3xl shadow-md">
          <img
            src="/images/calendar.svg"
            className="hidden md:block md:w-full  rounded-3xl"
          />
          <img src="/images/calendar2.svg" className="md:hidden" />
        </div>
        <div className="col-span-1  bg-white/30 backdrop-blur-lg shadow-lg rounded-lg flex justify-center items-center px-20 m-3 ml-0">
          <div className=" flex flex-col justify-center items-center space-y-2 h-20 w-20">
            <img src="/images/scrum.svg" className="w-10" />
            <p className="text-center text-sm font-semibold ">Scrum Master</p>
          </div>
        </div>
        <div className="border-r-2 border-t-2 border-l-0 border-b-0 flex justify-center  p-3 rounded-3xl"></div>
        <div className="col-span-1 h-[256px] bg-white/30 backdrop-blur-lg shadow-lg rounded-lg flex justify-center items-center px-20">
          <div className=" flex flex-col justify-center items-center space-y-5 h-20 w-20">
            <img src="/images/project.svg" className="w-10" />
            <p className="text-center text-sm font-semibold">
              Project Management
            </p>
          </div>
        </div>
        <div className="col-span-1 bg-white/30 backdrop-blur-lg shadow-lg rounded-lg flex justify-center items-center px-20">
          <div className=" flex flex-col justify-center items-center space-y-5 h-20 w-20">
            <img src="/images/project.svg" className="w-10" />
            <p className="text-center text-sm font-semibold">
              Project Management
            </p>
          </div>
        </div>
        <div></div>
      </div>
      {/* <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 gap-4 ">
          <div className="col-span-1 bg-white shadow-lg rounded-lg flex justify-center items-center py-16 px-20 h-56 w-56">
            <div className=" flex flex-col justify-center items-center space-y-5">
              <img src="/images/scrum.svg" className="w-10" />
              <div>
                <p className="text-center text-sm font-semibold">Java/J2EE</p>
                <p className="text-center text-sm font-semibold"> Solutions</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 bg-white shadow-lg rounded-lg flex justify-center items-center px-10">
            <div className=" flex flex-col justify-center items-center space-y-5">
              <img src="/images/scrum.svg" className="w-10" />
              <div>
                <p className="text-center  text-sm font-semibold">
                  Data Science/
                </p>
                <p className="text-center  text-sm font-semibold"> Analyst</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* </div> */}
    </div>
  );
}

export default PotentialPage;
