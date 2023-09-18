import React, { useState, useEffect } from "react";
import Link from "next/link";
import { fetcher } from "@/utils/API";

export default function NavLinks({ open, setOpen }) {
  const [heading, setHeading] = useState("");
  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetcher("genre/movie/list");
        setGenreList(data.genres);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const genreLinks = genreList.map((genre) => ({
    name: genre.name,
    link: `${genre.id}`,
  }));

  const links = [
    {
      name: "Genres",
      submenu: true,
      sublinks: genreLinks,
      queryParam: "genre",
    },
    {
      name: "Filters",
      submenu: true,
      queryParam: "type",
      sublinks: [
        { name: "Top Rated", link: "top_rated" },
        { name: "Popular", link: "popular" },
        { name: "Latest", link: "latest" },
        { name: "Now playing", link: "now_playing" },
        { name: "Upcoming", link: "upcoming" },
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
          {link.submenu ? (
            <div className="px-3 text-left md:cursor-pointer group">
              <span
                className="relative block text-content font-bold mt-5 w-fit  after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left
              py-7 justify-between items-center md:pr-0 pr-5 group"
                onClick={() => {
                  heading !== link.name
                    ? setHeading(link.name)
                    : setHeading("");
                  setSubHeading("");
                }}
              >
                {link.name}
              </span>

              {link.submenu && (
                <div>
                  <div className="absolute z-20 top-20 hidden group-hover:md:block hover:md:block">
                    <div className="py-3">
                      <div className="w-4 h-4 left-3 absolute mt-1 bg-accent rotate-45"></div>
                    </div>
                    <div className=" bg-accent p-5 grid  z-50 grid-cols-5 gap-5">
                      {link.sublinks.map((sublink, index) => (
                        <div
                          key={index}
                          className="text-sm text-darkgray my-1.5 hover:text-gray-600"
                        >
                          <Link
                            href={{
                              pathname: "/Movies",
                              query: { [link.queryParam]: sublink.link },
                            }}
                          >
                            {sublink.name}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link
              className="relative block text-content font-bold mt-5 w-fit  after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left
            py-7 justify-between items-center md:pr-0 pr-5 group"
              href={{
                pathname: link.name,
              }}
            >
              {link.name}
            </Link>
          )}

          <div
            className={`
            ${heading === link.name ? "md:hidden " : "hidden"}
          `}
          >
            {link.submenu && (
              <div>
                <div>
                  {link.sublinks.map((slinks) => (
                    <div
                      key={slinks.name}
                      onClick={() => {
                        heading !== link.name
                          ? setHeading(link.name)
                          : setHeading("");
                        setSubHeading("");
                        if (open) {
                          setOpen(false);
                        }
                      }}
                      className="py-4 pl-7 text-content font-semibold md:pr-0 pr-5 flex justify-between items-center"
                    >
                      <Link
                        href={{
                          pathname: "/Movies",
                          query: { [link.queryParam]: slinks.link },
                        }}
                      >
                        {slinks.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
