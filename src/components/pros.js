import React from 'react'

export const Pros = () => {
  return (
    <div>
        <div className="sm:flex justify-center md:justify-evenly m-20">
        <div className="md:w-72 md:h-72 text-center shadow-xl p-2 pt-10">
          <div className="flex justify-center items-center mx-auto w-16 h-16 text-5xl bg-purple-200 rounded-full p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-12 h-12"
            >
              <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
              <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
              <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
            </svg>
          </div>
          <h3 className="text-3xl mt-6 font-big font-extrabold text-purple-600">
            Free Shipping
          </h3>
          <p className="font-p mt-3 text-slate-500 font-semibold">
            Free shipping for all our products above N100k
          </p>
        </div>
        <div className="md:w-72 md:h-72 text-center shadow-xl p-2 pt-10">
          <div className="flex justify-center items-center mx-auto w-16 h-16 text-5xl  bg-purple-200 rounded-full p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-12 h-12"
            >
              <path
                fill-rule="evenodd"
                d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-3xl mt-6 font-big font-extrabold text-purple-600">
            7 Days Return
          </h3>
          <p className="font-p mt-3 text-slate-500 font-semibold">
            7 days return policy for all products that isnt damaged
          </p>
        </div>
        <div className="md:w-72 md:h-72 text-center shadow-xl p-2 pt-10">
          <div className="flex justify-center items-center mx-auto w-16 h-16 text-5xl  bg-purple-200 rounded-full p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-12 h-12"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              />
            </svg>
          </div>
          <h3 className="text-3xl mt-6 font-big font-extrabold text-purple-600">
            24/7 cusomer support
          </h3>
          <p className="font-p mt-3 text-slate-500 font-semibold">
            24/7 customer rep that are ready to help you
          </p>
        </div>
      </div>{" "}
    </div>
  )
}
