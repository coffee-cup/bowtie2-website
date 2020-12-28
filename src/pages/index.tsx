import { NextPage } from "next";
import React from "react";
import { Link } from "../components/Link";
import { Page } from "../layouts/Page";
import Image from "next/image";
import { appStoreUrl } from "../constants";

const Home: NextPage = () => {
  return (
    <Page>
      <section className="flex px-5 py-12 md:flex-row flex-col items-center justify-between">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-center md:items-start text-center md:text-left mb-16 md:mb-0">
          <h1 className="sm:text-5xl text-4xl mb-4 font-extrabold text-gray-900">
            Bowtie
          </h1>
          <p className="md:mb-6 mb-4 text-lg leading-relaxed">
            Score Keeping iOS App for card games.{" "}
            <br className="inline-block" />
            Ditch the pen and paper!
          </p>

          <div className="">
            <Link href={appStoreUrl}>
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
            quality={100}
            priority
          />
        </div>
      </section>
    </Page>
  );
};

export default Home;
