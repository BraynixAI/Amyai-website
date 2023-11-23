import React from "react";

function PotentialPage() {
  return (
    <div className="my-20 w-[90%] mx-auto">
      <div className="text-center">
        <p className="font-semibold md:text-5xl text-4xl text-black">
          Unlock the potential
        </p>
        <p className="font-normal md:text-3xl text-lg text-gray-500 leading-8 my-2">
          of your business with Amyai Solutions Inc
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-5 justify-center bg-unlock-bg bg-cover p-5 my-5">
        <div className="col-span-1 shadow-lg rounded-lg flex justify-center items-center h-[223px] p-20 border">
          <div className=" flex flex-col justify-center items-center space-y-5 ">
            <img src="/images/project.svg" className="w-10" />
            <p className="text-center text-sm font-semibold">
              Project Management
            </p>
          </div>
        </div>
        <div className="md:col-span-2 shadow-lg rounded-lg flex justify-center items-center h-[223px]  ">
          <img
            src="/images/calendar.svg"
            className="hidden md:block  rounded-3xl"
          />
          <img src="/images/calendar2.svg" className="md:hidden " />
          {/* </div> */}
        </div>
        <div className="col-span-1 shadow-lg rounded-lg flex justify-center items-center h-[223px] p-10 border">
          <div className=" flex flex-col justify-center items-center space-y-5 ">
            <img src="/images/scrum.svg" className="w-10" />
            <p className="text-center text-sm font-semibold ">Scrum Master</p>
          </div>
        </div>
        <div className=" backdrop-blur-xl"></div>
        <div className="col-span-1 shadow-lg rounded-lg flex justify-center items-center h-[223px] p-10 border bg-white/40 backdrop-blur-lg ">
          <div className=" flex flex-col justify-center items-center space-y-5 ">
            <img src="/images/scrum.svg" className="w-10" />
            <div>
              <p className="text-center text-sm font-semibold">Java/J2EE</p>
              <p className="text-center text-sm font-semibold"> Solutions</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 shadow-lg rounded-lg flex justify-center items-center h-[223px] p-10 border bg-white/30 backdrop-blur-lg ">
          <div className=" flex flex-col justify-center items-center space-y-5 ">
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
    </div>
  );
}

export default PotentialPage;
