"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import image from "/public/convo-image.jpg";
import Image from "next/image";
import { ChevronDownIcon, MinusIcon } from "@heroicons/react/20/solid";

function NavBar() {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (isActive) {
      // Prevent scrolling
      document.body.style.overflow = "hidden";
    } else{
      // Restore scrolling
      document.body.style.overflow = "";
    }

    // Cleanup when the component unmounts or state changes
    return () => {
      document.body.style.overflow = "";
    };
  }, [isActive]);
  const handleLinkCLick = () =>{
    setIsActive(false)
  }
  return (
    <header className="flex justify-between items-center px-5 lg:pl-6 py-6 lg:pr-32 border-b border-solid border-gray-6 overflow-hidden">
      {" "}
      <Link href="/" className="flex items-center gap-4">
        <Image src={image} alt="Convo's logo" className="w-7" />
        <p className="font-bold ">Convo</p>
      </Link>
      <nav
        className={` lg:flex lg:justify-between ${
          isActive
            ? "grid z-50 absolute top-[76px] bottom-0 w-full right-0 bg-white h-[95vh] px-10 text-xl"
            : "hidden"
        }`}
      >
        <ul className="flex flex-col pt-5 lg:pt-0  lg:flex-row lg:gap-24 lg:w-4/6  lg:justify-end ">
          <li>
            <Link
              href=""
              className="flex items-center pt-7 pb-3 lg:py-0 border-b-[1px] border-solid border-gray-2 lg:border-0"
              onClick={handleLinkCLick}
            >
              <p>Home</p> <ChevronDownIcon className="hidden lg:block w-6" />
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="flex items-center pt-7 pb-3 lg:py-0 border-b-[1px] border-solid border-gray-2 lg:border-0"
              onClick={handleLinkCLick}
            >
              <p>About</p>{" "}
              <ChevronDownIcon className="hidden lg:block w-6" />
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="flex items-center pt-7 pb-3 lg:py-0 border-b-[1px] border-solid border-gray-2 lg:border-0"
              onClick={handleLinkCLick}
            >
              <p>Pricing</p> <ChevronDownIcon className="hidden lg:block w-6" />
            </Link>
          </li>
          <li className="pt-7 pb-3 lg:py-0">
            <Link href="" onClick={handleLinkCLick}>Testimonials</Link>
          </li>
        </ul>

        <ul className="flex justify-center lg:justify-normal gap-4">
          <li>
            <Link href="/" className="text-" onClick={handleLinkCLick}>Login </Link>
          </li>
          <li>
            <Button text="Sign In" href="" bgColor="black" handlClick={handleLinkCLick} />
          </li>
        </ul>
      </nav>
      <button
        className="border-0 grid gap-2 transition-all lg:hidden "
        onClick={() => setIsActive((prev) => !prev)}
      >
        <span
          className={`w-7 h-[2px] bg-gray-600 block ${
            isActive
              ? "rotate-45 translate-y-[5px] duration-700"
              : "rotate-0 translate-y-0 duration-700"
          }`}
        ></span>
        <span
          className={`w-7 h-[2px] bg-gray-600 block ${
            isActive
              ? "-rotate-45 -translate-y-[5px] duration-700"
              : "rotate-0 translate-y-0 duration-700"
          }`}
        ></span>
      </button>
    </header>
  );
}

export default NavBar;
