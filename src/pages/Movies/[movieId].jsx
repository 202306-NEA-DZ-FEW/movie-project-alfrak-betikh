import { fetcher } from "@/utils/API";
import Image from "next/image";
import Head from "next/head";
import Slider from "react-slick";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";

const Arrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "#121212",

        borderRadius: "50%",
      }}
      onClick={onClick}
    ></div>
  );
};

const MovieDetail = ({ movie, similarMovies, videos, actors }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  let videoId;
  const trailers = videos.results.filter((item) => item.type === "Trailer");
  if (trailers[0]) {
    videoId = trailers[0].key;
  }

  const settings = {
    lazyLoad: "ondemand",
    autoplay: true,
    dots: false,
    draggable: true,
    infinite: true,
    arrows: true,
    speed: 2000,
    fade: false,
    slidesToShow: 3,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    slidesToScroll: 1,
    slide: "div",
    cssEase: "ease-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>10 Melon | {movie.title}</title>
        <meta name="keywords" content="actors"></meta>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <div className="">
        <div>
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Movie Poster */}
              <div className="flex flex-col items-center justify-center ">
                <Image
                  width={500}
                  height={500}
                  src={"http://image.tmdb.org/t/p/w500" + movie.poster_path}
                  alt={movie.title}
                  className="w-1/2 h-auto mx-auto rounded-lg"
                />
                <div className="flex flex-row w-1/2 items-center justify-center">
                  {movie.production_companies.map((company) => (
                    <div key={company.id}>
                      {" "}
                      {/* Add a unique key for each company */}
                      {company.logo_path && (
                        <div className=" w-full p-2 text-center overflow-clip">
                          <h1 className="font-semibold text-xs text-content mt-5">
                            {company.name}
                          </h1>
                          <Image
                            className="w-1/2 md:w-full h-auto mx-auto rounded-lg"
                            src={`https://image.tmdb.org/t/p/original/${company.logo_path}`}
                            alt={company.name}
                            width={10}
                            height={10}
                            layout="responsive"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-TitleFont font-lg text-content">
                  {movie.title}
                </h1>
                <p className="text-content text-lg mt-2 italic">
                  {movie.tagline}
                </p>
                <p className="text-black text-md mt-4 bg-accent/80 rounded-xl px-4 py-4 ">
                  <span className="font-bold mr-2">OverView :</span>
                  {movie.overview}
                </p>
                <div className="mt-6 grid grid-cols-5 gap-2 text-sm">
                  <p className="text-content flex flex-col">
                    <span className="font-bold mr-2">Release Date: </span>
                    {movie.release_date}
                  </p>
                  <p className="text-content flex flex-col">
                    <span className="font-bold mr-2">Runtime:</span>{" "}
                    {movie.runtime} minutes
                  </p>
                  <p className="text-content flex flex-col">
                    {" "}
                    <span className="font-bold mr-2">Popularity: </span>
                    {movie.popularity}
                  </p>
                  <p className="text-content flex flex-col">
                    <span className="font-bold mr-2"> Language: </span>
                    {movie.original_language}
                  </p>
                  <p className="text-content mt-1">
                    <span className="font-bold mr-2"> Votes: </span>
                    <span className="bg-accent text-black p-1 rounded-md font-bold">
                      {movie.vote_count}
                    </span>
                  </p>
                </div>

                <div className="flex ">
                  <div className="flex mt-5">
                    <p className="text-content font-bold mr-2">Genres: </p>
                    {movie.genres.map((genre, index) => (
                      <Link
                        href={{
                          pathname: "/Movies",
                          query: { genre: genre.id },
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
                  <div className=" flex justify-center">
                    <div className="flex  justify-center my-5  ">
                      {actors.cast.slice(0, 5).map((actor) => (
                        <div
                          className="mx-3 hover:text-accent text-content"
                          key={actor.id}
                        >
                          <Link key={actor.id} href={"/Actors/" + actor.id}>
                            {actor.profile_path ? (
                              <Image
                                className="rounded-full transform transition-transform hover:scale-110 mx-5"
                                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                                alt="actor"
                                width={50}
                                height={50}
                              />
                            ) : (
                              <Image
                                className="rounded-full transform transition-transform hover:scale-110"
                                src="https://via.placeholder.com/150x150"
                                alt="actor"
                                width={50}
                                height={50}
                              />
                            )}
                            <p className="text-wrap text-xs mt-1 w-[50px] font-bold text-center">
                              {actor.name}
                            </p>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <iframe
          className="mt-5 ml-2"
          width="100%"
          height="300vh"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="1"
          allowFullScreen
        ></iframe>
        <br />
        <div className="mx-20 my-5">
          <h2 className="text-2xl font-semibold text-center my-8 text-content">
            Similar Movies
          </h2>
          <Slider {...settings} className="cursor-pointer w-full ">
            {similarMovies.results.map((movie, index) =>
              !movie.poster_path ? null : (
                <div
                  key={movie.id}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(true)}
                >
                  <Link href={`/Movies/${movie.id}`}>
                    <div
                      className={`mx-2 cursor-pointer rounded-3xl ${
                        hoveredIndex === index ? "transform scale-105" : ""
                      } `}
                    >
                      <Image
                        alt={movie.title}
                        src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        width={50}
                        height={20}
                        layout="responsive"
                      />
                    </div>
                  </Link>
                </div>
              ),
            )}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;

export async function getServerSideProps({ params }) {
  const { movieId } = params;

  try {
    const [data, similarData, videos, actors] = await Promise.all([
      fetcher(`movie/${movieId}`),
      fetcher(`movie/${movieId}/similar`),
      fetcher(`movie/${movieId}/videos`),
      fetcher(`movie/${movieId}/credits`),
    ]);

    return {
      props: {
        movie: data,
        similarMovies: similarData,
        videos,
        actors,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        movie: null,
        similarMovies: null,
        videos: null,
        actors: null,
      },
    };
  }
}
