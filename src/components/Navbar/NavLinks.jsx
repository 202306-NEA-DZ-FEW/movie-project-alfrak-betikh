import React, { useState } from "react";
import Link from "next/link";

export default function NavLinks() {
  const [heading, setHeading] = useState("");
  const links = [
    {
      name: "Genres",
      submenu: true,
      sublinks: [
        { name: "Action", link: "/28" },
        { name: "Adventure", link: "/12" },
        { name: "Animation", link: "/16" },
        { name: "Comedy", link: "/35" },
        { name: "Crime", link: "/80" },
        { name: "Documentary", link: "/99" },
        { name: "Drama", link: "/18" },
        { name: "Family", link: "/10751" },
        { name: "Fantasy", link: "/14" },
        { name: "History", link: "/36" },
        { name: "Horror", link: "/27" },
        { name: "Music", link: "/10402" },
        { name: "Mystery", link: "/9648" },
        { name: "Romance", link: "/10749" },
        { name: "Science Fiction", link: "/878" },
        { name: "TV Movie", link: "/10770" },
        { name: "Thriller", link: "/53" },
        { name: "War", link: "/10752" },
        { name: "Western", link: "/37" },
      ],
    },
    {
      name: "Filters",
      submenu: true,
      sublinks: [
        { name: "Top Rated", link: "/" },
        { name: "Popular", link: "/" },
        { name: "Latest", link: "/" },
        { name: "Now playing", link: "/" },
        { name: "Upcoming", link: "/" },
      ],
    },
    {
      name: "Actors",
      submenu: false,
    },
  ];

  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {links.map((link) => (
        <div key={link.name}>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-7 flex text-fuchsia-600 justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl md:hidden inline">
                <ion-icon
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                  </div>
                  <div className="bg-white p-5 grid  z-50 grid-cols-3 gap-10">
                    {link.sublinks.map((sublink, index) => (
                      <div key={index}>
                        <h1 className="text-lg font-semibold">
                          {sublink.name}
                        </h1>
                        <ul>
                          <li className="text-sm text-gray-600 my-2.5">
                            <Link
                              href={sublink.link}
                              className="hover:text-primary"
                            >
                              {sublink.name}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
