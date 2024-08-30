"use client";

import Link from "next/link";
import React from "react";

export const SinglePost = ({ sing }) => {
  return (
    <div>
      {sing.map(({ id }) => (
        <div key={id}>
          <Link href={`/list/${id}`}>{id}</Link>
        </div>
      ))}
    </div>
  );
};
