import React from "react";

function ContactUs() {
  return (
    <div>
      <div className="md:m-10 m-5 ">
        <div>
          <img
            src="/images/Map.svg"
            className="hidden md:block h-auto w-full"
          />
          <img src="/images/Map2.svg" className="md:hidden h-auto w-full" />
        </div>
        <div className="flex flex-col md:flex-row">
          <div className=" bg-white md:w-3/5 md:-mt-[40%] -mt-16 rounded-lg md:ml-10 md:shadow-lg mx-3 md:mx-0">
            <div className="md:p-10 p-5">
              <p className=" font-semibold md:text-4xl text-2xl">Let’s Talk</p>
              <p className="md:text-sm font-normal my-5 lg:w-1/2 text-xs">
                Our friendly custom service team always respond to enquiries
                within 24 hours.
              </p>
              <div className="space-y-2 md:space-y-5 ">
                <div className="flex md:space-x-5 space-x-2">
                  <input
                    placeholder="First name"
                    type="text"
                    class="w-full px-3 md:py-3 py-1 border  rounded-md  bg-slate-200 focus:outline-none focus:border-gray-500"
                    required
                  />
                  <input
                    placeholder="Last name"
                    type="text"
                    id="name"
                    name="name"
                    class="w-full px-3 md:py-3 py-1 border rounded-md  bg-slate-200 focus:outline-none focus:border-gray-500"
                    required
                  />
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Email address"
                  class="w-full px-3 md:py-3 py-1 border rounded-md  bg-slate-200 focus:outline-none focus:border-gray-500"
                  required
                />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="No. Handphone"
                  class="w-full px-3 md:py-3 py-1 border rounded-md  bg-slate-200 focus:outline-none focus:border-gray-500"
                  required
                />
                <textarea
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Message"
                  class="w-full px-3 py-5 md:py-3 md:h-32 border rounded-md  bg-slate-200 focus:outline-none focus:border-gray-500"
                  required
                />
              </div>
            </div>
            <div className="md:mx-10 mx-5 md:mb-5">
              <button
                type="submit"
                class="bg-blue-500 text-white md:px-16 px-8 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
              >
                Send
              </button>
            </div>
          </div>
          <div className="bg-white md:w-2/5 my-6">
            <div className="flex justify-center items-center">
              <div className="space-y-5 md:p-5 p-2 text-gray-700">
                <div className="flex md:space-x-10  space-x-2 items-center">
                  <div>
                    <img src="/images/location.svg" className="h-5" />
                  </div>
                  <p className="text-sm md:text-base">
                    Thailand - Mandalai, Main Street
                  </p>
                </div>
                <div className="flex md:space-x-10 space-x-2 items-center">
                  <div>
                    <img src="/images/cal.svg" className="h-4" />
                  </div>
                  <p className="text-sm md:text-base">545-450-3059</p>
                </div>
                <div className="flex md:space-x-10 space-x-2 items-center">
                  <div>
                    <img src="/images/sms.svg" className="h-3" />
                  </div>
                  <p className="text-sm md:text-base">info@AgencyForce.com</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center md:hidden ">
              <div className=" mb-10 mt-5">
                <div className="z-0 overflow-hidden mx-2 ">
                  <img src="/images/Calltoaction.svg" className="w-full" />
                </div>
                <div className="-mt-32 z-10 text-white text-center ">
                  <div className="justify-center items-center flex "></div>
                  <p className="font-semibold text-base my-1">
                    Let's Begin Your Journey
                  </p>
                  <div className="flex justify-center mt-1">
                    <p className="text-xs font-normal w-[90%] px-1">
                      Initiate your journey with AMYAI Solutions Inc and
                      experience the transformative power of technology in your
                      business. Contact us to start your technology evolution.
                    </p>
                  </div>

                  <button className="bg-blue-500 px-4 hover:bg-blue-700 rounded-md font-medium text-sm ">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
