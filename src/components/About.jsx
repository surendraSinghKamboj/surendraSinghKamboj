
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen container mx-auto p-4 py-36 bg-[#ccabed] w-full flex flex-wrap justify-center items-center relative"
    >
      <div className="w-full top-40 sm:rounded-br-full">
        <h2 className="text-center text-3xl mb-4">About Me</h2>
        <p>
          {` I'm Surendra Singh Kamboj, a passionate MERN stack developer with 1.5
          years of experience. I specialize in crafting sleek and efficient web
          applications using MongoDB, Express.js, React.js, Next.js, and
          Node.js. Leveraging Next.js with app router and pages router, I ensure
          seamless navigation and dynamic rendering for a superior user
          experience. My approach is grounded in user-centric design and a
          commitment to delivering scalable solutions. Let's collaborate and
          build something remarkable together!`}
        </p>
        Feel free to reach out at{" "}
        <a href="mailto:surendra.singh.kamboj@hotmail.com">
          surendra.singh.kamboj@hotmail.com
        </a>{" "}
        to connect!
      </div>
    </div>
  );
};

export default About;
