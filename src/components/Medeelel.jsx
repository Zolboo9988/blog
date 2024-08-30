import React from "react";

export const Contact = () => {
  return (
    <div className="gap-5 flex flex-col mt-14">
      <div className="text-4xl font-semibold ">Contact Us</div>
      <p className="w-[624px] h-[163px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam
      </p>
      <div className="flex gap-12">
        <div className="w-[294px] h-[133px] border-none shadow-md p-4 gap-5 rounded-md">
          <div className="text-2xl font-semibold">Address</div>

          <p className="text-lg font-semibolds w-[260px] h-[52px] text-gray-400">
            1328 Oak Ridge Drive, Saint Louis, Missouri
          </p>
        </div>
        <div className="w-[294px] h-[133px] border-none shadow-md p-4 rounded-md ">
          <div className="text-2xl font-semibold">Contact</div>
          <p className="text-lg font-semibolds w-[160px] h-[52px]  text-gray-400">
            313-332-8662 info@email.com
          </p>
        </div>
      </div>
      <div className="w-[643px] h-[500px] border-none bg-gray-200 rounded-lg mt-16 p-8 flex flex-col gap-8 ">
        <div className="text-lg font-semibold">Leave a Message</div>
        <div className="flex gap-8  ">
          <input
            className="w-[225px] h-[38px] p-4"
            type="text"
            placeholder="Your Name  "
          />
          <input
            className="w-[225px] h-[38px] p-4 "
            type="text"
            placeholder="Your Email"
          />
        </div>
        <div>
          <input
            className="w-[482px] h-[35px] p-4"
            type="text"
            placeholder="Subject"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Write a message"
            className=" p-4 w-[482px] h-[134px]"
            rounded-md
          />
        </div>
        <div className="bg-blue-500 w-[130px] h-[40px] p-2.5 4 2.5 4 text-white rounded-lg">
          <button className="text-base font-semibolds ">Send Message</button>
        </div>
      </div>
    </div>
  );
};
export default Contact;
