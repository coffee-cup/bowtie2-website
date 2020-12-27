import { NextPage } from "next";
import React from "react";
import { Link } from "../components/Link";
import { Page } from "../layouts/Page";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <Page>
      <section className="text-gray-600">
        <div className="max-w-4xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:text-left mb-16 md:mb-0">
            <h1 className="sm:text-5xl text-4xl mb-4 font-extrabold text-gray-900">
              Bowtie
            </h1>
            <p className="mb-6 text-lg font-medium leading-relaxed">
              Score Keeping iOS App for card and board games.
              <br className="hidden lg:inline-block" />
              Ditch the pen and paper!
            </p>

            <div className="">
              <Link href="/">
                <img src="/badge.svg" alt="Download from App Store Badge" />
              </Link>
            </div>
          </div>

          <div className="max-w-xs">
            <Image
              src="/screenshot.png"
              alt="Screenshot of Bowtie card game"
              width={1450}
              height={2934}
            />
          </div>
        </div>
      </section>
    </Page>
  );
};

export default Home;
