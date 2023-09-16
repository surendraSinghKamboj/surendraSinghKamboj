import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 bg-[#ecdddd96] z-10 h-16 flex w-full justify-start items-center">
      <ul className="flex justify-center items-start">
        <Link href={"/"}>
          <li className="mx-3 hover:text-purple-600 cursor-pointer">Home</li>
        </Link>
        <Link href={"#skills"}>
          <li className="mx-3 hover:text-purple-600 cursor-pointer">Skills</li>
        </Link>
        <Link href={"#about"}>
          <li className="mx-3 hover:text-purple-600 cursor-pointer">About</li>
        </Link>
        <li className="mx-3 hover:text-purple-600 cursor-pointer">Projects</li>
        <li className="mx-3 hover:text-purple-600 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
