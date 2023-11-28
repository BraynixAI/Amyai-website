import React from "react";

function Discover() {
  return (
    <div className="lg:px-40 lg:py-20 py-16 px-2 md:px-4 bg-[#F8F9FA]">
      <p className="text-xs ">Discover how AMYAI has made an impact.</p>
      <p className="font-semibold text-lg lg:text-4xl my-5">
        "AMYAI's unwavering dedication to our IT security transformed our
        operations. Their comprehensive solutions not only met but exceeded our
        expectations. Highly recommended."
      </p>
      <div className="grid md:grid-cols-2 lg:gap-2 gap-10 ">
        <div className="flex items-center space-x-5">
          <div>
            <img src="images/yellowRound.svg" className="h-16" />
          </div>
          <div className="space-y-2">
            <p className="font-bold text-lg">Alexandro Pierre</p>
            <p className="font-normal text-sm text-gray-500">CEO, Acme Inc.</p>
          </div>
        </div>
        <div className="flex  lg:justify-end justify-center ">
          <div className="flex lg:justify-end space-x-2">
            <button>
              <img src="images/Left.svg" className="h-8" />
            </button>
            <button>
              <img src="images/Right.svg" className="h-8" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discover;
