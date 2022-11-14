import React from "react";

export const Footer = () => {
  return (
    <div className="bg-purple-400 text-slate-700">
      <div className="md:flex justify-around font-p">
        <div className="">
          <div className="flex-col text-center">
            <p className="font-bold text-yellow-400 mb-2">GameStop</p>
            <div className="text-xs lg:text-sm">
              <div className="mb-2">
                <b>Address:</b>
                No 10 Pedro view, Allen Avenue, Ikeja, Lagos
              </div>
              <div className="mb-2">
                <b>Phone:</b>
                +2348082755398
              </div>
              <div className="mb-2">
                <b>Email:</b>
                Kosyarnold@gmail.com{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-around">
          <div className="flex flex-row justify-between gap-8">
            <div className="flex-col text-left">
              <p className="font-bold text-yellow-400 mb-2 te">Information</p>
              <div className="text-xs lg:text-sm">
                <div className="mb-2 text-left">Home</div>
                <div className="mb-2 text-left">Store</div>
                <div className="mb-2 text-left">Games</div>
                <div className="mb-2 text-left">Contact Us</div>
              </div>
            </div>
            <div className="flex-col text-left">
              <p className="font-bold text-yellow-400 mb-2">Account</p>
              <div className="text-xs lg:text-sm">
                <div className="mb-2 text-left">My Account</div>
                <div className="mb-2 text-left">Order History</div>
                <div className="mb-2 text-left">Shipping</div>
                <div className="mb-2 text-left">Privacy policy</div>
              </div>
            </div>
            <div className="flex-col text-left">
              <p className="font-bold text-yellow-400 mb-2">Social Media</p>
              <div className="mb-2 text-center">
                <i className="fa fa-twitter"></i>
              </div>
              <div className="mb-2 text-center">
                <i className="fa fa-instagram"></i>
              </div>
              <div className="mb-2 text-center">
                <i className="fa fa-facebook"></i>
              </div>
              <div className="mb-2 text-center">
                <i className="fa fa-mail"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
