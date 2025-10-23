"use client";

import React, { useState } from "react";
import { navlinks } from "./constants";
import Link from "next/link";
import { useRouter } from "next/compat/router";
import { IoClose, IoMenu } from "react-icons/io5";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const route = useRouter();
  const query = route?.pathname;

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="h-16 md:h-20"></div>
      <nav
        className={`flex justify-between items-center px-4 md:px-12 py-2 ${
          !isOpen ? "bg-[#B0BBC520]" : "bg-[#E8E7E5]"
        } transition-all duration-300 border-b border-[#B0BBC540] fixed top-0 w-full h-fit backdrop-blur-md z-50`}
      >
        <Link href={"/"} className="text-lime-500">
          <img
            src="/logo.png"
            alt="logo-rf"
            className="w-20 p-3 md:w-28 md:p-4"
          />
        </Link>
        <div>
          <ul className="hidden md:flex items-center gap-8">
            {navlinks.map((link, index) => (
              <li key={index}>
                <Link
                  className={
                    query !== link.url
                      ? "uppercase font-light hover:underline transition-all duration-300 ease-in-out"
                      : "uppercase underline"
                  }
                  href={link.url}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <Link
              className={
                query !== "quiero/vender"
                  ? "font-semibold bg-green-500 rounded-lg text-white p-2 w-fit hover:bg-green-600 transition-all duration-300 ease-in-out"
                  : "underline"
              }
              href={"/quiero/vender"}
            >
              Vender
            </Link>
            <Link
              className={
                query !== "quiero/alquilar"
                  ? "font-semibold bg-blue-500 rounded-lg text-white p-2 w-fit hover:bg-blue-600 transition-all duration-300 ease-in-out"
                  : "underline"
              }
              href={"/quiero/alquilar"}
            >
              Alquilar
            </Link>
          </ul>
          <div className="md:hidden flex flex-col items-center">
            <button
              className="relative z-50"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <IoClose className="text-4xl text-gray-700" />
              ) : (
                <IoMenu className="text-4xl text-gray-700" />
              )}
            </button>
            <aside
              className={`fixed top-[-0.5rem] right-0 h-full w-2/3 max-w-xs transform ${
                isOpen ? "translate-x-0" : "translate-x-full"
              } transition-transform duration-300 ease-in-out`}
            >
              <ul className="flex flex-col gap-4 mt-20 px-6 text-end bg-[#E8E7E5] rounded-b-lg h-screen py-8">
                {navlinks.map((link, index) => (
                  <li key={index} className="pe-2">
                    <Link
                      href={link.url}
                      onClick={() => setIsOpen(false)}
                      className={
                        query !== link.url
                          ? "uppercase font-light text-xl hover:underline transition-all duration-300 ease-in-out"
                          : "uppercase underline"
                      }
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <p className="pe-2">Tengo una propiedad</p>
                <li className="flex gap-1 justify-end pe-2">
                  <Link
                    className={
                      query !== "quiero/vender"
                        ? "font-semibold bg-green-500 rounded-lg text-white p-2 w-fit hover:underline transition-all duration-300 ease-in-out"
                        : "underline"
                    }
                    href={"/quiero/vender"}
                  >
                    Vender
                  </Link>
                  <Link
                    className={
                      query !== "quiero/alquilar"
                        ? "font-semibold bg-blue-500 rounded-lg text-white p-2 w-fit hover:underline transition-all duration-300 ease-in-out"
                        : "underline"
                    }
                    href={"/quiero/alquilar"}
                  >
                    Alquilar
                  </Link>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
