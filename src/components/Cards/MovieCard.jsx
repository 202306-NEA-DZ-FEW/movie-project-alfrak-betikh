import React from "react";
import Image from "next/image";
const MovieCard = ({ id, title, poster_path }) => {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4" key={id}>
      <div className=" relative  rounded">
        <Image
          alt="image"
          width={500}
          height={500}
          className="object-fit object-center w-full h-full  rounded-xl"
          src={"http://image.tmdb.org/t/p/w500" + poster_path}
        />
        <div className="mt-4">
          <h2 className="text-slate-200 text-center title-font text-lg font-medium">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
