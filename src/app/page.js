"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { skills_Logos } from "@/assets";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "@react-hook/media-query";

export default function Home() {
  return (
    <>
      {/* Home Div */}
      <div
        style={{ background: "url(/home_bg.svg)", backgroundColor: "#000" }}
        className="min-h-screen flex flex-col justify-center items-center bg-center bg-no-repeat bg-opacity-5 bg-fixed bg-cover"
      >
        <h1 className="text-white text-2xl sm:text-6xl">
          <TypeAnimation
            sequence={[
              "I am Surendra Singh Kamboj",
              1000,
              "I'm a Full stack web Devloper.",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </h1>
      </div>
      {/* Skills */}
      <div
        id="skills"
        style={{
          background: "url(/skills_bg.svg)",
          backgroundColor: "#000",
          backgroundSize: "cover",
        }}
        className="min-h-screen flex flex-col justify-center items-center bg-gray-900 bg-no-repeat"
      >
        <SkillsGrid />
      </div>
    </>
  );
}

function SkillsGrid() {
  const { ref, inView } = useInView({
    triggerOnce: false, // Allow triggering the animation multiple times
    threshold: 0.1, // Set the threshold for when the element is considered in view
  });

  const isMobile = useMediaQuery("(max-width: 680px)");
  const imageWidth = isMobile ? 150 : 200;

  return (
    <div
      ref={ref}
      className="flex flex-wrap w-[90vw] h-[90vw] sm:w-[680px] gap-10 sm:h-[500px]"
    >
      {skills_Logos.map((img, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            x: inView ? (index % 2 === 0 ? "100%" : "-100%") : 0,
          }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 0 }}
          transition={{ duration: 0.6, delay: 0.1 * index }}
          whileHover={{ scale: 1.1 }}
          exit={{
            opacity: 0,
            x: inView ? (index % 2 === 0 ? "-100%" : "100%") : 0,
          }}
        >
          <Image
            src={img}
            width={imageWidth}
            alt={`Skill logo ${index + 1}`}
            className="hover:cursor-pointer"
          />
        </motion.div>
      ))}
    </div>
  );
}
