import React from "react";
import Link from "next/link";
import Image from "next/image";
import favicon from "../public/favicon.ico";

const Footer = () => {
  return (
    <footer className="my-8 bottom-0 fixed w-full">
      <div className="flex justify-between container">
        <div className="flex">
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

        <span className="flex items-center">Social media sites</span>
      </div>
    </footer>
  );
};

export default Footer;
