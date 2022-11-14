import React from "react";
import { useState } from "react";

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="">
      <div className="w-full h-30 md:h-14 px-4 py-2 text-white font-p md:flex justify-between">
        <div className="flex justify-between">
          {/* nav-brand */}
          <div className="brand text-sm md:text-xl">
            <h2 className="font-p font-bold">
              {" "}
              <a href="#">Gamestop</a>{" "}
            </h2>
          </div>

          {/* hamburger */}
          <div className="md:hidden">
            <button
              className="text-gray-700 focus:border-gray-400 focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`text-sm text-white md:text-base lg:text-xl gap-5 md:flex ${
            navbar ? "block" : "hidden"
          }`}
        >
          <div>
            {" "}
            <a href="#">Home</a>{" "}
          </div>
          <div>
            {" "}
            <a href="#">Store</a>{" "}
          </div>
          <div>
            {" "}
            <a href="#">Games</a>{" "}
          </div>
        </div>
        <div className=" top-prompt hidden md:flex justify-between w-32 mr-5">
          Kosiproblem
          <div>
            <img
              className="w-8 h-8 rounded-full"
              src="./img/rectangle32.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
