import { skills_Logos, skills_blob } from "@/assets";
import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen w-full flex flex-wrap justify-center items-center relative"
    >
      <div className="w-full absolute -z-20">
        <Image
          src={skills_blob}
          alt="skills_blob"
          width={1000}
          height={100}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-wrap justify-center items-center sm:w-1/2">
        {skills_Logos.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={image.width}
            width={200}
            height={200}
            className="mx-5 my-3 cursor-pointer hover:scale-110 transition-all duration-500"
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
