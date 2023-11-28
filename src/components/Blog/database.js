import React, { useState } from "react";
import About from "../About_us";
import Buttons from "./buttons";

function Database() {
  const [tab, setTab] = useState(1);
  const [tab2, setTab2] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const handelOnClick = (number) => {
    setTab(number);
  };
  return (
    <div className=" flex flex-col">
      <div className=" overflow-hidden z-0">
        <img src="images/BusinessImage1.svg" />
      </div>
      <div className="lg:-mt-40 lg:m-10 m-2 bg-white z-10 rounded-xl">
        <div className=" flex lg:space-x-10 lg:px-10 py-5">
          <div className="lg:w-2/3">
            <div className="md:hidden  bg-white p-5 space-y-5  shadow">
              <p className="text-2xl font-semibold">Search Here</p>
              <div className="relative bg-gray-100">
                <input
                  type="search"
                  name="search"
                  placeholder="Search post"
                  className="bg-gray-100 h-10 px-5 placeholder:uppercase placeholder:text-xs placeholder:font-bold pr-10  text-sm focus:outline-none"
                />
                <button
                  type="submit"
                  class="absolute right-0 top-0 mt-3 mr-4 bg-gray-100"
                >
                  <img src="images/search2.svg" />
                </button>
              </div>
            </div>
            {[0, 1, 2].map((item) => (
              <div className=" lg:space-y-8 space-y-4 my-10">
                <div className="rounded-lg ">
                  <img
                    src="images/businessMedium.svg"
                    className="rounded-xl hidden lg:block "
                  />
                  <img
                    src="images/businessSmall.svg"
                    className="rounded-xl w-full  lg:hidden"
                  />
                </div>
                <div className="flex lg:space-x-10 justify-between lg:justify-start">
                  <div className="flex justify-center items-center lg:space-x-2">
                    <img src="images/Vector.svg" />
                    <p className="font-bold text-[11px] lg:text-sm text-gray-500 lg:uppercase lowercase">
                      Alextina
                    </p>
                  </div>
                  <div className="flex justify-center items-center lg:space-x-2">
                    <img src="images/icon.svg" />
                    <p className="font-bold text-[11px] lg:text-sm text-gray-500 lg:uppercase lowercase">
                      Dec 28, 2022
                    </p>
                  </div>
                  <div className="flex justify-center items-center lg:space-x-2">
                    <img src="images/sms2.svg" />
                    <p className="font-bold text-[11px] lg:text-sm text-gray-500 lg:uppercase lowercase">
                      (04) Coments
                    </p>
                  </div>
                  <div className="flex justify-center items-center lg:space-x-2">
                    <img src="images/eye.svg" />
                    <p className="font-bold text-[11px] lg:text-sm text-gray-500 lg:uppercase lowercase">
                      1,526 views
                    </p>
                  </div>
                </div>
                <p className="font-semibold lg:text-3xl text-2xl">
                  Databases For Front-End Developers: The Concepts Under The
                  Hood (Part 2)
                </p>
                <p className="font-normal lg:text-lg text-sm leading-6 text-gray-500">
                  Laboratories used for scientific research take many forms
                  because of the differing requirements of specialists in the
                  various fields of science and engineering. A physics
                  laboratory
                </p>
                <div className="">
                  <button
                    type="submit"
                    class="bg-blue-500 text-white px-8 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                  >
                    <a
                      href="/blog_details"
                      className="text-white font-normal text-base "
                    >
                      Read More
                    </a>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden lg:block lg:w-1/3">
            <div className="space-y-5 my-10">
              <div className="max-w-md mx-auto bg-white p-10 space-y-5  shadow">
                <p className="text-2xl font-semibold">Search Here</p>
                <div className="relative bg-gray-100">
                  <input
                    type="search"
                    name="search"
                    placeholder="Search post"
                    className="bg-gray-100 h-10 px-5 placeholder:uppercase placeholder:text-xs placeholder:font-bold pr-10  text-sm focus:outline-none"
                  />
                  <button
                    type="submit"
                    class="absolute right-0 top-0 mt-3 mr-4 bg-gray-100"
                  >
                    <img src="images/search2.svg" />
                  </button>
                </div>
              </div>
              <div className="max-w-md mx-auto bg-white p-10 space-y-5  shadow">
                <p className="font-semibold text-2xl">Recent Post</p>
                {[0, 1, 2, 3].map((item) => (
                  <div className="">
                    <div className="flex space-x-2">
                      <img src="images/recentblog.svg" />
                      <div className="flex flex-col justify-between p-1">
                        <p className="font-semiboldt text-xs text-gray-500 ">
                          4 March. 2022
                        </p>
                        <p className="font-bold text-sm">
                          Designing Human-Machine Interfaces..
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="max-w-md mx-auto bg-white p-10 space-y-5  shadow">
                <p className="font-semibold text-2xl">Popular Tag</p>
                <div>
                  <Buttons />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Database;
