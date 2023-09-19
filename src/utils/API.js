export async function fetcher(apiRoute) {
  const url = "https://api.themoviedb.org/3/" + apiRoute;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTk3OTlkMWMyN2NkNDI1YWM1NjFmMDJmZjY1MGQyZCIsInN1YiI6IjY1MDE4ZTNjZTBjYTdmMDEyZWI5MzIwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W-FL6YNGKKR_S3-CKpoZNkeQVJoWRlN0M5lI5HR4GF0",
    },
  };
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

// /**
//  * Usage of `fetcher` in `getStaticProps` and `getServerSideProps`
//  */

// Import the `fetcher` function from your file.gi
// Replace 'path-to-your-fetcher' with the actual path.
// import { fetcher } from 'path-to-your-fetcher';

// Implement the `getStaticProps` function for static site generation.
// export async function getStaticProps() {
//   Use the fetcher function to retrieve data from the API.
//   Replace 'the-routes-of-the-api' with the actual API route.
//   const data = await fetcher('the-routes-of-the-api');

//    Return the data as props.
//   return {
//     props: {
//       requested: data.requested,
//     },
//   };
// }

// Implement the `getServerSideProps` function for server-side rendering.
// export async function getServerSideProps() {
//   Use the fetcher function to retrieve data from the API.
//    Replace 'the-routes-of-the-api' with the actual API route.
//   const data = await fetcher('the-routes-of-the-api');

//   Return the data as props.
//   return {
//     props: {
//       requested: data.requested,
//     },
//   };
// }

//  For further reference, you can visit the following links:
//  - [Link to Documentation (Google Drive)](https://drive.google.com/file/d/1XZhLEboHQA2ZdVcgcfB8xJaWMWFp1U-j/view)
// - [The Movie Database API Reference](https://developer.themoviedb.org/reference)
