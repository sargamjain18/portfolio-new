"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/constant/constant";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props={
    openNav:()=>void
}

const Nav = ({openNav}:Props) => {
  const[navBg,setNavBg] = useState(false);
  useEffect(()=>{
     const handler = () => {
      if(window.scrollY >= 90){
        setNavBg(true);
      }
      if(window.scrollY < 90){
        setNavBg(false);
      }
     }
     window.addEventListener("scroll",handler);
     return()=>{
      window.removeEventListener("scroll",handler)
     }
  },[])
  return (
    <div className={`fixed ${navBg ? "bg-[#240b39]" : "fixed"} h-[12vh] z-10 w-full transition-all duration-200`}>
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xk:w-[80%] mx-auto">
        <Image
          src="/images/logo.png"
          alt="logo"
          height={170}
          width={170}
          className="ml-[-1.5rem] sm:ml-0"
        />
        <div className="flex items-center space-x-10">
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((navLink) => {
              return (
                <Link key={navLink.id} href={navLink.url}>
                  <p className="nav__link">{navLink.label}</p>
                </Link>
              );
            })}
          </div>
          <div className="flex items-center space-x-4">
            <button className="md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg">
              Hire Me
            </button>
            <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-white lg:hidden" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
