import React from "react";

function PotentialPage() {
  return (
    <div className="my-10">
      <div className="text-center">
        <p className="font-semibold text-4xl text-black">
          Unlock the potential
        </p>
        <p className="font-medium text-2xl text-gray-500">
          of your business with Amyai Solutions Inc
        </p>
      </div>
      {/* <div className="flex justify-center items-center w-full bg-red-600"> */}
      <div className="grid grid-cols-4 gap-4 justify-center px-40 py-5">
        <div className="col-span-1 bg-blue-300 rounded-lg flex justify-center items-center px-20">
          <div className=" flex flex-col justify-center items-center space-y-5">
            <img src="/images/project.svg" className="w-10" />
            <p className="text-center">Project Management</p>
          </div>
        </div>
        <div className="col-span-2 border flex justify-center rounded-md">
          <img src="/images/calendar.svg" className="w-full" />
        </div>
        <div className="col-span-1 bg-blue-300 rounded-lg flex justify-center items-center px-20">
          <div className=" flex flex-col justify-center items-center space-y-5">
            <img src="/images/scrum.svg" className="w-10" />
            <p className="text-center"> Scrum Master</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 gap-4 ">
          <div className="col-span-1 bg-blue-300 rounded-lg flex justify-center items-center py-16 px-20">
            <div className=" flex flex-col justify-center items-center space-y-5">
              <img src="/images/scrum.svg" className="w-10" />
              <div>
                <p className="text-center">Java/J2EE</p>
                <p className="text-center"> Solutions</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 bg-blue-300 rounded-lg flex justify-center items-center px-10">
            <div className=" flex flex-col justify-center items-center space-y-5">
              <img src="/images/scrum.svg" className="w-10" />
              <div>
                <p className="text-center">Data Science/ </p>
                <p className="text-center"> Analyst</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* </div> */}
    </div>
  );
}

export default PotentialPage;
