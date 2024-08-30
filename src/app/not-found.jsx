import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <main className=" flex justify-center mt-20">
      <div>
        <img
          className="border-r-2 p-8"
          src="https://prestashop.com/sites/default/files/wysiwyg/404_not_found.png"
          alt=""
        />
      </div>
      <div className="w-[392px] h-[188px] gap-5  flex flex-col  p-8">
        <div className="text-2xl font-semibold">Page Not Found</div>
        <div className="w-[392px] h-[52px] text-base font-sans text-gray-400">
          We're sorry, This page is unknown or does not exist the page you are
          looking for.
        </div>
        <Link href="/">
          <button className="w-[130px] h-[40px] bg-blue-500 text-white rounded-lg">
            Back To Home
          </button>
        </Link>
      </div>
    </main>
  );
}
