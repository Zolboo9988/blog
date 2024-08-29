import React from "react";
import Holboo from "@/components/Holboo";

export default async function Blog() {
  const result = await fetch("https://dev.to/api/articles");
  const objResult = await result.json();

  return (
    <div>
      <Holboo posts={objResult} />
    </div>
  );
}
