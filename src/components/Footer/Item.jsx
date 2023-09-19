import React from "react";

const Item = ({ Links, title }) => {
  return (
    <ul>
      <h1 className="mb-1 font-semibold">{title}</h1>
      {Links &&
        Links.map((link) => (
          <li key={link.name}>
            <a
              className="text-whitebeige hover:text-yellow-400 duration-300
          text-sm cursor-pointer leading-6"
              href={link.link}
              target="_blank"
              rel="noopener"
            >
              {link.name}
              {link.icon}
            </a>
          </li>
        ))}
    </ul>
  );
};

export default Item;
