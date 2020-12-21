import { GetStaticProps, NextPage } from "next";
import React from "react";
import { Page } from "../layouts/Page";

const Home: NextPage = () => {
  return (
    <Page>
      <div className="max-w-4xl w-full px-4 mx-auto">
        <h1 className="text-gray-900 font-bold text-6xl mb-4">Bowtie</h1>
        <div className="text-gray-800 text-xl">
          Score keeping iOS app for card games
        </div>
      </div>
    </Page>
  );
};

export default Home;
