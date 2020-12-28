import { NextPage } from "next";
import React from "react";
import { Link } from "../components/Link";
import { Page } from "../layouts/Page";

const Feedback: NextPage = () => {
  return (
    <Page>
      <h1 className="my-12">Provide Feedback</h1>

      <div className="prose">
        <p>Have a feature request or bug report? You can provide feedback by</p>

        <ul>
          <li>
            <Link href="https://twitter.com/jakerunzer">DM'ing on Twitter</Link>
          </li>
          <li>
            <Link href="mailto:jakerunzer@gmail.com">Sending an email</Link>
          </li>
        </ul>
      </div>
    </Page>
  );
};

export default Feedback;
