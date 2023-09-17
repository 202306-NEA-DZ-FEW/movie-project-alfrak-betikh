import React from "react";
import { fetcher } from "@/utils/API";
import ActorCard from "@/components/ActorCard";
import Link from "next/link";

export async function getServerSideProps() {
  //   Use the fetcher function to retrieve data from the API
  const data = await fetcher("person/popular");

  return {
    props: {
      actors: data,
    },
  };
}

const index = ({ actors }) => {
  return (
    <div className="container px-5 py-24 mx-auto">
      {console.log({ actors })}
      <div className="flex flex-wrap -m-4">
        {actors.results.map((actor) => (
          <Link key={actor.id} href={"/Actors/" + actor.id}>
            <ActorCard {...actor} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default index;
