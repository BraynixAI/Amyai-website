import React from "react";

function WhoWeAre() {
  return (
    <div className="flex  md:flex-row flex-col-reverse mx-5 md:mx-16 md:my-20 mt-8">
      <div className="md:w-1/2 ">
        <p className="font-bold text-3xl text-center md:text-left md:text-5xl my-5">
          Who We Are
        </p>
        <div className="font-normal text-xs md:text-base text-gray-400 md:text-gray-500 space-y-5 mb-10">
          <p>
            AMYAI Solutions Inc is a startup driven by a passion for technology
            and innovation. Our team comprises tech enthusiasts and experts
            dedicated to connecting businesses with the right technology
            solutions in today's fast-paced world.
          </p>
          <p>
            We have a mission of creating the right outcome for the affordable
            cost & establishing a win - win business situation. AMYAI = RIGHT
            VALUE
          </p>
          <p>
            Team AMYAI believes in the true essence of right value and offer the
            right outcome at the right price.
          </p>
        </div>
      </div>
      <div className="md:w-1/2 flex md:flex-row flex-col-reverse md:justify-end">
        <div className="flex justify-center items-center ">
          <div className="bg-white rounded-full md:h-32 md:w-32 h-28 w-28 justify-center items-center flex p-2 -mt-14 md:mt-0 md:-mr-12 z-10">
            <img src="/images/amyai.svg" className="" />
          </div>
        </div>
        <div className="overflow-hidden rounded-xl z-0 ">
          <img
            src="/images/BusinessImage2.svg"
            className="md:h-auto hidden md:block "
          />
          <img src="/images/Business24.svg" className="md:hidden" />
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
