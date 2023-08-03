"use client";
import React from "react";
import { navLinks } from "@/data/data";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const listItemVariants = (index) => {
    return {
      hidden: { opacity: 0, y: -20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          staggerChildren: 0.1 + index,
          delayChildren: 0.1 + index,
        },
      },
    };
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2 } }, // Add transition delay
  };

  return (
    <nav className="absolute text-white top-0 left-0 flex w-full justify-center items-center">
      <ul className="sm:max-w-full w-[780px] flex justify-around items-center h-8">
        {navLinks.map((item, index) => (
          <motion.li
            key={index}
            variants={listItemVariants(index)}
            initial="hidden"
            animate="visible"
            exit="hidden"
            custom={index}
          >
            <Link href={item.path}>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="hover:-translate-y-1 py-2 transition-all duration-500"
              >
                {item.name}
              </motion.div>
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
