"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/assets/logo1.png";
import NavLinks from "./NavLinks";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import DarkButton from "./DarkButton";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const handleDelete = () => {
    setSearchKey("");
  };

  return (
    <nav className="">
      <div className="flex items-center font-medium justify-around">
        <div className="z-20 p-3 md:w-auto w-full flex justify-between">
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              width={60}
              height={60}
              layout="fixed"
            />
          </Link>
          <DarkButton />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-3 h-5 w-5 text-darkgray hover:text-accent  z-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                fill="#000000"
                width="5vw"
                height="5vh"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M30 6.749h-28c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h28c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0zM18 14.75h-16c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h16c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0zM8.053 22.75h-6.053c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h6.053c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0z"></path>
              </svg>
            )}
          </div>
        </div>

        <ul className="md:flex hidden uppercase items-center gap-8">
          <NavLinks />
        </ul>
        <div className="md:block hidden  ml-5">
          <div className="relative">
            <input
              onChange={(e) => setSearchKey(e.target.value)}
              value={searchKey}
              className="appearance-none border-2 pl-10 border-accent hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:ring-accent focus:border-accent focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Search..."
            />
            <div className="absolute right-0 inset-y-0 flex items-center">
              <Link
                href={{
                  pathname: "/Movies",
                  query: { search: searchKey },
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 -ml-1 mr-3 text-darkgray hover:text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </Link>
            </div>
            <div className="absolute left-0 inset-y-0 flex items-center">
              <svg
                onClick={handleDelete}
                xmlns="http://www.w3.org/2000/svg"
                className="ml-3 h-5 w-5 text-darkgray hover:text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>
        <ul
          className={`
        md:hidden bg-bkg fixed  w-64 z-20 top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <NavLinks open={open} setOpen={setOpen} />{" "}
          <div className="py-5 w-3/4">
            <div className="relative">
              <input
                onChange={(e) => setSearchKey(e.target.value)}
                value={searchKey}
                className="appearance-none border-2 pl-10 border-accent hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:ring-accent focus:border-accent focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Search..."
              />
              <div className="absolute right-0 inset-y-0 flex items-center">
                <Link
                  href={{
                    pathname: "/Movies",
                    query: { search: searchKey },
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 -ml-3 mr-8 text-content hover:text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </Link>
              </div>
              <div className="absolute inset-y-0 flex items-center">
                <svg
                  onClick={handleDelete}
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-3 h-5 w-5 text-content hover:text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
