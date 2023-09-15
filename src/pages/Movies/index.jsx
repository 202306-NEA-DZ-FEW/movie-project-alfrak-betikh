import MovieCard from "@/components/Cards/MovieCard";
import { fetcher } from "@/utils/API";
import React from "react";

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

const index = ({ movies }) => {
  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap flex-row">
        {movies.results.map((movie) => (
          <MovieCard {...movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default index;
