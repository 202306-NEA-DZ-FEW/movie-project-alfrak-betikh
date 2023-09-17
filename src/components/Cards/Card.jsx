import React from "react";

export const Card = ({ poster_path }) => {
  return (
    <div className=" block rounded-lg bg-slate-300/25 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700/25">
      <img
        className=""
        src={"http://image.tmdb.org/t/p/w500" + poster_path}
        alt=""
      ></img>
    </div>
  );
};
