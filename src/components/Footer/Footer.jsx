import React from "react";
import ItemsContainer from "./ItemsContainer";

const Footer = () => {
  return (
    <footer className="bg-black-900 text-white">
      <div className="md:flex md:justify-center md:items-center sm:px-12 px-4 bg-[#ffffff19] py-4">
        <h1
          className="lg:text-3xl text-2xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          Made with love & <span className="text-yellow-400">panda tears</span>
        </h1>
      </div>
      <ItemsContainer />
      <div
        className="w-full p-4 text-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
