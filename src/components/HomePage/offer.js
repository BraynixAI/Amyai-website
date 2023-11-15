import React from "react";

function Offer() {
  return (
    <div>
      <div>
        <p className="text-center font-semibold text-3xl md:text-5xl ">
          What We Offer
        </p>
        <p className="text-center font-normal my-2 px-4 md:px-56">
          Alii autem, quibus ego assentior, cum teneam sententiam, quid aut
          fugiat aliquid, praeter voluptatem accusantium doloremque laudantium,
          totam rem voluptas in voluptate ponit.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        <div className="p-4">
          <p className="font-medium text-xl">Sourcing Technology Experts</p>
          <p className="font-normal text-base">
            We connect you with highly skilled professionals in the technology
            domains that matter most & critical to your business's success.
          </p>
        </div>
        <div className="p-4">
          <p className="font-medium text-xl">Customized Solutions</p>
          <p className="font-normal text-base">
            We understand that every business is unique. Our solutions are
            tailored to your specific needs and objectives.
          </p>
        </div>
        <div className="p-4">
          <p className="font-medium text-xl">Agile Approach</p>
          <p className="font-normal text-base">
            We are adaptable and agile, just like the technology landscape.
            Expect results on time and within budget.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Offer;
