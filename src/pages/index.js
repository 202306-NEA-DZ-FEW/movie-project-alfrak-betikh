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
    <div className="flex flex-col lg:flex-row mt-5">
      <div className="lg:w-1/2 sm:w-full sm:pr-4">
        <div className="px-4 mb-6">
          <h1 className="text-4xl sm:text-6xl mb-2 text-content mx-auto text-center">
            Welcome to the Ultimate Movie Destination
          </h1>
          <p className="text-content">
            Explore the exciting world of cinema with us! Discover the latest
            blockbusters, top-rated classics, and much more. Our curated
            collection of movies and actors will keep you entertained for hours.
            Whether you're a film enthusiast or just looking for a great
            movie night, we've got you covered. Dive into the world of cinema today!
          </p>
          <Link
            className="relative text-lg sm:text-xl block text-content font-bold mt-5 w-fit after:block after:content-[''] after:absolute after:h-[2px] after:bg-yellow-500 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
            href={{
              pathname: "/Movies",
              query: { type: "latest" },
            }}
          >
            Check The Latest Movies
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-96 px-2 mx-auto mt-5 lg:mt-0">
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
  );
  
  
}
