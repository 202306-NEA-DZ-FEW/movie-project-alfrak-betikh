import { fetcher } from "@/utils/API";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

const MovieDetail = ({ tvData }) => {
  let formattedDate;
  tvData.next_episode_to_air &&
    (formattedDate = new Date(
      tvData.next_episode_to_air.air_date,
    ).toLocaleDateString("en-US", { month: "long", day: "numeric" }));
  return (
    <div className="">
      <div>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="md:flex md:flex-col md:items-center md:justify-center ">
              <Image
                width={500}
                height={500}
                src={"http://image.tmdb.org/t/p/w500" + tvData.poster_path}
                alt={tvData.title}
                className="w-1/2 h-auto mx-auto rounded-lg"
              />
            </div>
            <div className="flex items-start justify-center flex-col">
              <h1 className="text-3xl font-TitleFont font-lg text-content">
                {tvData.name}
              </h1>
              <p className="text-content text-lg mt-2 italic">
                {tvData.tagline}
              </p>
              <p className="text-black text-md mt-4 bg-accent/80 rounded-xl px-4 py-4 ">
                <span className="font-bold mr-2">OverView :</span>
                {tvData.overview}
              </p>
              <div className="mt-6">
                <p className="text-content flex flex-col">
                  {" "}
                  <span className="font-bold mr-2">Popularity: </span>
                  {tvData.popularity}
                </p>
                <p className="text-content flex flex-col">
                  <span className="font-bold mr-2"> Language: </span>
                  {tvData.original_language}
                </p>
                <p className="text-content mt-1">
                  <span className="font-bold mr-2"> Votes: </span>
                  <span className="bg-accent text-black p-1 rounded-md font-bold">
                    {tvData.vote_count}
                  </span>
                </p>
                {tvData.next_episode_to_air && (
                  <p className="text-content flex flex-wrap">
                    <span className="font-bold mr-2">Next Episode: </span>
                    {formattedDate}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;

export async function getServerSideProps({ params }) {
  const { tvShowId } = params;
  const data = await fetcher(`tv/${tvShowId}`);

  return {
    props: {
      tvData: data,
    },
  };
}
