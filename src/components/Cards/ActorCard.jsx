import Image from "next/image";
import React from "react";
import { Loader } from "../Loader";

const ActorCard = ({ id, name, profile_path }) => {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={id}>
      <a className="block relative h-48 rounded overflow-hidden">
        <Image
          width={500}
          height={500}
          className="object-fit object-center w-full h-full block rounded-xl"
          src={"http://image.tmdb.org/t/p/w500" + profile_path}
        />
      </a>
      <div className="mt-4">
        <h2 className="text-content title-font text-lg font-medium">{name} </h2>
      </div>
    </div>
  );
};

export default ActorCard;
