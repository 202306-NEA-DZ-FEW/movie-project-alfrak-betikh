import MovieCard from "@/components/Cards/MovieCard";
import { fetcher } from "@/utils/API";
import React from "react";
import Link from "next/link";
import NavLink from "@/components/Navbar/NavLinks";

export async function getServerSideProps({ query }) {
  let apiUrl = "trending/all/day?language=en-US";

  /*  if (query.genre) {
    // If a genre query is present, fetch movies by genre
    const genre = query.genre;
    apiUrl = `discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre}`;
  } else if (query.type == "latest") {
    apiUrl = "trending/all/day?language=en-US";
  } else if (query.search) {
    apiUrl = `search/movie?query=${query.search}`;
  } else {
    const listType = query.type;
    apiUrl = `movie/${listType}`;
  } */

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
      {console.log({ movies })}
      <div className="flex flex-wrap -m-4">
        {movies.results.map((movie) => (
          <Link href={"Movies/" + movie.id} key={movie.id}>
            <MovieCard {...movie} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default index;
