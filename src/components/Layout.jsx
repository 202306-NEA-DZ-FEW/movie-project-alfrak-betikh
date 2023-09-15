import React from "react";
import { fetcher } from "@/utils/API";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

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
export default function Layout({ children, genres }) {
  return (
    <div className="max-h-screen">
      {console.log({ ...genres })}
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
