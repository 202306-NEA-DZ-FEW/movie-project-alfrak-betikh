import React from "react";
import { Suspense } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import NextNProgressClient from "./progressBar";
import Loading from "./Loading";
export const metadata = {
  title: "Movies",
  description: "Movies by alfrak",
};
export default function Layout({ children }) {
  return (
    <div className="h-100">
      <NextNProgressClient />
      <Navbar />
      <Suspense fallback={<Loading />}>{children}</Suspense>
      <Footer />
    </div>
  );
}
