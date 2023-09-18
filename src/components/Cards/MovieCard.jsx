import React from "react";
import Image from "next/image";
import Link from "next/link";

const MovieCard = ({ id, title, name, poster_path }) => {
  const hasPoster = poster_path && poster_path !== "";

  return (
    <div className="m-5 w-full  text-content hover:text-accent" key={id}>
      <div className="flex flex-col h-full rounded">
        <div className="relative h-48">
          {hasPoster ? (
            <Image
              alt={name || title}
              layout="fill"
              className="rounded-xl object-contain"
              src={"http://image.tmdb.org/t/p/w500" + poster_path}
            />
          ) : (
            <Image
              alt={name || title}
              layout="fill"
              className="rounded-xl object-contain"
              src="https://via.placeholder.com/150x150"
            />
          )}
        </div>
        <div className="mt-4 flex justify-center">
          <h2 className="text-center title-font text-lg font-medium text-wrap break-words max-w-[200px]">
            {title || name}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
