import React from "react";
import { Link } from "./Link";
import { Logo } from "./Logo";

export const Nav: React.FC = () => (
  <div className="max-w-4xl mx-auto">
    <nav className="max-w-xs py-4 px-4 flex justify-between items-center">
      <Link href="/">
        <Logo />
      </Link>
    </nav>
  </div>
);
