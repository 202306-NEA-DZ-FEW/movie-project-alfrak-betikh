import { fetcher } from "@/utils/API";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";

const MovieDetail = ({ movie, similarMovies }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  console.log(movie);
  console.log("similar", similarMovies);
  const settings = {
    autoplay: true,
    dots: true,
    autoplay: !hoveredIndex,
    infinite: true,
    arrows: false,
    speed: 4000,
    fade: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    slide: "div",
    cssEase: "linear",
    dotsClass: "dots",
  };
  return (
    <div className="bg-gradient-to-r from-green-300 to-yellow-200">
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
                  className="w-full h-auto md:max-h-96 mx-auto rounded-lg"
                />
              }
            </div>
            <div>
              <h1 className="text-3xl font-semibold">{movie.title}</h1>
              <p className="text-gray-600 text-lg mt-2">{movie.tagline}</p>
              <p className="text-gray-700 text-md mt-4 bg-green-200 rounded-xl px-4 py-4 ">
                OverView :{movie.overview}
              </p>
              <div className="mt-6">
                <p className="text-gray-700">
                  Release Date: {movie.release_date}
                </p>
                <p className="text-gray-700">
                  Runtime: {movie.runtime} minutes
                </p>
                <p className="text-gray-700">Popularity: {movie.popularity}</p>
                <p className="text-gray-700">
                  Original Language: {movie.original_language}
                </p>
                <div className="flex ">
                  <p className="text-gray-700">Genres: </p>
                  <div className="flex ">
                    {movie.genres.map((genre, index) => (
                      <Link
                        href={""}
                        className="ml-5 bg-[#645353] w-40 h-8 rounded-lg"
                        key={genre.id}
                      >
                        <p className="text-center">{genre.name}</p>{" "}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="mt-5  bottom-4 left-0 right-0 mx-auto">
        <h2 className="text-2xl font-semibold text-center my-8">
          Similars Movies
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

  return {
    props: {
      movie: data,
      similarMovies: similarData,
    },
  };
}
