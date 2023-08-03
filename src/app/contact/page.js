"use client";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";

const Page = () => {
  return (
    <div className="min-h-screen w-screen flex justify-center items-center">
        <Link href={"/"}>Home</Link>
      <div
        className="w-2/3 h-96 rounded-tl-full rounded-br-full"
        style={{
          clipPath: "polygon(100% 0, 28% 20%, 100% 100%, 0 100%, 0% 50%, 0 0)",
          background: "linear-gradient(rgb(225, 89, 5),#0725e7ab)",
        }}
      ></div>
    </div>
  );
};

export default Page;
