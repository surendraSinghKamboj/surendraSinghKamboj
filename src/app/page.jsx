"use client";
import Image from "next/image";
import React from "react";
import { heroBlob, trace } from "../assets/index.js";
import Skills from "@/components/Skills.jsx";
import { TypeAnimation } from "react-type-animation";
import Adsense from "@/components/Adsense.jsx";
import Head from "next/head.js";

const page = () => {
  return (
    <>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5780445115750860"
          crossorigin="anonymous"
        ></script>
      </Head>
      <div className="h-screen w-full relative py-20">
        <div className="w-full max-h-screen -top-0 fixed -z-20 right-0 h-screen">
          <Image
            src={heroBlob}
            alt="Hero_Section"
            className="w-full object-contain"
          />
        </div>
        <div className="min-h-screen flex flex-col justify-center items-center bg-center bg-no-repeat bg-opacity-5 bg-fixed bg-cover">
          <Image src={trace} alt="trace" />
          <h1 className="text-balck text-2xl sm:text-6xl">
            <TypeAnimation
              sequence={[
                "I am Surendra Singh Kamboj.",
                1000,
                "I'm a Full stack web Devloper.",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </h1>
        </div>
      </div>
      <Adsense />

      <Skills />
    </>
  );
};

export default page;
