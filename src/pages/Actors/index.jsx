import React from "react";
import Head from "next/head";
import { fetcher } from "@/utils/API";
import ActorCard from "@/components/Cards/ActorCard";
import Link from "next/link";
import Pagination from "@/components/Pagination";

export async function getServerSideProps({ query }) {
  const page = parseInt(query.page, 10) || 1;

  const data = await fetcher(
    `person/popular?page=${page}&?include_adult=false`,
  );

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
    <>
      <Head>
        <title>10 Melon | Actors</title>
        <meta name="keywords" content="actors"></meta>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {actors.results.map((actor) => (
            <Link key={actor.id} href={"/Actors/" + actor.id}>
              <ActorCard {...actor} />
            </Link>
          ))}
        </div>
        <div className="pagination flex justify-center mt-24">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            getPageLink={getPageLink}
          />
        </div>
      </div>
    </>
  );
};

export default index;
