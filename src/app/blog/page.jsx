import { Holboo } from "@/components/Holboo";
import React from "react";

export default async function Blog() {
  const result = await fetch("https://dev.to/api/articles");
  const objResult = await result.json();

  return (
    <div>
      <Holboo posts={objResult} />
    </div>
  );
}
