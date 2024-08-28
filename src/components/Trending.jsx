import React from "react";
const cards = [
  {
    image: "trending/image.png",
    chip: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
  },
  {
    image: "trending/image1.png",
    chip: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
  },
  {
    image: "trending/image2.png",

    chip: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
  },
  {
    image: "trending/image3.png",

    chip: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
  },
];

export const Trending = () => {
  return (
    <>
      <div className="text-2xl font-semibold">Trending</div>
      <br />
      <div className="flex gap-4 w-full ">
        {cards.map(({ image, chip, title }, index) => {
          return (
            <div key={index} className="relative w-[312px] h-[320px] ">
              <img src={image} alt="" />
              <div className="absolute bottom-2  text-white left-4">
                <div className="mb-8 w-[86px] h-[28px] rounded-md p-2  text-xs font-semibolds bg-blue-600">
                  {chip}
                </div>
                <div>{title}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
