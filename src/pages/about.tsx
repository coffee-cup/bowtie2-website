import { NextPage } from "next";
import React from "react";
import { Link } from "../components/Link";
import { appStoreUrl } from "../constants";
import { Page } from "../layouts/Page";

const About: NextPage = () => {
  return (
    <Page>
      <h1 className="my-12">About Bowtie</h1>

      <div className="prose">
        <p>
          Bowtie is an iOS app for keeping score. It was originally designed to
          be used while playing card games that had previously required someone
          to keep score with pen and paper.
        </p>

        <h2>How to Use</h2>

        <p>
          <em>Only a single person needs to download and use Bowtie.</em>
        </p>

        <p>
          Before the game starts, someone creates a new game in Bowtie and adds
          everyone who is playing. Each player has a colour associated with them
          and you can reuse players between games.
        </p>

        <p>
          During the card game, a single person uses Bowtie to enter scores for
          everyone after each round. Bowtie shows a leaderboard of everyone in
          the game and even graphs their scores over time.
        </p>

        <h2>Premium</h2>

        <p>
          Bowtie has a <em>premium</em> version that can be purchased with an
          single in app purchase ($2.99 USD). Premium gives you additional
          cosmetic customization options in the app. It also allows you to show
          your appreciation of the app and encourages the developer (me) to
          continue adding features and updates.
        </p>

        <p>
          But please note, the core features of Bowtie will always remain free
          and without ads.
        </p>

        <p>
          <Link href={appStoreUrl}>Download on the App Store</Link>
        </p>
      </div>
    </Page>
  );
};

export default About;
