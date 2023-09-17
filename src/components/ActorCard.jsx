import React from "react";
import Image from "next/image";

const ActorCard = ({ id, name, profile_path }) => {
  return (
    <div
      className="m-2 flex flex-col flex-wrap gap-2 justify-center items-center "
      key={id}
    >
      <div className="flex justify-center items-center">
        <Image
          width={100}
          height={220}
          className="w-full"
          src={"http://image.tmdb.org/t/p/w500" + profile_path}
          alt=""
        />
      </div>
      <div className="mt-4 ">
        <h2 className="text-slate-200 title-font text-lg font-medium">
          {name}{" "}
        </h2>
      </div>
    </div>
  );
};

export default ActorCard;
