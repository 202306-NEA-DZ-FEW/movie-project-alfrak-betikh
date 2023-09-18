import MovieCard from "@/components/Cards/MovieCard";
import { fetcher } from "@/utils/API";
import React from "react";
import Link from "next/link";

export async function getServerSideProps({ query }) {
  let apiUrl;

  switch (query.type) {
    case "latest":
      apiUrl = "trending/all/day?language=en-US";
      break;
    case "upcoming":
    case "now_playing":
    case "popular":
    case "top_rated":
      apiUrl = `movie/${query.type}`;
      break;
    default:
      if (query.genre) {
        const genre = query.genre;
        apiUrl = `discover/movie?include_adult=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre}`;
      } else if (query.search) {
        apiUrl = `search/movie?query=${query.search}&include_adult=false&language=en-US`;
      } else {
        apiUrl = "trending/all/day?language=en-US";
      }
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
    <div className="container">
      <div>
        {movies.results.map((movie) => (
          <Link href={"Movies/" + movie.id} key={movie.id}>
            <MovieCard {...movie} key={movie.id} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default index;
