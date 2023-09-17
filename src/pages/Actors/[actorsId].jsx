import React from "react";
import { fetcher } from "@/utils/API";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

export async function getServerSideProps({ params }) {
  const { actorsId } = params;

  const actorData = await fetcher(`/person/${actorsId}/movie_credits`);

  const actorsBio = await fetcher(`person/${actorsId}`);

  const name = actorsBio.name;
  const birthday = actorsBio.birthday;
  const biography = actorsBio.biography;
  const picture = actorsBio.profile_path;

  const actorsInfo = [
    {
      name,
      birthday,
      biography,
      picture,
    },
  ];

  const originalTitles = actorData.cast.map((castMember) => ({
    title: castMember.original_title,
    posterPath: castMember.poster_path,
  }));
  return {
    props: {
      originalTitles,
      actorsInfo,
    },
  };
}

function ActorPage({ originalTitles, actorsInfo }) {
  // State to track whether the biography text is fully displayed or not
  const [showFullText, setShowFullText] = useState(false);

  // Function to toggle the visibility of the biography text
  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  // Settings for the Slider component
  const settings = {
    centerMode: true,
    centerPadding: "10px",
    slidesToShow: 3,
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
    <div className=" mx-auto w-full">
      <div>
        {actorsInfo.map((actor, index) => (
          <div key={index} className=" mb-12">
            <div className="flex justify-center mt-10 mb-10">
              <div
                style={{
                  borderRadius: "50%",
                  overflow: "hidden",
                  width: "100px",
                  height: "100px",
                }}
              >
                <Image
                  className="rounded-full "
                  src={`https://image.tmdb.org/t/p/w500/${actor.picture}`}
                  alt="actor"
                  width={100}
                  height={100}
                />
              </div>

              <h1 className="text-6xl font-bold font-Calvino mt-4 ml-4  ">
                {actor.name}
              </h1>
            </div>
            <div
              className=" flex flex-col items-start mx-auto "
              style={{ width: "70%" }}
            >
              <h3 className=" mt-4 text-white mr-10 ml-30 font-Room ">
                Date of birth: {actor.birthday}
              </h3>
              {/* Biography text with conditional class for collapse/expand */}
              <p
                className={`text-white mt-4 font-Room ${
                  showFullText ? "expanded" : "collapsed"
                }`}
              >
                Biography: {actor.biography}
              </p>
              {/* "Read More" button */}
              <button
                className="text-white underline cursor-pointer "
                onClick={toggleText}
              >
                {showFullText ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        ))}
      </div>
      <Slider
        {...settings}
        className=" cursor-pointer mx-auto w-full max-w-[70%] bg-[#450a0a]"
        class="border-radius"
      >
        {originalTitles.slice(0, 5).map((movie, index) => (
          <li key={index} className="">
            <div style={{ marginRight: "25px", display: "inline-block" }}>
              <Image
                className=""
                width={300}
                height={400}
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
      <style jsx>{`
        /* Styles for the "Read More" button */
        button {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 14px;
        }

        button.hide {
          display: none;
        }

        /* Styles for the collapsed and expanded biography text */
        p.collapsed {
          max-height: 100px;
          overflow: hidden;
          transition: max-height 0.3s ease-in-out;
        }

        p.expanded {
          max-height: none;
          overflow: auto;
          transition: max-height 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
}

export default ActorPage;
