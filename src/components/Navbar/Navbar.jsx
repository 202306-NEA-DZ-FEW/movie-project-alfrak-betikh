"use client";
import React, { useState } from "react";
import NavLinks from "./NavLinks";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const handleDelete = () => {
    setSearchKey("");
  };

  return (
    <nav className="bg-grey">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-3 md:w-auto w-full flex justify-between">
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <FontAwesomeIcon icon={open ? faTimes : faBars} />
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <NavLinks />
        </ul>
        <div className="md:block hidden ml-5">
          <div className="relative">
            <input
              onChange={(e) => setSearchKey(e.target.value)}
              value={searchKey}
              className="appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 focus:shadow-outline"
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
                  className="h-6 w-6 -ml-1 mr-3 text-gray-400 hover:text-gray-500"
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
                className="ml-3 h-5 w-5 text-gray-400 hover:text-gray-500"
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
      </div>
    </nav>
  );
};

export default Navbar;
