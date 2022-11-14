import React from "react";

export const Log = ({ buttonClick }) => {
  return (
    <div>
      <div className="text-center font-head pb-10 ">Gamestop</div>
      <div className="text-center text-xl md:text-2xl lg:text-3xl font-bold font-p m-auto">
        Welcome Back!
      </div>
      <form action="" className="mt-6 md:mt-7 lg:mt-10 ">
        <label htmlFor="username" className="font-p font-medium">
          Email:
        </label>
        <br />
        <input
          type="email"
          className="md:ml-0 w-64 lg:w-96 bg-transparent border-b-2 border-slate-700 border-dotted "
          placeholder="@gmail.com"
          required
        />

        <div className="mt-7">
          <label htmlFor="username" className="font-p font-medium">
            Password:
          </label>
          <br />
          <input
            type="password"
            className="md:ml-0  w-64 lg:w-96 bg-transparent border-b-2 border-slate-700 border-dotted"
            placeholder="******"
            minLength={8}
            required
          />
        </div>

        <div className="login-help flex justify-between items-center mt-6">
          <span className="inline-block">
            <input type="checkbox" className="" />
            <a href="#" className="text-sm lg:text-lg">
              Remember me
            </a>
          </span>

          <a
            href="#"
            className=" font-semibold text-sm lg:text-lg md:mr-6 lg:mr-7"
          >
            Forgot Password?
          </a>
        </div>
        <button className="bg-purple-600 py-2 px-6 mx-auto flex rounded-md font-semibold font-p mt-6">
          <a href="/home"> Sign In</a>
        </button>

        <div className="mx-auto max-w-full md:max-w-fit mt-8">
          Don't have an account?
          <a href="#" className="font-semibold" onClick={buttonClick}>
            Sign Up now
          </a>
        </div>
      </form>
    </div>
  );
};
