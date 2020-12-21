import React from "react";
import { Link } from "./Link";

export const Nav: React.FC = () => (
  <div className="max-w-4xl mx-auto">
    <nav className="py-4 px-4 flex justify-between items-center">
      <Link
        className="text-gray-500 hover:text-primary"
        href="https://railway.app"
      >
        Boop
      </Link>
    </nav>
  </div>
);
