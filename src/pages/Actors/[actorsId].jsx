import React from "react";
import { fetcher } from "@/utils/API";
import ActorCard from "@/components/ActorCard";

export async function getServerSideProps(context) {
  const { personId } = context.query;

  const data = await fetcher(`person/${personId}/movie_credits?language=en-US`);

  return {
    props: {
      originalTitles: data,
    },
  };
}

const Index = ({ originalTitles }) => {
  return (
    <div className="container px-5 py-24 mx-auto">
      {console.log({ originalTitles })}
      {/* <ul>
        {originalTitles.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Index;
