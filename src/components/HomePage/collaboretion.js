import React from "react";

function Collaboretion() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="overflow-hidden z-0 w-full ">
        <img src="/images/group3716.svg" className="w-full" />
      </div>
      <div className="flex flex-col justify-center items-center mb-5 -mt-16 lg:-mt-[19.5%]  bg-white w-4/5 p-5 lg:p-10 space-y-4 shadow-lg border rounded-md z-10 ">
        <div className="lg:hidden flex flex-col justify-center items-center space-y-4">
          <div>
            <img src="/images/Braynix.svg" className="h-[100px]" />
          </div>
          <p className="font-semibold lg:text-4xl text-2xl text-center lg:text-left">
            Collaborating with BRAYNIXAI
          </p>
          <p className="font-normal lg:text-base text-sm text-gray-500 text-center lg:mx-[15%]  ">
            Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea
            commodo claritatem insitamconse quat.Exerci tation ullamcorper
            suscipit lobortExerci tation ullamcorper suscipit lobortis nisl
            aliquip ex ea commodo claritatem insitamconse quat.Exerci tation
            ullamcorper suscipit lobort
          </p>
          <button className="bg-blue-400 hover:bg-blue-700 px-6 py-2 rounded-md text-white">
            Read More
          </button>
        </div>

        <div className="hidden lg:block ">
          <div className="flex justify-between space-x-5">
            <div className="flex justify-center items-center ">
              <img src="/images/Braynix.svg" className="h-[200px]" />
            </div>
            <div className=" space-y-5">
              <p className="font-semibold lg:text-4xl text-2xl text-center lg:text-left">
                Collaborating with BRAYNIXAI
              </p>
              <p className="font-normal lg:text-base text-sm text-gray-500    ">
                Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea
                commodo claritatem insitamconse quat.Exerci tation ullamcorper
                suscipit lobortExerci tation ullamcorper suscipit lobortis nisl
                aliquip ex ea commodo claritatem insitamconse quat.Exerci tation
                ullamcorper suscipit lobort
              </p>
              <button className="bg-blue-400 hover:bg-blue-700 px-6 py-2 rounded-md text-white">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collaboretion;
