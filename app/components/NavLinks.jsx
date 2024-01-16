import React from "react";

const NavLinks = ({ links }) => {
  return links.map((e, i) => {
    return (
      <li className="custom" key={i}>
        <a href={e.link}>{e.name}</a>
      </li>
    );
  });
};

export default NavLinks;
