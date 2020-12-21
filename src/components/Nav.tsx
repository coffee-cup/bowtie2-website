import React from "react";
import { Button } from "./Button";
import { Link } from "./Link";
import { Logo } from "./Logo";

export const Nav: React.FC = () => (
  <div className="max-w-4xl mx-auto">
    <nav className="py-4 px-4 flex justify-between items-center">
      <Link href="/">
        <Logo />
      </Link>

      <Link
        className="text-gray-500 hover:text-primary"
        href="https://railway.app"
      >
        Go to Railway
      </Link>
    </nav>
  </div>
);
