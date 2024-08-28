"use client";
import Link from "next/link";

const routers = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const Header = () => {
  return (
    <>
      <div className="flex w-[1216px] items-center flex-col  gap-24">
        <div className="flex justify-center text-center items-center  gap-[118px]">
          <div className="flex justify-center text-center items-center ">
            <img src="/Union (1).png" />
            Meta<strong>Blog</strong>
          </div>
          <div>
            <div className="flex justify-center text-center gap-10">
              {routers.map(({ href, title }) => (
                <Link href={href} key={title}>
                  {title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <input type="text" placeholder="Search" className="bg-slate-200" />
          </div>
        </div>
      </div>
    </>
  );
};
