import React from "react";

function BlogDetails() {
  return (
    <div>
      <div className="flex flex-col">
        <div className="  overflow-hidden z-0">
          <img src="/images/BusinessImage1.svg" />
        </div>

        <div className="lg:-mt-40 lg:m-5 m-2 bg-white z-10 rounded-xl">
          <div className=" flex lg:space-x-10 lg:p-5 py-5">
            <div className="">
              <div className=" lg:space-y-8 space-y-4 my-2">
                <div className="rounded-lg ">
                  <img
                    src="/images/businessLarge.svg"
                    className="rounded-xl hidden lg:block "
                  />
                  <img
                    src="/images/businessSmall.svg"
                    className="rounded-xl w-full  lg:hidden"
                  />
                </div>
                <div className="flex lg:space-x-10 justify-between lg:justify-start">
                  <div className="flex justify-center items-center lg:space-x-2">
                    <img src="/images/Vector.svg" />
                    <p className="font-bold text-[11px] lg:text-sm text-gray-500 lg:uppercase lowercase">
                      Alextina
                    </p>
                  </div>
                  <div className="flex justify-center items-center lg:space-x-2">
                    <img src="/images/icon.svg" />
                    <p className="font-bold text-[11px] lg:text-sm text-gray-500 lg:uppercase lowercase">
                      Dec 28, 2022
                    </p>
                  </div>
                  <div className="flex justify-center items-center lg:space-x-2">
                    <img src="/images/sms2.svg" />
                    <p className="font-bold text-[11px] lg:text-sm text-gray-500 lg:uppercase lowercase">
                      (04) Coments
                    </p>
                  </div>
                  <div className="flex justify-center items-center lg:space-x-2">
                    <img src="/images/eye.svg" />
                    <p className="font-bold text-[11px] lg:text-sm text-gray-500 lg:uppercase lowercase">
                      1,526 views
                    </p>
                  </div>
                </div>
                <p className="font-semibold lg:text-3xl text-2xl ">
                  Databases For Front-End Developers: The Concepts Under The
                  Hood (Part 2)
                </p>
                <p className="hidden lg:block font-normal lg:text-base text-sm leading-6 text-gray-500 ">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, aperiam ipsquae ab illo
                  inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo. Nemo enim voluptatem voluptas sit aspernatur
                  aut odit aut fugit, sed quia consequuntur magni dolores eos
                  qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                  est, qui dolorem ipsum quia dolor sit amet, Sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, aperiam ipsquae ab illo
                  inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo. Nemo enim voluptatem voluptas sit aspernatur
                  aut odit aut fugit, sed quia consequuntur magni dolores eos
                  qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                  est, qui dolorem ipsum quia dolor sit amet, Sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, aperiam ipsquae ab illo
                  inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo. Nemo enim voluptatem voluptas sit aspernatur
                  aut odit aut fugit, sed quia consequuntur magni dolores eos
                  qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                  est, qui dolorem ipsum quia dolor sit amet, Sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, aperiam ipsquae ab illo
                  inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo. Nemo enim voluptatem voluptas sit aspernatur
                  aut odit aut fugit, sed quia consequuntur magni dolores eos
                  qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                  est, qui dolorem ipsum quia dolor sit amet, Sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, aperiam ipsquae ab illo
                  inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo. Nemo enim voluptatem voluptas sit aspernatur
                  aut odit aut fugit, sed quia consequuntur magni dolores eos
                  qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                  est, qui dolorem ipsum quia dolor sit amet,
                </p>
                <p className="lg:hidden font-normal lg:text-base text-sm leading-8 text-gray-500 ">
                  Laboratories used for scientific research take many forms
                  because of the differing requirements of specialists in the
                  various fields of science and engineering. A physics
                  laboratory
                </p>
                <p className="text-2xl font-semibold">Leave a comment</p>
                <div>
                  <div className="lg:w-3/5  bg-gray-100 p-5 space-y-5  shadow">
                    <div className="space-y-4 md:space-y-5 ">
                      <div className="grid md:grid-cols-2 gap-4">
                        <input
                          placeholder="Enter your Name"
                          type="text"
                          class="w-full px-3 md:py-4 py-3 border  rounded-md  bg-white focus:outline-none focus:border-gray-500 placeholder:text-sm"
                          required
                        />
                        <input
                          placeholder="Enter your mail"
                          type="text"
                          id="name"
                          name="name"
                          class="w-full px-3 md:py-4  py-3 border rounded-md  bg-white focus:outline-none focus:border-gray-500 placeholder:text-sm placeholder:font-normal"
                          required
                        />
                        {/* </div>
                    <div className="flex md:space-x-5 space-x-2"> */}
                        <input
                          placeholder="Enter number"
                          type="text"
                          class="w-full px-3 md:py-4  py-3 border  rounded-md  bg-white focus:outline-none focus:border-gray-500 placeholder:text-sm placeholder:font-normal"
                          required
                        />
                        <input
                          placeholder="Enter website "
                          type="text"
                          id="name"
                          name="name"
                          class="w-full px-3 md:py-4  py-3 border rounded-md  bg-white focus:outline-none focus:border-gray-500 placeholder:text-sm placeholder:font-normal"
                          required
                        />
                      </div>
                      <textarea
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your massage"
                        class="w-full px-3 py-5 md:py-4  md:h-32 border rounded-md  bg-white focus:outline-none focus:border-gray-500 placeholder:text-sm placeholder:font-normal"
                        required
                      />
                      <div className="md:mx-10 mx-5 flex justify-center">
                        <button
                          type="submit"
                          class="bg-blue-500 text-white px-8 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                        >
                          Post a Comment
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
