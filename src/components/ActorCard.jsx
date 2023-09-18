import React from "react";
import Image from "next/image";

const ActorCard = ({ id, name, profile_path }) => {
  return (
    <div className="flex flex-col justify-center" key={id}>
      <div className="relative w-[150px] h-[200px]">
        <Image
          layout="fill"
          className="object-contain rounded-md"
          src={"http://image.tmdb.org/t/p/w500" + profile_path}
          alt=""
        />
      </div>
      <div className="mb-4 text-center">
        <h2 className="text-content font-TitleFont text-lg">{name}</h2>
      </div>
    </div>
  );
};

export default ActorCard;
