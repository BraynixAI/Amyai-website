import React from "react";

function LatestNews() {
  return (
    <div className="my-20">
      <div className="grid lg:grid-cols-2 gap-2 lg:px-10 px-5">
        <div className="flex flex-col lg:justify-center lg:item-center lg:mr-40 ">
          <p className="hidden lg:block font-semibold text-xl lg:text-5xl text-center lg:text-left ">
            Read Our latest
          </p>
          <p className="hidden lg:block font-semibold text-xl lg:text-5xl text-center lg:text-left my-5">
            News
          </p>
          <p className="lg:hidden font-bold text-xl  text-center  ">
            Read Our latest News
          </p>
          <p className="lg:hidden my-4 font-normal text-gray-500 text-center lg:text-left text-xs lg:text-base">
            Alii autem, quibus ego assentior, cum teneam sententiam, quid aut
            fugiat aliquid, praeter voluptatem accusantium doloremque
            laudantium, totam rem voluptas in m,
          </p>

          <p className="hidden lg:block  my-4 font-normal text-gray-500 text-center lg:text-left text-xs lg:text-base">
            Alii autem, quibus ego assentior, cum teneam sententiam, quid aut
            fugiat aliquid, praeter voluptatem accusantium doloremque
            laudantium, totam rem voluptas in voluptate ponit.Alii autem, quibus
            ego assentior, cum teneam sententiam, quid aut fugiat aliquid,
            praeter voluptatem accusantium doloremque laudantium, totam rem
            voluptas in voluptate ponit.
          </p>
          <div className="hidden lg:block">
            <button className="text-white text-sm font-semibold bg-blue-400 py-3 px-8 rounded-lg">
              Read More
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="grid grid-rows-2 gap-4 md:mb-20">
            <div className="p-2 border rounded-lg ">
              <img src="/images/img1.svg" className="w-full" />
              <p className="font-normal mt-2">
                Automation-led Sustainable Cost Takeout
              </p>
            </div>
            <div className="p-2 border rounded-lg">
              <img src="/images/rectangle1.svg" className="w-full" />
              <p className="font-normal mt-2">
                Automation-led Sustainable Cost Takeout
              </p>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-4 md:mt-20">
            <div className="p-2  border rounded-lg">
              <img src="/images/rectangle1.svg" className="w-full" />
              <p className="font-normal mt-2">
                Automation-led Sustainable Cost Takeout
              </p>
            </div>
            <div className="p-2 border rounded-lg">
              <img src="/images/img1.svg" className="w-full" />
              <p className="font-normal mt-2">
                Automation-led Sustainable Cost Takeout
              </p>
            </div>
          </div>
        </div>
        <div className=" lg:hidden flex justify-center mt-8">
          <button className="text-white text-sm bg-blue-400 py-1 px-6 rounded">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default LatestNews;
