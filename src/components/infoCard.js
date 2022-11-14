import React from "react";
const InfoCard = () => {
  return (
    <div className="top-info relative">
      <img
        className="w-full h-full object-cover"
        src="./img/rectangle32.png"
        alt=""
      />

      <div className="flex flex-col absolute  -inset-0 items-center text-center justify-center">
        <h3 className="Uppercase md:text-3xl lg:text-5xl font-bold font-big text-white">
          20% Off
        </h3>

        <span>
          <h2 className="font-semibold md:text-7xl lg:text-8xl font-big mx-auto text-yellow-400 flex-wrap ">
            Dualsense Wireless <br /> controllers
          </h2>
        </span>

        <div className="mt-4 hidden md:block">
          <p className="text-white leading-3 font-p">
            <span>Take your gaming to way higher heights</span>
          </p>
          <p className="text-white mb-5 font-p">
            <span>with our products</span>
          </p>
          <button className="bg-yellow-300 text-slate-700 w-32 h-10 rounded-md font-semibold font-p">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
