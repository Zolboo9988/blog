"use client";

import Link from "next/link";
import { Card } from "./Card";
import { useState } from "react";

export const Holboo = ({ posts }) => {
  const [visiblePosts, setVisiblePosts] = useState(9);

  const loadMorePosts = () => {
    setVisiblePosts((prevVisible) => prevVisible + 9);
  };

  return (
    <>
      <div className="flex flex-wrap w-[1296px] overflow-auto mb-[70px] gap-[145px]">
        {posts
          .slice(0, visiblePosts)
          .map(({ id, cover_image, title, published_at }) => (
            <Link key={id} href={`/list/${id}`} className="w-[300px]">
              <div className="border-2 rounded-lg p-4 w-[392px] h-[476px]">
                <img src={cover_image} className="h-64" alt={title} />
                <br />
                <Card />
                <br />
                <div className="text-lg font-semibold">{title}</div>
                <div className="text-base font-semibold text-gray-400 mt-2">
                  {published_at}
                </div>
              </div>
            </Link>
          ))}
      </div>
      {visiblePosts < posts.length && (
        <div className="flex justify-center text-center items-center">
          <button
            onClick={loadMorePosts}
            className="border-2 w-32 h-12 rounded-md p-3 text-base font-semibold text-gray-600"
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
};
