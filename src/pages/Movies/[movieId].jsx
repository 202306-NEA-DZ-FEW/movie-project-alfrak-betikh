import { fetcher } from "@/utils/API";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";

const MovieDetail = ({ movie, similarMovies, videos }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  let videoId;
  const trailers = videos.results.filter((item) => item.type === "Trailer");
  if (trailers[0]) {
    videoId = trailers[0].key;
  }
  console.log(movie);
  console.log("similar", similarMovies);
  const settings = {
    autoplay: true,
    dots: false,
    autoplay: !hoveredIndex,
    infinite: true,
    arrows: true,
    speed: 4000,
    fade: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    slide: "div",
    cssEase: "linear",
  };
  return (
    <div className="">
      <div>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Movie Poster */}
            <div className="md:flex md:items-center md:justify-center">
              {
                <Image
                  width={500}
                  height={500}
                  src={"http://image.tmdb.org/t/p/w500" + movie.poster_path}
                  alt={movie.title}
                  className="w-1/2 h-auto  mx-auto rounded-lg"
                />
              }
            </div>
            <div>
              <h1 className="text-3xl font-semibold text-content">
                {movie.title}
              </h1>
              <p className="text-content text-lg mt-2 italic">
                {movie.tagline}
              </p>
              <p className="text-black text-md mt-4 bg-accent/80 rounded-xl px-4 py-4 ">
                <span className="font-bold mr-2">OverView :</span>
                {movie.overview}
              </p>
              <div className="mt-6">
                <p className="text-content">
                  <span className="font-bold mr-2">Release Date: </span>
                  {movie.release_date}
                </p>
                <p className="text-content">
                  <span className="font-bold mr-2">Runtime:</span>{" "}
                  {movie.runtime} minutes
                </p>
                <p className="text-content">
                  {" "}
                  <span className="font-bold mr-2">Popularity: </span>
                  {movie.popularity}
                </p>
                <p className="text-content">
                  <span className="font-bold mr-2"> Original Language: </span>
                  {movie.original_language}
                </p>
                <div className="flex ">
                  <div className="flex mt-5">
                    <p className="text-content font-bold mr-2">Genres: </p>
                    {movie.genres.map((genre, index) => (
                      <Link
                        href={{
                          pathname: "/Movies",
                          query: { search: genre.name },
                        }}
                        className="ml-5 bg-accent text-black p-1 font-bold rounded-lg hover:text-black/20"
                        key={genre.id}
                      >
                        <p className="text-center">{genre.name}</p>{" "}
                      </Link>
                    ))}
                  </div>
                </div>
                {videoId && (
                  <div className=" max-w-screen-lg mt-5 flex justify-center">
                    <iframe
                      width="320"
                      height="180"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      frameBorder="1"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="mx-20 my-5">
        <h2 className="text-2xl font-semibold text-center my-8 text-content">
          Similar Movies
        </h2>
        <Slider {...settings} className="flex flex-row space-x-4 ">
          {similarMovies.results.map((movie, index) => (
            <div
              key={movie.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(true)}
            >
              <Link href={`/Movies/${movie.id}`}>
                <div
                  className={`w-40 md:w-60 h-auto cursor-pointer rounded-3xl ${
                    hoveredIndex === index ? "transform scale-110" : ""
                  } `}
                >
                  <Image
                    alt={movie.title}
                    src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    layout="responsive"
                    width={200} // Adjust this to your desired width
                    height={40} // Adjust this to your desired height
                  />
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MovieDetail;

export async function getServerSideProps({ params }) {
  const { movieId } = params;
  const similarData = await fetcher(`movie/${movieId}/similar`);
  const data = await fetcher(`movie/${movieId}`);
  const videos = await fetcher(`movie/${movieId}/videos`);
  return {
    props: {
      movie: data,
      similarMovies: similarData,
      videos: videos,
    },
  };
}
