import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";

export const Image = () => {
  return (
    <>
      <div className="relative  flex justify-center items-center">
        <img src="/Image.png" alt="" className="  w-full h-[600px]  " />{" "}
        <div className=" absolute z-1 w-[598px] h-[252px] border-none rounded-lg bottom-2  left-2  bg-gray-50 flex ">
          <div className="flex flex-col p-8  ">
            <button className="border-2 bg-blue-400 rounded-lg text-white w-24 p-1 ml-4 2.5 1 2.5">
              Technology
            </button>
            <br />
            <div className="text-3xl font-semibold w-[350px]">
              Grid system for better Design User Interface
            </div>
            <br />
            <div className="text-base font-semibolds text-gray-400 text-start pl-5">
              August 20, 2022
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-4 gap-4">
        <button className=" w-10 h-10 border-2 flex items-center justify-center rounded-md">
          {" "}
          <MdOutlineArrowBackIos />
        </button>

        <button className=" w-10 h-10 border-2 flex items-center justify-center  rounded-md">
          <MdArrowForwardIos />
        </button>
      </div>
    </>
  );
};
