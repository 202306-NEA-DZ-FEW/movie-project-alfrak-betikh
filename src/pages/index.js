import { Card } from "@/components/Card/Card";
import { fetcher } from "@/utils/API";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

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
    <div className="flex flex-row  mt-24">
      <div class="flex flex-wrap mx-auto mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
        <div class="w-full sm:p-4 px-4 mb-6">
          <h1 class="title-font font-medium text-6xl mb-2 dark:text-gray-200 text-black">
            Welcome to the Ultimate Movie Destination
          </h1>
          <p className="leading-relaxed dark:text-white text-black">
            Explore the exciting world of cinema with us! Discover the latest
            blockbusters, top-rated classics, and much more. Our curated
            collection of movies and actors will keep you entertained for hours.
            Whether you&apos;re a film enthusiast or just looking for a great
            movie night, we&apos;ve got you covered. Dive into the world of
            cinema today!
          </p>
        </div>
      </div>
      <div className="w-96 px-2 mx-auto">
        <Slider {...settings}>
          {latestMovies.results.slice(0, 15).map((movie) => (
            <div key={movie.id}>
              <Link href={"movies" + movie.id}>
                <Card {...movie} />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
