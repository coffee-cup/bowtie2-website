import React from "react";
import { appStoreUrl } from "../constants";
import { Link } from "./Link";

export const Footer: React.FC = () => (
  <footer className="flex flex-col-reverse md:flex-row justify-between w-full py-6 mx-auto md:text-left text-center">
    <Link className="mt-2 md:mt-0" href="https://jakerunzer.com">
      Created with <span className="text-pink-600">♥</span>️ by Jake
    </Link>

    <Link href={appStoreUrl}>View on App Store</Link>
  </footer>
);
