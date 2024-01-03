import React from "react";
import { Link } from "react-router-dom";

export const Signup = () => {
  return (
    <div className="hidden md:block">
      <div className="flex md:space-x-24 md:px-40 p-6 justify-center">
        <div className="pt-20">
          <div className="text-center space-y-10 ">
            <div>
              <h1 className="text-neutral-900 text-3xl font-bold font-['Roboto Serif']">
                Sign up to your account
              </h1>
              <h3 className="text-neutral-500 text-xl font-medium font-['Poppins']">
                Welcome back!
              </h3>
            </div>
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center space-x-5 w-full ">
                <hr className="w-60 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <span className="">or</span>
                <hr className="w-60 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
              </div>
              <form action="">
                <div className="space-y-4">
                  <div className="relative">
                    <input
                      type="text"
                      className="border border-neutral-400 text-[#A1A1A1] text-sm rounded  block w-full ps-10 p-2.5"
                      placeholder="Enter Full name"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      className="border border-neutral-400 text-[#A1A1A1] text-sm rounded  block w-full ps-10 p-2.5"
                      placeholder="Enter Email address"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="number"
                      className="border border-neutral-400 text-[#A1A1A1] text-sm rounded  block w-full ps-10 p-2.5"
                      placeholder="Enter phone number"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      className="border border-neutral-400 text-[#A1A1A1] text-sm rounded  block w-full ps-10 p-2.5"
                      placeholder="Create a Password"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      className="border border-neutral-400 text-[#A1A1A1] text-sm rounded  block w-full ps-10 p-2.5"
                      placeholder="Confirm Password"
                    />
                  </div>
                  <div className="flex justify-between pt-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-5">
                        <p className="text-[#B9B9B9]">
                          One lowercase character
                        </p>
                      </div>
                      <div className="flex items-center space-x-5">
                        <p className="text-[#B9B9B9]">
                          One uppercase character
                        </p>
                        in
                      </div>
                      <div className="flex items-center space-x-5">
                        <p className="text-[#B9B9B9]">One number</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-5">
                        <p className="text-[#B9B9B9]">8 character minimum</p>
                      </div>
                      <div className="flex items-center space-x-5">
                        <p className="text-[#B9B9B9]">One special character</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-7 pt-8">
                  <div className=" px-72 py-4 bg-red-400 rounded justify-center items-center inline-flex mt-10">
                    <button className="text-white text-base font-bold font-['Poppins'] whitespace-nowrap">
                      Create account
                    </button>
                  </div>
                  <div className="flex justify-center items-center space-x-3">
                    <p>Already have an account?</p>
                    <Link className="text-red-400" href={"/login"}>
                      Sign in
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
