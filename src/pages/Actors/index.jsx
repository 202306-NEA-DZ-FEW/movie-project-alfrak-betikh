import React from "react";
import { fetcher } from "@/utils/API";
import ActorCard from "@/components/ActorCard";
import Link from "next/link";
import Pagination from "@/components/Pagination";

export async function getServerSideProps({ query }) {
  //   Use the fetcher function to retrieve data from the API
  const page = parseInt(query.page, 10) || 1;

  const data = await fetcher(`person/popular?page=${page}`);

  return {
    props: {
      actors: data,
      currentPage: page,
    },
  };
}

const index = ({ actors, currentPage }) => {
  const getPageLink = (page) => `?page=${page}`;
  const totalPages = 50;
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
      <div className="pagination flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          getPageLink={getPageLink}
        />
      </div>
    </div>
  );
};

export default index;
