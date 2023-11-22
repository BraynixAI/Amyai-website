import React, { useState } from "react";

function Buttons() {
  const [tab, setTab] = useState(1);
  const [tab2, setTab2] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const handelOnClick = (number) => {
    setTab(number);
  };
  return (
    <div>
      <div className="flex flex-wrap  text-sm space-x-3 space-y-2 text-gray-500 font-semibold ">
        <button
          onClick={() => handelOnClick(1)}
          className={` ${
            tab === 1
              ? " flex-1 px-5 py-2 font-semibold text-xs  border rounded uppercase bg-blue-400 text-white"
              : " flex-1 px-5 py-2 font-semibold text-xs text-gray-500 border rounded uppercase border-b-2"
          } `}
        >
          landing
        </button>
        <button
          onClick={() => handelOnClick(2)}
          className={` ${
            tab === 2
              ? " flex-1 px-5 py-2 font-semibold text-xs  border rounded uppercase bg-blue-400 text-white"
              : " flex-1 px-5 py-2 font-semibold text-xs text-gray-500 border rounded uppercase border-b-2"
          } `}
        >
          Charity
        </button>
        <button
          onClick={() => handelOnClick(3)}
          className={` ${
            tab === 3
              ? " flex-1 px-5 py-2  font-semibold text-xs border rounded uppercase bg-blue-400 text-white"
              : " flex-1 px-5 py-2 font-semibold text-xs text-gray-500  border rounded uppercase border-b-2"
          } `}
        >
          apps
        </button>{" "}
        <button
          onClick={() => handelOnClick(4)}
          className={` ${
            tab === 4
              ? " flex-1 px-5 py-2 font-semibold text-xs border rounded uppercase  bg-blue-400 text-white"
              : " flex-1 px-5 py-2 font-semibold text-xs border rounded uppercase border-b-2 text-gray-500 "
          }`}
        >
          Education
        </button>
        <button
          onClick={() => handelOnClick(5)}
          className={` ${
            tab === 5
              ? " flex-1 px-5 py-2 font-semibold text-xs  border rounded uppercase bg-blue-400 text-white"
              : " flex-1 px-5 py-2 font-semibold text-xs text-gray-500 border rounded uppercase border-b-2"
          } `}
        >
          data
        </button>
        <button
          onClick={() => handelOnClick(6)}
          className={` ${
            tab === 6
              ? " flex-1 px-5 py-2  font-semibold text-xs border rounded uppercase bg-blue-400 text-white"
              : " flex-1 px-5 py-2 font-semibold text-xs text-gray-500  border rounded uppercase border-b-2"
          } `}
        >
          book
        </button>{" "}
        <button
          className={` ${
            tab === 7
              ? " flex-1 px-5 py-2 font-semibold text-xs border rounded uppercase  bg-blue-400 text-white"
              : " flex-1 px-5 py-2 font-semibold text-xs border rounded uppercase border-b-2 text-gray-500 "
          }`}
          onClick={() => handelOnClick(7)}
        >
          Design
        </button>
        <button
          onClick={() => handelOnClick(8)}
          className={` ${
            tab === 8
              ? " flex-1 px-5 py-2 font-semibold text-xs  border rounded uppercase bg-blue-400 text-white"
              : " flex-1 px-5 py-2 font-semibold text-xs text-gray-500 border rounded uppercase border-b-2"
          } `}
        >
          website
        </button>
        <button
          className={` ${
            tab === 9
              ? " flex-1 px-5 py-2 font-semibold text-xs border rounded uppercase  bg-blue-400 text-white"
              : " flex-1 px-5 py-2 font-semibold text-xs border rounded uppercase border-b-2 text-gray-500 "
          }`}
          onClick={() => handelOnClick(9)}
        >
          landing page
        </button>
        <button
          onClick={() => handelOnClick(10)}
          className={` ${
            tab === 10
              ? " flex-1 px-5 py-2 font-semibold text-xs  border rounded uppercase bg-blue-400 text-white"
              : " flex-1 px-5 py-2 font-semibold text-xs text-gray-500 border rounded uppercase border-b-2"
          } `}
        >
          data
        </button>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Buttons;
