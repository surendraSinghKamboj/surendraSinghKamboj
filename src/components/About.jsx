import { about_blob } from "@/assets";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen w-full flex flex-wrap justify-center items-center relative"
    >
        <div className="w-full top-40 absolute -z-20">
        <Image
          src={about_blob}
          alt="skills_blob"
          width={1000}
          height={100}
          className="object-contain w-full"
        />
      </div>
    </div>
  );
};

export default About;
