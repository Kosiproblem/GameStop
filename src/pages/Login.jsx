import React, { useState } from "react";
import { Log } from "../components/log";
import { Sign } from "../components/sign";

export const Login = () => {
  const [page, setPage] = useState(false);

  function buttonClick() {
    setPage(!page);
  }
  return (
    <>
      <div className="h-screen w-full bg-cover bg-center bg-login flex">
        <div className=" m-auto border-2 md:w-5/6 lg:w-2/3  border-white bg-white opacity-95 rounded-md overflow-hidden  grid grid-cols-2">
          <div className=" hidden sm:block w-fit col-span-1">
            <div className="text-center col-span-2 md:col-span-1 flex justify-start">
              <img
                src="./img/Rectangle901.png"
                className="object-fill"
                alt=""
              />
            </div>
          </div>
          <div className=" col-span-2 md:col-span-1 flex-col justify-start pt-12 pb-32 md:py-2 lg:pt-1 lg:pb-0 self-center px-5 font-p">
            {page ? (
              <Sign buttonClick={buttonClick} />
            ) : (
              <Log buttonClick={buttonClick} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
