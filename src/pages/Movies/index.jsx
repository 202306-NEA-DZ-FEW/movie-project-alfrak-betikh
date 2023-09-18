import MovieCard from "@/components/Cards/MovieCard";
import Pagination from "@/components/Pagination";
import { fetcher } from "@/utils/API";
import Link from "next/link";
import React, { useState } from "react";

export async function getServerSideProps({ query }) {
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

  const data = await fetcher(apiUrl);
  return {
    props: {
      movies: data,
      currentPage: page,
    },
  };
}

const index = ({ movies, currentPage }) => {
  const getPageLink = (page) => `?page=${page}`;
  const totalPages = 50;

  return (
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
        />
      </div>
    </div>
  );
  
};

export default index;
