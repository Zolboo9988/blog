import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

export const Footer = () => {
  return (
    <div
      className=" mt-80
    h-full  bg-gray-200 w-full p-24 flex  flex-col "
    >
      <div className="flex gap-64 w-[1216px] justify-center ">
        <div className="  ">
          <div className="text-lg font-semibold">About</div>
          <p className="w-[280px] h-32 text-base font-semibolds text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <br />
          <div className="text-base font-semibold text-gray-500">
            <div>Email : info@jstemplate.net</div>
            <div>Phone : 880 123 456 789</div>
          </div>
          <br />
        </div>

        <div className="flex flex-col text-gray-600 ">
          <div>Home</div>
          <div>Blog</div>
          <div>Contact</div>
        </div>
        <div className="flex gap-4">
          <div className="w-4  ">
            <FaFacebook />
          </div>
          <div>
            <FaSquareTwitter />
          </div>
          <div>
            <FaInstagram />
          </div>
          <div>
            <AiFillLinkedin />
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-64 border-t-2 border-gray-300	w-[1216px] p-5 ml-16">
        <div className="flex ml-11">
          <img src="/Union (1).png" alt="" />
          <div className="flex flex-col ">
            <div>
              Meta
              <strong>Blog</strong>
            </div>
            <div>© All Rights Reserved.</div>
          </div>
        </div>
        <div className="flex gap-8 ml-[300px]">
          <div className="text-base font-semibolds text-gray-500">
            Terms of Use
          </div>
          <div className="text-base font-semibolds text-gray-500">
            Privacy Policy
          </div>
          <div className="text-base font-semibolds text-gray-500">
            Cookie Policy
          </div>
        </div>
      </div>
    </div>
  );
};
