import React from "react";

export const Deals = () => {
  return (
    <div>
      <div className="mt-16 md:mt-24 relative mb-20 p-4">
        <img src="./img/Rectangle95.png" className=" w-full " alt="" />
        <div className="absolute bottom-14  md:bottom-20 lg:bottom-28 left-32 md:right-28 lg:right-24 mx-auto  text-center">
          <h3 className="text-white font-big text-base md:text-3xl lg:text-6xl font-semibold">
            Get the best deals on any Xbox console
          </h3>
          <button className="bg-yellow-400  text-slate-800 p-2 rounded-sm font-semibold font-p md:mt-5 text-xs md:text-base">
            Shop Now
          </button>
        </div>
      </div>

      {/* Hot Deals */}
      <div className="hot-deals p-3">
        <div className="p-2 font-big text-slate-900 font-bold text-3xl ">
          Hot Deals
        </div>
        <div className="sm:flex justify-around gap-3">
          <div className="bg-purple-700 grid grid-cols-2 rounded-md overflow-hidden">
            <div>
              <img src="./img/img3.jpg" className="w-60 h-full" alt="" />
            </div>
            <div className="p-2">
              <p className="p-2 text-3xl text-white text-center font-big font-semibold">
                70% Off
              </p>
              <div className="flex justify-around">
                <div className="flex-col bg-purple-300  font-p py-1 px-2">
                  <div className="font-semibold">19</div>
                  <div>day</div>
                </div>
                <div className="flex-col bg-purple-300  font-p py-1 px-2">
                  <div className="font-semibold">30</div>
                  <div>hrs</div>
                </div>
                <div className="flex-col bg-purple-300  font-p py-1 px-2">
                  <div className="font-semibold">49</div>
                  <div>min</div>
                </div>
                <div className="flex-col bg-purple-300  font-p py-1 px-2">
                  <div className="font-semibold">15</div>
                  <div>sec</div>
                </div>
              </div>
              <div className="p-2 font-p font-bold text-sm md:text-base text-center text-white">
                PS5 console with 5 games
              </div>
              <div className="flex justify-start font-p text-yellow-400 ml-4">
                <span className="mr-2 font-bold">#450,000</span>
                <span className="line-through text-center font-normal">
                  #550,000
                </span>
              </div>
              <button className="bg-yellow-400  text-slate-800 p-2 rounded-sm font-semibold font-p md:mt-5 text-xs md:text-base ml-4">
                Shop Now
              </button>
            </div>
          </div>
          <div className="bg-purple-700 grid grid-cols-2 mt-2 md:mt-0 rounded-md overflow-hidden">
            <div>
              <img src="./img/img3.jpg" className="w-60 h-full" alt="" />
            </div>
            <div className="p-2">
              <p className="p-2 text-3xl text-white text-center font-big font-semibold">
                70% Off
              </p>
              <div className="flex justify-around">
                <div className="flex-col bg-purple-300  font-p py-1 px-2">
                  <div className="font-semibold">19</div>
                  <div>day</div>
                </div>
                <div className="flex-col bg-purple-300  font-p py-1 px-2">
                  <div className="font-semibold">30</div>
                  <div>hrs</div>
                </div>
                <div className="flex-col bg-purple-300  font-p py-1 px-2">
                  <div className="font-semibold">49</div>
                  <div>min</div>
                </div>
                <div className="flex-col bg-purple-300  font-p py-1 px-2">
                  <div className="font-semibold">14</div>
                  <div>sec</div>
                </div>
              </div>
              <div className="p-2 font-p font-bold text-center text-sm md:text-base text-white">
                PS5 console with 5 games
              </div>
              <div className="flex justify-start font-p text-yellow-400 ml-4">
                <span className="mr-2 font-bold">#450,000</span>
                <span className="line-through text-center font-normal">
                  #550,000
                </span>
              </div>
              <button className="bg-yellow-400  text-slate-800 p-2 rounded-sm font-semibold font-p md:mt-5 text-xs md:text-base ml-4">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
