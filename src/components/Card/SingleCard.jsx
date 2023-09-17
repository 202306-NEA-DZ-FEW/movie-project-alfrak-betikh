import React from "react";

const SingleCard = () => {
  return (
    <div className="w-[100%] bg-[#0f172a] shadow-x1 ">
      <div>
        <img
          className="h-[250px] w- [100%] object-cover "
          src="{img}"
          alt="movie"
        />
        <div>
          <h2 className="font bold"> Movie name </h2>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
