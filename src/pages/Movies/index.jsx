import MovieCard from "@/components/Cards/MovieCard";
import Head from "next/head";
import Pagination from "@/components/Pagination";
import { fetcher } from "@/utils/API";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Suspense } from "react";

export async function getServerSideProps({ query, req }) {
  let apiUrl;
  const page = parseInt(query.page, 10) || 1;
  switch (query.type) {
    case "latest":
      apiUrl = `trending/all/day?language=en-US&page=${page}`;
      break;
    case "upcoming":
    case "now_playing":
    case "popular":
    case "top_rated":
      apiUrl = `movie/${query.type}?page=${page}`;
      break;
    default:
      if (query.genre) {
        const genre = query.genre;
        apiUrl = `discover/movie?include_adult=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genre}`;
      } else if (query.search) {
        apiUrl = `search/movie?query=${query.search}&include_adult=false&language=en-US&page=${page}`;
      } else {
        apiUrl = `trending/all/day?language=en-US&page=${page}`;
      }
  }

  try {
    const [movies] = await Promise.all([fetcher(apiUrl)]);

    return {
      props: {
        movies,
        currentPage: page,
        query,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        movies: null,
        currentPage: page,
        query,
      },
    };
  }
}

const Index = ({ movies, currentPage, query }) => {
  const router = useRouter();
  const getPageLink = (page) => {
    const updatedQuery = {
      ...query,
      page: page.toString(),
    };
    return { pathname: router.pathname, query: updatedQuery };
  };
  const totalPages = 50;

  return (
    <>
      <Head>
        <title>10 Melon | Movies</title>
        <meta name="keywords" content="movies"></meta>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies.results.map((movie) => (
            <Link href={"Movies/" + movie.id} key={movie.id}>
              <MovieCard {...movie} key={movie.id} />
            </Link>
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            getPageLink={getPageLink}
            query={query}
          />
        </div>
      </div>
    </>
  );
};

export default Index;
