import React from "react";

export const Console = () => {
  return (
    <div>
      <div className="flex mt-20 mx-10 lg:mx-32 gap-8">
        <div className="md:grid grid-cols-2 gap-2">
          <img
            src="./img/rectangle90.png"
            className="w-full h-96 hidden md:block "
            alt=""
          />
          <div className="flex-col">
            <img src="./img/rectangle91.png" className="w-full h-48" alt="" />
            <img src="./img/rectangle92.png" className="w-full h-48" alt="" />
          </div>
        </div>
        <div className="flex-col w-1/2 md:w-1/3 m-auto  text-left">
          <h1 className="text-2xl md:text-6xl font-big text-purple-700 font-bold mb-4">
            Elevate your Gaming Experience
          </h1>
          <p className="font-p  text-sm md:text-base text-slate-700">
            Elevate your gaming experience with the right and best products that
            you can only get from our store. Check out our store and get your
            gaming consoles, gaming accessories, game disc etc. You can never go
            wrong by choosing us
          </p>
          <button className="border-purple-500 border-2 h-12 w-32 my-3 rounded-md font-semibold font-p mt-6">
            Shop Now
          </button>
        </div>
      </div>
      {/* pros  */}
    </div>
  );
};
