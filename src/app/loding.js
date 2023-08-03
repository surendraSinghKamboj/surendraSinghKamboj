"use client";
import React from "react";
import Typewriter from "typewriter-effect";

const loding = () => {
  return (
    <div className="min-h-screen min-w-full flex justify-center items-center">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Loading......")
            .callFunction(() => {})
            .pauseFor(500)
            .deleteAll()
            .callFunction(() => {})
            .start();
        }}
      />
    </div>
  );
};

export default loding;
