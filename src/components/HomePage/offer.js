import React from "react";

function Offer() {
  return (
    <div className=" my-20">
      <div className=" my-10">
        <p className="text-center my-5  font-bold text-3xl lg:text-5xl ">
          What We Offer
        </p>
        <div>
          <p className="text-center font-normal lg:my-2 px-4 lg:px-64 text-gray-500 leading-6">
            Alii autem, quibus ego assentior, cum teneam sententiam, quid aut
            fugiat aliquid, praeter voluptatem accusantium doloremque
            laudantium, totam rem voluptas in voluptate ponit.
          </p>
          {/* <p className="text-center font-normal px-4 lg:px-56 text-gray-500">
            accusantium doloremque laudantium, totam rem voluptas in voluptate
            ponit.
          </p> */}
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mx-8 lg:mx-10 lg:my-10">
        <div className="border">
          <div className="flex justify-between">
            <img src="/images/grp1.svg" className="mt-10 ml-5 h-20" />
            <img src="/images/grp2.svg" className="h-20" />
          </div>
          <div className="p-4 space-y-2">
            <div>
              <p className="font-medium text-2xl ">Sourcing</p>
              <p className="font-medium text-2xl ">Technology Experts</p>
            </div>

            <p className="font-normal text-sm pr-16 text-gray-500 leading-6">
              We connect you with highly skilled professionals in the technology
              domains that matter most & critical to your business's success.
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <img src="/images/grp3.svg" className="mt-10 ml-5 h-20" />
            <img src="/images/grp2.svg" className="h-20" />
          </div>
          <div className="p-4 space-y-2">
            <div>
              <p className="font-medium text-xl">Customized </p>
              <p className="font-medium text-xl"> Solutions</p>
            </div>

            <p className="font-normal text-sm pr-16 text-gray-500 leading-6">
              We understand that every business is unique. Our solutions are
              tailored to your specific needs and objectives.
            </p>
          </div>
        </div>

        <div className="border">
          <div className="flex justify-between">
            <img src="/images/grp4.svg" className="mt-10 ml-5 h-20" />
            <img src="/images/grp2.svg" className="h-20" />
          </div>
          <div className="p-4 space-y-6">
            <p className="font-medium text-xl">Agile Approach</p>
            <p className="font-normal text-sm lg:pr-16 pr-12 text-gray-500 leading-6">
              We are adaptable and agile, just like the technology landscape.
              Expect results on time and within budget.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
