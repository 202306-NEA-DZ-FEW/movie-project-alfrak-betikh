import React from "react";
import { fetcher } from "@/utils/API";
import Link from "next/link";
import Head from "next/head";
import Pagination from "@/components/Pagination";
import MovieCard from "@/components/Cards/MovieCard";
import { useRouter } from "next/router";
export async function getServerSideProps({ query }) {
  const page = parseInt(query.page, 10) || 1;

  const data = await fetcher(
    `tv/top_rated?page=${page}&?include_adult=false&language=en-US`,
  );

  return {
    props: {
      tvShows: data,
      currentPage: page,
    },
  };
}

const Index = ({ tvShows, currentPage }) => {
  const getPageLink = (page) => `?page=${page}`;

  const totalPages = 50;

  return (
    <>
      <Head>
        <title>10 Melon | Tv shows</title>
        <meta name="keywords" content="actors"></meta>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {tvShows.results.map((tvShow) => (
            <Link key={tvShow.id} href={"/TvShows/" + tvShow.id}>
              <MovieCard {...tvShow} key={tvShow.id} />
            </Link>
          ))}
        </div>
        <div className="mt-4 flex justify-center">
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

export default Index;
