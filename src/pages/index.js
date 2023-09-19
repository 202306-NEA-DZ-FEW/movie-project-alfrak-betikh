import Head from "next/head";
import { fetcher } from "@/utils/API";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { Card } from "@/components/Cards/Card";

export async function getStaticProps() {
  const data = await fetcher("trending/all/day?language=en-US");
  return {
    props: {
      latestMovies: data,
    },
  };
}

export default function Home({ latestMovies }) {
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    arrows: false,
    speed: 2500,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    slide: "div",
    cssEase: "linear",
    dotsClass: "dots",
  };

  return (
    <>
      <Head>
        <title>10 melon | Homepage</title>
        <meta name="keywords" content="movies"></meta>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <div className="flex flex-row mt-5">
        <div className="flex flex-wrap mx-auto mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div className="w-full sm:p-4 px-4 mb-6">
            <h1 className="title-font font-medium text-4xl sm:text-6xl mb-2 text-content font-TitleFont  mx-auto text-center sm:text-left">
              <span className=" bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
                Welcome
              </span>{" "}
              to the Ultimate Movie Destination
            </h1>
            <p className="leading-relaxed text-content font-ContentFont">
              Explore the exciting world of cinema with us! Discover the latest
              blockbusters, top-rated classics, and much more. Our curated
              collection of movies and actors will keep you entertained for
              hours. Whether you&apos;re a film enthusiast or just looking for a
              great movie night, we&apos;ve got you covered. Dive into the world
              of cinema today!
            </p>
            <Link
              className=" font-ContentFont relative text-lg sm:text-xl block text-content font-bold mt-5 w-fit after:block after:content-[''] after:absolute after:h-[2px] after:bg-yellow-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              href={{
                pathname: "/Movies",
                query: { type: "latest" },
              }}
            >
              Check The Latest Movies
            </Link>
          </div>
        </div>
        <div className="w-64 md:w-96  px-2 mx-auto mt-5 lg:mt-0">
          <Slider {...settings}>
            {latestMovies.results.slice(0, 15).map((movie) => (
              <div key={movie.id}>
                <Link href={"Movies/" + movie.id} key={movie.id}>
                  <Card {...movie} />
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
