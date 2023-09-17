import React from "react";
import { fetcher } from "@/utils/API";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleCard from "@/components/Card/SingleCard";

export async function getServerSideProps(context) {
  const { id } = context.params;

  const actorData = await fetcher(`/person/5/movie_credits`);
  // const actorsBio = await fetcher(`/person/4`)

  // // const actorsInfo = actorsInfo.known.map((person) => ({
  // //   name: person.name,

  // }))
  const originalTitles = actorData.cast.map((castMember) => ({
    title: castMember.original_title,
    posterPath: castMember.poster_path,
  }));
  return {
    props: {
      originalTitles,
    },
  };
}

const ActorPage = ({ originalTitles }) => {
  const settings = {
    centerMode: true,
    centerPadding: "10px",
    slidesToShow: 4,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col justify-center items-center gap-x-8">
      <Slider {...settings} className="w-full max-w-[70%] bg-[#450a0a]">
        {originalTitles.slice(0, 12).map((movie, index) => (
          <li key={index} className="flex justify-center">
            <div style={{ marginRight: "25px" }}>
              <Image
                className=""
                width={300}
                height={500}
                src={`https://image.tmdb.org/t/p/w500/${movie.posterPath}`}
                alt={movie.title}
              />
            </div>
            <div style={{ marginTop: "10px" }} className="text-center">
              {movie.title}
            </div>
          </li>
        ))}
      </Slider>
      <div
        className="w-full max-w-[70%] bg-gradient-to-t from-white to-black p-8 mt-8"
        style={{ paddingBottom: "20px" }}
      >
        <div className="flex items-center flex-col">
          <img src="src\img\Actor.jpeg" alt="actor" />
          <h1 className="text-black text-6xl font-bold font-'Calvino Grande Trial' mt-4">
            Tom Holland
          </h1>
          <p className="text-center text-black mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi
            vitae suscipit tellus mauris a diam. Suscipit tellus mauris a diam
            maecenas sed.
          </p>
          <h3 className="text-center mt-4 text-black">
            Date of birth: 1700/17/17
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ActorPage;
