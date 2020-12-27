import React from "react";
import { Link } from "./Link";

export const Footer: React.FC = () => (
  <div className="max-w-4xl w-full py-6 px-4 mx-auto md:text-left text-center">
    <Link className="hover:text-pink-600" href="https://jakerunzer.com">
      Created with ♥️ by Jake
    </Link>
  </div>
);
