import React from "react";
import Link from "next/link";
import Image from "next/image";
import favicon from "../public/favicon.ico";
import { IconContext } from "react-icons";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="my-8 bottom-0 fixed w-full">
      <div className="block justify-between container sm:flex ">
        <div className="flex justify-center sm:justify-start ">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <Image src={favicon} height={35} width={40} alt="logo" />
              <span className="text-primary font-bold ml-1">Ramzy Blog</span>
            </div>
          </Link>

          <span className="flex items-center ml-4 text-primary font-light">
            Ramzy blogs for coders
          </span>
        </div>

        <span className="flex items-center my-3 sm:my-0 justify-center">
          <IconContext.Provider value={{ size: "2rem" }}>
            <AiFillLinkedin />
            <AiFillFacebook />
          </IconContext.Provider>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
