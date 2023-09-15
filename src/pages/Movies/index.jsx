import React from "react";
import { fetcher } from "@/utils/API";
export async function getServerSideProps() {
  // Use the fetcher function to retrieve data from the API
  const data = await fetcher("genre/movie/list?language=en");

  // Extract genres names
  const genresArray = data.genres.map((genre) => ({
    name: genre.name,
    link: "/" + genre.id,
  }));

  return {
    props: {
      genres: genresArray, // Pass the genres array to the component
    },
  };
}

/* 
function index(){
  return (
    <div>index</div>
  )
}

export default index; */

export default function index() {
  return <div className="text-fuchsia-950">index</div>;
}
