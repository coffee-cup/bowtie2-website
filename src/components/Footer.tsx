import React from "react";
import { Link } from "./Link";

export const Footer: React.FC = () => (
  <footer className="flex flex-col-reverse md:flex-row justify-between max-w-4xl w-full py-6 px-4 mx-auto md:text-left text-center">
    <Link
      className="hover:text-pink-600 mt-2 md:mt-0"
      href="https://jakerunzer.com"
    >
      Created with <span className="text-pink-600">♥</span>️ by Jake
    </Link>

    <Link className="hover:text-pink-600" href="https://jakerunzer.com">
      View on App Store
    </Link>
  </footer>
);
