import React from "react";

function Nav2() {
  return (
    <div className="bg-cyan-400">
      <nav className="p-5 bg-white shadow md:flex md:justify-between md:items-center">
        <div className="flex justify-between">
          <span className="text-2xl font-[Poppins] ">image + text</span>
          <span className="text-3xl md:hidden block">
            <ion-icon name="menu-outline" onclick="Menu(this)"></ion-icon>
          </span>
        </div>
        <ul
          className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white left-0 md:auto md:py-0 py-4
        md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500"
        >
          <li className="mx-4 my-6 md:my-0">
            <a href="/" className="text-red-500 font-normal text-base ">
              Home
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a href="/about" className="text-red-500 font-normal text-base">
              About-us
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a
              href="/servicepage"
              className="text-red-500 font-normal text-base"
            >
              Service
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a href="/blog" className="text-red-500 font-normal text-base">
              Blog
            </a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a href="contact_us" className="text-red-500 font-normal text-base">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      {/* <script>
        function Menu(e)
        {e.name === "menu" ? (e.name = "close") : (e.name = "menu")}
      </script> */}
    </div>
  );
}

export default Nav2;
