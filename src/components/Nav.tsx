import React from "react";
import { Link } from "./Link";
import { Logo } from "./Logo";

export const Nav: React.FC = () => (
  <nav className="w-full py-4 px-4 flex justify-between items-center">
    <Link href="/">
      <Logo />
    </Link>

    <Link className="font-medium" href={"/about"}>
      Learn More
    </Link>
  </nav>
);
