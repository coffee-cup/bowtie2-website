import { NextPage } from "next";
import React from "react";
import { Link } from "../components/Link";
import { Page } from "../layouts/Page";

const Home: NextPage = () => {
  return (
    <Page>
      <div className="max-w-4xl w-full px-4 mx-auto">
        <h1 className="text-gray-900 font-bold my-12 text-6xl">Bowtie</h1>

        <div className="text-gray-700 text-xl">
          Score keeping iOS app for card games.
        </div>
      </div>
    </Page>
  );
};

export default Home;
