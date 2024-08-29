import React from "react";

export const Contact = () => {
  return (
    <div>
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
    </div>
  );
};
export default Contact;
