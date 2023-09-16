import MovieCard from "@/components/Cards/MovieCard";
import { fetcher } from "@/utils/API";
import React from "react";
import { fetcher } from "@/utils/API";
export async function getServerSideProps() {
  // Use the fetcher function to retrieve data from the API
  const data = await fetcher("genre/movie/list?language=en");

export async function getServerSideProps({ query }) {
  let apiUrl;

  if (query.genre) {
    // If a genre query is present, fetch movies by genre
    const genre = query.genre;
    apiUrl = `discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre}`;
  } else {
    // Default to fetching movies by type
    const listType = query.type;
    apiUrl = `movie/${listType}?language=en-US&page=1`;
  }

  const data = await fetcher(apiUrl);

  return {
    props: {
      movies: data,
    },
  };
}


