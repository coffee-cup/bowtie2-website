import React from "react";
import { Link } from "./Link";
import { Logo } from "./Logo";

export const Nav: React.FC = () => (
  <div className="max-w-4xl mx-auto">
    <nav className="py-4 px-4 flex justify-between items-center">
      <Link href="/">
        <Logo />
      </Link>

      <Link className="font-medium hover:text-pink-600" href={"/about"}>
        Learn More
      </Link>
    </nav>
  </div>
);
