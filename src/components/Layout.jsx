import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

export default function Layout({ children }) {
  return (
    <div className="max-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
