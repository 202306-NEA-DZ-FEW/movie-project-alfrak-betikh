import React from "react";
import Image from "next/image";
import Link from "next/link";

const MovieCard = ({ id, title, name, poster_path }) => {
  return (
    <div className="m-5 w-full text-content hover:text-accent" key={id}>
      <div className="flex flex-col h-full rounded overflow-hidden">
        <div className="relative h-48">
          <Image
            alt="image"
            layout="fill"
            objectFit="contain"
            className="rounded-xl transition-transform transform hover:scale-110"
            src={"http://image.tmdb.org/t/p/w500" + poster_path}
          />
        </div>
        <div className="mt-4 flex justify-center">
          <h2 className=" text-center title-font text-lg font-medium text-wrap break-words max-w-[200px]">
            {title || name}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
