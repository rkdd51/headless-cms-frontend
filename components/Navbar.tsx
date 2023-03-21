import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import favicon from "../public/favicon.ico";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    if (window.innerWidth <= 640) setShow(!show);
  };
  useEffect(() => {
    if (window.innerWidth >= 640) setShow(true);
  }, []);
  return (
    <>
      <nav className="sm:flex justify-between py-3 ml-2 sm:ml-0">
        <Link href="/" onClick={handleShow}>
          <div className="flex items-center cursor-pointer">
            <Image src={favicon} height={35} width={40} alt="logo" />
            <span className="text-primary font-bold ml-1">Ramzy Blog</span>
          </div>
        </Link>

        {show ? (
          <>
            <ul className="sm:flex items-center">
              <li className="mr-6 text-primary">Products</li>
              <li className="mr-6 text-primary">Price</li>
              <li className="mr-6 text-primary">Docs</li>
              <li className="mr-6 text-primary">Company</li>
            </ul>

            <ul className="sm:flex items-center">
              <li className="mr-6 text-primary hover:text-gray-600">Login</li>
              <li className=" text-primary p-2 rounded-lg bg-gray-200 hover:bg-slate-100 w-fit">
                SignUp
              </li>
            </ul>
          </>
        ) : null}
      </nav>
    </>
  );
};

export default Navbar;
