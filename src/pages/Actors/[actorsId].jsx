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
  const popularity = actorsBio.popularity;
  const gender = actorsBio.gender;

  const actorsInfo = [
    {
      name,
      birthday,
      biography,
      picture,
      popularity,
      gender,
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
    autoplay: true,
    dots: false,
    draggable: true,
    infinite: false,
    arrows: true,
    speed: 1000,
    fade: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    slide: "div",
    cssEase: "linear",
  };

  const shouldRenderSlider = originalTitles.length > 3;

  return (
    <div className=" mx-auto w-full">
      <div>
        {console.log(actorsInfo)}
        {actorsInfo.map((actor, index) => (
          <div key={index} className=" mb-12">
            <div className="flex justify-center mt-10 mb-10">
              <div
                className="rounded-full transform transition-transform hover:scale-110"
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
              <h1 className="text-6xl font-bold font-TitleFont mt-4 ml-4  ">
                {actor.name}
              </h1>
            </div>
            <div
              className=" flex flex-col items-start mx-auto "
              style={{ width: "70%" }}
            >
              <div className="flex flex-row">
                <h3 className="text-content mt-4 mr-3 text-xl  font-TitleFont">
                  Date of Birth:
                </h3>
                <h3 className=" text-content mt-4 text-lg font-ContentFont">
                  {actor.birthday}
                </h3>
              </div>
              <div className="flex flex-row">
                <h3 className="text-content mt-4 mr-3 text-xl font-TitleFont">
                  Gender:
                </h3>
                <h3 className="text-content mt-4 text-lg font-ContentFont">
                  {actor.gender === 2
                    ? "Male"
                    : actor.gender === 1
                    ? "Female"
                    : "Unknown"}
                </h3>
              </div>
              <div className="flex flex-row">
                <h3 className="text-content mt-4 mr-3 text-xl font-TitleFont">
                  Popularity:
                </h3>
                <h3 className=" text-content mt-4 text-lg font-ContentFont">
                  {actor.popularity}
                </h3>
              </div>

              {/* Biography text with conditional class for collapse/expand */}
              <div>
                <h3 className="text-content mt-4 text-xl underline font-TitleFont">
                  Biography:
                </h3>
                <p
                  className={`text-content font-ContentFont text-lg text-justify ${
                    showFullText ? "expanded" : "collapsed"
                  }`}
                >
                  {actor.biography}
                </p>
              </div>
              <button
                className=" text-content underline cursor-pointer font-ContentFont "
                onClick={toggleText}
              >
                {showFullText ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        ))}
      </div>
      {shouldRenderSlider ? (
        <Slider
          {...settings}
          className="cursor-pointer mx-auto w-full max-w-[70%]"
        >
          {originalTitles.slice(0, 5).map((movie, index) => (
            <div key={index}>
              <div style={{ marginRight: "25px", display: "inline-block" }}>
                {/* Movie Poster */}
                <img
                  width={300}
                  height={400}
                  src={`https://image.tmdb.org/t/p/w500/${movie.posterPath}`}
                  alt={movie.title}
                />
              </div>
              <div style={{ marginTop: "10px" }} className="text-center">
                {/* Movie Title */}
                {movie.title}
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        // Render movies without the slider
        <div className="flex flex-wrap justify-center">
          {originalTitles.map((movie, index) => (
            <div key={index} className="m-4">
              <div style={{ marginRight: "25px", display: "inline-block" }}>
                {/* Movie Poster */}
                <img
                  width={200}
                  height={300}
                  src={`https://image.tmdb.org/t/p/w500/${movie.posterPath}`}
                  alt={movie.title}
                />
              </div>
              <div style={{ marginTop: "10px" }} className="text-center">
                {/* Movie Title */}
                {movie.title}
              </div>
            </div>
          ))}
        </div>
      )}
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
