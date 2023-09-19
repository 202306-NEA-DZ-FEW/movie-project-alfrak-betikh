import React from "react";
import Head from "next/head";
import Image from "next/image";

const ActorCard = ({ id, name, profile_path }) => {
  return (
    <>
      <Head>
        <title>10 melon | Actor page</title>
        <meta name="keywords" content="actor page"></meta>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <div
        className="flex flex-col justify-center transform transition-transform hover:scale-110  text-content hover:text-accent"
        key={id}
      >
        <div className="relative w-[150px] h-[200px] rounded-xl overflow-hidden">
          <Image
            layout="fill"
            className="object-contain rounded-xl"
            src={"http://image.tmdb.org/t/p/w500" + profile_path}
            alt={name}
          />
        </div>
        <div className="mb-4 text-center ">
          <h2 className="font-TitleFont text-lg">{name}</h2>
        </div>
      </div>
    </>
  );
};

export default ActorCard;
