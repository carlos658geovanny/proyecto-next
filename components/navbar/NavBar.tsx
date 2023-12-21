import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import React from "react";
import { ActiveLink } from "..";

export const NavBar = () => {
  const navItems = [
    { path: "/about", text: "About" },
    { path: "/contact", text: "Contact" },
    { path: "/pricing", text: "Pricing" },
  ];

  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2">
      <Link href="/" className="flex items-center">
        <HomeIcon className="m-2" />
        <span>Home</span>
      </Link>
      <div className="flex flex-1"></div>
      {navItems.map((navItem) => {
        return (
          <ActiveLink
            key={navItem.path}
            /*   path={navItem.path}
            text={navItem.text} */
            {...navItem}
          />
        );
      })}
    </nav>
  );
};
